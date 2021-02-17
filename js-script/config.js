let task = window.taskList;
let lenghtJson;
let now = new Date();
lenghtJson = task.id.length;
const taskId = task.id;
let quantityDataMassive = [];
let comparisonMassive = [];
let circleOneEdit = document.querySelectorAll('.js-one-circle-task');
let circleTwoEdit = document.querySelectorAll('.js-two-circle-task');
let argumentCircle = 0;
let canvasHeight = 0;
let canvasWidth = 0;
let firstLoadScript = false;
let asideOpen = false;

const monthMassive = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
const monthMassiveRecution = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const monthMassiveRecutionForLinealGraph = ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const weekdayMassive = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const colors = {
    activeColor: '#FFB946',
    endedColor: '#DC143C',
    completedColor: '#2ED47A',
    secondaryColor: '#109CF1',
};

