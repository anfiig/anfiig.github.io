var items = document.querySelectorAll('.item');
var taskTemplate = document.querySelector('#task-template').content;
var newItemTemplate = taskTemplate.querySelector('.item__list__task');

var showTask = function(item, q){
    for (var i = 0; i < 20; i++){
        if(localStorage.getItem(q + 'task' + i)){  
            var list = item.querySelector('.item__list');
            
            var newTaskText = localStorage.getItem(q + 'task' + i);
            var newTask = newItemTemplate.cloneNode(true);
            var newTaskDescr = newTask.querySelector('.item__list__task__text');
            newTaskDescr.textContent = newTaskText;
            doneTask(newTask);
            delTask(newTask, item, q);

            list.appendChild(newTask);
            emptyList(item, q);
            resetTask(item);
            doneTask(newTask);
            delTask(newTask, item, q);
        }
    }
}

var mainReset = document.querySelector('.header__update');
var reset = function(){
    mainReset.addEventListener('click', function(){
        for (var i = 0; i < items.length; i++){
            var list = items[i].querySelector('.item__list');
            var tasks = list.children;

            var btns = items[i].querySelector('.item__btns');
            btns.classList.remove('item__btns_active');
            var form = items[i].querySelector('.item__form');
            form.classList.remove('item__form_active');

            localStorage.clear();

            for (var j = 0; j < tasks.length; j++){
                tasks[j].remove();
                emptyList(items[i], i);
            }
        }
    });
}

var newTask = function(item, q){
    var form = item.querySelector('.item__form');
    var input = form.querySelector('.item__form__input');
    var button = form.querySelector('.item__form__btn');
    var list = item.querySelector('.item__list');

    form.addEventListener('submit', function(e){
        e.preventDefault();
       
        var newTaskText = input.value;
        var newTask = newItemTemplate.cloneNode(true);
        var newTaskDescr = newTask.querySelector('.item__list__task__text');
        newTaskDescr.textContent = newTaskText;
        doneTask(newTask);
        delTask(newTask, item, q);
 
        list.appendChild(newTask);
        emptyList(item, q);
 
        input.value = '';
        resetTask(item);

        var lengthList = list.children;

        localStorage.setItem(q + 'task' + lengthList.length, newTaskDescr.textContent);
        // console.log(localStorage.getItem(i + 'task' + lengthList.length));
    });
    form.addEventListener('keydown', function(e){
        var keyCode = e.keyCode;
        if (keyCode === 27){
            var btns = item.querySelector('.item__btns');
            btns.classList.remove('item__btns_active');
            var form = item.querySelector('.item__form');
            form.classList.remove('item__form_active');
        }
    })
}

var addTask = function (item){
    var list = item.querySelector('.item__list');
    var tasks = list.querySelectorAll('.item__list__task');

    var buttons = item.querySelector('.item__btns');
    var add = buttons.querySelector('.item__btns__add');

    var form = item.querySelector('.item__form');
    var input = form.querySelector('.item__form__input');

    add.addEventListener('click', function(){
        form.classList.toggle('item__form_active');
        buttons.classList.toggle('item__btns_active');
    });
}

var resetTask = function(item, q){
    var list = item.querySelector('.item__list');
    var tasks = list.querySelectorAll('.item__list__task');

    var buttons = item.querySelector('.item__btns');
    var update = buttons.querySelector('.item__btns__update');

    update.addEventListener('click', function(){
        for (var i = 0; i < tasks.length; i++){
            tasks[i].remove();
            // localStorage.removeItem(i + 'task' + j)
        }
        emptyList(item, q);

        var listLength = list.children;
        for (var j = 1; j <= listLength.length; j++){
            localStorage.removeItem(q + 'task' + j)
        }
    });
}

var emptyList = function(item, q){
    var list = item.querySelector('.item__list');
    var items = list.children;
    var blank = item.querySelector('.item__blank')

    if (items.length === 0 && !localStorage.getItem(q + 'task' + 1)){
        blank.classList.add('item__blank_active');
    }else{
        blank.classList.remove('item__blank_active');
    }
}

var doneTask = function (task){
    var flag = task.querySelector('.item__list__task__flag');
    var text = task.querySelector('.item__list__task__text');
    var close = task.querySelector('.item__list__task__close');

    flag.addEventListener('click', function(){
        flag.classList.toggle('item__list__task__flag_active');
        text.classList.toggle('item__list__task__text_active');
        close.classList.toggle('item__list__task__close_active');
    })
}

var delTask = function (task, item, q) {
    var list = item.querySelector('.item__list');
    var tasks = list.children;

    var close = task.querySelector('.item__list__task__close');
    close.addEventListener('click', function(){
        for (var j = 0; j < tasks.length; j++){
            if (task === tasks[j]){
                localStorage.removeItem(q + 'task' + (j+1));
            }
        }
        task.remove();
        emptyList(item, q);
    })
}

for (var i = 0; i < items.length; i++){
    var item = items[i];
    
    var list = item.querySelector('.item__list');
    var tasks = list.children;

    reset();
    resetTask(item, i);
    addTask(item);
    emptyList(item, i);
    newTask(item, i);
    showTask(item, i);

    for(var j = 0; j < tasks.length; j++){
        doneTask(tasks[j]);
        delTask(tasks[j], item, i);
    }
}

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  })
}


// 90+60+50+700
// 50+700

window.addEventListener('scroll', function(e){
    var scroll = window.pageYOffset
    var btns = document.querySelectorAll('.nav__item');

    var scrollNav = function(link, num, numTo){
        if (num <= scroll & numTo > scroll){
            link.classList.add('nav__item_active');
        }else{
            link.classList.remove('nav__item_active');
        }
    }

    scrollNav(btns[0], 0, 700);
    scrollNav(btns[1], 700, 1400);
    scrollNav(btns[2], 1400, 2100);
    scrollNav(btns[3], 2100, 2800);
    scrollNav(btns[4], 2800, 3500);
    scrollNav(btns[5], 3500, 4200);
    scrollNav(btns[6], 4200, 4900);

})