angular.module('myApp').controller('gundong', ['$scope', function ($scope) {
    //获得当前<ul>
    var uList = angular.element(".scroll-box ul");
    var timer = null;
    //触摸清空定时器
    uList.hover(function () {
            clearInterval(timer);
        },
        function () { //离开启动定时器
            timer = setInterval(function () {
                    scrollList(uList);
                },
                1500);
        }).trigger("mouseleave"); //自动触发触摸事件
    //滚动动画
    function scrollList(obj) {
        //获得当前<li>的高度
        var scrollHeight = angular.element("ul li:first").height();
        //滚动出一个<li>的高度
        uList.stop().animate({
                marginTop: -scrollHeight
            },
            600,
            function () {
                //动画结束后，将当前<ul>marginTop置为初始值0状态，再将第一个<li>拼接到末尾。
                uList.css({
                    marginTop: 0
                }).find("li:first").appendTo(uList);
            });
    }


    // 数据可以根据自己使用情况更换
    $scope.datasetData = [
        {option : "这个是第一条数据"},
        {option : "这个是第二条数据"},
        {option : "这个是第三条数据"},
        {option : "这个是第四条数据"},
        {option : "这个是第五条数据"},
        {option : "这个是第六条数据"}
    ]

    function autoScroll(){
        var speed = 50;
        var eleWrap = angular.element("#evtAwardListWrap"),
            ele1 = angular.element("#evtAwardList1");
        if(ele1.html() !== "") {
            var html2 = "<ul>" + ele1.html() + "</ul>";
            eleWrap.find("ul").eq(0).siblings().remove();
            eleWrap.append(html2);
        }
        var sTop = 0;
        var scrollFun = function() {
            if(eleWrap.scrollTop() < angular.element("#evtAwardList1").height()) {
                sTop ++;
                eleWrap.scrollTop(sTop);
            } else {
                eleWrap.scrollTop(0);
                sTop = 0;
            }
        }
        var t=setInterval(scrollFun,speed);
        eleWrap.hover(
            function() {
                clearInterval(t);
            }, function() {
                t = setInterval(scrollFun,speed);
            }
        );
    }
    $(function(){
        autoScroll();
    });

}])