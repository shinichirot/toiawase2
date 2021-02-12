var params = (new URL(document.location)).searchParams;
var key = params.get('key');

$(function () {
    // 騾∽ｿ｡
    $('form').submit(function () {
        var name = $('textarea[name="name"]').val();
        var adress = $('textarea[name="adress"]').val();
        var tel = $('textarea[name="tel"]').val();
        var shikaku = $('textarea[name="shikaku"]').val();
        var date = $('textarea[name="date"]').val();
        // var date = $('input[name="date"]').val();
        // var tool = $('input[name="tool"]').val();
       
        sendText(`◆回答内容`);
        var msg = `職種：${key}\n名前：${name}\n郵便番号：${adress}\n電話番号：${tel}\資格：${shikaku}\n面談希望：${date}\n\n`;
        sendText(msg);

        return false;
    });
});

