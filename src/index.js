import { $id, $css, $query} from "./utils/select";
import checkImg from "./images/check-24.png";
import editImg from "./images/edit-24.png";
import binImg from "./images/bin-24.png";
// ****** select items **********

// html elements
const form = $id("form");
const input = $id("task-input");
const submit = $css(".submit");
const container = $css(".tasks-container");
const alert = $id("alert");
const list = $css(".tasks-list");
const clearBtn = $css(".clear");

// edit options
let editElement = null;
let editState = false;
let editID;

// ****** event listeners **********
// submit btn
form.addEventListener("submit", addTask);

// clear btn
clearBtn.addEventListener("click", clearTasks);

// display items onload
window.addEventListener("DOMContentLoaded", setupTasks);

// ****** functions **********

// constructor
const Task = function (id, value) {
  this.done = false;
  this.id = id;
  this.value = value;
};

// add task
function addTask(e) {
  e.preventDefault();
  const txt = input.value;
  const id = new Date().getTime().toString();
  // create new task object
  const task = new Task(id, txt);
  if (txt && !editState) {
    // create div element
   const div = createHtml(txt, id);
    // append div
    append(list, div, task.done);
    // display alert
    displayAlert("task added to the list", "success");
    // show list
    container.classList.add("show-container");
    // save the object in  local storage
    addToLocalStorage(task);
    // add event listeners to buttons
    addEventsToBtns(div, task);
    // set back to default
    setBackToDefault();

  } else if (txt && editState) {
    task.value = txt ; 
    editElement.innerHTML = txt;
    displayAlert("value changed", "success");                   
    editLocalStorage(task);
    setBackToDefault();
  } else {
    displayAlert("empty value, please write something!", "danger");
  }
}

// create html div element
function createHtml(txt, id) {
  const div = document.createElement("div");
  div.classList.add("task-item");
  div.dataset.id = id;
  const template = `<button class="check btn">
  <img src="${checkImg}" alt="check">
</button>

<p class="title">${txt}</p>

<button class="edit btn">
  <img src="${editImg}" alt="edit">
</button>

<button class="delete btn">
  <img src="${binImg}" alt="delete">
</button>`;
  div.innerHTML = template;
  return div;
}

// append child to parent
function append(parent, elem, done) {
  parent.append(elem);
  if (done) {
    const checkbtn = $query(elem, ".check");
    checkbtn.classList.add("bcgGreen");
  }
}

// clear all tasks
function clearTasks() {
  list.innerHTML = "";
  displayAlert("empty list", "danger");
  container.classList.remove("show-container");
  localStorage.removeItem("myTasks");
  setBackToDefault();
}

// set back to defaults
function setBackToDefault() {
  input.value = "";
  editState = false;
  editElement = "";
  editID = null;
  submit.textContent = "+add";
}

// display alert
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  // remove alert
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

// add events
function addEventsToBtns(div, task) {
  // check btn
  const checkBtn = $query(div, ".check");
  checkBtn.addEventListener("click", function () {
    toggleDone(checkBtn, task);
    updateLocaleStorage(task);
    setBackToDefault();
  });
  // edit btn
  const editBtn = $query(div, ".edit");
  editBtn.addEventListener("click", function () {
    editTask(div);
  });
  //  delete btn
  const deleteBtn = $query(div, ".delete");
  deleteBtn.addEventListener("click", function () {
    deleteTask(div);
    removeFromLocalStorage(task);
    setBackToDefault();
  });
}

//  toggle task done
function toggleDone(btn, obj) {
  btn.classList.toggle("bcgGreen");
  if (obj.done) {
    obj.done = false;
  } else {
    obj.done = true;
  }
}
// delete task
function deleteTask(elem) {
  list.removeChild(elem);
  displayAlert("task deleted", "danger");
  if (list.children.length === 0) {
    container.classList.remove("show-container");
  }
}
// edit task
function editTask(elem) {
  editElement = $query(elem, ".title");
  input.value = editElement.innerHTML;
  submit.textContent = "edit";
  editState = true;         
  editID = elem.dataset.id;
}
// ****** local storage **********

// get an array from local storage
function getLocalStorage() {
  return JSON.parse(localStorage.getItem("myTasks")) || [];
}
// add to local storage
function addToLocalStorage(task) {
  const tasks = getLocalStorage();
  tasks.push(task);
  localStorage.setItem("myTasks", JSON.stringify(tasks));
}
//  update local storage
function updateLocaleStorage(task) {
  const tasks = getLocalStorage();
  tasks.forEach((obj) => {
    if (obj.id === task.id) {
      obj.done = task.done;
    }
  });
  localStorage.setItem("myTasks", JSON.stringify(tasks));
}

// delete from local storage
function removeFromLocalStorage(task) {
  let tasks = getLocalStorage();
  tasks = tasks.filter((obj) => obj.id !== task.id);
  localStorage.setItem("myTasks", JSON.stringify(tasks));
}

// edit local storage
function editLocalStorage(task) {
  const tasks = getLocalStorage();
  tasks.forEach((obj) => {
    if (obj.id === editID) {
      return obj.value = task.value;
    }
  });
  localStorage.setItem("myTasks", JSON.stringify(tasks));
}

// ****** setup tasks **********
function setupTasks() {
  const tasks = getLocalStorage();
  if (!tasks.length) {
    return;
  }
  tasks.forEach(function (task) {
    const div = createHtml(task.value, task.id);
    append(list, div, task.done);
    addEventsToBtns(div, task);
  });
  container.classList.add("show-container");
}

