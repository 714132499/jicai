/**
 * Created by Administrator on 2015/9/6.
 */


//主要模块
;(function(){
    (function(){

        var types = {

        };
        //初始化；
        getAndRenderPics("all");
        //全局
        var $classify = $(".level .choice span");

        $classify.on("click",function(){
            $("#pageIt").html("");
            getAndRenderPics($(this).attr("name"));//第一步加载图片
            $(this).addClass("current").siblings().removeClass("current");

        });
        //判断在不在组里
        function isInArray(str,Array){
            //console.log(str,Array)
            var judge
            for(var i =0;i<Array.length;i++){
                if(Array[i] == str){
                    judge = true;
                    break;
                }
                else{
                    judge = false;
                }
            };

            return judge
        }
    })();
//        getAndRender("all");
    //中间主要内容
    function getAndRenderPics(project) {
//        console.log(111)
        var templateString = $("#mainlist-template").html();
        var $courseUl = $(".js-course-lists ul");
        var $coursesUl = $(".js-course-list ul");
        //console.log($courseUl);
        $courseUl.html("");
        $coursesUl.html("");
        myAjax.get("json/" + project + ".json", function (err, data) {
            var dataJSON = JSON.parse(data);
                console.log(dataJSON);
            var dictionaryArray = dataJSON.list;
                //console.log(dictionaryArray);
                var thisDictionary = dictionaryArray[0];
                var compiled = _.template(templateString);
                compiedString = compiled(thisDictionary);
                var $box = $(compiedString);
                $courseUl.append($box);
        })
    }
})();
/**********************分类点击按钮***************************/
$(".choice  span").click(function(){
    // 获取点击的是第几个按钮
    var i = $(this).index();
    // alert(i);
    // 把原来选中的取消选中状态
    $(".current").removeClass("current");
    // 切换点击的按钮的样式为选中状态
    $(this).addClass("current");
    //选中第i个detail
    $(".lists").eq(i).show();
    // 隐藏其他的detail
    $(".lists").eq(i).siblings(".lists").hide();

});
