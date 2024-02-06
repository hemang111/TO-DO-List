# TO-DO List App

Welcome to the TO-DO List app! This unique application is the result of creative and original design, developed from scratch without external influences. Reflecting my coding expertise, the app provides a distinctive user experience. Currently, the to-do list data is stored locally within the browser.

## Try it Yourself
Explore the TO-DO List app at [https://tdlbyhemang.netlify.app/](https://tdlbyhemang.netlify.app/)

## Screenshots
1. **Main Interface of TO-DO List App**
   ![TO-DO List App](https://github.com/hemang111/TO-DO-List/assets/85540417/66a9bfb7-36e2-470f-9432-449b0cbb53e9)


2. **Ul Element with Appended Li Items**
   ![The Ul where all Li are append](https://github.com/hemang111/TO-DO-List/assets/85540417/eee90531-eda1-46b3-b9f5-c5bec842486a)


## Features
- Unique functionality crafted from original ideas
- Local storage for seamless data management
- User-friendly interface for an intuitive experience

## JavaScript Implementation
The core functionality of the TO-DO List app is implemented using JavaScript. Below is an overview of the key JavaScript code responsible for various aspects of the app:

### Form Submission and DOM Manipulation
```javascript
document.getElementById('forms').addEventListener('submit', function (event) {
    event.preventDefault();
   var mainText = document.getElementById('main-text').value;
   var date = document.getElementById('datePicker').value;
   if (mainText === '') {
   alert('You have to enter something');
   } else {
   var uli1 = document.getElementById('uli1');
    var li = document.createElement('li');
 ...and soon
```

### Prompt for Edit
```javascript
// var newText = prompt('Edit task:', text.innerHTML);
// var newDate = prompt('Edit Date:', cdate.innerHTML);
```

### Date Picker Configuration
```javascript
 var datePicker = document.getElementById('datePicker');
// got to know that the date fecthed is not in the normal format and does not have splits
 var currentDate = new Date().toISOString().slice(0, 10);
// Yup the upper line of code is taken from https://stackoverflow.com/questions/1531093/get-current-date-in-yyyy-mm-dd-
datePicker.setAttribute('min', currentDate); ...
```

Feel free to dive into the [full JavaScript code]() for a detailed understanding of the app's functionality.

## How to Use
1. Visit [https://tdlbyhemang.netlify.app/](https://tdlbyhemang.netlify.app/)
2. Add your tasks and organize your to-do list.
3. Explore unique features designed to enhance productivity.
4. Have fun using the edit function.

Feel free to contribute, provide feedback, or report issues. Your input is valuable in further improving this TO-DO List app.

## Issues and Feedback
For bug reports, issues, or feedback, please open an [issue](https://github.com/hemang111/TO-DO-List/issues).

Thank you for using the TO-DO List Web app! Happy organizing!

