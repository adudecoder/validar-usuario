import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [
    { name: 'Victor', email: 'victor@gmail.com.br' },
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService();

        emailService.sendEmail({
            to: { 
                name: 'Victor Martins', 
                email: 'victor@gmail.com.br' 
            },
            message: { 
                subject: 'Bem-vindo ao sistema', 
                body: 'Seja bem-vindo' 
            }
        });

        return res.send();
    }

};