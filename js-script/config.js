let _task = window.taskList;
let _lenghtJson = _task.id.length;
let _now = new Date();
let _quantityDataMassive = [];
let _comparisonMassive = [];
let _circleOneEdit = document.querySelectorAll('.js-one-circle-task');
let _circleTwoEdit = document.querySelectorAll('.js-two-circle-task');
let _argumentCircle = 0;
let _canvasHeight = 0;
let _canvasWidth = 0;
let _adideOpenForDraw = false;
let _asideOpen = false;
let _tasksFilterOpen = false;
let _statusFilterTask;

let _dataForGraph = [];
let _maxNumberX = 0;
let _minNumberX = 0;
let _maxNumberY = 0;
let _minNumberY = 0;
let _labelX = [];
let _quantityActive = 0;
let _quantityCompleted = 0;
let _quantityEnded = 0;

const _monthMassive = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
const _monthMassiveRecution = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const _monthMassiveRecutionForLinealGraph = ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const _weekdayMassive = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const _monthValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const _colors = {
	activeColor: '#FFB946',
	endedColor: '#DC143C',
	completedColor: '#2ED47A',
	secondaryColor: '#109CF1',
};