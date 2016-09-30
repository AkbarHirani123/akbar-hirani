$(function(){

	$(".panel-button").on('click', function() {
		var panelId = $(this).attr('data-panelID');
		$('#'+panelId).toggle();
	});
});

function myAjax() {
      $.ajax({
           type: "POST",
           url: 'akbar-hirani.herokuapp.com/index.php',
           data:{action:'call_this'},
           success:function(html) {
             alert(html);
           }

      });
 }