$(document).ready(function(){
		var flag = 0;
		$("#content").click(function(){
		if(flag == 0){
			$("#content").empty();
			flag = 1;
		}
		});
		
		$("#new-doc").click(function(){
			$("#content").empty();
			fontSize = 32;
			$("#content").css("font-size",fontSize+"px");
			$("#content").html("Enter the text here....")
			flag = 0;
		});
		
		$("#colourSel").on('change',function(e){
			var colour = $("option:selected",this).css("background-color");
			$("#colourSel").css("background-color",colour);
			console.log(colour);
			
			var selObj = window.getSelection();
			
			var selObj1 = window.getSelection().endOffset;
			
			var selectedText = selObj.toString();
			//$("#content").css("color",colour);
			document.execCommand('styleWithCSS', false, true);
			document.execCommand('foreColor', false,colour);
			
		});

		
		$('#bold').click(function() {
			document.execCommand('bold');
		});
		
		$('#italics').click(function() {
			document.execCommand('italic');
		});
		
		$('#underline').click(function() {
			document.execCommand('underline');
		});
		
		var fontSize = 32;
  
		$('#decrease').click(function(){
			if (fontSize > 12)
				fontSize-=4;
			var selObj = window.getSelection();
			var selectedText = selObj.toString();
			if(selectedText == "")
				$("#content").css("font-size",fontSize+"px");
			else{
				document.execCommand("fontSize", false, "5");	
				resetFont();
			}
			$("#font-size").html(fontSize+"px")
			
		});
  
		$('#increase').click(function(){
			if (fontSize < 128)
				fontSize+=4;
			var selObj = window.getSelection();
			var selectedText = selObj.toString();
			if(selectedText == "")
				$("#content").css("font-size",fontSize+"px");
			else{
				document.execCommand("fontSize", false, "5");	
				resetFont();
			}	
			$("#font-size").html(fontSize+"px")
		});
  
		function resetFont(){
			$("font[size=5]").removeAttr("size").css("font-size", fontSize + "px");
		}
		
		$("#left-align").click(function(){
			document.execCommand("JustifyLeft",false,"");
		});
		
		$("#center-align").click(function(){
			document.execCommand("JustifyCenter",false,"");
		});
		
		$("#right-align").click(function(){
			document.execCommand("JustifyRight",false,"");
		});

		var specialElementHandlers = {
			'#editor': function (element, renderer) {
				return true;
			}	
		};

		$('#download').click(function () {
			$("#editor").empty();
			var doc = new jsPDF();
			doc.fromHTML($('#content').html(), 15, 15, {
				'width': 170,
				'elementHandlers': specialElementHandlers
			});
			doc.save('document.pdf');
		});
});