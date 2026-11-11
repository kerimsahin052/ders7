# Sprint 7 Backend

Öğrenci No: **2416501039**

Bu sprintte frontend'in yanında Node.js ve Express kullanılarak REST API oluşturulmuştur.

## Kurulum

Backend klasörüne gir:

```bash
cd backend
```

Paketleri kur:

```bash
npm install
```

Sunucuyu çalıştır:

```bash
npm run dev
```

Sunucu adresi:

```text
http://localhost:3000
```

## Ortam Değişkeni

`.env` dosyasında:

```text
PORT=3000
```

`.env` dosyası GitHub'a gönderilmez. Örnek değer `.env.example` dosyasında bulunmaktadır.

## REST Sözleşmesi

| Method | Endpoint | Amaç | Başarılı | Hata | Durum |
|---|---|---|---|---|---|
| GET | `/events` | Etkinlik listesini getir | 200 | — | Bu sprint |
| GET | `/events/:id` | Tek etkinliği getir | 200 | 404 | Bu sprint |
| POST | `/events` | Yeni etkinlik oluştur | 201 | 400 | Bu sprint |
| PATCH | `/events/:id` | Etkinliği güncelle | 200 | 400, 404 | Sprint 9 |
| DELETE | `/events/:id` | Etkinliği sil | 204 | 404 | Sprint 9 |

## Health Check

```text
GET /health
```

Başarılı cevap:

```json
{
  "status": "ok",
  "time": "...",
  "student": "2416501039"
}
```

## GET /events

Tüm etkinlikleri getirir.

```text
GET http://localhost:3000/events
```

Başarılı durum kodu:

```text
200 OK
```

Kategoriye göre filtreleme de yapılabilir:

```text
GET /events?category=Atölye
```

## GET /events/:id

Belirtilen id'ye sahip etkinliği getirir.

Örnek:

```text
GET http://localhost:3000/events/event-2
```

Etkinlik bulunamazsa:

```text
404 Not Found
```

Hata biçimi:

```json
{
  "error": {
    "message": "Event not found"
  }
}
```

## POST /events

Yeni etkinlik oluşturur.

```text
POST http://localhost:3000/events
```

Zorunlu alanlar:

- `title`
- `category`
- `date`

Başarılı kayıt:

```text
201 Created
```

Eksik zorunlu alan gönderildiğinde:

```text
400 Bad Request
```

## Postman Testleri

Sprint için hazırlanan 6 istek Postman collection olarak aşağıdaki dosyada bulunmaktadır:

```text
requests/kampus-api.json
```

Test edilen istekler:

1. `GET /health` → 200
2. `GET /events` → 200
3. `GET /events/event-2` → 200
4. `GET /events/yok` → 404
5. `POST /events` → 201
6. Eksik veri ile `POST /events` → 400