// Import modul dan dependensi
const {
    name: pkgName,
    version
} = require("./package.json");
const {
    monospace,
    italic,
    quote
} = require("@mengkodingan/Shadow");

// Konfigurasi
global.config = {
    // Informasi bot dasar
    bot: {
        name: "Shadow", // Nama bot
        prefix: /^[°•π÷×¶∆£¢€¥®™+✓_=|/~!?@#%^&.©^]/i, // Karakter awalan perintah yang diizinkan
        phoneNumber: "6287840615800", // Nomor telepon bot (opsional jika menggunakan QR code)
        thumbnail: "https://pomf2.lain.la/f/856dlbmh.jpg", // Gambar thumbnail bot
        website: "https://chat.whatsapp.com/Fvr26zvFvlfIuAhmslDiQa", // Website untuk WhatsApp bot
        groupJid: "", // JID untuk group bot (opsional jika tidak menggunakan requireBotGroupMembership)

        // Konfigurasi autentikasi sesi bot
        authAdapter: {
            adapter: "default", // Pilihan adapter: 'default', 'mysql', 'mongo', 'firebase'

            // Konfigurasi default
            default: {
                authDir: "state"
            },

            // Konfigurasi MySQL
            mysql: {
                host: "localhost:3306", // Nama host 
                user: "root", // Nama pengguna
                password: "admin123", // Kata sandi
                database: "Shadow-wabot" // Nama database
            },

            // Konfigurasi MongoDB
            mongodb: {
                url: "mongodb://localhost:27017/Shadow-wabot" // URL
            },

            // Konfigurasi Firebase
            firebase: {
                tableName: "Shadow-wabot", // Nama tabel
                session: "state" // Nama sesi
            }
        }
    },

    // Pesan bot yang disesuaikan untuk situasi tertentu
    msg: {
        admin: quote("⛔ Perintah hanya dapat diakses oleh admin grup!"), // Pesan ketika perintah hanya untuk admin
        banned: quote("⛔ Tidak dapat memproses karena Anda telah dibanned oleh Owner!"), // Pesan untuk pengguna yang dibanned
        botAdmin: quote("⛔ Tidak dapat memproses karena bot bukan admin grup ini!"), // Pesan jika bot bukan admin di grup
        botGroupMembership: quote("⛔ Tidak dapat memproses karena Anda tidak bergabung dengan grup bot! Ketik '/botgroup' untuk mendapatkan tautan grup bot."), // Pesan untuk pengguna yang tidak ada dalam grup
        coin: quote("⛔ Tidak dapat memproses karena koin Anda tidak cukup!"), // Pesan ketika koin tidak cukup
        cooldown: quote("🔄 Perintah ini sedang dalam cooldown, tunggu..."), // Pesan saat cooldown perintah
        group: quote("⛔ Perintah hanya dapat diakses dalam grup!"), // Pesan untuk perintah grup
        owner: quote("⛔ Perintah hanya dapat diakses Owner!"), // Pesan untuk perintah yang hanya owner bisa akses
        premium: quote("⛔ Tidak dapat memproses karena Anda bukan pengguna Premium!"), // Pesan jika pengguna bukan Premium
        private: quote("⛔ Perintah hanya dapat diakses dalam obrolan pribadi!"), // Pesan untuk perintah obrolan pribadi
        restrict: quote("⛔ Perintah ini telah dibatasi karena alasan keamanan!"), // Pesan pembatasan perintah

        watermark: `@${pkgName} / v${version}`, // Watermark nama dan versi pada bot
        footer: italic("Shadow"), // Footer di pesan bot
        readmore: "\u200E".repeat(4001), // String read more
        note: "“Jangan biarkan masalalu menghambatmu,tapi jadikan itu untuk pelajaran di masa depan, agar kamu menjadi lebih baik lagi ~ farelDev”", // Catatan

        wait: quote("🔄 Tunggu sebentar..."), // Pesan loading
        notFound: quote("❎ Tidak ada yang ditemukan! Coba lagi nanti."), // Pesan item tidak ditemukan
        urlInvalid: quote("❎ URL tidak valid!") // Pesan jika URL tidak valid
    },

    // Informasi owner bot
    owner: {
        name: "Farel Developer 🇮🇩", // Nama owner bot
        organization: "Creative Lab", // Nama organisasi owner bot
        id: "6287712328693", // Nomor telepon owner bot
        co: ["6287712328693"] // Nomor co-owner bot
    },

    // Stiker bot
    sticker: {
        packname: "Di buat Oleh ShadowBot", // Nama paket stiker
        author: "FarelDeveloper" // Pembuat stiker
    },

    // Sistem bot
    system: {
        alwaysOnline: true, // Bot selalu berstatus "online"
        autoMention: true, // Bot otomatis mention seseorang dalam pesan yang dikirim
        autoRead: true, // Bot baca pesan otomatis
        autoTypingOnCmd: true, // Tampilkan status "sedang mengetik" saat memproses perintah
        cooldown: 500, // Jeda antar perintah (ms)
        port: 3000, // Port (jika pakai server)
        restrict: false, // Batasi akses perintah
        requireBotGroupMembership: false, // Harus gabung grup bot
        selfOwner: false, // Bot jadi owner sendiri
        selfReply: true, // Bot balas pesan bot sendiri
        timeZone: "Asia/Jakarta", // Zona waktu bot
        useCoin: true, // Pakai koin
        usePairingCode: true, // Pakai kode pairing untuk koneksi
        useServer: false // Jalankan bot dengan server
    }
};