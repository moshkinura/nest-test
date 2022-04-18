import { Test, TestingModule } from '@nestjs/testing'
import { PingController } from './ping.controller'

describe('PingController', () => {
  let controller: PingController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PingController],
      providers: [],
    }).compile()

    controller = module.get<PingController>(PingController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
