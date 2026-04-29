import { useState } from 'react';
import './Contact.css';

const PHONE = '01112288456';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', product: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const text = encodeURIComponent(
      `New Inquiry from ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nProduct Interest: ${form.product}\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/2${PHONE}?text=${text}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <div className="contact-grid">
          {/* Info side */}
          <div className="contact-info">
            <span className="section-tag">تواصل معنا</span>
            <h2 className="section-title" style={{ textAlign: 'right', marginBottom: 20 }}>
              احجز <span className="text-red">صيانة جهازك</span> الآن
            </h2>
            <p className="section-desc" style={{ textAlign: 'right', marginRight: 0, marginBottom: 40, maxWidth: 420 }}>
              تواصل معنا لحجز موعد صيانة أجهزة الجيم والتردميل. فريقنا المتخصص جاهز لمساعدتك وإصلاح جهازك في أسرع وقت.
            </p>

            <div className="contact-items">
              <a href={`tel:${PHONE}`} className="contact-item">
                <div className="contact-item-icon">📞</div>
                <div>
                  <span className="contact-item-label">اتصل بنا</span>
                  <span className="contact-item-value">{PHONE}</span>
                </div>
              </a>
              <a href={`https://wa.me/2${PHONE}`} target="_blank" rel="noreferrer" className="contact-item">
                <div className="contact-item-icon social-icon wa-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </div>
                <div>
                  <span className="contact-item-label">واتساب</span>
                  <span className="contact-item-value">تحدث معنا الآن</span>
                </div>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61565055511844&rdid=132SvjV8rNrv2jVJ" target="_blank" rel="noreferrer" className="contact-item">
                <div className="contact-item-icon social-icon fb-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </div>
                <div>
                  <span className="contact-item-label">فيسبوك</span>
                  <span className="contact-item-value">تابعنا على فيسبوك</span>
                </div>
              </a>
            </div>
          </div>

          {/* Form side */}
          <div className="contact-form-wrap">
            {submitted && (
              <div className="success-msg">
                ✅ تم الإرسال عبر واتساب! سنتواصل معك في أقرب وقت.
              </div>
            )}
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>الاسم الكامل *</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="أحمد محمد"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>رقم الهاتف *</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="01xxxxxxxxx"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label>البريد الإلكتروني</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>نوع الجهاز</label>
                <select name="product" value={form.product} onChange={handleChange}>
                  <option value="">اختر نوع الجهاز...</option>
                  <option value="تردميل">مشاية رياضية</option>
                  <option value="أجهزة مقاومة">جهاز رياضي</option>
                  <option value="أخرى">أخرى</option>
                </select>
              </div>
              <div className="form-group">
                <label>وصف المشكلة</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="اوصف لنا عطل الجهاز..."
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="submit-btn">
                إرسال عبر واتساب ←
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
