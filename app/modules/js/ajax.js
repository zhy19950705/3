const apiUrl = '';
jQuery.ajax(apiUrl, {
    type: 'post',
    dataType: 'json',
    data: {
        action: 'login',
        username: 'uname',
        password: 'passwd'
    }
})
    .done(function (data) {
        if (data.code) {
            alert(data.code)
            {
                alert(data.message || "登录失败")
            }
        else
            {
                window.location.assign("home")
            }
        }
    })
    .fail(function () {
        alert("服务器错误")
    });

// 初步封装
//.then()返回的是另一个Promise对象，.done()返回的是原来的Promise对象
function appAjax(actions, params) {
    var deffered = $.Deffered();

    jQuery.ajax(apiUrl, {
        type: "post",
        dataType: 'json',
        data: $.extend({
            action: action
        }, params)
    })
        .done(function (data) {
            //.当Code为或省略时，表示没有错误
            //其他值表示错误代码
            if (data.code) {
                if (data.message) {
                    //如果服务器返回了消息，那么向用户呈现消息
                    //resolve(null)，表示不需要后续进行业务处理
                    alert(data.message);
                    deffered.resolve();
                } else {
                    //如果服务器没有返回消息，那么把data丢给外面的业务处理
                    deffered.reject(data);
                }
            } else {
                //正常返回数据的情况
                deffered.resolve(data);
            }
        })
        .fail(function () {
            //ajax调用失败，向用户呈现消息，同时不需要进行后续业务的处理
            alert("服务器错误");
            deffered.resolve();
        })
    return deffered.promise();
}

//业务层调用
appAjax("login", {
    username: 'uname',
    password: 'passwd'
}).done(function (data) {
    if (data) {
        window.location.assign("home");
    }
}).fail(function () {
    alert("登录失败")
})

//axios调用api,拟用bluebird
function appAjax(action, params) {
    var deffered = $.Deffered();
    axios.post(apiUrl, {
        data: $.extend({
            action: action
        }, params)
    })
        .then(function (data) {
        ...
        }, function () {
        ...
        });
    return deffered.promise()
}

//去除jquery
appAjax(url, params)
    .done(function (data) {
        console.log("第一处处理", data);
    })//{}
    .done(function (data) {
        console.log("第二处处理", data);
    });//{}
//错误改法
appAjax(url, params)
    .then(function (data) {
        console.log("第一处处理", data);
    })//{}
    .then(function (data) {
        console.log("第二处处理", data);
    })//undefined
//正确，合并多个done,或者在.then()处理函数中返回data
appAjax(url,params)
    .then(function (data) {
        console.log("第一处处理", data);
        return data;
    })
    .then(function (data) {
        console.log("第二处处理", data);
        return data;
    });

//使用Promise接口改善设计
function ajax(action,params) {
    // axios 依赖于 Promise，ES5 中可以使用 Bluebird 提供的 Promise
    return axios
        .post(apiUrl,{
            data:$.extend({
                action:action
            },params)
        })
        .then(function (data) {
            if(!data.code){return data}
            if(!data.message){throw  data}
            alert(data.message)
        },function () {
            alert("服务器错误")
        });
}

//promise+async/await
async function appAjax(action,params) {
    const data=await axios
        .post(apiUrl,{
            data:$.extend({
                action:action
            },params)
        })
        // 这里模拟一个包含错误消息的结果，以便后面统一处理错误
        // 这样就不需要用 try ... catch 了
        .catch(()=>({code:-1,message:'服务器错误'}));
    if(!data.code){return data;}
    if(!data.message){throw data;}

    alert(data.message);
}

const data=await appAjax("login",{
    username:'uname',
    password:'passwd'
}).cath(()=>{
    alert("登录失败")
});
if(data){
    window.location.assign("home")
}

