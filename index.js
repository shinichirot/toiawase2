var params = (new URL(document.location)).searchParams;
var key = params.get('key');

$(function () {
    // 騾∽ｿ｡
    $('form').submit(function () {
        var reasons = $('textarea[name="reasons"]').val();
        // var date = $('input[name="date"]').val();
        // var tool = $('input[name="tool"]').val();
        
        //var msg = `${key}\n譛晉､ｼ/邨ら､ｼ荳榊盾蜉縺ｮ逅�罰�${reasons}\n霑比ｿ｡譛滄剞�${date}\n菴ｿ逕ｨ繝��繝ｫ�${tool}`;
        var msg = `${key}\n逅�罰�${reasons}`;
        sendText(msg);

        return false;
    });
});

