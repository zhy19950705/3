//发送ajax
function sendAjax() {
    //构造表单数据
    var formData=new FormData();
    formData.append('username','johndoe');
    formData.append('id',123456);
    //创建xhr对象
    var xhr=new XMLHttpRequest();
    //设置xhr请求的超时时间
    xhr.timeout=3000;
    //设置响应返回的数据格式
    xhr.responseType='text';
    //创建一个Post请求，采用异步
    xhr.open('POST','/server',true);
    //注册相关时间回调函数处理
    xhr.onload=function (e) {
        if(this.status===200||this.status===304){
            alert(this.responseText)
        }
    };
    xhr.ontimeout=function(e){

    }
    xhr.onerror=function (e) {

    }
    xhr.upload.onprogress=function (ev) {

    }


    //发送数据,使用try-catch捕捉错误
    try{
        xhr.send(formData)
    }catch (e){

    }

}

//设置request header
var client=new XMLHttpRequest();4
client.open('get','demo.cgi');
client.setRequestHeader('X-test','one');
client.setRequestHeader('X-test','two');
//最终request header 中的x-test 为one,two
client.send()

//获取responese header,只能获取safe字段
DOMString getAllResponseHeaders();
DOMString getResponseHeader(DOMString header)

//指定xhr.response的数据类型
//xhr请求的是一张图片，通过将 response 的 content-type 改为'text/plain; charset=x-user-defined'，使得 xhr 以纯文本格式来解析接收到的blob 数据，
// 最终用户通过this.responseText拿到的就是图片文件对应的二进制字符串，最后再将其转换为 blob 数据。
var xhr=new XMLHttpRequest();
//向server端获取一张图片
xhr.open('GET','/path/to/image.png',true);
//将响应数据按照纯文本格式来解析，字符集替换为用户自定义的字符集
xhr.overrideMimeType('text/plain;charset=x-user-defined');
xhr.onreadystatechange=function (e) {
    if(this.readyState===4&&this.status==200){
        //通过responseText来获取图片文件对应的二进制字符串
        var binStr=this.responseText;
        //然后自己想方法将逐个字节还原为二进制数据
        for(var i=0,len=binStr.length;i<len;i++){
            var c=binStr.charCodeAt(i);
            //String.fromCharCode(c&oxff);
            var byte=c&0xff;
        }
    }
};
xhr.send();


//xhr.response实现获取图片,xhr.response用来取代xhr.overrideMimeType
var xhr=new XMLHttpRequest();
xhr.open('GET','/path/to/image.png',true);
//可以将xhr.responseType设置为blob,也可以设置为arrayBuffer
xhr.responseType='blob';
xhr.onload=function (ev) {
    if(this.status===200){
        var blob=this.response;
        ...
    }
}
xhr.send();

//xhr提供三个属性获取返回的数据xhr.response,xhr.responseText,xhr.responseXML

//追踪ajax请求的当前状态
xhr.onreadystatechange=function (ev) {
    switch(xhr.readyState){
        // case 0://unsent
        case 1://opened,已打开，未发送，打开后可以调用xhr.setRequestHeader和xhr.send
        // do something
            break;
        case 2://headers_received,send已被调用，响应头和响应状态已经返回
        //do something
             break;
        case 3://loading，xhr.response可能已经有了响应
        //do something
            break;
        case 4://done，整个数据传输过程结束，无论成功失败
         //do something
            break;
    }
}

//超时时间  xhr.onloadstart(xhr.send())->xhr.loadend

//获取上传、下载速度
xhr.onprogress=updateProgress;//下载触发
xhr.upload.onprogress=updateProgress;//上传触发
function updateProgress(event) {
    if(event.lengthComputable){
        var completedPercent=event.loaded/event.total;
    }
}


interface XMLHttpRequestEventTarget:EventTarget{
    attribute EventHandler onloadstart;//xhr.send()后立即触发
    attribute EventHandler onprogress;//上传阶段之后触发
    attribute EventHandler onabort;//调用xhr.abort()后触发
    attribute EventHandler onerror;
    attribute EventHandler onload;
    attribute EventHandler ontimeout;
    attribute EventHandler onloaded;
}
interface XMLHttpRequestUpload:XMLHttpRequestEventTarget{

}

interface XMLHttpRequest:XMLHttpRequestEventTarget{
    attribute EventHandler onreadystatechange;//xhr.readyState改变时触发
    readonly attribute XMLHttpRequestUpload upload;
}
