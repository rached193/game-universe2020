import { Controller } from '@nestjs/common';
import { CompetitionService } from './competition.service';
import { Crud } from '@nestjsx/crud';
import { CompetitionEntity } from './competition.entity';

@Crud({
	model: {
		type: CompetitionEntity
	},
	params: {
		id: {
			field: 'id',
			type: 'number',
			primary: true
		}
	}
})



@Controller('competition')
export class CompetitionController {
    constructor(public service: CompetitionService) { }
}
