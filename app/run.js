

angular.module('myApp').run(['$rootScope', "DTDefaultOptions", function ($rootScope, DTDefaultOptions) {

    DTDefaultOptions.setLanguageSource("components/Chinese.json");
    DTDefaultOptions.setLoadingTemplate("正在加载中...");
    DTDefaultOptions.setDisplayLength(10);
    DTDefaultOptions.setOption("paginationType", "full_numbers");
    DTDefaultOptions.setOption('autoWidth', false);

    moment.locale('zh-cn');
}])


