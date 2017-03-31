/**
 * Created by freya on 2017/3/31.
 */
var canvas = document.querySelector('canvas');
var content = canvas.getContext('2d');

var x=0;
var store = {};


var Ball = function () {
    this.x = Math.random()*canvas.width;
    this.moveX = Math.random();
    this.r = 5 + 5*Math.random();



    this.draw = function () {
        //根据此时X的位置重新绘制圆圈圈

    }
};

for(var indexBall = 0;indexBall<10;indexBall++){
    store[indexBall] = new Ball();
}


// store[0] = new Ball();
var draw = function () {
    for(var index in store){
        store[index].x += store[index].moveX;
        if(store[index].x > canvas.width){
            store[index].x = -2*store[index].r;
        }
        store[index].draw();
    }



    // store[0].x ++;
    // store[0].draw();


};

var render = function () {
    //清除画布
    content.clearRect(0,0,canvas.width,canvas.height);

    // //位置变化
    // x++;

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

