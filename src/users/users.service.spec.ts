import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';

const userArray = [
  new User(1, 'username1', 'first1', 'last1', 25),
  new User(2, 'username2', 'first2', 'last2', 25),
  new User(3, 'username3', 'first3', 'last3', 25),
]

const oneUser = new User(1, 'username1', 'first1', 'last1', 25)

describe('UsersService', () => {
  let service: UsersService;
  let repo: Repository<User>

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: {
            create: jest.fn().mockResolvedValue(oneUser),
            save: jest.fn(),
            findAll: jest.fn().mockResolvedValue(true),
            findOne: jest.fn().mockResolvedValue(oneUser),
            update: jest.fn().mockRejectedValue(true),
            delete: jest.fn().mockResolvedValue(true)
          },
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    repo = module.get<Repository<User>>(getRepositoryToken(User))
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const users = await service.findAll()
      expect(users).toEqual(userArray)
    })
  })
});
