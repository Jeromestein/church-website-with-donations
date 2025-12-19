"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from "lucide-react"

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("感谢您的留言！我们会尽快回复。Thank you for your message! We'll get back to you soon.")
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-primary">联系我们</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>联系方式</CardTitle>
              <CardDescription>我们很乐意听到您的声音</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">教会地址</h3>
                  <p className="text-sm text-muted-foreground">
                    60-20 Woodside Ave, Suite 205
                    <br />
                    Woodside, NY 11377
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">教会地址</h3>
                  <p className="text-sm text-muted-foreground">
                    60-20 Woodside Ave, Suite 205
                    <br />
                    Woodside, NY 11377
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">电话</h3>
                  <p className="text-sm text-muted-foreground">3232406644</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">电子邮件</h3>
                  <p className="text-sm text-muted-foreground">DynamicEChurch@gmail.com</p>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="font-semibold mb-2">聚会时间</h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>周六晚堂 7:00 PM</p>
                  <p>周日早堂 9:00 AM & 11:30 AM</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>发送消息</CardTitle>
              <CardDescription>请填写以下表格与我们联系</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">姓名 *</Label>
                  <Input id="contact-name" placeholder="张三" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-email">电子邮件 *</Label>
                  <Input id="contact-email" type="email" placeholder="email@example.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-phone">电话</Label>
                  <Input id="contact-phone" type="tel" placeholder="(626) 123-4567" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-message">留言 *</Label>
                  <Textarea id="contact-message" placeholder="请输入您的留言..." className="min-h-32" required />
                </div>

                <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                  发送
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
