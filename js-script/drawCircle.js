function DrawCircle() {

    let circleCanvas = document.getElementById('js-graph-circle');
    let circle = circleCanvas.getContext('2d');

    circleCanvas.width  = 500;
    circleCanvas.height = 500;
    circleCanvas.style.width = '20vw';
    circleCanvas.style.height ='20vw';

    function DrawCircleRed() {
        circle.arc(250, 245, 195, 0, quantityActive * 2 * 3.14 / 100, false);
        circle.lineWidth = 14;
        circle.strokeStyle = colors.endedColor;
        circle.stroke();
        circle.beginPath();
    }

    function DrawCircleOrange() {
        circle.arc(250, 245, 195, quantityActive * 2 * 3.14 / 100, quantityActive * 2 * 3.14 / 100 + quantityEnded * 2 * 3.14 / 100, false);
        circle.lineWidth = 14;
        circle.strokeStyle = colors.activeColor;
        circle.stroke();
        circle.beginPath();
    }

    function DrawCircleGreen() {
        circle.arc(250, 245, 195, quantityActive * 2 * 3.14 / 100 + quantityEnded * 2 * 3.14 / 100, 0, false);
        circle.lineWidth = 14;
        circle.strokeStyle = colors.completedColor;
        circle.stroke();
        circle.beginPath();
    }

    function DrawTextPercent() {
        circle.beginPath();
        circle.fillStyle = "#2ED47A";
        circle.font = "4em Poppins";
        circle.fillText(Math.ceil(quantityCompleted)+ '%',205,270);
    }
   

    renderTask();
    DrawCircleRed();
    DrawCircleOrange();
    DrawCircleGreen();
    DrawTextPercent();
}

DrawCircle();