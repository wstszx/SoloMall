"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Star,
  ShoppingCart,
  Heart,
  Share2,
  Minus,
  Plus,
  Truck,
  Shield,
  RotateCcw,
  Sparkles,
  MessageCircle,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const productData = {
  id: 1,
  name: "复古蓝牙耳机",
  price: 299,
  originalPrice: 399,
  images: [
    "/placeholder.svg?height=500&width=500",
    "/placeholder.svg?height=500&width=500",
    "/placeholder.svg?height=500&width=500",
  ],
  rating: 4.8,
  reviews: 127,
  badge: "店主推荐",
  category: "数码配件",
  description: "这款复古蓝牙耳机是我在日本旅行时发现的宝藏单品，完美融合了复古美学与现代科技。",
  story: "我亲自试用了3个月才决定上架，音质真的让人惊艳！",
  features: [
    "🎵 Hi-Fi级音质，低音浑厚有力",
    "📶 蓝牙5.0技术，连接稳定不断线",
    "🔋 超长续航，单次使用8小时",
    "💧 IPX7防水等级，运动无忧",
    "🎧 智能降噪，沉浸式体验",
    "🎨 复古设计，颜值与实力并存",
  ],
  specifications: {
    连接方式: "蓝牙5.0",
    续航时间: "8小时（耳机）+ 24小时（充电盒）",
    防水等级: "IPX7",
    充电时间: "1.5小时",
    重量: "单耳4.5g",
    颜色: "复古棕、经典黑、珍珠白",
  },
  xiaoyaReview:
    "作为一个音乐发烧友，我对耳机的要求特别高。这款耳机不仅音质出色，复古的外观设计更是让我一见钟情。戴上它听爵士乐，仿佛置身于上世纪的咖啡厅。强烈推荐给追求品质生活的你！",
}

