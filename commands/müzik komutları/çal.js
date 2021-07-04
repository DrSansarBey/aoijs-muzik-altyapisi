module.exports = ({
name:"çal",
aliases:["play","p"],
code:`$title[Şarkı Sıraya Eklendi!]
$description[$playSong[$noMentionMessage;3s;yes;yes;{title:HATA}{description:Video oynatılamıyor.}{color:BLACK}] adlı şarkı başarı ile sıraya eklendi.]
$footer[$username[$authorID];$authorAvatar]
$argsCheck[>1;{title:HATA}{description:Bir şarkı ismi giriniz.}{color:BLACK}]
$onlyIf[$voiceID!=;{title:HATA}{description:Bir sesli kanalda olmalısınız.}{color:BLACK}]
$color[BLACK]
$onlyIf[$checkContains[$toLowercase[$message];discord.gg;.gg;bit.ly;<@&;@everyone;@here]==false;{title:HATA}{description:Etiket yada link algılandı!}{color:BLACK}]
$onlyIf[$checkContains[$toLowercase[$message];\`]==false;{title:HATA}{description:Tek bir sorum var, bende neden hata arıyorsun?}{color:BLACK}]
$onlyIf[$checkContains[$toLowercase[$message];**;*;_;___;__;~~;~]==false;{title:HATA}{description:Tek bir sorum var, bende neden hata arıyorsun?}{color:BLACK}]`})
