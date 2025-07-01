// src/components/ContentLeft.jsx
export default function ContentLeft() {
  return (
    <section className="flex-1 bg-white p-6 rounded-lg shadow-md space-y-6">
      <div data-aos="fade-up">
        <h2 className="text-xl font-semibold text-gray-800">서비스 업데이트 및 공지사항</h2>
        <p className="text-sm text-gray-500">최신 업데이트 내역을 확인하세요.</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div data-aos="fade-right" className="h-24 bg-gray-100 rounded-md" />
        <div data-aos="fade-left"  className="h-24 bg-gray-100 rounded-md" />
        <div data-aos="fade-right" className="h-24 bg-gray-100 rounded-md" />
        <div data-aos="fade-left"  className="h-24 bg-gray-100 rounded-md" />
      </div>

      <div data-aos="fade-up" className="border-l-4 border-primary bg-primary/10 p-4 rounded-md">
        새로운 기능을 확인해 보세요.
      </div>
    </section>
  )
}
