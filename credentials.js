export default {
    config: {
        apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
        authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
        storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
        appId: process.env.VUE_APP_FIREBASE_APP_ID,
        projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
        messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID
    }
}
