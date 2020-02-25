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
    save(@Body() account: AccountEntity) {
        account.enabled = true;
        const res = this.service.insert(account);
        console.log(res);
        return res;
    }

}
