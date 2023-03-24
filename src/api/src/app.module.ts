import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RouterModule } from '@nestjs/core';
import { MailingModule } from './mailing/mailing.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MailingModule,
    RouterModule.register([
      {
        path: 'api',
        children: [MailingModule],
      },
    ]),
  ],
})
export class AppModule {}
