"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useState } from "react"
import { DollarSign, Heart } from "lucide-react"

export function DonationSection() {
  const [amount, setAmount] = useState("")
  const [donationType, setDonationType] = useState("one-time")

  const handleDonation = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would integrate with a payment processor like Stripe
    alert(`感谢您的奉献！Thank you for your donation of $${amount}`)
  }

  return (
    <section id="donate" className="py-20 bg-primary/5">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Heart className="h-16 w-16 text-accent mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-primary">奉献支持</h2>
          </div>

          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">在线奉献</CardTitle>
              <CardDescription>您的奉献将帮助我们继续传播福音，服务社区</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleDonation} className="space-y-6">
                <div className="space-y-2">
                  <Label>奉献类型</Label>
                  <RadioGroup value={donationType} onValueChange={setDonationType}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="one-time" id="one-time" />
                      <Label htmlFor="one-time">一次性奉献</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="monthly" id="monthly" />
                      <Label htmlFor="monthly">每月奉献</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="amount">奉献金额 ($)</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="amount"
                      type="number"
                      placeholder="100"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="pl-9"
                      min="1"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  {[25, 50, 100, 250].map((preset) => (
                    <Button
                      key={preset}
                      type="button"
                      variant="outline"
                      onClick={() => setAmount(preset.toString())}
                      className="hover:bg-primary/10"
                    >
                      ${preset}
                    </Button>
                  ))}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name">姓名</Label>
                  <Input id="name" placeholder="张三" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">电子邮件</Label>
                  <Input id="email" type="email" placeholder="email@example.com" />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button
                onClick={handleDonation}
                className="w-full bg-accent hover:bg-accent/90 text-lg h-12"
                disabled={!amount}
              >
                立即奉献
              </Button>
            </CardFooter>
          </Card>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>
              银行转账信息
              <br />
              账户名称：Dynamic Evangelism Church
              <br />
              联系我们获取详细信息
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
