angular.module('todoList', [])
	.controller('todoListController', todoControllerFunction);

function todoControllerFunction() {
	var vm = this;
	vm.title = 'Todo List!';
	vm.todoList = [];

	vm.addTodo = function(){
		vm.todoList.push(vm.newTodo);
		vm.newTodo = null;
	}
}
