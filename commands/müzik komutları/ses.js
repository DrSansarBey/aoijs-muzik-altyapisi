module.exports = ({
name:"ses",
aliases:"volume",
code:`Ses \`$noMentionMessage\` olarak ayarlandı.
$volume[$noMentionMessage]
$suppressErrors[{title:HATA}{description:Herhangi bir şarkı çalmıyor.}{color:BLACK}]
$onlyIf[$isNumber[$noMentionMessage]==true;{title:HATA}{description:Sadece bir sayı girin.}{color:BLACK}
$onlyIf[$noMentionMessage<=101;{title:HATA}{description:Ses en fazla **100** olabilir.}{color:BLACK}]`})
