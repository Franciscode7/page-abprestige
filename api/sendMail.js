// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function handler(event) {
//   // Solo permitir POST
//   if (event.httpMethod !== "POST") {
//     return {
//       statusCode: 405,
//       body: "Method Not Allowed",
//     };
//   }

//   try {
//     const { nombre, email, mensaje } = JSON.parse(event.body);

//     // 📩 1️⃣ Correo al dueño del sitio
//     await resend.emails.send({
//       from: "Mensaje nuevo del sitio <contacto@contacto.pacodev.online>",
//       to: "francisco99za@gmail.com", // ← cambia por el del dueño
//       subject: "Nuevo mensaje desde el formulario de contacto",
//       html: `
//   <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
//     <div style="background-color: #030712; padding: 25px; text-align: center;">
//       <img src="https://i.ibb.co/Y7mZ1jfD/logo.png" alt="A&B Prestige" style="height: 50px; width: auto;">
//     </div>

//     <div style="padding: 30px; background-color: #ffffff;">
//       <h2 style="color: #030712; margin-top: 0; font-size: 20px; border-bottom: 2px solid #db2777; padding-bottom: 10px; display: inline-block;">
//         Nuevo mensaje recibido
//       </h2>
      
//       <div style="margin-top: 20px;">
//         <p style="margin: 10px 0; color: #374151; font-size: 16px;">
//           <strong style="color: #db2777;">Nombre:</strong> ${nombre}
//         </p>
//         <p style="margin: 10px 0; color: #374151; font-size: 16px;">
//           <strong style="color: #db2777;">Email:</strong> 
//           <a href="mailto:${email}" style="color: #374151; text-decoration: none;">${email}</a>
//         </p>
        
//         <div style="margin-top: 25px; padding: 20px; background-color: #f9fafb; border-left: 4px solid #db2777; border-radius: 4px;">
//           <p style="margin: 0 0 10px 0; font-weight: bold; color: #030712;">Mensaje:</p>
//           <p style="margin: 0; color: #4b5563; line-height: 1.6;">${mensaje}</p>
//         </div>
//       </div>
//     </div>

//     <div style="background-color: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #6b7280;">
//       <p style="margin: 0;">Este es un aviso automático de tu sitio web.</p>
//       <p style="margin: 5px 0 0 0;">© 2026 A&B Prestige</p>
//     </div>
//   </div>
// `,
//     });

//     // 📩 2️⃣ Respuesta automática al usuario
//     await resend.emails.send({
//       from: "A&B Prestige <contacto@contacto.pacodev.online>",
//       to: email,
//       subject: "Gracias por tu mensaje - A&B Prestige",
//       html: `
//   <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #f0f0f0; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);">
    
//     <div style="background-color: #030712; padding: 30px; text-align: center;">
//       <img src="https://i.ibb.co/bgTJCdNH/Cimg1.webp" alt="A&B Prestige" style="height: 50px; width: auto;">
//     </div>

//     <div style="padding: 40px 30px; text-align: center;">
//       <h2 style="color: #030712; font-size: 24px; margin-bottom: 10px;">¡Hola, ${nombre}!</h2>
//       <p style="color: #be185d; font-weight: 600; font-size: 18px; margin-top: 0;">Gracias por contactarnos.</p>
      
//       <p style="color: #4b5563; line-height: 1.6; font-size: 16px; margin-bottom: 30px;">
//         Hemos recibido tu solicitud correctamente. Nuestro equipo revisará los detalles y te responderemos lo antes posible para brindarte la mejor atención.
//       </p>

//       <div style="background-color: #fff1f2; border-radius: 12px; padding: 25px; text-align: left; border: 1px dashed #fecdd3;">
//         <p style="margin: 0 0 10px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: #be185d; font-weight: bold;">Copia de tu mensaje:</p>
//         <p style="margin: 0; color: #374151; font-style: italic; line-height: 1.5;">"${mensaje}"</p>
//       </div>
      
