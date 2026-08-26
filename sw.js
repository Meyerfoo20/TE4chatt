self.addEventListener('install', event => {
    self.skipWaiting();
});
self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});
self.addEventListener('notificationclick', event => {
    event.notification.close();
    event.waitUntil(
        self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clientList => {
            for (const client of clientList) {
                if (client.url && 'focus' in client) {
                    return client.focus();
                }
            }
            if (self.clients.openWindow) {
                return self.clients.openWindow('./');
            }
        })
    );
});