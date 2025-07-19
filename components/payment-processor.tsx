"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { QrCode, Smartphone } from "lucide-react"

interface PaymentProcessorProps {
  amount: number
  method: "alipay" | "wechat"
  onSuccess: () => void
  onCancel: () => void
}

export function PaymentProcessor({ amount, method, onSuccess, onCancel }: PaymentProcessorProps) {
  const [paymentStatus, setPaymentStatus] = useState<"pending" | "processing" | "success" | "failed">("pending")

  const handlePayment = () => {
    setPaymentStatus("processing")

    // Simulate payment processing
    setTimeout(() => {
      // Simulate successful payment (90% success rate)
      if (Math.random() > 0.1) {
        setPaymentStatus("success")
        setTimeout(() => {
          onSuccess()
        }, 1000)
      } else {
        setPaymentStatus("failed")
      }
    }, 3000)
  }

  const getPaymentMethodInfo = () => {
    if (method === "alipay") {
      return {
        name: "支付宝",
        color: "bg-blue-500",
        icon: "支",
      }
    } else {
      return {
        name: "微信支付",
        color: "bg-green-500",
        icon: "微",
      }
    }
  }

  const methodInfo = getPaymentMethodInfo()

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center justify-center">
          <div className={`w-8 h-8 ${methodInfo.color} rounded flex items-center justify-center mr-3`}>
            <span className="text-white font-bold">{methodInfo.icon}</span>
          </div>
          {methodInfo.name}支付
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center space-y-6">
        <div className="text-3xl font-bold text-red-600">¥{amount}</div>

        {paymentStatus === "pending" && (
          <div className="space-y-4">
            <div className="w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center mx-auto">
              <QrCode className="h-24 w-24 text-gray-400" />
            </div>
            <p className="text-gray-600">请使用{methodInfo.name}扫描二维码完成支付</p>
            <div className="flex space-x-4">
              <Button onClick={handlePayment} className="flex-1">
                <Smartphone className="h-4 w-4 mr-2" />
                模拟支付
              </Button>
              <Button variant="outline" onClick={onCancel} className="flex-1 bg-transparent">
                取消支付
              </Button>
            </div>
          </div>
        )}

        {paymentStatus === "processing" && (
          <div className="space-y-4">
            <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto"></div>
            <p className="text-gray-600">正在处理支付...</p>
          </div>
        )}

        {paymentStatus === "success" && (
          <div className="space-y-4">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
              <span className="text-white text-2xl">✓</span>
            </div>
            <p className="text-green-600 font-semibold">支付成功！</p>
          </div>
        )}

        {paymentStatus === "failed" && (
          <div className="space-y-4">
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto">
              <span className="text-white text-2xl">✗</span>
            </div>
            <p className="text-red-600 font-semibold">支付失败，请重试</p>
            <Button onClick={() => setPaymentStatus("pending")} className="w-full">
              重新支付
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