//       <div style="margin-top: 40px;">
//         <a href="https://tu-sitio.com" style="background-color: #030712; color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 14px; display: inline-block;">
//           Visitar nuestro sitio web
//         </a>
//       </div>
//     </div>

//     <div style="background-color: #f9fafb; padding: 25px; text-align: center; border-top: 1px solid #f3f4f6;">
//       <p style="margin: 0; color: #9ca3af; font-size: 13px;">
//         Atentamente,<br>
//         <strong style="color: #6b7280;">El equipo de A&B Prestige</strong>
//       </p>
//       <div style="margin-top: 15px; border-top: 1px solid #e5e7eb; pt: 15px;">
//         <p style="margin: 10px 0 0 0; font-size: 11px; color: #9ca3af;">
//           Este es un correo informativo, no es necesario responder a este mensaje.
//         </p>
//       </div>
//     </div>
//   </div>
// `,
//     });

//     return {
//       statusCode: 200,
//       body: JSON.stringify({ message: "Correos enviados correctamente" }),
//     };

//   } catch (error) {
//     console.error(error);

//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: "Error enviando correos" }),
//     };
//   }
// }

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // 1. En Vercel usamos req.method
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    // 2. En Vercel el body ya viene parseado
    const { nombre, email, mensaje } = req.body;

    // 📩 1️⃣ Correo al dueño del sitio
    await resend.emails.send({
      from: "Mensaje nuevo del sitio <contacto@contacto.pacodev.online>",
      to: "techuser.user.01@gmail.com",
      subject: "Nuevo mensaje desde el formulario de contacto",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
          <div style="background-color: #030712; padding: 25px; text-align: center;">
            <img src="https://i.ibb.co/Y7mZ1jfD/logo.png" alt="A&B Prestige" style="height: 50px; width: auto;">
          </div>
          <div style="padding: 30px; background-color: #ffffff;">
            <h2 style="color: #030712; margin-top: 0; font-size: 20px; border-bottom: 2px solid #db2777; padding-bottom: 10px; display: inline-block;">Nuevo mensaje recibido</h2>
            <div style="margin-top: 20px;">
              <p style="margin: 10px 0; color: #374151; font-size: 16px;"><strong style="color: #db2777;">Nombre:</strong> ${nombre}</p>
              <p style="margin: 10px 0; color: #374151; font-size: 16px;"><strong style="color: #db2777;">Email:</strong> ${email}</p>
              <div style="margin-top: 25px; padding: 20px; background-color: #f9fafb; border-left: 4px solid #db2777; border-radius: 4px;">
                <p style="margin: 0 0 10px 0; font-weight: bold; color: #030712;">Mensaje:</p>
                <p style="margin: 0; color: #4b5563; line-height: 1.6;">${mensaje}</p>
              </div>
            </div>
          </div>
        </div>`,
    });

    // 📩 2️⃣ Respuesta automática al usuario
    await resend.emails.send({
      from: "A&B Prestige <contacto@contacto.pacodev.online>",
      to: email,
      subject: "Gracias por tu mensaje - A&B Prestige",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #f0f0f0; border-radius: 16px; overflow: hidden;">
          <div style="background-color: #030712; padding: 30px; text-align: center;">
            <img src="https://i.ibb.co/bgTJCdNH/Cimg1.webp" alt="A&B Prestige" style="height: 50px; width: auto;">
          </div>
          <div style="padding: 40px 30px; text-align: center;">
            <h2 style="color: #030712;">¡Hola, ${nombre}!</h2>
            <p style="color: #be185d; font-weight: 600;">Gracias por contactarnos.</p>
            <p>Hemos recibido tu solicitud correctamente y te responderemos lo antes posible.</p>
          </div>
        </div>`,
    });

    // 3. Respuesta de éxito estilo Vercel/Express
    return res.status(200).json({ message: "Correos enviados correctamente" });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error enviando correos" });
  }
}