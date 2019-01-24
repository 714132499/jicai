/**
 * Created by Administrator on 2015/9/6.
 */


    //主要模块
;(function(){
    (function(){

        var types = {

        };

        //初始化；
        getAndRenderPics("c");
        getAndRenderChoice("c");
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
        //console.log($courseUl);
        $courseUl.html("");

        myAjax.get("json/" + project + ".json", function (err, data) {
            var dataJSON = JSON.parse(data);
//                console.log(dataJSON)
            var dictionaryArray = dataJSON.list;
               // console.log(dictionaryArray)
            var pageArray = [];

            var liCount = dictionaryArray.length;//获取获取记录条数
          // console.log(liCount);
            var PageSize  = 12;//设置每页，你准备显示几条
            var PageCount  = Math.ceil(liCount/PageSize);//计算出总共页数
           //console.log(PageCount);
            var currentPage = 1;//设置当前页
            var i=0;
            for (i=0;i<1;i++) {
                var thisDictionary = dictionaryArray[i];
                var compiled = _.template(templateString);
                compiedString = compiled(thisDictionary);
                var $box = $(compiedString);

                $courseUl.append($box);
            }
            for(i=1; i<=PageCount; i++){
                $('<a pageNum="'+i+'" >第'+i+'页</a>').appendTo('#pageIt').addClass("pageIt_a");//显示分页按钮
                $('#pageIt a:first').addClass("pageIt_c");

               // $("#pageIt ul li:first-child").addClass("pageIt_curent");
            }
            var $li =  $('.js-course-lists ul li');
            function showPage(whichPage){
                //console.log(whichPage);
                //alert(whichPage);
                $('.js-course-lists ul').html('');
                for (i = (whichPage-1)*12; i < 12*whichPage ; i++) {
                    var thisDictionary = dictionaryArray[i];
                    //console.log(thisDictionary);
                    var compiled = _.template(templateString);
                    compiedString = compiled(thisDictionary);
                    var $box = $(compiedString);

                    $courseUl.append($box);
                }
            }
            var a;
            $('a').click(function(){
                var i=$(this).index();
                a = $(this).attr('pagenum');
                //alert(a);
                $('#pageIt a').removeClass("pageIt_c");
                //var b=a-1;
                //var sb=$(this).index();
                //alert(sb);
                //var bins = $("#pageIt a:eq(b)");
                $(this).addClass("pageIt_c");
               // console.log(this);
                showPage(a);

            });

        })
    }
    //"分类"中主要内容
    function getAndRenderChoice(project,clickContent){
        var $choices = $(".depart .choice");
        $choices.html("");
        myAjax.get("json/" + project + ".json", function (err, data) {
            var dataJSON = JSON.parse(data);
                //console.log(dataJSON)
            var dictionaryArray = dataJSON.names;
                //console.log(dictionaryArray);

            //“分类”这一层内容的设置
            for (var i = 0; i < dictionaryArray.length; i++) {
                var thisDictionary = dictionaryArray[i];
                var $span = $("<span>"+thisDictionary.name+"</span>");
                console.log($span);
                $span.attr("id",thisDictionary.id);
                $choices.append($span);
               // console.log($(".depart .choice span").length)
            }

            //接受到外部传来的clickContent，去改变“方向”这一层的状态
            if(clickContent){
//               console.log(clickContent)
                $(".depart .choice span").each(function(index,element){

                    if($(this).html() == clickContent){
//                        console.log($(this).html)
                        $(this).addClass("current").siblings().removeClass("current");
                    }
                })
            }else{
                $(".depart .choice span:first").addClass("current");
            }

        })

    }





})();

