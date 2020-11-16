"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (res) {
    var todo = res.data;
    var id = todo.id;
    var title = todo.title;
    var completed = todo.completed;
    logTodo(id, title, completed);
})["catch"](function (err) { return console.log('err ---->', err); });
var logTodo = function (id, title, completed) {
    console.log("\n  the id is " + id + ",\n  title is " + title + ", \n  completed status is " + completed + ".\n  ");
};
