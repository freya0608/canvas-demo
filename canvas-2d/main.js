/**
 * Created by freya on 2017/3/31.
 */
var canvas = document.querySelector('canvas');
var content = canvas.getContext('2d');

var x=0;
var store = {};

var draw = function () {

     ball.x = x;

    
};
var Ball = function () {


    this.x= 0;
    this.draw = function () {

    }
};
store[0] = new Ball();

var render = function () {
    //清除画布
    content.clearRect(0,0,canvas.width,canvas.height);

    //位置变化
    x++;

    //绘制
    draw();
    //继续渲染
    requestAnimationFrame(render)
};

render();

context.clearRect(0,0,canvas.width,canvas.height);

if (!window.requestAnimationFrame){
    window.requestAnimationFrame = function (fn) {
        setTimeout(fn,17);
    }
}

