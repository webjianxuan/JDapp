/**
 * Created by zhousg on 2016/2/17.
 */
window.itcast = {};
/*封装的transitionEnd事件*/
itcast.transitionEnd = function(objDom,callback){
    if(typeof objDom != 'object'){
        return false;
    }
    objDom.addEventListener('transitionEnd',function(){
        /*if(callback){
         callback();
         }*/
        callback && callback();
    });
    objDom.addEventListener('webkitTransitionEnd',function(){
        callback && callback();
    });
};