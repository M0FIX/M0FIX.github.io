
  window.translation.langs.en.watermark_remove_over_size="The image you uploaded is over 10M. It is recommended that you use our Free Online Image Compressor. Click to <a class='jump-link' href='https://www.anyrec.io/free-online-image-compressor/'>learn more</a>";
  window.translation.langs.jp.watermark_remove_over_size="ロードする画像のサイズは最大10Mです。今の画像は10Mを超えますので、弊社のオンライン画像圧縮ツールを使って画像のサイズを小さくにするのをおススメします。<a class='jump-link' href='https://www.anyrec.io/free-online-image-compressor/'>すぐ体験</a>";
  window.translation.langs.zh_CN.watermark_remove_over_size="您所上传的图片大小超过10M，推荐您使用我们的图片在线压缩产品，点击<a class='jump-link' href='https://www.anyrec.io/free-online-image-compressor/'>了解更多</a>";
  window.translation.langs.en.image_enhancer_oversize="The image you uploaded is over 10M. It is recommended that you use our Free Online Image Compressor. Click to <a class='jump-link' href='https://www.anyrec.io/free-online-image-compressor/'>learn more</a>";
  window.translation.langs.jp.image_enhancer_oversize="您ロードする画像のサイズは最大10Mです。今の画像は10Mを超えますので、弊社のオンライン画像圧縮ツールを使って画像のサイズを小さくにするのをおススメします。<a class='jump-link' href='https://www.anyrec.io/free-online-image-compressor/'>すぐ体験</a>";
  window.translation.langs.zh_CN.image_enhancer_oversize="您所上传的图片大小超过10M，推荐您使用我们的图片在线压缩产品，点击<a class='jump-link' href='https://www.anyrec.io/free-online-image-compressor/'>了解更多</a>";
