var params = (new URL(document.location)).searchParams;
var key = params.get('key');

$(function () {
    // 騾∽ｿ｡
    $('form').submit(function () {
        var name = $('textarea[name="name"]').val();
        var adress = $('textarea[name="adress"]').val();
        var date = $('textarea[name="date"]').val();
        // var date = $('input[name="date"]').val();
        // var tool = $('input[name="tool"]').val();
        
        //var msg = `${key}\n名前${name}\n郵便番号${adress}\n面談希望日${date}`;
        var msg = `${key}\n逅�罰�${reasons}`;
        sendText(msg);

        return false;
    });
});

