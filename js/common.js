/*******************************导航条*************************************************/
$("ul.nav li").click(function(){
    // 获取点击的是第几个按钮
    // var i = $(this).index();
    // alert(i);
    // 把原来选中的取消选中状态
    $(".tabs-front").removeClass("tabs-front").addClass("tabs-back");
    // 切换点击的按钮的样式为选中状态
    $(this).removeClass("tabs-back").addClass("tabs-front");
});