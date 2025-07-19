import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Search, Filter, Heart, Leaf } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const products = [
  {
    id: 1,
    name: "手工陶瓷茶具",
    price: 298,
    originalPrice: 358,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.9,
    reviews: 89,
    badge: "匠心之作",
    category: "居家用品",
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
    category: "生活用品",
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
    category: "收纳整理",
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
    category: "日用百货",
    story: "为地球多一份关爱",
    color: "slate-blue",
  },
  {
    id: 5,
    name: "香薰蜡烛礼盒",
    price: 158,
    originalPrice: 218,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.5,
    reviews: 178,
    badge: "治愈香氛",
    category: "香氛用品",
    story: "让生活充满温馨香气",
    color: "mint",
  },
  {
    id: 6,
    name: "多肉植物组合",
    price: 68,
    originalPrice: 98,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.4,
    reviews: 234,
    badge: "绿色生活",
    category: "植物花卉",
    story: "小小绿意，大大治愈",
    color: "seafoam",
  },
]

export default function ProductsPage() {
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
              <Link href="/" className="block">
                <h1 className="text-2xl font-heading text-charcoal">雅选</h1>
                <p className="text-xs text-slate-blue -mt-1">curated living</p>
              </Link>
            </div>
            <div className="flex-1 max-w-lg mx-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-blue h-5 w-5" />
                <Input
                  placeholder="搜索你想要的好物..."
                  className="pl-12 pr-4 py-3 w-full rounded-lg border-mint/20 focus:border-mint bg-white/90 backdrop-blur-sm"
                />
              </div>
            </div>
            <Link href="/cart" className="text-slate-blue hover:text-charcoal transition-colors font-medium">
              购物车
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass-mint rounded-full px-6 py-2 mb-8 shadow-soft">
            <Leaf className="h-4 w-4 text-mint" />
            <span className="text-charcoal font-medium">精选商品</span>
          </div>
          <h1 className="text-5xl font-heading text-charcoal mb-6">发现生活美好</h1>
          <p className="text-lg text-slate-blue max-w-2xl mx-auto leading-relaxed">
            每一件商品都经过精心挑选，只为给您带来真正有价值的生活美好
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-6 mb-16 glass-subtle rounded-xl p-8 shadow-elegant">
          <div className="flex items-center space-x-3">
            <Filter className="h-5 w-5 text-mint" />
            <span className="text-charcoal font-medium">筛选条件</span>
          </div>
          <Select>
            <SelectTrigger className="w-[180px] rounded-lg border-mint/20 bg-white/80">
              <SelectValue placeholder="商品分类" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">全部分类</SelectItem>
              <SelectItem value="home">居家用品</SelectItem>
              <SelectItem value="daily">生活用品</SelectItem>
              <SelectItem value="storage">收纳整理</SelectItem>
              <SelectItem value="fragrance">香氛用品</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px] rounded-lg border-mint/20 bg-white/80">
              <SelectValue placeholder="价格排序" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">默认排序</SelectItem>
              <SelectItem value="price-low">价格从低到高</SelectItem>
              <SelectItem value="price-high">价格从高到低</SelectItem>
              <SelectItem value="rating">评分最高</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
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
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
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
                <div className="p-8">
                  <div className="text-xs text-slate-blue mb-2 font-medium">{product.category}</div>
                  <h3 className="font-subheading text-xl mb-3 text-charcoal group-hover:text-mint transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-sm text-slate-blue mb-4 font-accent italic">"{product.story}"</p>
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <span className="text-sm text-slate-blue ml-2 font-medium">
                        {product.rating} ({product.reviews}条评价)
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl font-subheading text-charcoal">¥{product.price}</span>
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

        {/* Pagination */}
        <div className="flex justify-center mt-16">
          <div className="flex space-x-3">
            <Button variant="outline" disabled className="rounded-lg border-mint/20 bg-white/80">
              上一页
            </Button>
            <Button className="bg-charcoal text-white rounded-lg hover:bg-charcoal/90">1</Button>
            <Button variant="outline" className="rounded-lg border-mint/20 bg-white/80 hover:bg-mint/8">
              2
            </Button>
            <Button variant="outline" className="rounded-lg border-mint/20 bg-white/80 hover:bg-mint/8">
              3
            </Button>
            <Button variant="outline" className="rounded-lg border-mint/20 bg-white/80 hover:bg-mint/8">
              下一页
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
