const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUQ5a0pqZDRFMkt1b1pDcWVWMTRWQjluL0paT080U29SUEVwaUZmak1sYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWVBGaVVUVGwwTDAzZWFYQjRDc0tVaEtJc2pQMUZLUEw4djJtVzY0dkRFVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzQlFrM1pGQTNnTEtPblpHOEpyN2NTajhxRFE0TkFCbzA2ZndjaW44bFcwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZYVQ4UWI0UGxZQ1JVR21UTmdrVHpzWWJWNU5HVUlJUTNuN3VBeHZWOUdBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVLWmduQTluTDJ4UTh2RjFUUFg1dUJEcHU0d2hiUEREbCtrampmd0pYMzA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZyR2g0bVduWUZ2c1p6RkpubmRZSWRpNWRjbGZZRnNERmlUTUpPUGFBUkE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0RlYkkwb2tlOEJTVWpzM3BlQnpvZ3NtRHlSNEJqMUlrZVY2YjRqbWJsOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN3J4cnM5MjlWbERKanlzaklUbmhYVXZieThnQXFaVWVycHkralZIL3psWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFxcXdIQzI1VXRpNTdZanI4YmN1STNmOWJraW9FUGZWSlF2UnU5TE4xREMrV1h1L3R5Q3d0bWJvK0pOOHRxb3p3bnRwbVBBMnlNcitHMTV2Y0VxdUN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzYsImFkdlNlY3JldEtleSI6IlJQb3VVdnlzdm9QQ0ZGdklnaWU0VUxtemNvWGNrZFZwbnhKZ0xnWWtKSUU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTM3MjAwMTg3MjdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRUQwNzE2NjVDNTYyMTdEQjVGMjk4RjFEMDQ1NzY1RTAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NTU0ODU4OX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTM3MjAwMTg3MjdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRkRGOEQ3NENDMTU0OEQ1NzFEMDlFNzRDNkVDN0Q4RkEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NTU0ODU4OX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTM3MjAwMTg3MjdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiODgzNDgxQjQ5MjVFRTMyQzUwNkEwQ0JDNUQ4MkI3NjUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NTU0ODU5MX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiOUFGNlNYRzMiLCJtZSI6eyJpZCI6IjkzNzIwMDE4NzI3OjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoibXVoYWIiLCJsaWQiOiI5OTY0OTI4MTM5Mzk1OjNAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJR3E3WnNGRUtlWGpzVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJhaEdlLy9LQTJQWlRJalZ1VzVmdUdTYUNHcm8xQWtNZjhxaWUzSStYWVZrPSIsImFjY291bnRTaWduYXR1cmUiOiJJakxGciszQTV6TXBwZmpjWTh1NC9VVmI5TzZuU3BRR2lJYkVCRUp5cS9XVWhPTmlaOHE5WWlqaWhYNUtORDU5NVpmbDJCWUFBbUhjTlFKbE1ZeTlCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoicEtiWDA2S0NoT255MWtqbHgrTENZYlg4VmFVYTJsN2UyRUFyYVBidjh3d1NxODRBTi80aGxxTWM0UXVlY3NSZVJXTmMzUVF1KzlMRE1xaWxqS1B5QUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MzcyMDAxODcyNzozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldvUm52L3lnTmoyVXlJMWJsdVg3aGttZ2hxNk5RSkRIL0tvbnR5UGwyRloifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NTU0ODU4NywibGFzdFByb3BIYXNoIjoiMkc0QW11IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCZ00ifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY 𝙀3_𝙃𝘼𝘾𝙆𝙀𝙍_𝙈𝘿 ♥️☺️*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/p4yxcn.png",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "E3_HACKER_MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "𝙀3_𝙃𝘼𝘾𝙆𝙀𝙍_𝙈𝘿",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923495178663",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*E3_HACKER_MD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ E3_HACKER_MD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/p4yxcn.png",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Apni Had May Raho Batmeez Insan 🫣",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
