// import { winstonLogger } from '../utils';
// import fs from 'fs';
// import handlebars from 'handlebars';

// export async function renderMailTemplate(templatePath: string, data: object) {
//   try {
//     // Load the email template
//     // const templatePath = './email-templates/welcome-email.html';
//     const emailTemplate = fs.readFileSync(templatePath, 'utf-8');

//     // Compile the template
//     const compiledTemplate = handlebars.compile(emailTemplate);
//     return compiledTemplate(data);
//   } catch (e: any) {
//     winstonLogger.error('Error compiling template', e.message);
//     // console.log(e);
//     return false;
//   }
// }