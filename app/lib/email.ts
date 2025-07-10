import nodemailer from 'nodemailer'
import { ContactFormData } from './validation'

const recipients = [
  'staff@seikou-corp.com',
  'nari@seikou-corp.com',
  'konomi@seikou-corp.com'
]

export async function sendContactEmail(data: ContactFormData) {
  // Create a transporter using AWS SES SMTP
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SES_SMTP_USERNAME,
      pass: process.env.SES_SMTP_PASSWORD
    },
    tls: {
      // Do not fail on invalid certs
      rejectUnauthorized: false
    }
  })

  // Prepare email content
  const emailContent = `
    新しいお問い合わせがありました。

    【お問い合わせ詳細】
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    お名前: ${data.lastName} ${data.firstName}
    ${data.lastNameKana && data.firstNameKana ? `フリガナ: ${data.lastNameKana} ${data.firstNameKana}` : ''}
    会社名: ${data.company || 'なし'}
    メールアドレス: ${data.email}
    電話番号: ${data.phone || 'なし'}

    お問い合わせ種別: ${data.inquiryType}

    お問い合わせ内容:
    ${data.message}

    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    
    送信日時: ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}
  `

  // Email options
  const mailOptions = {
    from: `"${process.env.SMTP_SENDER_NAME || 'SEIKOU Contact Form'}" <${process.env.SMTP_ADMIN_EMAIL}>`,
    to: recipients.join(', '),
    subject: `【SEIKOU】新規お問い合わせ: ${data.inquiryType}`,
    text: emailContent,
    replyTo: data.email
  }

  // Send email
  try {
    await transporter.sendMail(mailOptions)
    console.log('Email sent successfully to:', recipients.join(', '))
    return true
  } catch (error) {
    console.error('Email sending failed:', error)
    return false
  }
}