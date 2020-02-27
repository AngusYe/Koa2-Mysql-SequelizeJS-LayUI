
var base_url;
function getCookie(name) 
{ 
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
 
    if(arr=document.cookie.match(reg))
 
        return unescape(arr[2]); 
    else 
        return null; 
} 
function delCookie(name){
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null)
    document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}


/*Ajax封装*/
function AjaxBox(url,data,success,error,extra) {
    $.ajax({
        type: "POST",
        url: url,
        data: data,
        dataType: "json",
        headers:{'authorization':`Bearer ${window.localStorage.getItem('wanmaiToken')}`},
        success:function (req,textStatus,request) {
            var msg=''
            var newtoken = request.getResponseHeader("authorization"); 
            
            if(req.code == 200 || req.code == 0){
                if(success){success(req)}
            }else{
                parent.layer.msg("失败,"+req.msg, {icon: 5, time: 1000});
                if(error){error(req); return;}
            }
            if (extra){extra(msg)}

            if(newtoken){
                localStorage.setItem('token',newtoken)
            }
            if(req.code == -2){
                window.location.href = '/backend/login'
            }
        }})
}

//删除图片
function delEveryImg(param,success) {
    $.ajax({
        type:'POST',
        url:'/api/delfiles',
        dataType: "json",
        headers:{'Authorization':`Bearer ${window.localStorage.getItem('wanmaiToken')}`},
        data:{url:param},
        success:function (req) {
            if(req.code == 200){
                if(success){success(req)}
                return false;
            }
        }
    })
}

 //单文件上传
 function uploadSimple(upload,DomId,ImgId,TextId,success) {
    //logo单图片上传
    var uploadInstlogo = DomId;
    var logoText = TextId;
    window[logoText] = $('#'+TextId);
    window[uploadInstlogo] = upload.render({
            elem: '#'+DomId
            ,url: '/api/uploadfiles'
            ,headers:{'Authorization':`Bearer ${window.localStorage.getItem('wanmaiToken')}`}
            ,before: function(obj){
                //预读本地文件示例，不支持ie8
                obj.preview(function(index, file, result){
                    $('#'+ImgId).attr('src', result); //图片链接（base64）
                });
            }
            ,done: function(res){
                if(res.code == 200){ //上传成功
                    
                    window[logoText].html('<span style="color: #5FB878;">上传成功</span>');
                    if(success){
                        success(res)
                    }
                }
            }
            ,error: function(){
                //演示失败状态，并实现重传
                window[logoText].html('<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>');
                window[logoText].find('.demo-reload').on('click', function(){
                    window[uploadInstlogo].upload();
                });
            }
        });
}

window.onload = function() {
    base_url = $('#base_url').val();
}
layui.use(['element', 'layer'], function () {
    var element = layui.element;
    var $ = layui.jquery;
    var layer = layui.layer;

    /**
     * 左边菜单显示/隐藏功能
     * @type {boolean}
     */
    $(".menu-switch").click(function () {
        if ($(".layui-layout-admin .layui-side").css("left") == '0px') {
            $(".layui-layout-admin .layui-side").animate({left: "-200px"});
            $(".layui-layout-admin .content-body").animate({left: "0px"});
            $(".layui-layout-admin .layui-footer").animate({left: "0px"});
        } else {
            $(".layui-layout-admin .layui-side").animate({left: "0px"});
            $(".layui-layout-admin .content-body").animate({left: "200px"});
            $(".layui-layout-admin .layui-footer").animate({left: "200px"});
        }
    });

    /**
     * 点击左边菜单在右边添加选项卡
     */
    $(".layui-nav-child").find("dd").click(function () {
        var title = $(this).text();
        var path = $(this).children('a').attr('path');
        var tabId = $(this).children('a').attr('tab-id');
        // 去重复选项卡
        for (var i = 0; i < $('.ok-frame').length; i++) {
            if ($('.ok-frame').eq(i).attr('tab-id') == tabId) {
                element.tabChange("ok-tab", tabId);
                event.stopPropagation();
                return;
            }
        }
        // 添加选项卡
        element.tabAdd("ok-tab", {
            title: title,
            content: "<iframe src='" + path + "' tab-id='" + tabId + "' class='ok-frame' frameborder='0' scrolling='yes' width='100%' height='100%'></iframe>",
            id: tabId
        });
        // 切换选项卡
        element.tabChange("ok-tab", tabId);
    });


    

    /**
     * 退出操作
     */
    $("#logout").click(function () {
        layer.confirm("确定要退出吗？", {skin: 'layui-layer-lan', icon: 3}, function () {
            localStorage.removeItem('token')
            location.href = '/backend/loginout'
        });
    });

    /**
     * 锁定账户
     */
    $("#lock").click(function () {
        layer.confirm("确定要锁定账户吗？", {skin: 'layui-layer-lan', icon: 4, title: '提示', anim: 1}, function (index) {
            layer.close(index);
            $(".yy").show();
            layer.prompt({btn: ['确定'], title: '输入密码解锁(123456)', closeBtn: 0, formType: 1}, function (value, index, elem) {
                if (value == "123456") {
                    layer.close(index);
                    $(".yy").hide();
                } else {
                    layer.msg('密码错误', {anim: 6});
                }
            });
        });
    });
});

function getParam(name, url) {
    var u = url || location.search,
        reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
        r = u.substr(u.indexOf("\?") + 1).match(reg);
    return r != null ? r[2] : "";
}

if(Array.prototype.equals)
  console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
  // if the other array is a falsy value, return
  if (!array)
    return false;
  // compare lengths - can save a lot of time
  if (this.length != array.length)
    return false;
  for (var i = 0, l = this.length; i < l; i++) {
    // Check if we have nested arrays
    if (this[i] instanceof Array && array[i] instanceof Array) {
      // recurse into the nested arrays
      if (!this[i].equals(array[i]))
        return false;    
    }      
    else if (this[i] != array[i]) { 
      // Warning - two different object instances will never be equal: {x:20} != {x:20}
      return false;  
    }      
  }    
  return true;
}
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});


function MergeArray(arr1,arr2){
    var _arr = new Array();
    for(var i=0;i<arr1.length;i++){
       _arr.push(arr1[i]);
    }
    for(var i=0;i<arr2.length;i++){
        var flag = true;
        for(var j=0;j<arr1.length;j++){
            if(arr2[i]==arr1[j]){
                flag=false;
                break;
            }
        }
        if(flag){
            _arr.push(arr2[i]);
        }
    }
    return _arr;
}