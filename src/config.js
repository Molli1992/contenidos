import { config } from 'dotenv';

config();

export const EMAIL_USER = process.env.EMAIL_USER;
export const EMAIL_PASS = process.env.EMAIL_PASS;
export const EMAIL_RECEIVER = process.env.EMAIL_RECEIVER;