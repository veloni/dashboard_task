const DrawCircle = (addSize, height, width) => {

    const circleCanvas = document.getElementById('js-graph-circle');
    const circle = circleCanvas.getContext('2d');

    circleCanvas.width = 460;
    circleCanvas.height = 460;
    circleCanvas.style.width = window.innerWidth/6 + height;
    circleCanvas.style.height = window.innerHeight/3 + width;

    window.addEventListener(`resize`, event => {
        circleCanvas.style.width = window.innerWidth/6 + height ;
        circleCanvas.style.height = window.innerHeight/3 + width;
      }, false); 

    circleCanvas.style.marginBottom = "15%";

    const DrawCircleRed = () => {
        circle.arc(250 + addSize, 245 + addSize, 195 + addSize, 0, quantityActive * 2 * 3.14 / 100, false);
        circle.lineWidth = 20;
        circle.strokeStyle = colors.endedColor;
        circle.stroke();
        circle.beginPath();
    }

    const DrawCircleOrange = () => {
        circle.arc(250 + addSize, 245 + addSize, 195 + addSize, quantityActive * 2 * 3.14 / 100, quantityActive * 2 * 3.14 / 100 + quantityEnded * 2 * 3.14 / 100, false);
        circle.lineWidth = 20;
        circle.strokeStyle = colors.activeColor;
        circle.stroke();
        circle.beginPath();
    }

    const DrawCircleGreen = () => {
        circle.arc(250 + addSize, 245 + addSize, 195 + addSize, quantityActive * 2 * 3.14 / 100 + quantityEnded * 2 * 3.14 / 100, 0, false);
        circle.lineWidth = 20;
        circle.strokeStyle = colors.completedColor;
        circle.stroke();
        circle.beginPath();
    }

    const DrawTextPercent = () => {
        circle.beginPath();
        circle.fillStyle = "#2ED47A";
        circle.font = "4em Poppins";
        circle.fillText(Math.ceil(quantityCompleted) + '%', 205, 270);
    }

    renderTask();
    DrawCircleRed();
    DrawCircleOrange();
    DrawCircleGreen();
    DrawTextPercent();
}

DrawCircle(0, 0, 0);

window.windowDrawCircle = DrawCircle(argumentCircle);

