/* 칼박 보컬 연습 플레이어 — 서비스워커
   캐시를 두지 않고 그대로 네트워크로 보낸다(앱을 고치면 새로고침만으로 바로 반영).
   홈 화면에 추가/앱 설치가 되도록 등록만 담당한다. */
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () { /* 기본 네트워크 요청 그대로 */ });
