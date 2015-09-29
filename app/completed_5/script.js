angular.module('todoList', [])
	.controller('Controller', Controller);

function Controller() { 
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
	};

	vm.removeTodo = function(todoIndex){
		vm.todoList.splice(todoIndex, 1);
	}
}