$("#aside_feedback").click(function(){$("#feedback").toggle()})
$(".free_online_video_converter_2").click(function(){
$("#upload").trigger("click");
$(window).scrollTop(0);
});
$(window).scroll(function(){
  if($(window).scrollTop()>$('.bigger').offset().top-300){
    $('.bigger .right img').addClass('active');
  }else{
    $('.bigger .right img').removeClass('active');
  }
});
$('.faq_box li span').click(function(){
$(this).parent().toggleClass('active').siblings().removeClass('active');
});
$('.universally_box ul li').click(function(){
$(this).addClass('active').siblings().removeClass('active');
$('.universally_box div img').eq($(this).index()).addClass('active').siblings().removeClass('active');
});
$('.feed-back-link').click(function() {
    $('.feedback-mask').css({
      'display': 'block',
      'z-index': 5
    })
    $('.feedback').show()
});
$('.feedback_close').click(function() {
    $('.feedback-mask').css({
      'display': 'none'
    })
    $('.feedback').hide()
});
  function checkForm() {
    var re = /^([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    var mail = $.trim($("#mail").val());
    if (document.getElementById('mail').value == "") {
        alert('Email is empty!');
        document.getElementById('mail').focus();
        return false;
    }
    if (!re.test(mail)) {
        alert("Please enter a valid email!");
        $("#mail").focus();
        return false;
    }
    return true;
  };
  function send_submit() {
    var product_id = '70005'
    var os = get_os()
    if (os == 'WIN32' || os == 'WIN64') {
      product_id = '70005'
    } else if (os == 'mac') {
      product_id = '70005'
    }
    $_POST = {'source':'2',
    'brand_id':'43','f_source' : '3', 'product_id' : product_id, "email":"", "content":"","os" :os};
    $_POST["email"] = $("#mail").val();
    $_POST["content"] = $("#form_contents").val();
    if (checkForm() == true) {
        $(".info_form").fadeIn("slow").delay(4000).fadeOut("slow");
        $.ajax({
          url: "https://support.anyrec.io/api/feedback/v1/index.php",
            type: "post",
            data: $_POST,
            success: function(res) {
            },
            error: function(e) {
            },
            complete: function(e) {
              $("#feedback").css({"display":"none"});
              $('.feedback-mask').css({
                'display': 'none'
              })
              $("#mail").val('')
              $("#form_contents").val('')
            }
        });
      
    }
  };

  function get_os(){
    var agent = navigator.userAgent.toLowerCase();
    var isMac = /macintosh|mac os x/i.test(navigator.userAgent);
    if (agent.indexOf("win32") >= 0 || agent.indexOf("wow32") >= 0) {
      return 'WIN32'
    }
    if (agent.indexOf("win64") >= 0 || agent.indexOf("wow64") >= 0) {
      return 'WIN64'
    }
    if(isMac){
      return 'MAC'
    }
  };
  //拖拽图片
  (function(){
    if(!device_confirm()){
      $(".printing_box ul li i").on("touchstart",function(ev){
          var ind=$(this).parent().index();
          var that=$(".printing_box");
          var a=ev.originalEvent.changedTouches[0].pageX-$(".printing_box li").eq(ind).children("i").position().left
          $(document).on("touchmove",function(ev){
            var x=ev.originalEvent.changedTouches[0].pageX-that.position().left-a;
            if(x<=-50){
              x=-50;
            };
            if(x>=$(".printing_box li").width()-$(".printing_box li").eq(ind).children("i").width()+40){
              x=$(".printing_box li").width()-$(".printing_box li").eq(ind).children("i").width()+40;
            };
            $(".printing_box li").eq(ind).children("div").css("width",x+$(".printing_box li").eq(ind).children("i").width()/2);
            $(".printing_box li").eq(ind).children("i").css('left',x+20);
          });
        $(document).on("touchend",function(){
          $(document).off('touchmove');
        });
      });
    }else{
      $(".printing_box ul li i").mousedown(function(ev){
          var ind=$(this).parent().index();
          var that=$(".printing_box");
          var a=ev.pageX-$(".printing_box li").eq(ind).children("i").position().left;
          $(document).mousemove(function(ev){
            var x=ev.pageX-that.position().left-a;
            if(x<=-20){
              x=-20;
            };
            if(x>=$(".printing_box li").width()-$(".printing_box li").eq(ind).children("i").width()+20){
              x=$(".printing_box li").width()-$(".printing_box li").eq(ind).children("i").width()+20;
            };
            $(".printing_box li").eq(ind).children("div").css("width",x+$(".printing_box li").eq(ind).children("i").width()/2);
            $(".printing_box li").eq(ind).children("i").css('left',x+20);
          });
        $(document).mouseup(function(){
          $(document).off('mousemove');
        });
      });
    }
  })();
  //轮播
  (function(){
    var i=0;
    var time=null;
    function run(){
      time=setInterval(function(){
        i++;
        if(i>=$(".printing_box ul li").length-2){
          i=0;
        }
        $('.printing_box ul').animate({
          left:-$('.printing_box ul li').outerWidth(true)*i
        });
      },10000)
    }
    run();
    $('.printing .btn_box i.left').click(function(){
      i--
      if(i<0){
        i=$(".printing_box ul li").length-3;
      }
      $('.printing_box ul').animate({
        left:-$('.printing_box ul li').outerWidth(true)*i
      });
      clearInterval(time);
      run();
    });
    $('.printing .btn_box i.right').click(function(){
      i++
      if(i>=$(".printing_box ul li").length-2){
        i=0;
      }
      $('.printing_box ul').animate({
        left:-$('.printing_box ul li').outerWidth(true)*i
      });
      clearInterval(time);
      run();
    });
  })();
  var ps=$(".high").width(),gs=$(".quality_change").offset().left;$(".low img").width(ps);
  ($(".quality_change").mouseenter(function(){$(".seperate").addClass("active"),$(".quality_change").mousemove(function(e){var t=(e=window.event||e).pageX||e.clientX;$(".low").width(t-gs+2),$(".seperate").css("left",t-gs)})}),$(".quality_change").mouseleave(function(){$(".seperate").removeClass("active"),$(".seperate").css("left","50%"),$(".low").width("50%")}));($(".quality_change").on("touchmove",function(e){var t=(e=window.event||e).changedTouches[0].clientX;$(".low").width(t-gs+2),$(".seperate").css("left",t-gs)}),$(".quality_change").on("touchend",function(e){$(".seperate").removeClass("active"),$(".seperate").css("left","50%"),$(".low").width("50%")}));