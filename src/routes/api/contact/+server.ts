import type { RequestHandler } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import { json } from '@sveltejs/kit';
import { EMAIL_USER, EMAIL_PASS, EMAIL_RECEIVER } from '../../../config';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const { name, email, phone, message } = await request.json();

		const transporter = nodemailer.createTransport({
			service: 'Gmail',
			auth: {
				user: EMAIL_USER,
				pass: EMAIL_PASS
			}
		});

		const mailOptions = {
			from: `"${email}" <${EMAIL_USER}>`,
			to: EMAIL_RECEIVER,
			subject: `Nuevo mensaje de ${name}`,
			html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; padding: 16px; background-color: #f9f9f9;">
          <h2 style="color: #8b0000; text-align: center; margin-bottom: 24px;">Mensaje de Contacto</h2>
          <p style="font-size: 16px; line-height: 1.5;">
            Hola <strong>Contenidos</strong>, un usuario ha enviado un mensaje desde el formulario de contacto de su sitio web.
          </p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 16px 0;">
          <h3 style="color: #8b0000;">Detalles del mensaje</h3>
          <ul style="font-size: 15px; line-height: 1.5; list-style: none; padding: 0;">
            <li><strong>Nombre:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Telefono:</strong> ${phone}</li>
          </ul>
          <p style="font-size: 16px; line-height: 1.5; margin-top: 16px;">
            <strong>Comentarios:</strong>
          </p>
          <blockquote style="font-size: 15px; line-height: 1.5; color: #555; padding: 12px; background-color: #f0f0f0; border-left: 4px solid #8b0000; margin: 0;">
            ${message}
          </blockquote>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 24px 0;">
          <footer style="text-align: center; font-size: 14px; color: #777;">
            <p>Este correo fue generado automáticamente desde el sitio web de <strong>Contenidos</strong>.</p>
          </footer>
        </div>
      `
		};

		await transporter.sendMail(mailOptions);

		return json({ message: 'Email enviado correctamente' }, { status: 200 });
	} catch (error) {
		console.error('Error al enviar el email:', error);
		return json({ message: 'Error al enviar el email' }, { status: 500 });
	}
};
