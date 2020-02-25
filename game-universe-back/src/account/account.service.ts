import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccountEntity } from './account.entity';

@Injectable()
export class AccountService {

  constructor(@InjectRepository(AccountEntity) private repo: Repository<AccountEntity>) {
  }

  create(account: AccountEntity) {
    return this.repo.create(account);
  }

  findAll(): Promise<AccountEntity[]> {
    return this.repo.find();
  }

}
