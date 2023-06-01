let form = document.querySelector('form');
form.addEventListener('submit', e => {
    // var output;
    // var firstNum;
    // var secondNum;
    // var operator;
    // try{
    //     e.preventDefault();
    //     var output = document.querySelector('output');
    //     var firstNum = document.querySelector('#first-num').value;
    //     var operator = document.querySelector('#operator').value;
    //     var secondNum = document.querySelector('#second-num').value;
    // } catch (err) {
    //     console.log('error occurred');
    //     console.error(err);
    //     secondNum = 0;
    // } finally {
    //     output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
    // }
        try{
            e.preventDefault();
            let output = document.querySelector('output');
            let firstNum = document.querySelector('#first-num').value;
            let secondNum = document.querySelector('#second-num').value;
            let operator = document.querySelector('#operator').value;
            var answer = eval(`${firstNum} ${operator} ${secondNum}`);
            if(answer < 0){
              throw new Error('Sorry, this calculator cannot handle negative values! Try again!');
            }
            output.innerHTML = answer;
        } catch(err){
            console.log(err);
        }
});

let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

//console.log
errorBtns[0].addEventListener('click', () => {
    console.log("example console.log()");
});

//console.error
errorBtns[1].addEventListener('click', () => {
    console.error("this is an error! sorry!");
});

//console.count
errorBtns[2].addEventListener('click', () => {
    console.count('Number of Times Clicked');
});

//console.warn
errorBtns[3].addEventListener('click', () => {
    console.warn("Not as pressing as an error, still should take a look");
});

//console.assert
errorBtns[4].addEventListener('click', () => {
    const five = 5;
    const six = 6;
    const explanation = "five is less than six";
    console.assert(five > six, {five,six,explanation});
});

//console.clear
errorBtns[5].addEventListener('click', () => {
    console.clear();
});

//console.dir
errorBtns[6].addEventListener('click', () => {
    console.dir(document);
});

//console.dirxml
errorBtns[7].addEventListener('click', () => {
    console.dirxml(document);
});

//console.group
errorBtns[8].addEventListener('click', () => {
    console.group('Cool Group');
});

//console.groupEnd
errorBtns[9].addEventListener('click', () => {
    console.groupEnd('Cool Group');
});

//console.table
errorBtns[10].addEventListener('click', () => {
    var classes = [
        {
            class: 'CSE110',
            professor: 'Powell',
        },
        {
            class: 'CSE140',
            professor: 'Chin',
        },
        {
            class: 'CSE140L',
            professor: 'Eldon',
        }
    ];
    console.table(classes);
});

//console.time
errorBtns[11].addEventListener('click', () => {
    console.log('starting timer');
    console.time();
});

//console.timeEnd
errorBtns[12].addEventListener('click', () => {
    console.timeEnd();
});

//console.trace
errorBtns[13].addEventListener('click', () => {
    console.trace();
});


// Start your code here
// You may move this JS to another file if you wish