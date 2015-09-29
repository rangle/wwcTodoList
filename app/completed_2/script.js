angular.module('todoList', [])
	.controller('Controller', Controller);

function Controller() { 
	var vm = this;
	vm.title = 'Todo List!';
	vm.todoList = [];

	vm.addTodo = function(){
		vm.todoList.push(vm.newTodo);
		vm.newTodo = null;
	}
}
