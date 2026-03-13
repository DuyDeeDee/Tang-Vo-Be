import WishForm from './components/WishForm'
import WishList from './components/WishList'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-xl mx-auto px-4 py-10">
        <header className="mb-8 border-b border-[#2a2a2a] pb-6">
          <p className="text-xs tracking-widest text-amber-400 uppercase mb-2">Dành riêng cho em</p>
          <h1 className="font-serif text-4xl font-light">
            Danh Sách <em>Ước Mơ</em>
          </h1>
          <p className="text-xs text-gray-500 mt-2 tracking-wider">Tặng vợ Bê 🖤 — mọi điều em muốn, anh sẽ nhớ</p>
        </header>
        <WishForm />
        <WishList />
        <footer className="text-center text-xs text-gray-700 mt-12 tracking-widest">
          Made with 🖤 — Chỉ dành riêng cho vợ Bê
        </footer>
      </div>
    </div>
  )
}