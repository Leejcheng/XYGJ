$(function(){
     window.location.href="#";
     //banner满屏背景
     $(".full").fullBg();
     //轮播图
     jQuery(".prts_banner").slide({mainCell:".bd ul",effect:"left",autoPlay:true});
     // 滑动出现联系方式
     $(".xy_side .dm-slide").hover(function(){
         $(this).stop().animate({"width":"190px"},500)
     },function(){
         $(this).stop().animate({"width":"30px"},500)
     });
    //滚屏
    $('.wrap').fullpage({
        afterLoad: function (anchorLink, index) {
            $('.section').removeClass('current');

            /*****经销商动画******/
            $('.jxs_screen_2 .manage').css({
                top:'-30%',
                opacity:'0'
            })
            $('.jxs_screen_3 .manage').css({
                left:'-50%',
                opacity:'0'
            })
            $('.jxs_screen_4 .user_manage .top,.jxs_screen_4 .user_manage .cent,.jxs_screen_4 .user_manage .bott').css({
                top:'-50%',
                opacity:'0'
            })
            $('.jxs_screen_5 .manage').css({
                top:'-50%',
                opacity:'0'
            })
            $('.jxs_screen_6 .bott').css({
                bottom:'-50%',
                opacity:'0'
            })
            $('.jxs_screen_7 .pic_box').css({
                left:'-100%',
                opacity:'0'
            })
            $('.jxs_screen_7 p').css({
                right:'-100%',
                opacity:'0'
            })
            $('.jxs_screen_8 .top').css({
                top:'-100%',
                opacity:'0'
            })
            $('.jxs_screen_8 .bott').css({
                bottom:'-100%',
                opacity:'0'
            })
            /*****门店动画******/
            $('.str_screen_2 .pic_box').css({
                left:'-100%',
                opacity:'0'
            })
            $('.str_screen_3 .hq_system').css({
                left:'-100%',
                opacity:'0'
            })
            $('.str_screen_3 .str_system').css({
                right:'-100%',
                opacity:'0'
            })
            $('.str_screen_4 .shopicon01,.str_screen_4 .shopicon02,.str_screen_4 .shopicon03').css({
                bottom:'-100%',
                opacity:'0'
            })
            $('.str_screen_4 .shopicon04,.str_screen_4 .shopicon05').css({
                top:'-100%',
                opacity:'0'
            })
            $('.str_screen_5 .str_system').css({
                top:'-100%',
                opacity:'0'
            })
            $('.str_screen_6 .product').css({
                top:'-100%',
                opacity:'0'
            })
            /*****防窜货动画******/
            $('.qqd_screen_2 .pic_box').css({
                right:'-100%',
                opacity:'0'
            })
            $('.qqd_screen_2 p').css({
                left:'-100%',
                opacity:'0'
            })
            $('.qqd_screen_3 .fch_system_box .top').css({
                top:'-100%',
                opacity:'0'
            })
            $('.qqd_screen_3 .fch_system_box .cent').css({
                left:'-100%',
                opacity:'0'
            })
            $('.qqd_screen_3 .fch_system_box .bott').css({
                bottom:'-100%',
                opacity:'0'
            })
            $('.qqd_screen_3 .fch_system_box .rig').css({
                right:'-100%',
                opacity:'0'
            })
            $('.qqd_screen_4 .manage').css({
                top:'-100%',
                opacity:'0'
            })
            $('.qqd_screen_5 .manage').css({
                top:'-100%',
                opacity:'0'
            })
            /*****精准营销动画******/
            $('.yx_screen_2 .introduce').css({
                left:'-100%',
                opacity:'0'
            })
            $('.yx_screen_3 .introduce').css({
                bottom:'-100%',
                opacity:'0'
            })
            $('.yx_screen_4 .products .top').css({
                top:'-100%',
                opacity:'0'
            })
            $('.yx_screen_4 .products .bot').css({
                bottom:'-100%',
                opacity:'0'
            })
            $('.yx_screen_5 .procedure .top').css({
                left:'-100%',
                opacity:'0'
            })
            $('.yx_screen_5 .procedure .bott').css({
                right:'-100%',
                opacity:'0'
            })
            $('.yx_screen_6 .scene').css({
                left:'-100%',
                opacity:'0'
            })
            $('.yx_screen_6 .txt').css({
                right:'-100%',
                opacity:'0'
            })
            $('.yx_screen_7 .products').css({
                top:'-100%',
                opacity:'0'
            })
            /*****产品质量安全动画******/
            $('.qs_screen_2 .pic_box').css({
                right:'-100%',
                opacity:'0'
            });
            $('.qs_screen_2 .txt').css({
                left:'-100%',
                opacity:'0'
            });
            $('.qs_screen_3 .img_box').css({
                top:'-28%',
                opacity:'0',
            });
            $('.qs_screen_4 .top').css({
                top:'-100%',
                opacity:'0'
            });
            $('.qs_screen_4 .bot').css({
                bottom:'-100%',
                opacity:'0'
            });
            $('.qs_screen_5 img').css({
                left:'-60%',
                opacity:'0'
            });
            // 延时100毫秒执行
            setTimeout(function () {
                $('.section').eq(index - 1).addClass('current');
                /*****经销商动画******/
                $('.current .jxs_screen_2 .manage').animate({
                    top:'50%',
                    opacity:'1'
                },500);
                $('.current .jxs_screen_3 .manage').animate({
                    left:'50%',
                    opacity:'1'
                },500);
                $('.current .jxs_screen_4 .user_manage .top').animate({
                    top:'0',
                    opacity:'1'
                },500);
                $('.current .jxs_screen_4 .user_manage .cent').animate({
                    top:'232px',
                    opacity:'1'
                },500);
                $('.current .jxs_screen_4 .user_manage .bott').animate({
                    top:'375px',
                    opacity:'1'
                },500);
                $('.current .jxs_screen_5 .manage').animate({
                    top:'34%',
                    opacity:'1'
                },500);
                $('.current .jxs_screen_6 .bott').animate({
                    bottom:'0',
                    opacity:'1'
                },500);
                $('.current .jxs_screen_7 .pic_box').animate({
                    left:'0',
                    opacity:'1'
                 },500);
                $('.current .jxs_screen_7 p').animate({
                    right:'0',
                    opacity:'1'
                },500);
                $('.current .jxs_screen_8 .top').animate({
                    top:'7%',
                    opacity:'1'
                },500);
                $('.current .jxs_screen_8 .bott').animate({
                    bottom:'20%',
                    opacity:'1'
                },500);
                /*****门店动画******/
                $('.current .str_screen_2 .pic_box').animate({
                    left:'0',
                    opacity:'1'
                },500);
                $('.current .str_screen_3 .hq_system').animate({
                    left:'4%',
                    opacity:'1'
                },500);
                $('.current .str_screen_3 .str_system').animate({
                    right:'4%',
                    opacity:'1'
                },500);
                $('.current .str_screen_4 .shopicon01,.current .str_screen_4 .shopicon02,.current .str_screen_4 .shopicon03').animate({
                    bottom:'30%',
                    opacity:'1'
                },500);
                $('.current .str_screen_4 .shopicon04,.current .str_screen_4 .shopicon05').animate({
                    top:'58%',
                    opacity:'1'
                },500);
                $('.current .str_screen_5 .str_system').animate({
                    top:'39%',
                    opacity:'1'
                },500);
                $('.current .str_screen_6 .product').animate({
                    top:'30%',
                    opacity:'1'
                },500);
                /*****防窜货动画******/
                $('.current .qqd_screen_2 .pic_box').animate({
                    right:'0',
                    opacity:'1'
                },500);
                $('.current .qqd_screen_2 p').animate({
                    left:'0',
                    opacity:'1'
                },500);
                $('.current .qqd_screen_3 .fch_system_box .top').animate({
                    top:'0',
                    opacity:'1'
                },500);
                $('.current .qqd_screen_3 .fch_system_box .cent').animate({
                    left:'0',
                    opacity:'1'
                },500);
                $('.current .qqd_screen_3 .fch_system_box .bott').animate({
                    bottom:'53px',
                    opacity:'1'
                },500);
                $('.current .qqd_screen_3 .fch_system_box .rig').animate({
                    right:'0',
                    opacity:'1'
                },500);
                $('.current .qqd_screen_4 .manage').animate({
                    top:'34%',
                    opacity:'1'
                },500);
                $('.current .qqd_screen_5 .manage').animate({
                    top:'50%',
                    opacity:'1'
                },500);
                /*****精准营销动画******/
                $('.current .yx_screen_2 .introduce').animate({
                    left:'50%',
                    opacity:'1'
                },500);
                $('.current .yx_screen_3 .introduce').animate({
                    bottom:'4%',
                    opacity:'1'
                },500);
                $('.current .yx_screen_4 .products .top').animate({
                    top:'0',
                    opacity:'1'
                },500);
                $('.current .yx_screen_4 .products .bot').animate({
                    bottom:'0',
                    opacity:'1'
                },500);
                $('.current .yx_screen_5 .procedure .top').animate({
                    left:'50%',
                    opacity:'1'
                },500);
                $('.current .yx_screen_5 .procedure .bott').animate({
                    right:'50%',
                    opacity:'1'
                },500);
                $('.current .yx_screen_6 .scene').animate({
                    left:'6%',
                    opacity:'1'
                },500);
                $('.current .yx_screen_6 .txt').animate({
                    right:'6%',
                    opacity:'1'
                },500);
                $('.current .yx_screen_7 .products').animate({
                    top:'32%',
                    opacity:'1'
                },500);
                /*****产品质量安全动画******/
                $('.current .qs_screen_2 .pic_box').animate({
                    right:'0',
                    opacity:'1'
                },500);
                $('.current .qs_screen_2 .txt').animate({
                    left:'0',
                    opacity:'1'
                },500);
                $('.current .qs_screen_3 .img_box').animate({
                    top:'50%',
                    opacity:'1'
                },500);
                $('.current .qs_screen_4 .top').animate({
                    top:'0',
                    opacity:'1'
                },500);
                $('.current .qs_screen_4 .bot').animate({
                    bottom:'0',
                    opacity:'1'
                },500);
                $('.current .qs_screen_5 img').animate({
                    left:'50%',
                    opacity:'1'
                },500);
            }, 100);
        },
        'navigation': true
    });
})