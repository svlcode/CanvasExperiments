var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');



function shape(canvas, context){

    this.canvas = canvas;
    this.context = context;
    this.selected = false;
    this.color = 'white';

    this.draw = function draw(mouseX, mouseY) {
        var x = this.canvas.width / 2;
        var y = this.canvas.height / 2;
        var radius = 50;
        var startAngle = 1.0 * Math.PI;
        var endAngle = 1.5 * Math.PI;
        var counterClockwise = false;

        this.context.beginPath();
        this.context.arc(100, 100, radius, startAngle, endAngle, counterClockwise);
        this.context.lineWidth = 1;

        // line color
        this.context.strokeStyle = 'black';
        this.context.lineTo(250, 50);

        this.context.arc(300, 100, radius, 1.5 * Math.PI, 2.0 * Math.PI, counterClockwise);

        this.context.lineTo(300, 120);

        this.context.quadraticCurveTo(200, 50, 100, 120);

        this.context.lineTo(50, 100);
        if (this.context.isPointInPath(mouseX, mouseY)) {
            if (!this.selected) {
                this.color = 'red';
            }
            else {
                this.color = 'white';
            }
            this.selected = !this.selected;
        }

        this.context.fillStyle = this.color;
        this.context.stroke();
        this.context.fill();
    }
}

var s = new shape(canvas, context);
s.draw();
  
  // Up, down, and move are for dragging
canvas.addEventListener('click', function (e) {
    var mouseX = e.offsetX;
    var mouseY = e.offsetY;
    s.draw(mouseX, mouseY);
}, true);