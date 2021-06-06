<template>
    <div>
        <canvas id="canvas" ></canvas>
    </div>
</template>
<script>
export default{
    name: 'Rain',
    mounted(){

        let canvas;
        let ctx;
        let vRain;

        class Rain {
        //длина скорость
        constructor(x, y, l, v) {
            this.x = x;
            this.y = y;
            this.vy = v;
            this.l = l;
        }

        show() {
            ctx.beginPath();
            ctx.strokeStyle = "white";
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x, this.y + this.l);
            ctx.stroke();
        }
        fall() {
            this.y += this.vy;
            if (this.y > canvas.height) {
            this.x = Math.floor(Math.random() * canvas.width) + 5;
            this.y = Math.floor(Math.random() * 100) - 100;
            this.l = Math.floor(Math.random() * 30) + 1;
            this.v = Math.floor(Math.random() * 12) + 4;
            }
        }
        }

        function loop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // rain.show();
        // rain.fall();
        for (let i = 0; i < vRain.length; i++) {
            vRain[i].show();
            vRain[i].fall();
        }
        }

        function setup() {
        canvas = document.getElementById("canvas");
        ctx = canvas.getContext("2d");

        // rain = new Rain(10, 10, 30, 6);
        vRain = [];
        for (let i = 0; i < 60; i++) {
            vRain[i] = new Rain(
            Math.floor(Math.random() * canvas.width) + 5,
            Math.floor(Math.random() * 100) - 100,
            Math.floor(Math.random() * 30) + 1,
            Math.floor(Math.random() * 12) + 4
            );
        }

        setInterval(loop, 10);
        }
        setup()
    }
}
</script>