export default function ProductDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    alert("商品已添加到购物车 ✨")
  }

  const handleBuyNow = () => {
    window.location.href = "/checkout"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-violet-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-violet-500 rounded-full flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <Link
                href="/"
                className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-violet-600 bg-clip-text text-transparent"
              >
                小雅精选
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/products" className="text-gray-700 hover:text-rose-600 transition-colors font-medium">
                返回商品列表
              </Link>
            </nav>
            <Link href="/cart" className="text-gray-700 hover:text-rose-600 transition-colors font-medium">
              购物车
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-rose-600 transition-colors">
              首页
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-rose-600 transition-colors">
              精选好物
            </Link>
            <span>/</span>
            <span className="text-gray-900">{productData.name}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg">
              <Image
                src={productData.images[selectedImage] || "/placeholder.svg"}
                alt={productData.name}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex space-x-3">
              {productData.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-2xl overflow-hidden border-3 transition-all ${
                    selectedImage === index
                      ? "border-rose-400 shadow-lg scale-105"
                      : "border-gray-200 hover:border-rose-300"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${productData.name} ${index + 1}`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-3 bg-gradient-to-r from-rose-500 to-violet-500 text-white border-0 px-3 py-1">
                {productData.badge}
              </Badge>
              <h1 className="text-4xl font-bold text-gray-900 mb-3">{productData.name}</h1>
              <p className="text-gray-600 text-lg leading-relaxed">{productData.description}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-4 bg-white/60 backdrop-blur-sm rounded-2xl p-4">
              <div className="flex items-center">
                <Star className="h-6 w-6 fill-amber-400 text-amber-400" />
                <span className="ml-2 text-xl font-bold">{productData.rating}</span>
              </div>
              <span className="text-gray-500">({productData.reviews} 条真实评价)</span>
              <Button variant="ghost" size="sm" className="text-rose-600 hover:text-rose-700 hover:bg-rose-50">
                <MessageCircle className="h-4 w-4 mr-1" />
                查看评价
              </Button>
            </div>

            {/* Price */}
            <div className="bg-gradient-to-r from-rose-50 to-violet-50 rounded-2xl p-6">
              <div className="flex items-center space-x-4 mb-2">
                <span className="text-5xl font-bold text-rose-600">¥{productData.price}</span>
                <span className="text-2xl text-gray-500 line-through">¥{productData.originalPrice}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 border-0">
                  省¥{productData.originalPrice - productData.price}
                </Badge>
                <span className="text-sm text-gray-600">限时特惠，小雅专享价</span>
              </div>
            </div>

            {/* Xiaoya's Review */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-l-4 border-rose-400">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-gradient-to-br from-rose-400 to-violet-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">雅</span>
                </div>
                <span className="font-bold text-gray-800">小雅的使用心得</span>
              </div>
              <p className="text-gray-700 italic leading-relaxed">"{productData.xiaoyaReview}"</p>
            </div>

            {/* Quantity */}
            <div className="flex items-center space-x-6 bg-white/60 backdrop-blur-sm rounded-2xl p-4">
              <span className="text-gray-700 font-medium">购买数量:</span>
              <div className="flex items-center border-2 border-rose-200 rounded-full bg-white">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                  className="rounded-full hover:bg-rose-50"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="px-6 py-2 min-w-[80px] text-center font-bold text-lg">{quantity}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(quantity + 1)}
                  className="rounded-full hover:bg-rose-50"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <Button
                onClick={handleBuyNow}
                className="flex-1 bg-gradient-to-r from-rose-500 to-violet-500 hover:from-rose-600 hover:to-violet-600 text-white text-lg py-4 rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                立即购买
              </Button>
              <Button
                onClick={handleAddToCart}
                variant="outline"
                className="flex-1 text-lg py-4 rounded-full border-2 border-rose-300 text-rose-600 hover:bg-rose-50 bg-white/80 backdrop-blur-sm"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                加入购物车
              </Button>
            </div>

            {/* Additional Actions */}
            <div className="flex justify-center space-x-6">
              <Button
                variant="ghost"
                size="sm"
                className="text-rose-600 hover:text-rose-700 hover:bg-rose-50 rounded-full"
              >
                <Heart className="h-4 w-4 mr-2" />
                收藏好物
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-violet-600 hover:text-violet-700 hover:bg-violet-50 rounded-full"
              >
                <Share2 className="h-4 w-4 mr-2" />
                分享给朋友
              </Button>
            </div>

            {/* Service Features */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-rose-100">
              <div className="text-center group">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                  <Truck className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-sm font-bold">包邮到家</div>
                <div className="text-xs text-gray-500">全国包邮</div>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                  <Shield className="h-6 w-6 text-emerald-600" />
                </div>
                <div className="text-sm font-bold">品质保证</div>
                <div className="text-xs text-gray-500">小雅亲测</div>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-amber-100 to-amber-200 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                  <RotateCcw className="h-6 w-6 text-amber-600" />
                </div>
                <div className="text-sm font-bold">7天退换</div>
                <div className="text-xs text-gray-500">无理由退换</div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="features" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-white/60 backdrop-blur-sm rounded-2xl p-1">
              <TabsTrigger
                value="features"
                className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-rose-500 data-[state=active]:to-violet-500 data-[state=active]:text-white"
              >
                产品特色
              </TabsTrigger>
              <TabsTrigger
                value="specs"
                className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-rose-500 data-[state=active]:to-violet-500 data-[state=active]:text-white"
              >
                规格参数
              </TabsTrigger>
              <TabsTrigger
                value="reviews"
                className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-rose-500 data-[state=active]:to-violet-500 data-[state=active]:text-white"
              >
                用户评价
              </TabsTrigger>
            </TabsList>
            <TabsContent value="features" className="mt-8">
              <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">为什么小雅推荐这款耳机？</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {productData.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-4 bg-gradient-to-r from-rose-50 to-violet-50 rounded-2xl"
                      >
                        <span className="text-2xl">{feature.split(" ")[0]}</span>
                        <span className="text-gray-700 font-medium">{feature.substring(feature.indexOf(" ") + 1)}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="specs" className="mt-8">
              <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">详细规格</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(productData.specifications).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between items-center py-4 px-6 bg-gradient-to-r from-rose-50 to-violet-50 rounded-2xl"
                      >
                        <span className="text-gray-600 font-medium">{key}</span>
                        <span className="font-bold text-gray-800">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="reviews" className="mt-8">
              <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">真实用户评价</h3>
                  <div className="space-y-6">
                    {[
                      {
                        name: "音乐爱好者小李",
                        rating: 5,
                        comment: "音质真的很棒！低音浑厚，高音清亮，小雅推荐的果然没错！",
                        date: "2024-01-15",
                      },
                      {
                        name: "运动达人小王",
                        rating: 5,
                        comment: "防水效果很好，跑步时出汗也不用担心，续航也很给力。",
                        date: "2024-01-12",
                      },
                      {
                        name: "设计师小张",
                        rating: 4,
                        comment: "颜值很高，复古设计很有味道，戴着很有范儿。",
                        date: "2024-01-10",
                      },
                    ].map((review, index) => (
                      <div key={index} className="p-6 bg-gradient-to-r from-rose-50 to-violet-50 rounded-2xl">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-violet-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-sm font-bold">{review.name[0]}</span>
                            </div>
                            <span className="font-medium text-gray-800">{review.name}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  className={`h-4 w-4 ${star <= review.rating ? "fill-amber-400 text-amber-400" : "text-gray-300"}`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
