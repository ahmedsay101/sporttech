import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <img
          src="/hero.jpg"
          alt="Technician fixing a treadmill in a gym"
          className="hero-img"
        />
        <div className="hero-overlay" />
      </div>

      <div className="hero-content">
        <span className="hero-badge">خبراء صيانة أجهزة الجيم</span>
        <h1 className="hero-title">
          إصلاح وصيانة <br />
          <span className="text-red" style={{display: "block", marginTop: "28px"}}> المشايات الكهريائية <br /> وجميع الاجهزة الرياضية</span>
        </h1>
        <p className="hero-desc">
          نصلح أجهزة الجيم وجميع أجهزة الرياضة والتردميل. خدمة احترافية سريعة بأيدي فنيين متخصصين.
          إصلاح شامل لجميع أعطال التردميل وأجهزة اللياقة البدنية.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn-primary">احجز صيانة الآن</a>
          <a href="#features" className="btn-outline">خدماتنا</a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">+1000</span>
            <span className="stat-label">جهاز تم إصلاحه</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">+500</span>
            <span className="stat-label">عميل سعيد</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">10+</span>
            <span className="stat-label">سنوات خبرة</span>
          </div>
        </div>
      </div>

      <a href="#features" className="scroll-down" aria-label="Scroll down">
        <span />
      </a>
    </section>
  );
}
