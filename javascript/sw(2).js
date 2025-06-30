self.addEventListener('push', (event) => {
    console.log('[서비스 워커] 푸시 받음');

    let title = "test";
    let options = {
        body: "body",
        icon: "common.jpeg",
        image: "common.jpeg",
    }

    self.registration.showNotification(title, options);
});