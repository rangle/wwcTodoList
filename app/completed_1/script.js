angular.module('todoList', [])
	.controller('todoListController', todoControllerFunction);

function todoControllerFunction() {
	var todoCtrl = this;
	todoCtrl.title = 'Todo List!';
}
