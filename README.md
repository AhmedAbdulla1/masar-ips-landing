# مسار - IPS | بطاقة تحميل التطبيق الذكية
### Masar - IPS Smart Download Hub (masar.tranex.site)

بطاقة تحميل ذكية (Smart App Card) مخصصة للمشاركة الأنيقة على الواتساب ومواقع التواصل الاجتماعي لتطبيق **مسار - IPS** (مجلس النواب المصري)، مستضافة على **Vercel** برابط الدومين المخصص `masar.tranex.site`.

---

## مميزات المشروع
- **شاشة واحدة فائقة السرعة (Single-Screen)**: بدون حشو أو سكرول غير ضروري، مجهزة للتحميل المباشر.
- **معاينة واتساب احترافية (WhatsApp Rich Preview)**: عند إرسال الرابط `masar.tranex.site` على الواتساب يظهر الشعار الذهبي، العنوان، والوصف بشكل فخم جداً.
- **التعرف التلقائي على نظام الموبايل (Smart OS Detection)**: يبرز زر `App Store` تلقائياً لمستخدمي الآيفون، وزر `Google Play` لمستخدمي الأندرويد.
- **إشارة غير مباشرة لشركة Tranex**: بصمة برمجية أنيقة أسفل الكرت `Powered by Tranex Spatial Engine`.
- **أداة مشاركة ورمز QR**: لمسح الرمز بكاميرا الهاتف لمستخدمي الكمبيوتر.

---

## هيكل الملفات
```
E:\masar-ips-landing\
├── index.html       # هيكل الصفحة ووسوم الـ OpenGraph للواتساب
├── styles.css       # التصميم الزجاجي الفاخر (Obsidian & Egyptian Gold)
├── app.js           # كود التعرف على نظام الجهاز ومشاركة الرابط
├── vercel.json      # إعدادات Vercel للتخزين المؤقت وحماية الروابط
├── assets/
│   └── images/      # لوجو التطبيق splash_logo.png والأصول المرئية
└── README.md        # دليل الاستخدام والربط
```

---

## خطوات ربط المشروع بـ GitHub و Vercel

### 1. رفع المشروع على GitHub
1. افتح الرابط التالي لإنشاء مستودع جديد على حسابك في GitHub:
   👉 **[إنشاء مستودع جديد على GitHub](https://github.com/new)**
   - اسم المستودع: `masar-ips-landing`
   - اجعله **Public** أو **Private** حسب رغبتك.
   - لا تضع علامة صح أمام README أو .gitignore (لأنها موجودة بالفعل).

2. افتح موجه الأوامر (Terminal) في المجلد `E:\masar-ips-landing` ونفذ الأمر التالي:
   ```bash
   git push -u origin main
   ```

---

### 2. الاستضافة على Vercel وربط الدومين `masar.tranex.site`
1. اذهب إلى [Vercel Dashboard](https://vercel.com/dashboard) وسجل الدخول بحساب GitHub.
2. اضغط **Add New...** ثم **Project**.
3. اختر المستودع `masar-ips-landing` واضغط **Import**.
4. اضغط **Deploy** (لا تحتاج لأي إعدادات خاصة، المشروع Static خفيف جداً).
5. بعد انتهاء النشر، ادخل على إعدادات المشروع في Vercel:
   - اذهب إلى **Settings** ➡️ **Domains**.
   - أضف الدومين الفرعي: `masar.tranex.site` واضغط **Add**.

---

### 3. إعدادات الـ DNS في لوحة تحكم الدومين (Domain DNS Settings)
في لوحة تحكم الدومين الخاص بك (`tranex.site`) لدى مزود النطاق (مثل Cloudflare أو Namecheap أو GoDaddy)، أضف السجل التالي:

| النوع (Type) | الاسم (Name / Host) | القيمة (Value / Target) | TTL |
| :--- | :--- | :--- | :--- |
| **CNAME** | `masar` | `cname.vercel-dns.com` | Auto |

خلال دقائق قليلة سيعمل الرابط `https://masar.tranex.site` مع شهادة SSL مجانية تلقائياً!
