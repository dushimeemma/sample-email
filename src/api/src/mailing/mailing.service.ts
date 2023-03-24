import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import { EmailDto } from './dto/emait.dto';
import { emailTemplates } from '../helpers/templates';

@Injectable()
export class MailingService {
  private transport;
  constructor(private readonly configService: ConfigService) {
    const host = this.configService.get<string>('MAILTRAP_HOST');
    const port = this.configService.get<number>('MAILTRAP_PORT');
    const user = this.configService.get<string>('MAILTRAP_USER');
    const pass = this.configService.get<string>('MAILTRAP_PASSWORD');
    this.transport = nodemailer.createTransport({
      host,
      port,
      auth: {
        user,
        pass,
      },
    });
  }
  async sendMail(emailDto: EmailDto) {
    const { name, email } = emailDto;
    const from = this.configService.get<string>('MAILTRAP_SENDER_EMAIL');

    const mailOptions = {
      from,
      to: email,
      subject: `New Message from ${from}`,
      text: 'sample email',
      html: emailTemplates(),
    };

    return this.transport.sendMail(mailOptions);
  }
}
