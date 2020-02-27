
    jQuery(function() {

    	uploader = new Array();//创建 uploader数组
    	// 优化retina, 在retina下这个值是2
        var ratio = window.devicePixelRatio || 1,
        // 缩略图大小
        thumbnailWidth = 100 * ratio,
        thumbnailHeight = 100 * ratio,
        supportTransition = (function(){
            var s = document.createElement('p').style,
            r = 'transition' in s ||
                  'WebkitTransition' in s ||
                  'MozTransition' in s ||
                  'msTransition' in s ||
                  'OTransition' in s;
	        s = null;
	        return r;
        })();
     	// 所有文件的进度信息，key为file id
        var percentages = {};
        var state = 'pedding';
    	
    	//可行性判断
    	if ( !WebUploader.Uploader.support() ) {
            alert( 'Web Uploader 不支持您的浏览器！如果你使用的是IE浏览器，请尝试升级 flash 播放器');
            throw new Error( 'WebUploader does not support the browser you are using.' );
        }
    	
    	//循环页面中每个上传域
    	$('.uploder-container').each(function(index){
    		
    		// 添加的文件数量
            var fileCount = 0;
            // 添加的文件总大小
            var fileSize = 0;
    		
    		var filePicker=$(this).find('.filePicker');//上传按钮实例
    		var queueList=$(this).find('.queueList');//拖拽容器实例
    		var jxfilePicker=$(this).find('.jxfilePicker');//继续添加按钮实例
    		var placeholder=$(this).find('.placeholder');//按钮与虚线框实例
    		var statusBar=$(this).find('.statusBar');//再次添加按钮容器实例
    		var info =statusBar.find('.info');//提示信息容器实例
    		
    		// 图片容器       	
    		var queue = $('<ul class="filelist"></ul>').appendTo( queueList);
    		
    		
    		//初始化上传实例
            uploader[index] = WebUploader.create({
                pick: {
                    id: filePicker,
                    label: '上传'
                },
                dnd: queueList,
               
                //这里可以根据 index 或者其他，使用变量形式
                accept: {
                    title: 'Images',
                    extensions: 'gif,jpg,jpeg,bmp,png,doc',
                    mimeTypes: 'image/*'
                },

                // swf文件路径
                swf: './Uploader.swf',

                disableGlobalDnd: true,//禁用浏览器的拖拽功能，否则图片会被浏览器打开

                chunked: false,//是否分片处理大文件的上传

                chunkSize: 512 * 1024,

                headers:{'Authorization':`Bearer ${window.localStorage.getItem('kesonToken')}`},
                            
                server: '/api/uploadfiles',//上传地址
                
                fileNumLimit: 9,
                
                fileSizeLimit: 200 * 1024 * 1024,    // 200 M
                
                fileSingleSizeLimit: 50 * 1024 * 1024,    // 50 M
                
                auto :true,

                accept: {
                    title: 'Images',
                    extensions: 'gif,jpg,jpeg,bmp,png',
                    mimeTypes: 'image/*'
                },
                compress:{
                    width: 1680,            
                    // 图片质量，只有type为`image/jpeg`的时候才有效。
                    quality: 90,
                
                    // 是否允许放大，如果想要生成小图的时候不失真，此选项应该设置为false.
                    allowMagnify: false,
                
                    // 是否允许裁剪。
                    crop: false,
                
                    // 是否保留头部meta信息。
                    preserveHeaders: true,
                
                    // 如果发现压缩后文件大小比原来还大，则使用原来图片
                    // 此属性可能会影响图片自动纠正功能
                    noCompressIfLarger: false,
                
                    // 单位字节，如果图片大小小于此值，不会采用压缩。
                    compressSize: 300
                },
                // 禁掉全局的拖拽功能。这样不会出现图片拖进页面的时候，把图片打开。
                disableGlobalDnd: true,
                
                formData: {                
                	
                }
            });
    		

            // 添加“添加文件”的按钮
            uploader[index].addButton({
                id: jxfilePicker,
                label: '继续添加'
            });
            
            //当文件加入队列时触发	uploader[0].upload();
            uploader[index].onFileQueued = function( file ) {
            	//alert(111);
    			fileCount++;
                fileSize += file.size;

                if ( fileCount === 1 ) {
                	placeholder.addClass( 'element-invisible' );
                    statusBar.show();
                }
                
                addFile( file,uploader[index],queue);
                setState( 'ready' ,uploader[index],placeholder,queue,statusBar,jxfilePicker);
                updateStatus('ready',info,fileCount,fileSize);
            };
            
    		//当文件被移除队列后触发。
            uploader[index].onFileDequeued = function( file ) {
            	fileCount--;
                fileSize -= file.size;

                if ( !fileCount ) {
                    setState( 'pedding',uploader[index],placeholder,queue,statusBar,jxfilePicker);
                    updateStatus('pedding',info,fileCount,fileSize);
                }              
                removeFile( file );
              
	
            };
            
            uploader[index].on('uploadSuccess',function(file,reponse){
                console.log(file)
                file.name = reponse.url;
                //alert("上传成功");
                if(reponse.code == -1)
                {
                    layer.msg("上传失败，服务器有延迟，请稍后", {icon: 5, time: 1000,offset: 't'});
                }else{
                    if(index == 0){
                        bannerArr.push({Index:bannerIndex++,url:reponse.url,title:''})
                    }else if(index == 1){
                        wapbannerArr.push(reponse.url)
                    }
                }
            });
            

            //可以在这里附加额外上传数据
            
            uploader[index].on('uploadBeforeSend',function(object,data,header) {
            	/*var tt=$("input[name='id']").val();
            	data=$.extend(data,{
            		modelid:tt
            		});*/
                //alert("上传前触发");
            });
            // if(index == 0){
            //     setTimeout(function() {
            //         if(bannerArr.length>0){
            //             $('#pcupload').find('.placeholder').addClass('element-invisible')
            //             $('#pcupload').find('.queueList').addClass('filled')
            //             $('#pcupload').find('.statusBar').show().find('.webuploader-pick').siblings('div').css({
            //                 'left':'10px',
            //                 'width':'94px',
            //                 'height':'42px'
            //             })
            //             $.each(bannerArr, function(ins,item){
            //                 //imgstr += '<li id="WU_FILE_'+index+'"><p class="title">opus_banner.png</p><p class="imgWrap"><img src="<$ base_url $>'+item+'"></p><p class="progress"><span></span></p><div class="file-panel" style="height: 0px;"><span class="cancel">删除</span><span class="rotateRight">向右旋转</span><span class="rotateLeft">向左旋转</span></div></li>'
            //                 addFile({id:ins,name:item,ret:item,flog:true,uploaded:true,parent:index},uploader[index],queue);
            //             });
            //         }
                   
            //     }, 1000);
            // }else{
            //         setTimeout(function() {
            //             if(wapbannerArr.length>0){
            //                 $('#wapupload').find('.placeholder').addClass('element-invisible')
            //                 $('#wapupload').find('.queueList').addClass('filled')
            //                 $('#wapupload').find('.statusBar').show().find('.webuploader-pick').siblings('div').css({
            //                     'left':'10px',
            //                     'width':'94px',
            //                     'height':'42px'
            //                 })
            //                 $.each(wapbannerArr, function(ins,item){
            //                     //imgstr += '<li id="WU_FILE_'+index+'"><p class="title">opus_banner.png</p><p class="imgWrap"><img src="<$ base_url $>'+item+'"></p><p class="progress"><span></span></p><div class="file-panel" style="height: 0px;"><span class="cancel">删除</span><span class="rotateRight">向右旋转</span><span class="rotateLeft">向左旋转</span></div></li>'
            //                     addFile( {id:ins,name:item,ret:item,flog:true,uploaded:true,parent:index},uploader[index],queue);
            //                 });
            //             }
                        
            //         }, 1000);
                
            // }

            
    		
    	});
    	
    	
    	
        // 当有文件添加进来时执行，负责view的创建
        function addFile( file,now_uploader,queue) {
            var $li = $( '<li id="' + file.id + '">' +
                    '<p class="title">' + file.name + '</p>' +
                    '<p class="imgWrap"></p>'+
                    '<p class="progress"><span></span></p>' +
                    '</li>' ),

                $btns = $('<div class="file-panel">' +
                    '<span class="cancel" '+(file.uploaded?"uploaded="+file.id+"":'')+'>删除</span>' +
                    '</div>').appendTo( $li ),
                $prgress = $li.find('p.progress span'),
                $wrap = $li.find( 'p.imgWrap' ),
                $info = $('<p class="error"></p>');
                
            $wrap.text( '预览中' );
            if(file.flog == true){
            	var img = $('<img src="'+file.ret+'">');
                $wrap.empty().append( img );
            }else{
            	now_uploader.makeThumb( file, function( error, src ) {
                    if ( error ) {
                        $wrap.text( '不能预览' );
                        return;
                    }

                    var img = $('<img src="'+src+'">');
                    $wrap.empty().append( img );
                }, thumbnailWidth, thumbnailHeight );
            }

            percentages[ file.id ] = [ file.size, 0 ];
            file.rotation = 0;
           
           /*
            file.on('statuschange', function( cur, prev ) {
                if ( prev === 'progress' ) {
                    $prgress.hide().width(0);
                } else if ( prev === 'queued' ) {
                    $li.off( 'mouseenter mouseleave' );
                    $btns.remove();
                }

                // 成功
                if ( cur === 'error' || cur === 'invalid' ) {
                    console.log( file.statusText );
                    showError( file.statusText );
                    percentages[ file.id ][ 1 ] = 1;
                } else if ( cur === 'interrupt' ) {
                    showError( 'interrupt' );
                } else if ( cur === 'queued' ) {
                    percentages[ file.id ][ 1 ] = 0;
                } else if ( cur === 'progress' ) {
                    $info.remove();
                    $prgress.css('display', 'block');
                } else if ( cur === 'complete' ) {
                    $li.append( '<span class="success"></span>' );
                }

                $li.removeClass( 'state-' + prev ).addClass( 'state-' + cur );
            });
            */

            
            $li.on( 'mouseenter', function() {
                $btns.stop().animate({height: 30});
            });

            $li.on( 'mouseleave', function() {
                $btns.stop().animate({height: 0});
            });
            
            $btns.on( 'click', 'span', function() {
                var index = $(this).index(),
                    deg;

                switch ( index ) {
                    case 0:
                        if($(this).attr('uploaded')){
                            console.log(bannerArr[$(this).attr('uploaded')])
                            delEveryImg(bannerArr[$(this).attr('uploaded')],function () {
                                if(file.parent == 0){
                                    bannerArr.splice($(this).attr('uploaded'),1)
                                }else{
                                    wapbannerArr.splice($(this).attr('uploaded'),1)
                                }
                                
                                $li.remove()
                            })
                           
                        }else{
                            now_uploader.removeFile( file );
                        }
                    	
                        return;

                    case 1:
                        file.rotation += 90;
                        break;

                    case 2:
                        file.rotation -= 90;
                        break;
                }

                if ( supportTransition ) {
                    deg = 'rotate(' + file.rotation + 'deg)';
                    $wrap.css({
                        '-webkit-transform': deg,
                        '-mos-transform': deg,
                        '-o-transform': deg,
                        'transform': deg
                    });
                } else {
                    $wrap.css( 'filter', 'progid:DXImageTransform.Microsoft.BasicImage(rotation='+ (~~((file.rotation/90)%4 + 4)%4) +')');
                    
                }


            });

            $li.appendTo(queue);
        }

        
    	
    	
        // 负责view的销毁
        function removeFile( file ) {
            var $li = $('#'+file.id);
            delete percentages[ file.id ];
           
            $li.off().find('.file-panel').off().end().remove();
        } 
    	
        
        function setState( val, now_uploader,placeHolder,queue,statusBar,jxfilePicker) {
            
            switch ( val ) {
                case 'pedding':
                    placeHolder.removeClass( 'element-invisible' );
                    queue.parent().removeClass('filled');
                    queue.hide();
                    statusBar.addClass( 'element-invisible' );
                    now_uploader.refresh();
                    break;

                case 'ready':
                    placeHolder.addClass( 'element-invisible' );
                    jxfilePicker.removeClass( 'element-invisible');
                    queue.parent().addClass('filled');
                    queue.show();
                    statusBar.removeClass('element-invisible');
                    now_uploader.refresh();
                    break;              
            }

            
        }
        
        function updateStatus(val,info,f_count,f_size) {
            var text = '';

            if ( val === 'ready' ) {
                text = '选中' + f_count + '张图片，共' +
                        WebUploader.formatSize( f_size ) + '。';
            } 

            info.html( text );
        } 
        
        
    	
   
    });
