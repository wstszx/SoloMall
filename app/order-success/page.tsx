import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Package, Truck, Home } from "lucide-react"
import Link from "next/link"

export default function OrderSuccessPage() {
  const orderNumber = "YX" + Date.now().toString().slice(-8)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              优选商城
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <CheckCircle className="h-24 w-24 text-green-500" />
          </div>

          {/* Success Message */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">订单提交成功！</h1>
          <p className="text-lg text-gray-600 mb-8">感谢您的购买，我们将尽快为您处理订单</p>

          {/* Order Info */}
          <Card className="max-w-md mx-auto mb-8">
            <CardContent className="p-6">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">订单号码</span>
                  <span className="font-semibold">{orderNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">支付金额</span>
                  <span className="font-semibold text-red-600">¥1,198</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">预计送达</span>
                  <span className="font-semibold">2-3个工作日</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Order Status */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-2">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-medium text-green-600">订单确认</span>
              </div>
              <div className="flex-1 h-1 bg-gray-200 mx-4"></div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-2">
                  <Package className="h-6 w-6 text-gray-400" />
                </div>
                <span className="text-sm text-gray-400">商品打包</span>
              </div>
              <div className="flex-1 h-1 bg-gray-200 mx-4"></div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-2">
                  <Truck className="h-6 w-6 text-gray-400" />
                </div>
                <span className="text-sm text-gray-400">正在配送</span>
              </div>
              <div className="flex-1 h-1 bg-gray-200 mx-4"></div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-2">
                  <Home className="h-6 w-6 text-gray-400" />
                </div>
                <span className="text-sm text-gray-400">送达完成</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/orders">
              <Button variant="outline" size="lg">
                查看订单详情
              </Button>
            </Link>
            <Link href="/products">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                继续购物
              </Button>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-12 p-6 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">需要帮助？</h3>
            <p className="text-gray-600 mb-4">如有任何问题，请随时联系我们的客服团队</p>
            <div className="flex justify-center space-x-6 text-sm">
              <span>客服热线: 400-123-4567</span>
              <span>在线客服: 9:00-21:00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
