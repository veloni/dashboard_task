const DrawCircle = (addSize, height, width) => {
	const circleCanvas = document.getElementById('js-graph-circle');
	const circle = circleCanvas.getContext('2d');

	circleCanvas.width = 460;
	circleCanvas.height = 460;
	circleCanvas.style.width = window.innerWidth / 6 + height;
	circleCanvas.style.height = window.innerHeight / 3 + width;

	window.addEventListener(`resize`, event => {
		circleCanvas.style.width = window.innerWidth / 6 + height;
		circleCanvas.style.height = window.innerHeight / 3 + width;
	}, false);

	circleCanvas.style.marginBottom = '15%';

	const DrawCircleEnded = (color) => {
		circle.arc(250 + addSize, 245 + addSize, 195 + addSize, 0, _quantityActive * 2 * 3.14 / 100, false);

		functionDrawforAllCircle(color);
	};

	const DrawCircleActive = (color) => {
		circle.arc(250 + addSize, 245 + addSize, 195 + addSize, _quantityActive * 2 * 3.14 / 100, _quantityActive * 2 * 3.14 / 100 + _quantityEnded * 2 * 3.14 / 100, false);
	
		functionDrawforAllCircle(color);
	};

	const DrawCircleCompleted = (color) => {
		circle.arc(250 + addSize, 245 + addSize, 195 + addSize, _quantityActive * 2 * 3.14 / 100 + _quantityEnded * 2 * 3.14 / 100, 0, false);

		functionDrawforAllCircle(color);
	};

	const DrawTextPercent = () => {
		circle.beginPath();
		circle.fillStyle = '#2ED47A';
		circle.font = '4em Poppins';
		circle.fillText(`${Math.ceil(_quantityCompleted)}%`, 205, 270);
	};

	const functionDrawforAllCircle = (color) =>{
		circle.lineWidth = 20;
		circle.strokeStyle = color;
		circle.stroke();
		circle.beginPath();
	}

	window.globalRenderTask();
	DrawCircleEnded(_colors.endedColor);
	DrawCircleActive(_colors.activeColor);
	DrawCircleCompleted(_colors.completedColor);
	DrawTextPercent();
}

DrawCircle(0, 0, 0);

window.windowDrawCircle = DrawCircle(_argumentCircle);