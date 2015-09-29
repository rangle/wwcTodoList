angular.module('todoList', [])
	.controller('Controller', Controller);

function Controller() { 
	var vm = this;
	vm.title = 'Todo List!';
}
