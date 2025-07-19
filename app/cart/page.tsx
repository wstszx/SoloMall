"use client"

import { useState } from "react"
import Link from "next/link"
import { Minus, Plus, Sparkles, Trash2, CheckSquare, Square } from "lucide-react"

type CartItem = {
  id: number
  name: string
  price: number
  quantity: number
  image: string
  selected: boolean
  story: string
}

const initialCartItems: CartItem[] = [
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
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems)
  const [selectAll, setSelectAll] = useState(true)

  /* ---------- helpers ---------- */
  const updateQuantity = (id: number, delta: number) => {
    setCartItems((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item)),
    )
  }

  const removeItem = (id: number) => setCartItems((items) => items.filter((item) => item.id !== id))

  const toggleItemSelection = (id: number) =>
    setCartItems((items) => items.map((item) => (item.id === id ? { ...item, selected: !item.selected } : item)))

  const toggleSelectAll = () => {
    const newState = !selectAll
    setSelectAll(newState)
    setCartItems((items) => items.map((item) => ({ ...item, selected: newState })))
  }

  const selected = cartItems.filter((i) => i.selected)
  const totalQty = selected.reduce((sum, i) => sum + i.quantity, 0)
  const totalAmt = selected.reduce((sum, i) => sum + i.quantity * i.price, 0)

  /* ---------- render ---------- */
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-sky-50">
      {/* header */}
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-md border-b border-sky-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <span className="grid h-10 w-10 place-content-center rounded-full bg-gradient-to-br from-green-400 to-sky-500">
              <Sparkles className="h-5 w-5 text-white" />
            </span>
            <span className="bg-gradient-to-r from-green-600 to-sky-600 bg-clip-text text-2xl font-bold text-transparent">
              小雅精选
            </span>
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link href="/products" className="font-medium text-gray-700 transition-colors hover:text-sky-600">
              继续逛逛
            </Link>
          </nav>
        </div>
      </header>

      {/* content */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="mb-8 text-center text-4xl font-bold text-gray-900">我的购物车</h1>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600">购物车空空如也～</p>
        ) : (
          <>
            {/* list header */}
            <div className="mb-4 flex items-center gap-3">
              <button aria-label="select all" className="text-gray-700" onClick={toggleSelectAll}>
                {selectAll ? <CheckSquare className="h-5 w-5 text-green-600" /> : <Square className="h-5 w-5" />}
              </button>
              <span className="text-sm text-gray-700">全选</span>
            </div>

            {/* cart list */}
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row gap-4 rounded-lg border border-gray-100 bg-white p-4 shadow-sm"
                >
                  {/* checkbox */}
                  <button
                    aria-label="select item"
                    onClick={() => toggleItemSelection(item.id)}
                    className="self-start pt-2 text-gray-700"
                  >
                    {item.selected ? (
                      <CheckSquare className="h-5 w-5 text-green-600" />
                    ) : (
                      <Square className="h-5 w-5" />
                    )}
                  </button>

                  {/* image */}
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="h-28 w-28 shrink-0 rounded-md object-cover"
                  />

                  {/* info */}
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                      <p className="mt-1 text-sm text-gray-500">{item.story}</p>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      {/* quantity controls */}
                      <div className="flex items-center gap-2">
                        <button
                          aria-label="decrease quantity"
                          onClick={() => updateQuantity(item.id, -1)}
                          className="rounded border border-gray-300 p-1 text-gray-600 hover:bg-gray-100 disabled:opacity-40"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center tabular-nums">{item.quantity}</span>
                        <button
                          aria-label="increase quantity"
                          onClick={() => updateQuantity(item.id, 1)}
                          className="rounded border border-gray-300 p-1 text-gray-600 hover:bg-gray-100"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>

                      {/* price */}
                      <span className="font-semibold text-gray-900">¥{item.price * item.quantity}</span>
                    </div>
                  </div>

                  {/* remove */}
                  <button
                    aria-label="remove item"
                    onClick={() => removeItem(item.id)}
                    className="self-start pt-2 text-gray-400 transition-colors hover:text-red-500"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>

            {/* summary */}
            <div className="mt-10 flex flex-col items-end gap-4">
              <p className="text-gray-700">
                共 <span className="font-semibold text-gray-900">{totalQty}</span> 件商品，小计{" "}
                <span className="text-2xl font-bold text-green-700">¥{totalAmt}</span>
              </p>
              <Link
                href="/checkout"
                className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-green-500 to-sky-500 px-6 py-3 text-white shadow-md transition hover:opacity-90"
              >
                去结算
              </Link>
            </div>
          </>
        )}
      </section>
    </main>
  )
}
