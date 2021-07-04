const aoi = require("aoi.js");
const bot = new aoi.Bot({
token:"ODExMTU3MDAyNzgwMjc4Nzg1.YCuG1A.4EJPgY44RbVXHhNv7uFLhXJq49c",
prefix: "."
}); 
bot.onMessage()
bot.loadCommands(`./commands/`)
//durum
bot.status({text: "Made by Dr.SansarBey",
  type: "PLAYING",
  time: 12}); 
bot.musicStartCommand({ 
channel: "$channelID", 
code: `$title[Şarkı Şuanda Oynatılıyor!]
$description[$songInfo[title] şuanda oynatılıyor!] $footer[$username[$songInfo[userID]];$userAvatar[$songInfo[userID]]]
$color[BLACK]`})
bot.musicEndCommand({ 
channel: "$channelID", 
code: `$title[Şarkı bitti!]
$description[Şarkı listesi bitti, sesten çıkış yapılıyor.]
$color[BLACK]`})
