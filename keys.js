$(document).ready(                                  		     /*javascript的東西要包在它裡面*/
	function(){
		$(".enter").click(                                
			// function(){
			// 	$(".show").html($(".input").val());              /*$(你要改的東西).html(你輸入的值)*/
			// }
			function(){
				var a = $(".input").val();
				if(a == 1){
					document.location.href="ch0.html";			 /*document就是這個頁面*/
				}                                    
				else{
					alert("hint:檢查->console");
				}
				console.log("123")
			}
		);
	}
);