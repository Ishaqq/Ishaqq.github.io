function getQueryData(queryString) {
    if (queryString.indexOf('?') == 0) {
        queryString = queryString.split('?')[1];
    }
    queryString = queryString.replace(/&amp;/, '&');
    var querys = queryString.split('&'),
        i = querys.length,
        _URLParms = {},
        item;

    while (i--) {
        item = querys[i].split('=');
        if (item[0]) {
            var value = item[1] || '';
            try {
                value = decodeURIComponent(value);
            } catch (e) {
                value = unescape(value);
            }
            _URLParms[decodeURIComponent(item[0])] = value;
        }
    }

    return _URLParms;
}
var queryData = getQueryData(window.location.search),
    expandId = queryData.toid;
getLangConf(); //配置语言
function otherHandler () {
    if(expandId){
        var sCtop = $('#'+expandId).offset().top;
        $('#'+expandId).addClass('show');
        $(window).scrollTop(sCtop);
    }
    var oNavItems= $('.js_list .title');
    var list = $('.js_list');
    for (var i = 0; i < oNavItems.length; i++) {
        oNavItems[i].addEventListener('touchstart',function(){},false);
        oNavItems[i].onclick=function(){
            if($(this).parent('.js_list').hasClass('show')){
                $(this).parent('.js_list').removeClass('show');
            }else{
                $(this).parent('.js_list').addClass('show');
            }
        }
    }

}
function  getLangConf () {
    var langAreaCode = "us",lanStr= (navigator.language || navigator.browserLanguage).toLowerCase();
    var self = this, getStr="";
    var langArray = ["tw","us","jp"];
    $.each(langArray,function(index, item){
        if(lanStr.indexOf(item)>-1){
            langAreaCode = item;
            return false;
        }
    });
    getStr = 'i18n/in-' +langAreaCode+ '.json';
    $('body').addClass(langAreaCode);
    $.ajax({
        url: getStr,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            var contentHtml = '';
            contentHtml = $("#contentTemplate").template(data);
            $(".content-wrap ").html(contentHtml);
            otherHandler();
            setTimeout(function () {
                $('#loading').hide();
            }, 500);
        },
        error: function (err) {}
    });

}
