angular.module('todoList', [])
	.controller('todoListController', todoControllerFunction);

function todoControllerFunction() {
	var todoCtrl = this;
	todoCtrl.title = 'Todo List!';
	todoCtrl.todoList = [];

	todoCtrl.addTodo = function(){
		var todoObject = {
			text: todoCtrl.newTodo,
			checked: false
		};
		todoCtrl.todoList.push(todoObject);
		todoCtrl.newTodo = null;
	};

	todoCtrl.removeTodo = function(todoIndex){
		todoCtrl.todoList.splice(todoIndex, 1);
	}
}
