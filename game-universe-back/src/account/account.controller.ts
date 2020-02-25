import { Controller, Post, Body, Get } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountEntity } from './account.entity';

@Controller('account')
export class AccountController {

    constructor(private service: AccountService) { }

    @Get()
    findAll(): Promise<AccountEntity[]> {
        return this.service.findAll();
    }

    @Post()
    create(@Body() account: AccountEntity) {
        const res = this.service.create(account);
        return res;
    }

}
