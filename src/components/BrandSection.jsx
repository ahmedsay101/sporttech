import './BrandSection.css';

export default function BrandSection() {
  return (
    <section className="brand-section">
      <div className="brand-inner">
        <img src="/logo.jpeg" alt="SportTech Logo" className="brand-logo" />
        <div className="brand-divider" />
        <div className="brand-text">
          <h2 className="brand-title">
            متخصصون في <span className="text-red">صيانة وإصلاح</span> أجهزة الجيم <br  /> و الماركات العالمية
          </h2>
          <p className="brand-desc">
            خبرة أكثر من 10 سنوات في إصلاح التردميل وجميع أجهزة الرياضة —
            نصلك في نفس اليوم في أي مكان.
          </p>
          <div className="brand-badges">
            <span className="brand-badge">إصلاح اجهزة سبرينت</span>
            <span className="brand-badge">إصلاح اجهزة سايبكس</span>
            <span className="brand-badge">إصلاح اجهزة ماتركس</span>
            <span className="brand-badge">إصلاح اجهزة تكنو جيم</span>
            <span className="brand-badge">إصلاح اجهزة ام بي اتش</span>
            <span className="brand-badge">إصلاح اجهزة ستارتراك</span>
            <span className="brand-badge">إصلاح اجهزة لايف فيتنس</span>
            <span className="brand-badge">إصلاح اجهزة جاجور</span>
            <span className="brand-badge">إصلاح اجهزة فيجور</span>
          </div>
        </div>
      </div>
    </section>
  );
}
