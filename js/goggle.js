/************************鼠标移入移除事件************************************/
$("div.ctn_list ul li").mouseover(function(event) {
    //console.log(1);
    var i = $(this).index();
    if (i == 0) {
        $(event.target).attr("src", "images/goggle/asq.png");
    } else if (i == 1) {
        $(event.target).attr("src", "images/goggle/asd.png");
    } else if (i == 2) {
        $(event.target).attr("src", "images/goggle/sds.png");
    } else if (i == 3) {
        $(event.target).attr("src", "images/goggle/qlc.png");
    } else if (i == 4) {
        $(event.target).attr("src", "images/goggle/alt.png");
    } else if(i==5){
        $(event.target).attr("src", "images/goggle/ps.png");
    }else if(i==6){
        $(event.target).attr("src", "images/goggle/pw.png");
    }else{
        $(event.target).attr("src", "images/goggle/qxc.png");
    }
});
$("div.ctn_list ul li").mouseout(function(event){
    var i = $(this).index();
    if(i==0){
        $(event.target).attr("src","images/goggle/sq.png");
    }else if(i==1){
        $(event.target).attr("src","images/goggle/3D.png");
    }else if(i==2){
        $(event.target).attr("src","images/goggle/3Dtry.png");
    }else if(i==3){
        $(event.target).attr("src","images/goggle/seven.png");
    }else if(i==4){
        $(event.target).attr("src","images/goggle/tou.png");
    }else if(i==5){
        $(event.target).attr("src", "images/goggle/san.png");
    }else if(i==6){
        $(event.target).attr("src","images/goggle/wu.png");
    }else{
        $(event.target).attr("src", "images/goggle/star.png");
    }
});