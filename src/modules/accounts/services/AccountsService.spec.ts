import { faker } from '@faker-js/faker'
import { ICreateAccountDTO } from '../dtos/ICreateAccount'
import { AccountRepositoryMock } from '../repositories/mock/AccountRepositoryMock'
import { AccountService } from './AccountService'
let account_repository: AccountRepositoryMock
let account_service: AccountService

interface ICreateAccountDTOMock extends ICreateAccountDTO {
  id?: number
}

const create_account_mock = (): ICreateAccountDTOMock => {
  return {
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(8),
    gender: Math.floor(Math.random() * 2) === 1 ? 'Male' : 'Female',
    date_birth: '1992-07-07',
    phone: faker.phone.phoneNumber('+61 04## ### ###'),
    address_line_1: faker.address.street(),
    city: faker.address.city(),
    state: faker.address.stateAbbr(),
    country: faker.address.country(),
    post_code: Math.floor(Math.random() * (3999 - 3000) + 3000).toString(),
  }
}

describe('when creates an Account', () => {
  beforeEach(() => {
    account_repository = new AccountRepositoryMock()
    account_service = new AccountService(account_repository)
  })

  it('should create an Account', async () => {
    const account_mock = create_account_mock()

    await account_service.create(account_mock)

    const account_mock_created = await account_repository.findOneBy(
      account_mock.email
    )
    expect(account_mock_created).toHaveProperty('id')
  })

  it('should fail if email already exist', async () => {
    const account_mock = create_account_mock()

    try {
      await account_service.create(account_mock)
      await account_service.create(account_mock)
    } catch (error) {
      expect(error.message).toEqual('Email already exist')
    }
  })

  it('should fail if date of birth is below 21', async () => {
    const account_mock = create_account_mock()
    const account_low_age = (account_mock.date_birth = '2012-15-07')

    try {
      await account_service.create({
        ...account_mock,
        date_birth: account_low_age,
      })
    } catch (error) {
      expect(error.message).toEqual('You must be more than 21 years old')
    }
  })
})

describe('when request Account', () => {
  beforeEach(() => {
    account_repository = new AccountRepositoryMock()
    account_service = new AccountService(account_repository)
  })

  it('list all accounts', async () => {
    await account_service.create(create_account_mock())
    await account_service.create(create_account_mock())
    await account_service.create(create_account_mock())

    const accounts_list = await account_service.index()
    expect(accounts_list).toHaveLength(3)
    expect(accounts_list).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          first_name: expect.any(String),
          last_name: expect.any(String),
          email: expect.any(String),
          date_birth: expect.any(String),
          phone: expect.any(String),
          address_line_1: expect.any(String),
        }),
      ])
    )
  })

  it('list one account', async () => {
    await account_service.create(create_account_mock())
    await account_service.create(create_account_mock())
    await account_service.create(create_account_mock())

    const account_mock = (await account_service.index()).pop()

    const account = await account_service.find({ id: account_mock.id })

    expect(account.id).toEqual(account_mock.id)
  })

  it('should fail if account does not exist', async () => {
    await account_service.create(create_account_mock())
    const account_mock = await account_service.index()

    try {
      await account_service.find({ id: account_mock.length + 1 })
    } catch (error) {
      expect(error.message).toEqual('Account does not exist')
    }
  })
})
