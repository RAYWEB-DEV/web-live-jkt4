# JKT48 Live Theater

Website sederhana untuk nonton **Live Streaming JKT48** dengan:
- Auto deteksi LIVE / OFFLINE
- Countdown sebelum live
- Mode theater (video + chat)
- Custom play/pause
- Tanpa UI YouTube (semaksimal aturan YT)

## 🚀 Deploy ke Vercel (Paling Gampang)
1. Upload semua file ini ke GitHub
2. Import repo ke Vercel
3. Framework preset: **Other**
4. Tambahkan Environment Variable:

```
YT_API_KEY = API_KEY_YOUTUBE_KAMU
```

5. Redeploy

## 📁 Struktur Folder
```
/
├─ index.html
├─ logo.png
└─ api/
   └─ live.js
```

## 🧪 Test API
Buka:
```
API ID YTMU
```

Jika offline:
```
{ "live": false }
```

Jika live:
```
{ "live": true, "videoId": "xxxx" }
```

## ⚠️ Catatan
- Logo YouTube tidak bisa dihilangkan 100%
- Jangan taruh API key di HTML

## © 2025 ReplayShow JKT48
