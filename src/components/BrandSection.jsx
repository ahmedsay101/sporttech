import './BrandSection.css';

export default function BrandSection() {
  return (
    <section className="brand-section">
      <div className="brand-inner">
        <img src="/logo.jpeg" alt="SportTech Logo" className="brand-logo" />
        <div className="brand-divider" />
        <div className="brand-text">
          <h2 className="brand-title">
            متخصصون في <span className="text-red">صيانة وإصلاح</span> أجهزة الجيم
          </h2>
          <p className="brand-desc">
            خبرة أكثر من 10 سنوات في إصلاح التردميل وجميع أجهزة الرياضة —
            نصلك في نفس اليوم في أي مكان.
          </p>
          <div className="brand-badges">
            <span className="brand-badge">🔧 إصلاح تردميل</span>
            <span className="brand-badge">🚲 إصلاح بايسكل</span>
            <span className="brand-badge">⚡ إليبتيكال</span>
            <span className="brand-badge">🏋️ أجهزة المقاومة</span>
          </div>
        </div>
      </div>
    </section>
  );
}
