'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { MapPin, Phone, Mail, Clock, VoicemailIcon as Fax } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { contactFormSchema, type ContactFormData } from '@/lib/validation'
import { submitContactForm } from '@/actions/contact'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import Image from 'next/image'

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{
    type: 'success' | 'error'
    message: string
  } | null>(null)

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      lastName: '',
      firstName: '',
      company: '',
      email: '',
      phone: '',
      inquiryType: '',
      message: '',
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitMessage(null)

    try {
      const result = await submitContactForm(data)

      if (result.success) {
        setSubmitMessage({ type: 'success', message: result.message })
        form.reset()
      } else {
        setSubmitMessage({ type: 'error', message: result.message })
      }
    } catch (error) {
      setSubmitMessage({
        type: 'error',
        message: '送信中にエラーが発生しました。しばらく時間をおいて再度お試しください。',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">
                  姓 <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="山田"
                    className="border-gray-300 focus:border-gray-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">
                  名 <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="太郎"
                    className="border-gray-300 focus:border-gray-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-gray-700">会社名</FormLabel>
              <FormControl>
                <Input
                  placeholder="株式会社サンプル"
                  className="border-gray-300 focus:border-gray-500"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-gray-700">
                メールアドレス <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="example@company.co.jp"
                  className="border-gray-300 focus:border-gray-500"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-gray-700">電話番号</FormLabel>
              <FormControl>
                <Input
                  type="tel"
                  placeholder="03-1234-5678"
                  className="border-gray-300 focus:border-gray-500"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="inquiryType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-gray-700">
                お問い合わせ種別 <span className="text-red-500">*</span>
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="border-gray-300 focus:border-gray-500">
                    <SelectValue placeholder="選択してください" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="general">一般的なお問い合わせ</SelectItem>
                  <SelectItem value="product">製品について</SelectItem>
                  <SelectItem value="service">サービスについて</SelectItem>
                  <SelectItem value="support">サポート</SelectItem>
                  <SelectItem value="partnership">パートナーシップ</SelectItem>
                  <SelectItem value="other">その他</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-gray-700">
                お問い合わせ内容 <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="お問い合わせ内容をご記入ください"
                  className="border-gray-300 focus:border-gray-500 min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        {submitMessage && (
          <div
            className={`p-4 rounded-lg text-sm ${
              submitMessage.type === 'success'
                ? 'bg-green-50 text-green-800 border border-green-200'
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}
          >
            {submitMessage.message}
          </div>
        )}

        <div className="pt-4">
          <Button
            type="submit"
            className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 disabled:opacity-50"
            disabled={isSubmitting}
          >
            {isSubmitting ? '送信中...' : '送信する'}
          </Button>
        </div>

        <div className="text-xs text-gray-500 leading-relaxed">
          <p>
            ※ お預かりした個人情報は、お問い合わせへの回答以外の目的では使用いたしません。
            <br />※ 回答までに数日お時間をいただく場合がございます。
          </p>
        </div>
      </form>
    </Form>
  )
}

export default function ContactPage() {
  return (
    <div
      className="text-[#272859] min-h-screen relative overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #a5e0b4 0%, #fff36c 40%, #f2f1ed 100%)',
      }}
    >
      {/* Header */}
      <div className="pt-30">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h1 className="text-4xl md:text-5xl font-light text-white text-center">お問い合わせ</h1>
          <p className="text-2xl text-white text-center mt-2 font-light">Contact Us</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-0 rounded-none">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-medium text-gray-900">会社情報</CardTitle>
                <p className="text-sm text-gray-600">Company Information</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">所在地</p>
                    <p className="text-gray-600 text-sm mt-1">
                      〒178-0061
                      <br />
                      東京都練馬区大泉学園町6-19-40
                      <br />
                      サンキビル2F
                    </p>
                    <p className="text-gray-500 text-xs mt-2">
                      6-19-40, Oizumi Gakuencho, Nerima-ku, Tokyo 178-0061
                      <br />
                      Sanki Building 2F
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">電話番号</p>
                    <p className="text-gray-600">050-1725-1113</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">メールアドレス</p>
                    <p className="text-gray-600">info@seikou-corp.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">営業時間</p>
                    <p className="text-gray-600">
                      平日 9:00 - 18:00
                      <br />
                      土日祝日は休業
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                      Weekdays 9:00 - 18:00
                      <br />
                      Closed on weekends and holidays
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            {/* <Card className="border-0 rounded-none">
              <CardContent className="p-0">
                <Image
                  src="/images/company_04.jpg"
                  alt="Company Location"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card> */}
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-0 rounded-none">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-medium text-gray-900">
                  お問い合わせフォーム
                </CardTitle>
                <p className="text-sm text-gray-600">Contact Form</p>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
