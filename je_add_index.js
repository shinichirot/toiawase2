
var params = (new URL(document.location)).searchParams;
var key = params.get('key');

$(function () {
    // 騾∽ｿ｡
    $('form').submit(function () {

        sendText(`情報登録ありがとうございました`);
        
        var move = $('input[name="move"]').val();
        var days = $('select[name="days"]').val();
        var in_date = $('input[name="in_date"]').val();
        var other = $('input[name="other"]').val();
              
        var msg = `◆回答内容\n移動手段：${move}\n希望日数：${days}\n入社可能日：${in_date}\その他：${other}`;
        sendText(msg);

        return false;
    });
});
