importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyCm8ZEQN0ejLLmEI0pdnj86Wm57y0oOGDQ",
    projectId: "te4chatt",
    messagingSenderId: "732475626937",
    appId: "1:732475626937:web:6461273395e350f46e5268"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    const title = payload.notification.title;
    const options = {
        body: payload.notification.body,
        icon: payload.notification.icon || 'logo.png'
    };

    self.registration.showNotification(title, options);
});