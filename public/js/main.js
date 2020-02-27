
function getParam(name, url) {
    var u = url || location.search,
        reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
        r = u.substr(u.indexOf("\?") + 1).match(reg);
    return r != null ? r[2] : "";
}

function setCookie(name,value){
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}
function getCookie(name){
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
    return unescape(arr[2]);
    else
    return null;
}

/*Ajax封装*/
function AjaxBox(url,data,success,error,extra) {
    $.ajax({
        type: "POST",
        url: url,
        data: data,
        dataType: "json",
        success:function (req,textStatus,request) {
            var msg=''            
            if(req.code == 200){
                if(success){success(req)}
                return false;
            }else{
                layer.msg("失败,"+req.msg, {icon: 5, time: 1000});
                if(error){error(req); return;}
                return false;
            }
            if (extra){extra(msg)}
         
        }})
}
function getCurCode() {
    $.ajax({
        type: "GET",
        url: 'api/getcode',
        success:function (req) {
            $('#imgcode').html(req);
        }})
}
var puBlic={
    dom: {},
    params:{
        isfirst:false,
        isMapTap:false,
        curWidth:null,
        baseUrl:null,
        language:'cn',
    },
    init: function() {
        this.initDom();
        this.bindEvent();
    },
    initDom: function() {
        var dom = this.dom;
        dom.language = $('.language')
    },
    initParams:function () {
        var params = this.params;
        params.baseUrl = $('#base_url').val();
        params.language = getCookie('kesonlanguage') || 'cn';

    },
    load: function() {},
    bindEvent:function () {
        var dom = this.dom;
        var params = this.params;
        var that = this;

        //zn/en

        dom.language.on('click','a',function() {
            setCookie('kesonlanguage',$(this).attr('lagua'))
            location.reload()
        })


        $('.brand img').hover(
            function (param) {
                $(this).addClass('animated flip')
            },
            function (param) {
                $(this).removeClass('animated flip')
            }
        )

        $('.w-gotop').click(function(){
            $('body').animate({
                scrollTop:0
            })
        })

    }
   
};
$(function () {
    puBlic.init()
    $(window).scroll(function(){
        var _top=$(window).scrollTop();
        if(_top>200){
            $(".fixed_top").show();
        }else{
            $(".fixed_top").hide();
        }
    });
})
