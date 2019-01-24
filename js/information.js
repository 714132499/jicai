/**********************分类点击按钮***************************/
$(".select  li").click(function(){
    // 获取点击的是第几个按钮
     var i = $(this).index();
    // alert(i);
    // 把原来选中的取消选中状态
    $(".s_act").removeClass("s_act");
    // 切换点击的按钮的样式为选中状态
    $(this).addClass("s_act");
    //选中第i个detail
    $(".detail").eq(i).show();
    // 隐藏其他的detail
    $(".detail").eq(i).siblings(".detail").hide();

});