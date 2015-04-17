$(document).ready(function(){
	var redditReturnObj;
	var tits = new Array();
	var links = new Array();
	var returnVal;
	$('.rand').click(function(){
		$('#loader').show();
		
		/*
$.get('http://www.reddit.com/r/InternetIsBeautiful/random.json?limit=100',function(data){
			redditReturnObj = data;
		    $('.title').html(redditReturnObj[0].data.children[0].data.title);
		    $('.link').attr('href',redditReturnObj[0].data.children[0].data.title);
		    $('#loader').hide();
		})
*/
		
		$.get('http://www.reddit.com/r/InternetIsBeautiful/new.json?limit=100',function(data){
			redditReturnObj = data;
			for(i=0;i<redditReturnObj.data.children.length;i++){
				links.push(redditReturnObj.data.children[i].data.url)
				tits.push(redditReturnObj.data.children[i].data.title)
			}
			
			maximum = tits.length;
			minimum = 0;
		    returnVal = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
		    
		    $('.title').html(tits[returnVal]);
		    $('.link').attr('href',links[returnVal]);
		    $('#loader').hide();
		})
	})
})