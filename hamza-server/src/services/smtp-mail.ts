import { Logger } from '@medusajs/medusa';
import nodemailer from 'nodemailer';
import ejs from 'ejs';
import path from 'path';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import dotenv from 'dotenv';
dotenv.config();

class SmtpMailService {
    private SMTP_TRANSPORTER: nodemailer.Transporter<SMTPTransport.SentMessageInfo>;

    constructor() {
        this.SMTP_TRANSPORTER = nodemailer.createTransport({
            port: Number(process.env.SMTP_PORT),
            host: process.env.SMTP_HOST,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
            debug: true,
            tls: {
                // do not fail on invalid certs
                rejectUnauthorized: false,
            },
        });
    }

    private mailInitiator(mailOptions) {
        this.SMTP_TRANSPORTER.sendMail(mailOptions, (error: any, info: any) => {
            if (error) {
                console.log('error in sending email', error);
            } else {
                console.log('Message sent: ' + info.response);
            }
        });
    }

    public async sendMail({
        from,
        mailData,
        subject,
        templateName,
        to,
        html,
    }: {
        to: string;
        subject: string;
        from: string;
        mailData: any;
        templateName?: string | null;
        html?: string | null;
    }) {
        if (templateName) {
            ejs.renderFile(
                path.join(__dirname, `../../views/${templateName}.ejs`),
                { data: mailData },
                (err, data) => {
                    if (err) {
                        console.log('error in rendering the template ', err);
                        return;
                    }
                    console.log('sending mail');
                    this.mailInitiator({
                        from,
                        to,
                        subject,
                        html: data,
                    });
                    return;
                }
            );
        } else {
            this.mailInitiator({ from, to, subject, html });
        }
    }
}

export default SmtpMailService;
