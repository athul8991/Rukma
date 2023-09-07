var counter =40;
var counter2 =60;
$(document).bind("mousewheel",function(event){
	if(event.originalEvent.wheelDelta > 0){
		if( counter < 50 ){
			counter += 1;
			counter2 -= 1;
			//console.log(counter)
			$(".left_bottom-clip").css({"clip-path":"polygon(0% 0%, "+counter+"% "+counter2+"%, 100% 100%, 0% 100%)"});
			$(".top_right-clip").css({"clip-path":"polygon(0% 0%, "+counter2+"% "+counter+"%, 100% 100%, 100% 0%"})
		}
	}else{
		if( counter < 51 && counter > 0){
			counter -= 1;
			counter2 += 1;
			//console.log(counter)
			$(".left_bottom-clip").css({"clip-path":"polygon(0% 0%, "+counter+"% "+counter2+"%, 100% 100%, 0% 100%)"});
			$(".top_right-clip").css({"clip-path":"polygon(0% 0%, "+counter2+"% "+counter+"%, 100% 100%, 100% 0%"})

		}
	}
})