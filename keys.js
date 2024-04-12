$(document).ready(                                  		     /*javascript的東西要包在它裡面*/
	function(){
		$(".enter").click(                                
			// function(){
			// 	$(".show").html($(".input").val());              /*$(你要改的東西).html(你輸入的值)*/
			// }
			function(){
				var a = $(".input").val();
				if(a == "chou-chuan-chuan" ){
					document.location.href="east_egg.html";
				} 
				else if(a == "0"){
					document.location.href="ch0.html";			 /*document就是這個頁面*/
				}  
				else if(a == "1"){
					document.location.href="ch1.html";			 /*document就是這個頁面*/
				}  
				else if(a == "2"){
					document.location.href="ch2.html";			 /*document就是這個頁面*/
				}				
				else if(a == "3"){
					document.location.href="ch3.html";			 /*document就是這個頁面*/
				}  				
				else if(a == "4"){
					document.location.href="ch4.html";			 /*document就是這個頁面*/
				}  				
				else if(a == "5"){
					document.location.href="ch5.html";			 /*document就是這個頁面*/
				}                                   
				else{
					alert("hint:檢查->console");
				}
				console.log("https://chou-chuan-chuan.github.io/locker/")
				console.log("0-5")
				console.log("chou-chuan-chuan")
			}
		);
	}
);