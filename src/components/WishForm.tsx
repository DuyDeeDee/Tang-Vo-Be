import { useForm } from 'react-hook-form'
import { PlusCircle } from 'lucide-react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../lib/firebase'
import type { Wish } from '../types/wish'

type FormData = Omit<Wish, 'id' | 'done' | 'createdAt'>

export default function WishForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    const wish: Wish = {
      ...data,
      done: false,
      createdAt: new Date().toLocaleDateString('vi-VN')
    }
    await addDoc(collection(db, 'wishes'), wish)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-[#111] border border-[#2a2a2a] rounded p-6 mb-6">
      <h2 className="text-xs tracking-widest text-amber-400 uppercase mb-4">✦ Thêm món quà mới</h2>

      <div className="mb-4">
        <label className="text-xs text-gray-500 uppercase tracking-widest block mb-1">Tên quà tặng</label>
        <input
          {...register('name', { required: 'Nhập tên quà nhé em ♥' })}
          placeholder="Em muốn gì nào..."
          className="w-full bg-[#191919] border border-[#2a2a2a] rounded px-3 py-2 text-sm text-white focus:border-amber-400 outline-none"
        />
        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-xs text-gray-500 uppercase tracking-widest block mb-1">Danh mục</label>
          <select
            {...register('category')}
            className="w-full bg-[#191919] border border-[#2a2a2a] rounded px-3 py-2 text-sm text-white focus:border-amber-400 outline-none"
          >
            <option>💄 Làm đẹp</option>
            <option>👗 Thời trang</option>
            <option>✈️ Du lịch</option>
            <option>💕 Đôi & Lãng Mạn</option>
            <option>🍽️ Ẩm thực</option>
            <option>💎 Trang sức</option>
            <option>🌟 Khác</option>
          </select>
        </div>
        <div>
          <label className="text-xs text-gray-500 uppercase tracking-widest block mb-1">Giá ước tính (VNĐ)</label>
          <input
            {...register('price', { valueAsNumber: true })}
            type="number"
            placeholder="500000"
            className="w-full bg-[#191919] border border-[#2a2a2a] rounded px-3 py-2 text-sm text-white focus:border-amber-400 outline-none"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="text-xs text-gray-500 uppercase tracking-widest block mb-1">Ghi chú riêng</label>
        <textarea
          {...register('note')}
          placeholder="Màu sắc, size, link mua, lý do em thích..."
          rows={3}
          className="w-full bg-[#191919] border border-[#2a2a2a] rounded px-3 py-2 text-sm text-white focus:border-amber-400 outline-none resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-amber-400 text-black py-2 rounded text-xs font-medium tracking-widest uppercase hover:bg-amber-300 transition flex items-center justify-center gap-2"
      >
        <PlusCircle size={14} />
        Thêm vào danh sách
      </button>
    </form>
  )
}