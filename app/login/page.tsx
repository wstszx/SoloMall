"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export default function LoginPage() {
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic
    alert("登录功能演示")
    // In real implementation, authenticate user and redirect
    window.location.href = "/"
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link href="/" className="text-3xl font-bold text-gray-900">
            优选商城
          </Link>
          <h2 className="mt-6 text-2xl font-semibold text-gray-900">登录您的账户</h2>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-center">用户登录</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
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
                <Label htmlFor="password">密码</Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  placeholder="请输入密码"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    记住我
                  </label>
                </div>
                <div className="text-sm">
                  <Link href="/forgot-password" className="font-medium text-blue-600 hover:text-blue-500">
                    忘记密码？
                  </Link>
                </div>
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                登录
              </Button>
            </form>

            <Separator className="my-6" />

            <div className="space-y-4">
              <Button variant="outline" className="w-full bg-transparent">
                <div className="w-5 h-5 bg-blue-500 rounded mr-2 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">支</span>
                </div>
                支付宝登录
              </Button>
              <Button variant="outline" className="w-full bg-transparent">
                <div className="w-5 h-5 bg-green-500 rounded mr-2 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">微</span>
                </div>
                微信登录
              </Button>
            </div>

            <div className="mt-6 text-center">
              <span className="text-sm text-gray-600">
                还没有账户？{" "}
                <Link href="/register" className="font-medium text-blue-600 hover:text-blue-500">
                  立即注册
                </Link>
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
