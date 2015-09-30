angular.module('todoList', [])
	.controller('todoListController', todoControllerFunction);

function todoControllerFunction() {
	var todoCtrl = this;
	todoCtrl.title = 'Todo List!';
	todoCtrl.todoList = [];

	todoCtrl.addTodo = function(){
		todoCtrl.todoList.push(todoCtrl.newTodo);
		todoCtrl.newTodo = null;
	}
}
