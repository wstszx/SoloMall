"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { MapPin, CreditCard } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const orderItems = [
  {
    id: 1,
    name: "无线蓝牙耳机",
    price: 299,
    quantity: 1,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "智能手表",
    price: 899,
    quantity: 1,
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("alipay")
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    province: "",
    zipCode: "",
  })

  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 0 // Free shipping
  const total = subtotal + shipping

  const handleInputChange = (field: string, value: string) => {
    setShippingInfo((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmitOrder = () => {
    // Validate form
    if (!shippingInfo.name || !shippingInfo.phone || !shippingInfo.address) {
      alert("请填写完整的收货信息")
      return
    }

    // Process payment based on selected method
    if (paymentMethod === "alipay") {
      // Simulate Alipay payment
      alert("正在跳转到支付宝支付...")
      // In real implementation, redirect to Alipay payment page
      setTimeout(() => {
        window.location.href = "/order-success"
      }, 2000)
    } else if (paymentMethod === "wechat") {
      // Simulate WeChat Pay
      alert("正在跳转到微信支付...")
      // In real implementation, show WeChat Pay QR code or redirect
      setTimeout(() => {
        window.location.href = "/order-success"
      }, 2000)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              优选商城
            </Link>
            <div className="text-lg font-semibold text-gray-700">结算</div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Shipping Address */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  收货地址
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">收货人姓名 *</Label>
                    <Input
                      id="name"
                      value={shippingInfo.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="请输入收货人姓名"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">手机号码 *</Label>
                    <Input
                      id="phone"
                      value={shippingInfo.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="请输入手机号码"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="province">省份 *</Label>
                    <Input
                      id="province"
                      value={shippingInfo.province}
                      onChange={(e) => handleInputChange("province", e.target.value)}
                      placeholder="省份"
                    />
                  </div>
                  <div>
                    <Label htmlFor="city">城市 *</Label>
                    <Input
                      id="city"
                      value={shippingInfo.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      placeholder="城市"
                    />
                  </div>
                  <div>
                    <Label htmlFor="zipCode">邮政编码</Label>
                    <Input
                      id="zipCode"
                      value={shippingInfo.zipCode}
                      onChange={(e) => handleInputChange("zipCode", e.target.value)}
                      placeholder="邮政编码"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="address">详细地址 *</Label>
                  <Input
                    id="address"
                    value={shippingInfo.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    placeholder="请输入详细地址"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="h-5 w-5 mr-2" />
                  支付方式
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="flex items-center space-x-3 p-4 border rounded-lg">
                    <RadioGroupItem value="alipay" id="alipay" />
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                        <span className="text-white text-sm font-bold">支</span>
                      </div>
                      <Label htmlFor="alipay" className="text-lg">
                        支付宝
                      </Label>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 border rounded-lg">
                    <RadioGroupItem value="wechat" id="wechat" />
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                        <span className="text-white text-sm font-bold">微</span>
                      </div>
                      <Label htmlFor="wechat" className="text-lg">
                        微信支付
                      </Label>
                    </div>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>订单详情</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Order Items */}
                <div className="space-y-3">
                  {orderItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-3">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={60}
                        height={60}
                        className="w-15 h-15 object-cover rounded"
                      />
                      <div className="flex-1">
                        <div className="font-medium text-sm">{item.name}</div>
                        <div className="text-sm text-gray-500">数量: {item.quantity}</div>
                      </div>
                      <div className="font-semibold">¥{item.price}</div>
                    </div>
                  ))}
                </div>

                <Separator />

                {/* Price Breakdown */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>商品总价</span>
                    <span>¥{subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>运费</span>
                    <span className="text-green-600">免费</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-xl font-bold">
                    <span>总计</span>
                    <span className="text-red-600">¥{total}</span>
                  </div>
                </div>

                <Button onClick={handleSubmitOrder} className="w-full bg-red-600 hover:bg-red-700 text-lg py-3">
                  提交订单
                </Button>

                <div className="text-xs text-gray-500 text-center">点击"提交订单"表示您同意我们的服务条款</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
