var params = (new URL(document.location)).searchParams;
var key = params.get('key');

$(function () {
    // 騾∽ｿ｡
    $('form').submit(function () {

        sendText(`回答ありがとうございました`);
        
        var name = $('textarea[name="name"]').val();
        var adress = $('textarea[name="adress"]').val();
        var tel = $('textarea[name="tel"]').val();
        var age = $('textarea[name="age"]').val();
        var shikaku = $('input[name="shikaku"]').val();
        
        var date = $('input[name="date"]').val();
       
        var msg = `◆回答内容\n職種：${key}\n名前：${name}\n郵便番号：${adress}\n電話番号：${tel}\n年代：${age}\n資格：${shikaku}\n面談希望：${date}`;
        sendText(msg);

        return false;
    });
});

