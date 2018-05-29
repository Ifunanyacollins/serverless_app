var API_ENDPOINT = "https://lv78d4lfz4.execute-api.us-east-1.amazonaws.com/dev"


  function myFunction() {

  //Get the text field 
  var copyText = document.getElementById("postIDreturned");
  var copy_btn = document.getElementById("copy_btn");
  //Select the text field 
  copyText.select();

  //Copy the text inside the text field 
  document.execCommand("copy");

  // alert copied
 copy_btn.textContent = "copied"
  
} 



   // to start my select input
$('select').material_select(); 





document.getElementById("sayButton").onclick = function(){

	var preloader = document.getElementById("preloader")
    var base  = document.querySelectorAll(".base")

    base[0].classList.add('hide')
    base[1].classList.add('hide')
    base[2].classList.add('hide')
    preloader.classList.remove('hide') 


	var inputData = {
		"voice": $('#voiceSelected option:selected').val(),
		"text" : $('#postText').val()
	};

	$.ajax({
	      url: API_ENDPOINT,
	      type: 'POST',
	      data:  JSON.stringify(inputData)  ,
	      contentType: 'application/json; charset=utf-8',
	      success: function (response) {
	                var next = document.getElementById("next")
	                 var sayButton = document.getElementById("sayButton")
					var pre = document.getElementById("preloader")
					var copyText = document.getElementById("postIDreturned");
					
				                          
			
					next.classList.remove('hide')
					sayButton.classList.add('hide')
					pre.textContent="Sucess!"
					pre.style.backgroundColor='green'
					document.getElementById('postId').value =response ;
					document.getElementById('posttext').textContent ="" ;
					 
					
					
	      },
	      error: function () {
	          alert("error");
	      }
	  });
}


document.getElementById("searchButton").onclick = function(){

	var postId = $('#postId').val();


	$.ajax({
				url: API_ENDPOINT + '?postId='+postId,
				type: 'GET',
				success: function (response) {

					

	        jQuery.each(response, function(i,data) {

						var player = "<audio controls><source src='" + data['url'] + "' type='audio/mpeg'></audio>"
                          console.log(data['url'] )
						if (typeof data['url'] === "undefined") {
	    				var player = ""
						}

						$("#ode").append(player);
	        });
				},
				error: function () {
						alert("error");
				}
		});
}

document.getElementById("postText").onkeyup = function(){
	var length = $(postText).val().length;
	document.getElementById("charCounter").textContent="Characters: " + length;
}


$('textarea').on('keyup',function(){
$('#ist_next').removeClass('hide')
})


