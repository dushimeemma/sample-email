import { Body, Controller, Post } from '@nestjs/common';
import { EmailDto } from './dto/emait.dto';
import { MailingService } from './mailing.service';

@Controller('mailing')
export class MailingController {
  constructor(private mailingService: MailingService) {}
  @Post('')
  async senMail(@Body() emailDto: EmailDto) {
    const data = await this.mailingService.sendMail(emailDto);
    return { status: 'ok', message: 'Email sent successfully', data };
  }
}
