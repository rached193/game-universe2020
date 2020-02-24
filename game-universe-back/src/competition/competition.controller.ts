import { Controller, Get, Param } from '@nestjs/common';
import { CompetitionService } from './competition.service';
import { Crud, CrudController } from '@nestjsx/crud';
import { CompetitionEntity } from './competition.entity';

@Crud({
  model: {
    type: CompetitionEntity,
  },
  params: {
    id: {
      field: 'id',
      type: 'number',
      primary: true,
    },
  },
})

@Controller('competition')
// export class CompetitionController implements CrudController<CompetitionEntity> {
export class CompetitionController {
  constructor(public service: CompetitionService) { }

  @Get()
  findAll(): Promise<CompetitionEntity[]> {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param() params): Promise<CompetitionEntity> {
    return this.service.findOne(params.id);
  }
}
