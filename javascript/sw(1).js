self.addEventListener('push', function (event) {
    console.log('[Service Worker] Push Received.');
    const data = event.data ? event.data.json() : { title: '푸시 메시지', body: '내용 없음' };

    const options = {
        body: data.body || '기본 메시지 본문',
        icon: 'icon.png',
        badge: 'badge.png'
    };

    event.waitUntil(
        self.registration.showNotification(data.title || '알림 도착!', options)
    );
});
