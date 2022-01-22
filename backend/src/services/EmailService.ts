import { Request } from 'express';

interface IMailTo {
    name: string;
    email: string;
}

interface IMailMessage {
    subject: string;
    body: string;
    attachment?: string[];
}

// DTO = Data Transfer Object (DDD)
interface IMessageDTO {
    to: IMailTo;
    message: IMailMessage;
}

interface IEmailService {
    sendEmail(Request: IMessageDTO): void
}

class EmailService implements IEmailService {
    sendEmail({ to, message }: IMessageDTO) {
        console.log(`email enviado para ${to.name}: ${message.subject}`);
    }
}

export default EmailService;