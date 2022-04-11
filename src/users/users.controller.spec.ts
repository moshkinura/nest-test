import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

const testCat1 = 'TestCat1'
const testBreed1 = 'TestBreed1'

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: {
            findAll: jest.fn().mockResolvedValue([
              { id: 1, login: 'username', firstname: 'first', lastname: 'last', age: 25 },
            ]),
          }
        }
      ]
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService)
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should get an array of users', async () => {
      await expect(controller.findAll()).resolves.toEqual([
        { id: 1, login: 'username', firstname: 'first', lastname: 'last', age: 25 }
      ])
    })
  })
});
