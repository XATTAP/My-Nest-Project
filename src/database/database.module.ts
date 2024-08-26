import { Global, Module } from '@nestjs/common';
import { databaseProviders } from '@/src/database/database.providers';

@Global()
@Module({
  imports: [],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class TypeOrmModule {}
