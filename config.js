const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTU5rYUhvbFlveDM4dU1JZW9INjdrRTJKQ2Y1eTR2ck9TME15SlZuclNrZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOGFiSXVackJNZkNibkN4bjR3dnhnNlFTN1hlMDYxZjl4NFZJa3NBQVdTbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNT0JoZEtaMEM3Y0VBSzQ4Si9BMkRIVi80R0RlUGFhdTJpWnUzM044ajBVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLeCtNU3lNRE1vWVRGMklUZGV6cERHT3JmS0F2RVB4ZGJSVk1YVG5MYzJVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9PQnJEcHRLRHNXN1dONnRwZmdsY2h0eW0xQTBlcFpFOWduZFlCMUJVM0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNBRHNqOERDeXRrU0plLzVTZmhSY0dGWU5oVW1MNzNnL2JrWEVKanpQejA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkhRNS9mSWFzQWJzRVBmVTRLbWlmOUNjWkdwdkJSYW4xTXQyU3k1TEFYTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTlJwNEhwTTUxQ0IrOVUzMVdHdjgvdC9neWVxNXBudjVPQzRUYU1WN3hrOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inl0TEg4NlJaL2NLeHhkVDJ5cmhrWjdDTnk1Zk5NNWs3bFZIS0Fkck93TVhFTzRhcWNNalVZcVFLM2V3NitrcWlyNTN6VDk3bG4zVHFLUFdqTjBnK0N3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODksImFkdlNlY3JldEtleSI6IktnQnFuSzdGY2NZQW9waWhCNHF1aEpFbmhCNWQxcTBDR1ROWWF1MmxEU2s9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6Ikc0SEI0NUJZIiwibWUiOnsiaWQiOiI5MjM0OTUxNzg2NjM6MjFAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxMDI0Njk4NjY2NzIzNTU6MjFAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQbjd3NGdFRU42U2hzVUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJudXZlM1pFKytXZ243bTFwdFpZUUZxeVQyS3Z4S29WcEFBaDhtNjJLVXlvPSIsImFjY291bnRTaWduYXR1cmUiOiIzUWR1VnBKU0o0NzJMb1FTR3JINWlhYVE5Q216UGhTWk9GM2xCV3FmOVE3K2Jsc2tEUFdaWHk4amYram1Ed1IvODBibXh1ZzFtOTVkSHdEamxBdTFEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoidFlxTWdHN1oreUw5cE5LZ2FSZkEvcG96ekdJYXpvL3BjOVNjK096QkhCMURqR3VzQ3oyT2d1RTloczdIYTUxdFRhbi92bUhUMWYxOFAybTBhTDB1QkE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjM0OTUxNzg2NjM6MjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWjdyM3QyUlB2bG9KKzV0YWJXV0VCYXNrOWlyOFNxRmFRQUlmSnV0aWxNcSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU1NDE2OTI5LCJsYXN0UHJvcEhhc2giOiIxSzRoSDQiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJyNyJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
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
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923237045919",
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
