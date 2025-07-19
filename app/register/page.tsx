"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
    confirmPassword: "",
    verificationCode: "",
    agreeTerms: false,
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      alert("两次输入的密码不一致")
      return
    }

    if (!formData.agreeTerms) {
      alert("请同意服务条款")
      return
    }

    // Handle registration logic
    alert("注册功能演示")
    // In real implementation, create user account and redirect
    window.location.href = "/login"
  }

  const sendVerificationCode = () => {
    if (!formData.phone) {
      alert("请先输入手机号码")
      return
    }
    alert("验证码已发送")
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link href="/" className="text-3xl font-bold text-gray-900">
            优选商城
          </Link>
          <h2 className="mt-6 text-2xl font-semibold text-gray-900">创建新账户</h2>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-center">用户注册</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleRegister} className="space-y-6">
              <div>
                <Label htmlFor="phone">手机号码</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="请输入手机号码"
                  required
                />
              </div>

              <div>
                <Label htmlFor="verification">验证码</Label>
                <div className="flex space-x-2">
                  <Input
                    id="verification"
                    type="text"
                    value={formData.verificationCode}
                    onChange={(e) => handleInputChange("verificationCode", e.target.value)}
                    placeholder="请输入验证码"
                    className="flex-1"
                    required
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={sendVerificationCode}
                    className="whitespace-nowrap bg-transparent"
                  >
                    发送验证码
                  </Button>
                </div>
              </div>

              <div>
                <Label htmlFor="password">密码</Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  placeholder="请输入密码（至少6位）"
                  minLength={6}
                  required
                />
              </div>

              <div>
                <Label htmlFor="confirmPassword">确认密码</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                  placeholder="请再次输入密码"
                  minLength={6}
                  required
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.agreeTerms}
                  onCheckedChange={(checked) => handleInputChange("agreeTerms", checked)}
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  我已阅读并同意{" "}
                  <Link href="/terms" className="text-blue-600 hover:text-blue-500">
                    服务条款
                  </Link>{" "}
                  和{" "}
                  <Link href="/privacy" className="text-blue-600 hover:text-blue-500">
                    隐私政策
                  </Link>
                </label>
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                注册
              </Button>
            </form>

            <div className="mt-6 text-center">
              <span className="text-sm text-gray-600">
                已有账户？{" "}
                <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500">
                  立即登录
                </Link>
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
