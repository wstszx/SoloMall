"use client"

import { useState } from "react"
import { Sparkles } from "lucide-react"
import Link from "next/link"

const initialCartItems = [
  {
    id: 1,
    name: "复古蓝牙耳机",
    price: 299,
    quantity: 1,
    image: "/placeholder.svg?height=100&width=100",
    selected: true,
    story: "小雅亲测推荐",
  },
  {
    id: 2,
    name: "手工皮革手表",
    price: 899,
    quantity: 1,
    image: "/placeholder.svg?height=100&width=100",
    selected: true,
    story: "意大利工匠制作",
  },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)
  const [selectAll, setSelectAll] = useState(true)

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems((items) => items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const toggleItemSelection = (id: number) => {
    setCartItems((items) => items.map((item) => (item.id === id ? { ...item, selected: !item.selected } : item)))
  }

  const toggleSelectAll = () => {
    const newSelectAll = !selectAll
    setSelectAll(newSelectAll)
    setCartItems((items) => items.map((item) => ({ ...item, selected: newSelectAll })))
  }

  const selectedItems = cartItems.filter((item) => item.selected)
  const totalAmount = selectedItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const totalItems = selectedItems.reduce((sum, item) => sum + item.quantity, 0)

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
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-violet-600 bg-clip-text text-transparent">
                小雅精选
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/products" className="text-gray-700 hover:text-rose-600 transition-colors font-medium">
                继续逛逛
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">我的购物车</h\
