export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] flex flex-col items-center p-4 sm:p-10 text-stone-800 font-sans relative overflow-hidden">
      
      {/* پس‌زمینه زنده و مینیمال بر اساس پالت زرشکی-نارنجی برند شما */}
      <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] bg-rose-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* هدر سایت با الهام مستقیم از لوگوی Rhodia */}
      <header className="w-full max-w-5xl flex justify-between items-center mb-12 z-10 bg-white/70 backdrop-blur-md px-6 py-4 rounded-3xl border border-stone-200 shadow-sm">
        <div className="flex items-center gap-3">
           <div className="w-12 h-12 bg-rose-700 rounded-2xl flex items-center justify-center shadow-md shadow-rose-700/20 transform rotate-3">
              <span className="text-orange-300 font-serif font-bold text-xl italic">R</span>
           </div>
           <div className="text-2xl font-black tracking-tight text-rose-800">
             رودیاتحریر
           </div>
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-bold text-stone-500">
          <a href="#" className="hover:text-rose-600 transition-colors">کلاسور و دفتر</a>
          <a href="#" className="hover:text-rose-600 transition-colors">نوشت‌افزار فانتزی</a>
          <a href="#" className="hover:text-rose-600 transition-colors">مینیمال‌های پینترستی</a>
        </nav>
        <button className="bg-rose-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-rose-800 hover:shadow-lg hover:shadow-rose-700/30 transition-all duration-300">
          سبد خرید (۰)
        </button>
      </header>

      {/* بخش مرکزی با شعار اصلی پیج شما */}
      <div className="max-w-3xl text-center space-y-6 z-10 mb-16 mt-8">
        <div className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 text-xs font-black tracking-wider mb-2">
          MATCH WITH YOUR VIBE ✨
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-stone-900">
          دنیای <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-orange-500">رنگی و مینیمال</span> تو
        </h1>
        <p className="text-lg md:text-xl text-stone-500 max-w-xl mx-auto font-medium leading-relaxed">
          تجهیزات خلق برای ذهن‌های خلاق. لوازم تحریری که با وایب تو انتخاب شده تا میز کارت رو به یه قاب جذاب تبدیل کنه.
        </p>
      </div>

      {/* شبکه محصولات با طراحی سافت، صمیمی و لبه‌های گرد */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl z-10">
        
        {/* کارت محصول ۱: کلاسورها */}
        <div className="group bg-white rounded-3xl p-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-rose-900/5 border border-stone-100">
          <div className="w-full h-56 bg-stone-50 rounded-2xl mb-5 flex items-center justify-center relative overflow-hidden group-hover:bg-rose-50 transition-colors">
            <div className="w-24 h-32 bg-rose-200 rounded-lg shadow-sm transform -rotate-6 group-hover:rotate-0 transition-transform duration-500"></div>
            <div className="w-24 h-32 bg-orange-200 rounded-lg shadow-sm absolute transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-stone-800">کلاسورهای پاستلی</h3>
            <p className="text-xs text-stone-400 font-medium">مناسب برای دانشگاه و مدرسه</p>
          </div>
          <div className="flex justify-between items-center pt-5 mt-2 border-t border-stone-50">
            <span className="text-lg font-bold text-rose-700">۲۸۵,۰۰۰ <span className="text-xs text-stone-400">تومان</span></span>
            <button className="bg-rose-50 text-rose-700 w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-rose-600 hover:text-white transition-colors">
              +
            </button>
          </div>
        </div>

        {/* کارت محصول ۲: نوشت‌افزار */}
        <div className="group bg-white rounded-3xl p-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-rose-900/5 border border-stone-100">
          <div className="w-full h-56 bg-stone-50 rounded-2xl mb-5 flex items-center justify-center relative overflow-hidden group-hover:bg-orange-50 transition-colors">
            <div className="flex gap-2 group-hover:scale-110 transition-transform duration-500">
               <div className="w-2 h-28 bg-stone-800 rounded-full"></div>
               <div className="w-2 h-28 bg-rose-600 rounded-full"></div>
               <div className="w-2 h-28 bg-orange-400 rounded-full"></div>
            </div>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-stone-800">ست روان‌نویس مینیمال</h3>
            <p className="text-xs text-stone-400 font-medium">نوشت‌افزار فانتزی و روان</p>
          </div>
          <div className="flex justify-between items-center pt-5 mt-2 border-t border-stone-50">
            <span className="text-lg font-bold text-rose-700">۱۲۰,۰۰۰ <span className="text-xs text-stone-400">تومان</span></span>
            <button className="bg-rose-50 text-rose-700 w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-rose-600 hover:text-white transition-colors">
              +
            </button>
          </div>
        </div>

        {/* کارت محصول ۳: ارگانایزر */}
        <div className="group bg-white rounded-3xl p-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-rose-900/5 border border-stone-100">
          <div className="w-full h-56 bg-stone-50 rounded-2xl mb-5 flex items-center justify-center relative overflow-hidden group-hover:bg-rose-50 transition-colors">
            <div className="w-28 h-20 bg-white border-2 border-stone-200 rounded-xl shadow-sm flex flex-col gap-1 p-2 group-hover:scale-105 transition-transform duration-500">
               <div className="w-full h-1/2 bg-stone-100 rounded border border-stone-200"></div>
               <div className="w-full h-1/2 bg-stone-100 rounded border border-stone-200"></div>
            </div>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-stone-800">ارگانایزر رومیزی شفاف</h3>
            <p className="text-xs text-stone-400 font-medium">وایب پینترستی برای میز مطالعه</p>
          </div>
          <div className="flex justify-between items-center pt-5 mt-2 border-t border-stone-50">
            <span className="text-lg font-bold text-rose-700">۳۵۰,۰۰۰ <span className="text-xs text-stone-400">تومان</span></span>
            <button className="bg-rose-50 text-rose-700 w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-rose-600 hover:text-white transition-colors">
              +
            </button>
          </div>
        </div>

      </div>
    </main>
  );
}
