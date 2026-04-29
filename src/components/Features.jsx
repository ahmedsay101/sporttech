import './Features.css';

const features = [
  {
    icon: '�',
    title: 'صيانة التردميل',
    desc: 'إصلاح جميع أعطال التردميل — السير، الموتور، الخشبه، اللوحة الإلكترونية، والمحرك بجميع الماركات.',
  },
  {
    icon: '🔧',
    title: 'إصلاح أجهزة الجيم',
    desc: 'صيانة شاملة لجميع أجهزة الجيم: ستارتراك، تكنو جيم، لايف فيتنس سبرينت، سايبكس، ماتركس ، ام بي اتش .',
  },
  {
    icon: '⚡',
    title: 'خدمة سريعة في نفس اليوم',
    desc: 'نصل إليك في أسرع وقت ونصلح الجهاز في نفس اليوم في معظم الحالات.',
  },
  {
    icon: '🛡️',
    title: 'ضمان على الإصلاح',
    desc: 'جميع أعمال الصيانة مضمونة. نضمن جودة قطع الغيار والإصلاح الكامل.',
  },
  {
    icon: '🏠',
    title: 'صيانة في المنزل',
    desc: 'خدمة الصيانة المنزلية متاحة — فنيونا يأتون إليك بدون ما تحتاج تنقل الجهاز.',
  },
  {
    icon: '📞',
    title: 'دعم فني على مدار الساعة',
    desc: 'فريقنا متاح للرد على استفساراتك وحجز مواعيد الصيانة في أي وقت.',
  },
];

export default function Features() {
  return (
    <section id="features" className="features-section section">
      <div className="features-inner">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">لماذا تختارنا</span>
            <h2 className="section-title">
              خدمات <span className="text-red">سبورت تك</span>
            </h2>
            <p className="section-desc">
              نصلح أجهزة الجيم وجميع أجهزة الرياضة والتردميل بخبرة أكثر من 10 سنوات وفريق متخصص.
            </p>
          </div>

          <div className="features-grid">
            {features.map((f, i) => (
              <div className="feature-card" key={i}>
                <div className="feature-icon">{f.icon}</div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
