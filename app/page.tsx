import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Heart, ArrowRight, Award, Leaf, Users, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const featuredProducts = [
  {
    id: 1,
    name: "手工陶瓷茶具",
    price: 298,
    originalPrice: 358,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.9,
    reviews: 89,
    badge: "匠心之作",
    story: "与景德镇工艺师合作的独家设计",
    color: "mint",
  },
  {
    id: 2,
    name: "天然竹纤维毛巾",
    price: 128,
    originalPrice: 168,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    reviews: 156,
    badge: "自然纯净",
    story: "亲肤柔软，抗菌天然",
    color: "powder-blue",
  },
  {
    id: 3,
    name: "简约木质收纳盒",
    price: 89,
    originalPrice: 119,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.7,
    reviews: 203,
    badge: "生活美学",
    story: "化繁为简的生活哲学",
    color: "seafoam",
  },
  {
    id: 4,
    name: "有机棉布袋",
    price: 45,
    originalPrice: 65,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.6,
    reviews: 127,
    badge: "环保之选",
    story: "为地球多一份关爱",
    color: "slate-blue",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-mist">
      {/* Header */}
      <header className="glass-subtle sticky top-0 z-50 border-b border-white/20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4">
              <div className="w-11 h-11 bg-gradient-to-br from-mint to-seafoam rounded-full flex items-center justify-center shadow-soft">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <div>
                <Link href="/" className="block">
                  <h1 className="text-2xl font-heading text-charcoal">雅选</h1>
                  <p className="text-xs text-slate-blue -mt-1">curated living</p>
                </Link>
              </div>
            </div>
            <nav className="hidden md:flex space-x-12">
              <Link
                href="/products"
                className="text-slate-blue hover:text-charcoal transition-colors duration-300 font-medium relative group"
              >
                精选商品
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-mint to-powder-blue group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/story"
                className="text-slate-blue hover:text-charcoal transition-colors duration-300 font-medium relative group"
              >
                品牌故事
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-mint to-powder-blue group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/contact"
                className="text-slate-blue hover:text-charcoal transition-colors duration-300 font-medium relative group"
              >
                联系我们
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-mint to-powder-blue group-hover:w-full transition-all duration-300"></span>
              </Link>
            </nav>
            <div className="flex items-center space-x-6">
              <Link href="/cart" className="relative group">
                <div className="p-2 rounded-full hover:bg-mint/10 transition-colors">
                  <ShoppingCart className="h-6 w-6 text-slate-blue group-hover:text-mint transition-colors" />
                </div>
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-mint to-powder-blue text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  0
                </span>
              </Link>
              <Link href="/login">
                <Button variant="ghost" size="sm" className="text-slate-blue hover:text-charcoal hover:bg-mint/8">
                  登录
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-mint/20 to-seafoam/20 rounded-full blur-2xl animate-gentle-float"></div>
          <div
            className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-powder-blue/20 to-slate-blue/20 rounded-full blur-2xl animate-gentle-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-seafoam/15 to-mint/15 rounded-full blur-xl animate-gentle-float"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-3 glass-mint rounded-full px-8 py-3 mb-12 shadow-soft">
              <Heart className="h-5 w-5 text-mint" />
              <span className="text-charcoal font-medium">用心挑选每一件好物</span>
              <Sparkles className="h-4 w-4 text-powder-blue" />
            </div>
            <h1 className="text-6xl lg:text-8xl font-heading text-charcoal mb-8 leading-tight">
              品质生活
              <br />
              <span className="bg-gradient-to-r from-mint via-seafoam to-powder-blue bg-clip-text text-transparent">
                始于细节
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-16 text-slate-blue max-w-3xl mx-auto leading-relaxed">
              在快节奏的生活中，我们为您寻找那些真正值得拥有的美好物品
              <br />
              <span className="font-accent text-2xl text-mint block mt-6">"简单生活，用心感受"</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Link href="/products">
                <Button size="lg" className="btn-primary text-lg px-12 py-6 rounded-lg font-medium group">
                  开始探索
                  <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/story">
                <Button
                  variant="outline"
                  size="lg"
                  className="btn-secondary text-lg px-12 py-6 rounded-lg font-medium bg-transparent"
                >
                  了解理念
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-heading text-charcoal mb-6">我们的理念</h2>
            <p className="text-lg text-slate-blue max-w-2xl mx-auto leading-relaxed">
              在纷繁复杂的消费世界中，我们坚持为您筛选真正有价值的物品
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="text-center group">
              <div className="w-18 h-18 bg-gradient-to-br from-mint/15 to-seafoam/15 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:from-mint/25 group-hover:to-seafoam/25 transition-all duration-300 shadow-soft">
                <Award className="h-9 w-9 text-mint" />
              </div>
              <h3 className="text-xl font-subheading mb-4 text-charcoal">精心挑选</h3>
              <p className="text-slate-blue leading-relaxed">每件商品都经过严格筛选，只选择真正优质的产品</p>
            </div>
            <div className="text-center group">
              <div className="w-18 h-18 bg-gradient-to-br from-powder-blue/15 to-slate-blue/15 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:from-powder-blue/25 group-hover:to-slate-blue/25 transition-all duration-300 shadow-soft-blue">
                <Heart className="h-9 w-9 text-powder-blue" />
              </div>
              <h3 className="text-xl font-subheading mb-4 text-charcoal">用心服务</h3>
              <p className="text-slate-blue leading-relaxed">提供贴心的购物体验和专业的产品建议</p>
            </div>
            <div className="text-center group">
              <div className="w-18 h-18 bg-gradient-to-br from-seafoam/15 to-mint/15 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:from-seafoam/25 group-hover:to-mint/25 transition-all duration-300 shadow-soft">
                <Users className="h-9 w-9 text-seafoam" />
              </div>
              <h3 className="text-xl font-subheading mb-4 text-charcoal">品质承诺</h3>
              <p className="text-slate-blue leading-relaxed">承诺每件商品的品质，让您购物无忧</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-mist">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 glass-blue rounded-full px-6 py-2 mb-8 shadow-soft-blue">
              <Sparkles className="h-4 w-4 text-powder-blue" />
              <span className="text-charcoal font-medium">本月精选</span>
            </div>
            <h2 className="text-4xl font-heading text-charcoal mb-6">发现生活美好</h2>
            <p className="text-lg text-slate-blue max-w-2xl mx-auto leading-relaxed">
              每一件都值得细细品味，为您的生活增添温馨与雅致
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <Card
                key={product.id}
                className="group hover:shadow-elegant-hover transition-all duration-500 border-0 bg-white overflow-hidden hover:-translate-y-2"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <Badge
                      className={`absolute top-4 left-4 ${
                        product.color === "mint"
                          ? "bg-mint"
                          : product.color === "powder-blue"
                            ? "bg-powder-blue"
                            : product.color === "seafoam"
                              ? "bg-seafoam"
                              : "bg-slate-blue"
                      } text-white border-0 font-medium shadow-soft`}
                    >
                      {product.badge}
                    </Badge>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="bg-white/90 text-charcoal rounded-full p-2 hover:bg-white hover:text-mint"
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-subheading text-lg mb-3 text-charcoal group-hover:text-mint transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-sm text-slate-blue mb-4 font-accent italic">"{product.story}"</p>
                    <div className="flex items-center mb-4">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <span className="text-sm text-slate-blue ml-2 font-medium">
                        {product.rating} ({product.reviews}条评价)
                      </span>
                    </div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <span className="text-xl font-subheading text-charcoal">¥{product.price}</span>
                        <span className="text-sm text-slate-blue line-through">¥{product.originalPrice}</span>
                      </div>
                    </div>
                    <Link href={`/product/${product.id}`}>
                      <Button
                        className={`w-full ${
                          product.color === "mint"
                            ? "btn-mint"
                            : product.color === "powder-blue"
                              ? "btn-powder"
                              : "btn-primary"
                        } rounded-lg`}
                      >
                        查看详情
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link href="/products">
              <Button
                variant="outline"
                size="lg"
                className="btn-secondary px-12 py-4 font-medium bg-transparent rounded-lg"
              >
                发现更多好物
                <Sparkles className="h-5 w-5 ml-3" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="glass-subtle rounded-2xl p-12 lg:p-16 shadow-elegant">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-mint/10 to-powder-blue/10 rounded-full px-6 py-3 mb-8">
                  <span className="text-2xl">👋</span>
                  <span className="text-slate-blue font-medium">关于雅选</span>
                </div>
                <h2 className="text-3xl font-heading text-charcoal mb-8 leading-tight">
                  每一件商品背后
                  <br />
                  <span className="bg-gradient-to-r from-mint to-powder-blue bg-clip-text text-transparent">
                    都有一个故事
                  </span>
                </h2>
                <p className="text-slate-blue mb-8 leading-relaxed text-lg">
                  我们相信，真正的好物不在于价格的高低，而在于它能否为生活带来美好的改变。
                  每一次挑选都是用心的过程，每一次推荐都承载着我们对品质的坚持。
                </p>
                <Link href="/story">
                  <Button className="btn-primary px-8 py-4 font-medium group rounded-lg">
                    了解更多
                    <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-br from-mint/20 via-seafoam/20 to-powder-blue/20 rounded-2xl flex items-center justify-center shadow-soft">
                  <div className="text-6xl animate-gentle-float">🏺</div>
                </div>
                <div className="absolute -bottom-4 -right-4 glass-mint rounded-xl p-4 shadow-soft">
                  <Heart className="h-6 w-6 text-mint" />
                </div>
                <div className="absolute -top-4 -left-4 glass-blue rounded-xl p-4 shadow-soft-blue">
                  <Leaf className="h-6 w-6 text-powder-blue" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20 bg-mist">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading text-charcoal mb-4">便捷支付</h2>
            <p className="text-slate-blue">支持多种安全支付方式</p>
          </div>
          <div className="flex justify-center items-center space-x-16">
            <div className="flex items-center space-x-4 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-soft-blue">
                <span className="text-white font-heading text-xl">支</span>
              </div>
              <div>
                <div className="text-xl font-subheading text-charcoal">支付宝</div>
                <div className="text-sm text-slate-blue">安全便捷</div>
              </div>
            </div>
            <div className="flex items-center space-x-4 group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-soft">
                <span className="text-white font-heading text-xl">微</span>
              </div>
              <div>
                <div className="text-xl font-subheading text-charcoal">微信支付</div>
                <div className="text-sm text-slate-blue">一键支付</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-mint/5 via-powder-blue/5 to-seafoam/5"></div>
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-11 h-11 bg-gradient-to-br from-mint to-seafoam rounded-full flex items-center justify-center shadow-soft">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading">雅选</h3>
                  <p className="text-sm text-gray-400">curated living</p>
                </div>
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                用心挑选每一件好物，为您的生活增添美好。
                <br />
                <span className="font-accent text-mint">简单生活，用心感受。</span>
              </p>
            </div>
            <div>
              <h4 className="font-subheading mb-6 text-mint text-lg">购物指南</h4>
              <ul className="space-y-4 text-gray-300">
                <li>
                  <Link href="/help/shipping" className="hover:text-white transition-colors">
                    配送说明
                  </Link>
                </li>
                <li>
                  <Link href="/help/returns" className="hover:text-white transition-colors">
                    退换货政策
                  </Link>
                </li>
                <li>
                  <Link href="/help/payment" className="hover:text-white transition-colors">
                    支付方式
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-subheading mb-6 text-powder-blue text-lg">联系我们</h4>
              <ul className="space-y-4 text-gray-300">
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    在线客服
                  </Link>
                </li>
                <li>
                  <Link href="/story" className="hover:text-white transition-colors">
                    品牌故事
                  </Link>
                </li>
                <li>
                  <Link href="/feedback" className="hover:text-white transition-colors">
                    意见反馈
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-16 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2024 雅选.
              <span className="font-accent text-seafoam ml-2">品质生活，始于细节 ✨</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
