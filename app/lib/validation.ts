import { z } from "zod"

export const contactFormSchema = z.object({
  lastName: z.string().min(1, "姓を入力してください"),
  firstName: z.string().min(1, "名を入力してください"),
  company: z.string().optional(),
  email: z.string().email("有効なメールアドレスを入力してください"),
  phone: z.string().optional(),
  inquiryType: z.string().min(1, "お問い合わせ種別を選択してください"),
  message: z.string().min(10, "お問い合わせ内容は10文字以上で入力してください"),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
