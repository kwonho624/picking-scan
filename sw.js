/* 최소 서비스워커 — "바탕화면에 추가" 설치 조건을 채우기 위한 용도입니다.
   ⚠ 이 앱은 서버(구글시트) 데이터 최신성이 생명이라 캐싱을 하지 않습니다.
   모든 요청은 그대로 네트워크로 흘려보냅니다(패스스루). */
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {
  // 아무 것도 가로채지 않음 — 기본 브라우저 동작 그대로 사용
});
