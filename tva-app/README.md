# حاسبة TVA — تطبيق قابل للتنصيب

مجلد `www/` هو التطبيق نفسه (يعمل بدون إنترنت: Tailwind والخطوط محلية).

## 1) الأسرع: تنصيب مباشر (PWA) — أندرويد + كمبيوتر
1. ارفع محتوى مجلد `www/` على أي استضافة HTTPS مجانية (Netlify Drop، GitHub Pages، Cloudflare Pages).
2. أندرويد (Chrome): افتح الرابط ← ⋮ ← «تثبيت التطبيق».
3. كمبيوتر (Chrome/Edge): أيقونة التثبيت في شريط العنوان ← «تثبيت».
بعد أول فتح يعمل التطبيق دون اتصال.

## 2) ملف APK لأندرويد + ملف EXE لويندوز (تلقائياً عبر GitHub)
1. أنشئ مستودعاً على GitHub وارفع كل محتويات هذا المجلد.
2. تبويب Actions ← «Build APK + Windows» ← Run workflow.
3. بعد دقائق نزّل من Artifacts:
   - `TVA-android-apk` ← `app-debug.apk` (انسخه للهاتف وثبّته، مع السماح بالتثبيت من مصادر غير معروفة).
   - `TVA-windows` ← ملف `.exe` (مثبّت + نسخة محمولة).

## 3) البناء محلياً
- ويندوز: `npm install` ثم `npm run dist:win` (الناتج في `dist/`). للتجربة: `npm start`.
- أندرويد: يلزم Android Studio: `npm install` ← `npm run android:add` ← افتح مجلد `android` في Android Studio ← Build APK.

## تعديل التصميم
عدّل `www/index.html` ثم شغّل `npm run css` لإعادة توليد `www/css/app.css`.
