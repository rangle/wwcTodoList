angular.module('todoList', [])
	.controller('todoListController', todoControllerFunction);

function todoControllerFunction() {
	var vm = this;
	vm.title = 'Todo List!';
}
