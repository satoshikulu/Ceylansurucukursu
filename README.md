# Ceylan Driver School - React Conversion

Bu klasör, mevcut `ceylanschooldriver.html` projesinin React ve Vite tabanlı bir yeniden yazımıdır.

## Kullanım

1. `cd react-app`
2. `npm install`
3. `npm run dev`

## İçerik

- `src/App.jsx`: Ana uygulama mantığı ve ekran yapısı
- `src/App.css`: Orijinal stil düzenlerinin React için uyarlanmış hâli
- `src/main.jsx`: React uygulamasını başlatır
- `index.html`: Vite ana giriş HTML dosyası

## Notlar

- Uygulama state yönetimi `useState` ve `useEffect` ile yapılmıştır.
- `localStorage` kullanımı orijinal uygulamadaki kullanıcı, istatistik ve gönderi kaydını destekler.
- Mevcut HTML içeriği React bileşenlerine ve statik verilere dönüştürülmüştür.
