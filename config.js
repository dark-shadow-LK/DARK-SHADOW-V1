const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "enter your session id",
MONGODB: process.env.MONGODB || "mongodb://mongo:MfPJLADhRWNHvxuOORrlmfJHboedaADB@junction.proxy.rlwy.net:57828",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/1ece2e0281513c05d20ee.jpg",
ALIVE_MSG: process.env.ALIVE_IMG || "🎉 Hi DARK-SHADOW-MD Is Online Now 💻\n*💻 Owner* - DARK-SHADOW-MD\n\n*💻 Owner Number* -94773416478",
SUDO_NB: process.env.SUDO_NB || "94773416478",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE: process.env.AUTO_VOICE || "true"
};
