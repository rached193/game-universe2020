import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, InsertResult } from 'typeorm';
import { AccountEntity } from './account.entity';

@Injectable()
export class AccountService {

  constructor(@InjectRepository(AccountEntity) private repo: Repository<AccountEntity>) {
  }

  insert(account: AccountEntity): Promise<InsertResult> {
    return this.repo.insert(account);
  }

  findAll(): Promise<AccountEntity[]> {
    return this.repo.find();
  }

}
