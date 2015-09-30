angular.module('todoList', [])
	.controller('todoListController', todoControllerFunction);

function todoControllerFunction() {
	var vm = this;
	vm.title = 'Todo List!';
	vm.todoList = [];

	vm.addTodo = function(){
		var todoObject = {
			text: vm.newTodo,
			checked: false
		};
		vm.todoList.push(todoObject);
		vm.newTodo = null;
	}
}
