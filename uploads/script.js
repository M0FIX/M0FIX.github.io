	function timeNoZone(tz=0){
		if(tz){
			var date = new Date(tz);
			return date.getTime();
		}else{
			var date = new Date();
		}
		var date = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
		return date.getTime();
	}

	$(document).ready(function(){
		$('ol > li').click(function(){
			$('ol > li').removeClass('active');
			$(this).addClass('active');
		});

		$("body").keyup(function(event){
		    if ((event.keyCode == 17 && event.shiftKey) || (event.shiftKey && event.keyCode == 17))
		    {
		        $("form").submit();
		    }
		});

		var currT = timeNoZone();
		$(".time_ago").each(function(index,value){
			var text,calc,posTime = timeNoZone($(this).attr("data-time")),tot = Math.round((currT-posTime)/1000),res;
			var time_select = {
				31536000 : 'year',
				2592000 : 'month',
				604800 : 'week',
				86400 : 'day',
				3600 : 'hour',
				60 : 'minute',
				1 : 'second'
			};
			Object.keys(time_select).forEach(function(key) {
				calc = tot/key;
				if (calc >= 1) {
					res = Math.floor(calc);
					text = res +" "+ time_select[key] + ((res>1)? "s ": " ") +" ago";
				}else if(calc < 0){
					text = "just now";
				}
			});
			$(this).text(text);
		});
	});


	function copy_to_clipboard(id, clicked){
		document.getElementById(id).select();
		document.getElementById(clicked).innerHTML = 'Copied !!';
		document.execCommand('copy');
	}