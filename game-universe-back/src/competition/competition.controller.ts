import { Controller } from '@nestjs/common';
import { CompetitionService } from './competition.service';
import { Crud } from '@nestjsx/crud';
import { CompetitionEntity } from './competition.entity';

@Crud({
	model: {
		type: CompetitionEntity
	},
	params: {
		account: {
			field: 'account',
			type: 'number',
			primary: false
		}
	}
})

@Controller('competition')
export class CompetitionController {
    constructor(public service: CompetitionService) { }
}
