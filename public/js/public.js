$(function() {
	$('nav#mmenu').mmenu({
		extensions	: [ 'effect-slide-menu', 'pageshadow' ],
		counters	: false,
		navbar 		: {
			title		: '菜单',
		},
		navbars		: [
			 {
				position	: 'top',
				content		: [
					'prev',
					'title',
					'close'
				]
			}, {
				position	: 'bottom',
				content		: [
					''
				]
			} 
		]
	});
	
	$(".home_nav li").hover(function(){
		$(this).prev().css("background-image","none")
	},function(){
		$(this).prev().css("background","url(images/nav_xian.png) no-repeat right center")
		
	})
	
	$(".home_nav .active").prev().css("background-image","none");
	$(".home_nav .active").mouseout(function(){
		$(this).prev().css("background-image","none")
	})
	
	
	if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
		new WOW().init();
	};	
	
	$(".top_qie span").hover(function(){
		$(this).addClass("active").siblings("span").removeClass("active");
		$(".news_nei .new_nei_c").eq($(this).index()).show().siblings(".new_nei_c").hide();
	})
	
	$(".zi_jop li").click(function(){
		$(this).toggleClass("active").siblings("li").removeClass("active");
	})
	

	$(".yuyan").hover(function(){
		$(this).find("i").css("display","block");

	},function(){
		$(this).find("i").css("display","none");
	
	})
	
	$(".qie_shi span").hover(function(){
		$(".hon_com .hon_ul").eq($(this).index()).show().siblings().hide();
	})

	var pic_h = $(".pro_com .pic").height();
	$(".pro_com .text").css("height",pic_h);
	$(".pro_com .text2").css("height",pic_h);
	
	$(".pro_qie span").hover(function(){
		$(this).addClass("active").siblings("span").removeClass("active");
		$(".pro_com .ul_pro").eq($(this).index()).show().siblings(".ul_pro").hide();
	})
	$(".links").hover(function(){
		$(".links_show").show();
	},function(){
		$(".links_show").hide();
	})
	$(".links_show").hover(function(){
		$(this).show() 
	},function(){
		$(this).hide()
	})
	$(".er_show").hover(function(){
		$(".er_img").show();
	},function(){
		$(".er_img").hide();
	})
	

	

	
	var left_img = $(".left_tu img").attr("src");
		$(".right_tu li").hover(function(){
			var img_src = $(this).find("img").attr("src");
			$(".left_tu img").attr("src",img_src);
			$(this).addClass("active").siblings("li").removeClass("active");
		},function(){
		
		})

	
});

	
/*表单验证*/
 function checknn(){

    na=form1.yourname.value;

    if( na.length <1 || na.length >12)

    {
        $("input#name").addClass("rred");
        $('input#name').attr('placeholder', '长度不正确').val("");

    }



}
 
    //验证电话

    function checkphobe(){

        psd1=form1.yourphone.value;

        if(psd1.length!=11){

            $("input#phone").addClass("rred");
            $('input#phone').attr('placeholder', '长度不正确').val("");

        }

    }


    //验证邮箱

    function checkemail(){

        apos=form1.youremail.value.indexOf("@");

        dotpos=form1.youremail.value.lastIndexOf(".");


        if (apos<1||dotpos-apos<2)

        {
            $("input#email").addClass("rred");
            $('input#email').attr('placeholder', '输入错误').val("");

        }


    }

    //验证地址

    function checkadd(){

        dizhi=form1.youradd.value;

        if(dizhi.length<1){

            $("input#add").addClass("rred");
            $('input#add').attr('placeholder', '不能为空').val("");

        }

    }
    
  function checkti(){

        biaoti=form1.yourti.value;

        if(biaoti.length<1){
            $("input#ti").addClass("rred");
            $('input#ti').attr('placeholder', '不能为空').val("");

        }

    }
  
 //验证内容

    function checkcont(){

        contant=form1.yourcont.value;

        if(contant.length<1){

            $("textarea#cont").addClass("rred");
            $('textarea#cont').attr('placeholder', '不能为空');

        }

    }

    //验证验证码

    function checkyan(){

        yanzhengma=form1.youryan.value;

        if(yanzhengma.length<1){

            $("input#yan").addClass("rred");
            $('input#yan').attr('placeholder', '不能为空');

        }

    }
    