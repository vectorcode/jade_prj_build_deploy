if (!Modernizr.input.placeholder){
  $('input, textarea').placeholder();
} 


var addProject = (function (){

	var _init = function(){
				console.log('Инициализация модуля addProject');
				_setUpListners();
			},
			_setUpListners = function (){
				$('#add-new-item').on('click', _showModal);
			},
			_showModal = function (){
      	console.log('Вызов модального окна');
	      $('#new-progect-popup').bPopup({
	        speed: 650,
	        transition: 'slideDown'
	      });
    	};

	return {
		init: _init
	};

})();

addProject.init();

