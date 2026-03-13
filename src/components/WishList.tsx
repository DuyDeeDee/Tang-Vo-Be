import { useEffect, useState } from 'react'
import { collection, onSnapshot, deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { db } from '../lib/firebase'
import type { Wish } from '../types/wish'
import { Trash2, CheckCircle, Circle } from 'lucide-react'

export default function WishList() {
  const [wishes, setWishes] = useState<Wish[]>([])

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'wishes'), (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Wish))
      setWishes(data.reverse())
    })
    return () => unsubscribe()
  }, [])

  const toggleDone = async (wish: Wish) => {
    await updateDoc(doc(db, 'wishes', wish.id!), { done: !wish.done })
  }

  const deleteWish = async (id: string) => {
    await deleteDoc(doc(db, 'wishes', id))
  }

  const formatPrice = (n?: number) => n ? n.toLocaleString('vi-VN') + ' đ' : ''

  if (wishes.length === 0) {
    return (
      <div className="text-center py-16 text-gray-600">
        <p className="text-4xl mb-4">🖤</p>
        <p className="italic font-serif text-lg">Hãy thêm điều em muốn vào đây nhé...</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-3">
      {wishes.map(wish => (
        <div
          key={wish.id}
          className={`bg-[#111] border rounded p-4 transition ${wish.done ? 'opacity-40 border-[#1a1a1a]' : 'border-[#2a2a2a] hover:border-[#333]'}`}
        >
          <div className="flex justify-between items-start gap-4">
            <div className="flex-1">
              <p className="text-xs text-rose-400 tracking-widest uppercase opacity-70 mb-1">{wish.category}</p>
              <p className={`font-serif text-xl ${wish.done ? 'line-through text-gray-600' : 'text-white'}`}>
                {wish.name}
              </p>
              {wish.price && <p className="text-xs text-gray-500 mt-1">≈ {formatPrice(wish.price)}</p>}
              {wish.note && (
                <p className="text-sm text-gray-500 italic font-serif mt-2 pt-2 border-t border-[#2a2a2a]">
                  "{wish.note}"
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <button onClick={() => toggleDone(wish)} className="text-gray-500 hover:text-rose-400 transition">
                {wish.done ? <CheckCircle size={16} /> : <Circle size={16} />}
              </button>
              <button onClick={() => deleteWish(wish.id!)} className="text-gray-600 hover:text-red-400 transition">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}