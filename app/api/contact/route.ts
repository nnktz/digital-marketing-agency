import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { MailOptions } from 'nodemailer/lib/json-transport'

export async function POST(req: Request) {
  if (req.method === 'POST') {
    try {
      const { first_name, last_name, email, company_name, help, company_size, info } =
        await req.json()

      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.user_email,
          pass: process.env.password_email,
        },
      })

      const mailOptions: MailOptions = {
        from: email,
        to: 'nhatnguyenktz119@gmail.com',
        subject: 'Contact Form Submission',
        html: `
                <h1>Contact Form</h1>
                <p>First Name: ${first_name}</p>
                <p>Last Name: ${last_name}</p>
                <p>Work Email: ${email}</p>
            
                <p>Company Name: ${company_name}</p>
                <p>Company Size: ${company_size}</p>
                <p>Help: ${help}</p>
            
                <p>Info: ${info}</p>
            `,
      }

      await transporter.sendMail(mailOptions)

      return NextResponse.json('Email has been sent')
    } catch (error) {
      return NextResponse.json('Email has not been sent')
    }
  } else {
    return NextResponse.json('Method not allowed')
  }
}
