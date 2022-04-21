import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Device } from './entities/device.entity'
import { Status } from './entities/status.entity'
import { AllDevicesDto } from './dto/all-devices.dto'
import { TypeDevice } from './dto/devices.dto'
import { PropertiesDto, TypeProperties, PropInstance, PropUnit } from './dto/properties.dto'
import { CapabilitiesDto, CapInstance, CapUnit, TypeCapabilities } from './dto/capabilities.dto'

import { JwtService } from '@nestjs/jwt'
import { QueryDto } from './dto/query.dto'
import { AllStatusDto } from './dto/all-status.dto'

export interface PAYLOAD {
  login: string
  sub: number
  iat: number
  exp: number
}

export interface DEVICE_MAP {
  id: string
  name: string
  description?: string
  room?: string
  type: TypeDevice
  properties?: PropertiesDto[]
  capabilities?: CapabilitiesDto[]
  device_info?: {
    hw_version?: string
    sw_version?: string
  }
}

export interface DEVICE_STATUS_MAP {
  id: string
  properties?: PropertiesDto[]
  capabilities?: CapabilitiesDto[]
}

@Injectable()
export class DevicesService {
  constructor(
    @InjectRepository(Device) private readonly deviceRepository: Repository<Device>,
    @InjectRepository(Status) private readonly statusRepository: Repository<Status>,
    private jwtService: JwtService
  ) { }

  async getDevices(id: string, authorization: string): Promise<AllDevicesDto> {
    const token = this.jwtService.verify(authorization, { complete: true })
    const payload: PAYLOAD = token.payload

    let allDevices = await this.deviceRepository.find(
      {
        where: { id: payload.sub },
        relations: ['capabilities', 'properties', 'device_info']
      }
    )

    let devices: DEVICE_MAP[] = []

    // TODO: Возможно код, ниже - костыль... И можно сделать проще...
    allDevices.forEach((doc) => {
      let types: TypeDevice
      let properties: PropertiesDto[] = []
      let capabilities: CapabilitiesDto[] = []
      let device_info = {}

      const id: string = doc.uuid

      delete doc.id
      delete doc.uuid

      // TYPE
      types = TypeDevice[doc.type]
      delete doc.type

      // PROPERTIES
      doc.properties.forEach((prop) => {
        const type: TypeProperties = TypeProperties[prop.type]
        const propinstance: PropInstance = PropInstance[prop.instance]
        const propunit: PropUnit = PropUnit[prop.unit]
        delete prop.id
        delete prop.type
        delete prop.instance
        delete prop.unit
        properties.push({
          ...prop,
          type,
          parameters: {
            instance: propinstance,
            unit: propunit,
          },
        })
      })
      delete doc.properties

      // CAPABILITIES
      doc.capabilities.forEach((cap) => {
        const captype: TypeCapabilities = TypeCapabilities[cap?.type]
        const capinstance: CapInstance = CapInstance[cap?.instance]
        // const unit: CapUnit = CapUnit[cap?.unit]
        delete cap.id
        delete cap.instance
        capabilities.push({
          ...cap,
          type: captype,
          parameters: {
            instance: capinstance,
          },
        })
      })
      delete doc.capabilities

      // DEVICE_INFO
      device_info = {
        hw_version: doc.device_info?.hw_version,
        sw_version: doc.device_info?.sw_version,
      }
      delete doc.device_info

      devices.push({
        ...doc,
        id: id.toString(),
        type: types,
        properties,
        capabilities,
        device_info,
      })
    })

    // console.log(devices[0].capabilities)
    // console.log(devices)
    return {
      request_id: id,
      payload: {
        user_id: payload.sub.toString(),
        devices: devices
      }
    }
  }

