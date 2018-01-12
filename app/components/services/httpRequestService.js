"use strict";
angular.module('myApp').factory("httpRequestService", ["$http", "$q", "$log", function ($http, $q, $log) {
    var requestFactory = {};

    var httpGet = function (url) {
        // defer对象用来发送消息
        var deferred = $q.defer();
        $http.get(url).success(function (response) {
            //向promise对象异步执行体发送消息告诉他我已经成功完成任务，value即为发送的消息。
            deferred.resolve(response.result);
        }).error(function (error) {
            // 向promise对象异步执行体发送消息告诉他我已经不可能完成这个任务了，value即为发送的消息。
            deferred.reject(error);
        });
        // promise即与这个defer对象的承诺对象
        return deferred.promise;
    };

    var httpPost = function (url, data, callback) {
        $http({
            method: "POST",
            url: url,
            data: data
        }).success(function () {
            callback();
        }).error(function (error) {
            $log.debug(error);
        });
    };
    var httpPut = function (url, data, callback) {
        $http({
            method: "PUT",
            url: url,
            data: data
        }).success(function (res) {
            callback();
        }).error(function (error) {
            $log.debug(error);
        });
    };
    var httpDelete = function (url, callback) {
        $http({
            method: "DELETE",
            url: url,
            headers: {'Content-Type': 'application/json'}
        }).success(function () {
            callback();
        }).error(function (error) {
            $log.debug(error);
        });
    };
    var dataPromise = function (data) {
        var deferred = $q.defer();
        deferred.resolve(data);
        return deferred.promise;
    };

    requestFactory.httpPut = httpPut;
    requestFactory.dataPromise = dataPromise;
    requestFactory.httpGet = httpGet;
    requestFactory.httpPost = httpPost;
    requestFactory.httpDelete = httpDelete;

    requestFactory.HttpAjax = function (method, url, data) {
        var deferred = $q.defer();
        $http({
            method: method,
            url: url,
            data: data
        }).success(function (res) {
            deferred.resolve(res);
        }).error(function (error) {
            deferred.reject(error);
        });
        return deferred.promise;
    };
    requestFactory.httpGetJson = function (url) {
        var deferred = $q.defer();
        $http.get(url).success(function (response) {
            deferred.resolve(response);
        }).error(function (error) {
            deferred.reject(error);
        });
        return deferred.promise;
    };
    return requestFactory;
}
]);