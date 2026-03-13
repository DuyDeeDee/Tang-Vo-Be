import WishForm from './components/WishForm'
import WishList from './components/WishList'

export default function App() {
  return (
    <div
      className="min-h-screen text-white"
      style={{
        backgroundImage: 'url(/bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay tối */}
      <div className="min-h-screen" style={{ background: 'rgba(0,0,0,0.6)' }}>
        <div className="max-w-xl mx-auto px-4 py-10">

          <header className="mb-8 border-b border-rose-900/40 pb-6">
            <p className="text-xs tracking-widest text-rose-400 uppercase mb-2">Dành riêng cho em</p>
            <h1 className="font-serif text-4xl font-light">
              Danh Sách 
            </h1>
            <p className="text-xs text-gray-400 mt-2 tracking-wider">Tặng vợ Bê </p>
          </header>

          <WishForm />
          <WishList />

          <footer className="text-center text-xs text-rose-400 mt-12 tracking-widest">
             Chỉ dành riêng cho vợ Bê
          </footer>

        </div>
      </div>
    </div>
  )
}