  async postDevicesQuery(
    id: string,
    authorization: string,
    queryDto: QueryDto
  ): Promise<AllStatusDto> {
    const token = this.jwtService.verify(authorization, { complete: true })
    const payload: PAYLOAD = token.payload

    //console.log(queryDto)
    const searchDevice = queryDto.devices

    const devId = searchDevice[0].id // Из списка, получаем 1 устройство и на него выдаем статус

    let allStatus = await this.statusRepository.createQueryBuilder('status')
      .leftJoinAndSelect('status.device', 'device')
      .leftJoinAndSelect('status.properties', 'status_properties')
      .leftJoinAndSelect('status.capabilities', 'status_capabilities')
      .where("device.id = :devId", { devId })
      .getMany()

    console.log(allStatus)

    // XXX кандидат на удаление
    // let allStatusDevices = await this.statusRepository.find(
    //   {
    //     where: { id: payload.sub },
    //     relations: ['device',]
    //   }
    // )

    let devices: DEVICE_STATUS_MAP[] = []

    allStatus.forEach((doc) => {
      console.log(doc.properties)
      let properties: PropertiesDto[] = []
      let capabilities: CapabilitiesDto[] = []

      doc.properties.forEach((prop) => {
        properties.push({
          type: TypeProperties[prop.type],
          state: {
            instance: PropInstance[prop.instance],
            value: Number(prop.value)
          }
        })
      })

      doc.capabilities.forEach((cap) => {
        capabilities.push({
          type: TypeCapabilities[cap.type],
          state: {
            instance: CapInstance[cap.instance],
            value: cap.value,
          }
        })
      })

      devices.push({
        id: doc.device.id.toString(),
        properties,
        capabilities,
      })
    })

    console.log(devices)
    // TODO: Возможно код, ниже - костыль... И можно сделать проще...
    // allStatusDevices.forEach((doc) => {
    //   let types: TypeDevice
    //   let properties: PropertiesDto[] = []
    //   let capabilities: CapabilitiesDto[] = []
    //   let device_info = {}

    //   const id: string = doc.device.uuid

    //   delete doc.id
    //   delete doc.device.uuid

    //   // TYPE
    //   // types = TypeDevice[doc.type]
    //   // delete doc.type

    //   // PROPERTIES
    //   // doc.properties.forEach((prop) => {
    //   //   const type: TypeProperties = TypeProperties[prop.type]
    //   //   const propinstance: PropInstance = PropInstance[prop.instance]
    //   //   const propunit: PropUnit = PropUnit[prop.unit]
    //   //   delete prop.id
    //   //   delete prop.type
    //   //   delete prop.instance
    //   //   delete prop.unit
    //   //   properties.push({
    //   //     ...prop,
    //   //     type,
    //   //     parameters: {
    //   //       instance: propinstance,
    //   //       unit: propunit,
    //   //     },
    //   //   })
    //   // })
    //   // delete doc.properties

    //   // CAPABILITIES
    //   // doc.capabilities.forEach((cap) => {
    //   //   const captype: TypeCapabilities = TypeCapabilities[cap?.type]
    //   //   const capinstance: CapInstance = CapInstance[cap?.instance]
    //   //   // const unit: CapUnit = CapUnit[cap?.unit]
    //   //   delete cap.id
    //   //   delete cap.instance
    //   //   capabilities.push({
    //   //     ...cap,
    //   //     type: captype,
    //   //     parameters: {
    //   //       instance: capinstance,
    //   //     },
    //   //   })
    //   // })
    //   // delete doc.capabilities

    //   // DEVICE_INFO
    //   device_info = {
    //     hw_version: doc.device.device_info?.hw_version,
    //     sw_version: doc.device.device_info?.sw_version,
    //   }
    //   delete doc.device.device_info

    //   devices.push({
    //     id: '111',
    //     name: '111',
    //     type: TypeDevice['devices.types.other'],
    //     // ...doc,
    //     // id: id.toString(),
    //     // type: types,
    //     // properties,
    //     // capabilities,
    //     // device_info,
    //   })
    // })

    return {
      request_id: id,
      payload: {
        devices: devices,
        // [
        //   {
        //     id: '111',
        //     name: 'имя',
        //     type: TypeDevice['devices.types.other'],
        //   }
        // ]
      }
    }
  }

  async postDevicesAction(id: string, authorization: string): Promise<AllDevicesDto> {
    const token = authorization
    return {
      request_id: id,
      payload: {
        user_id: token,
        devices: [
          {
            id: '111',
            name: 'имя',
            type: TypeDevice['devices.types.other'],
          }
        ]
      }
    }
  }
}
