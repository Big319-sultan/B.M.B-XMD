const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "BWM-XMD;;;H4sIAAAAAAAAA5VV2Y6rOBD9lZFfyZ1ACFuklgYIWcnGkm00Dw6Y4GYNNhD6Kv8+IumoW7rL9PBkGfvUqapzyt9BmmGC5qgBg+8gL3AFKWqXtMkRGACtDAJUgA7wIYVgAJCqnLQkteVxTpjFoTs6XHUz1zOTvzrSsXCJPpt0j0F3bxgv4NYBeXmKsfcbwKlYw5kuWzVvSUZVa9Js1ouCBgW7scqxmh4oOGcWhjE0shdwaxEhLnB6NvIQJaiA8Rw1a4iLr9HfmNWxOLEnSd2qY6E+qky2yZjp9aBy+TVen/ohrxXL5i3gN1+jj3V2DbM5Ryt+NCyPq4mer4X00K0mVUyDxJxuJ6c15PsXbvOgT/A5Rf7URynFtPly3Wv1XO20askgh51n6cE2l6Zbca4CPa/Lkp5cT48jchQnrvs14touSqK16vT4q+GJcV8iQZNZxFbKWd6jZorVMr2OtufYqD8TXxdPrUT/p+5ofWBeWZ4bbid6LNXBUVdDR5didmtPw9elVvvhZDVTvOno8DX6nrObbMauXjvzuiunXbNel4swP2xNNT9sGZO7nqvhwkr3evZBH9Ky+B3LKY83jDS3pHovXKqQp854zavyysmtNzNkEjy1WcZ6Y4Z+uS5XEb6c7Sjfne04i6D+NtUPi+mQdys32hg6p1fxJXk7h5uXe0YRaqY+GHC3DijQGRNaQIqz9L4n9zoA+pWNvALRe3mBMJ+Nu6N+VGkKFxFz6XdN3MWwF2+XK6bpG7OulTuhI8No+gI6IC8yDxGC/AkmNCuaBSIEnhEBg7/vnWqTLlCSUTTDPhiAntCXZE4SBJlV/iJ/1iGkBOb5nymioAOCIksWCAxoUaIOuF/oDyVZHA2HgsSLYo+VNF5SdJHVh7yhGRKvtykmj6AOThChMMnBgJP6osQJPUG4/dMBKbrSh37arHmuAwJcEOqmZR5n0H+K6/kTel5WptRuUk9vF6gAg0/biFKcnkmbWZnCwgtxhfQ2DzAIYEzQrQN8VGEPtXjgdWYJk1GFnNEucr15OBMgL6ht5cIsfRyB0PMCTua+SUpP+tYXe8E3hYXst5OElEDuKz5/YkFbjod12zu/VJKyLIg7qxEMFzbDpLK13grs1J+Lq/NdDQ8JoAL5zyqfoBeVuZNFKP0Nrs4OF5zF19cTRLuGXlRTLpt4qxGXfMJ9SAsMvn+MSz3zWzx7o8jGkB+BtlttnB/UMOj/qIcUtoeBk+V/jNso7y1o7/uIQhyTltqa5/t+pBnLiyHL6nisLs6qfm5r/GzZ04IPiWuWbfSkahdcw2JLF9IVM1UlKfNT90J4YS1f9m+Ze/UZ7EQvPwFpp4oVJMO6EvWLS81YXZ2yEU+OrlwYqXaxTacqs2XlxGyOwpGI1Lmwba6kHu8vyfx1ae9nKOZE1vaWrFE6aEToKkqR1vr1KZ3PwSaLnU6ugV6qZs2iBvXwXt0xGQynjbw8oXrsUf0w2TmRdpEt0cqKxNMa5B1jcV9d7VyPL7GRWsJpk7w6zSFQNjOZP9eP4XAfTvH7o4DfbfsQWoDRfca+9+C/WvUhefbW+QTxPrR/9RhsXDdclhKXygfInZyVfKgKienaSVcslozTnceyOFrsgywSwK31ch5DGmRF0vom9YsM+6ADYkio+uHanwwCXumApFHz3KaQPs0O1Pabnwxw+xcrLbLRjwgAAA=="
// add your Session Id 
PREFIX: process.env.PREFIX || "2",
// add your prifix for bot
BOT_NAME: process.env.BOT_NAME || "✦ B.M.B-XMD ✦ XMD ✦",
// add bot namw here for menu
CUSTOM_REACT: process.env.CUSTOM_REACT || "yes",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🔥,❤️‍🩹,❤️,🩷,🧡,💛,💚,💙,🩵,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "yes",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "25566862457",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "✦ B.M.B-XMD ✦ XMD ✦",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ✦ B.M.B-XMD ✦ XMD ✦*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/p9hyal.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || ">B.M.B IS ACTIVE AND ALIVE\n\n\nKEEP USING B.M.B-XMD FROM B.M.B TECH INC⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "*🎉👀 Seen by 𝙱.𝙼.𝙱-𝚇𝙼𝙳 🚀🔥*",
// set the auto reply massage on status reply    
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
HEART_REACT: process.env.HEART_REACT || "false",
// make this true or false for heart reactions only 
OWNER_REACT: process.env.OWNER_REACT || "false",
// make it true or fasle for only react on owner msg only 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
