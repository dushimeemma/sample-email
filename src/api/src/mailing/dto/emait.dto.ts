import { IsString, IsEmail } from 'class-validator';

export class EmailDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;
}
