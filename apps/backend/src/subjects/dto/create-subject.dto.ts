import { OmitType } from '@nestjs/swagger';

import { Subject } from '../entities/subject.entity';

export class CreateSubjectDto extends OmitType(Subject, ['id'] as const) {}
