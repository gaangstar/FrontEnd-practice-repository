self.addEventListener('push', (event) => {
    console.log('[서비스 워커] 푸시 받음');

    let title = "안경만두";
    let options = {
        body: "오늘의 안경만두를 보셨습니까?",
        icon: "../js/만두3.jpg",
        image: "../js/만두3.jpg",
    }

    self.registration.showNotification(title, options);
});