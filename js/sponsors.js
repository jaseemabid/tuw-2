window.onload = function() {
	thumbs4 = document.getElementById("sponsor_us").getElementsByTagName("img");
	for(var i = 0; i<thumbs4.length; ++i) {
		image = thumbs4[i];
		image.onclick = function() {
			var url=this.src;
			document.getElementById("msg_img").src=url;
			ifrm = document.getElementById("iframe");
			ifrm.setAttribute("src", "//www.youtube.com/embed/"+this.alt);
			ifrm.style.width = 640+"px";
			ifrm.style.height = 360+"px";
		}
	}
	thumbs1 = document.getElementById("category1").getElementsByTagName("img");
	for(var i = 0; i<thumbs1.length; ++i) {
		image = thumbs1[i];
		image.onclick = function() {
			var url=this.src;
			document.getElementById("msg_img").src=url;
			ifrm = document.getElementById("iframe");
			ifrm.setAttribute("src", "//www.youtube.com/embed/"+this.alt);
			ifrm.style.width = 640+"px";
			ifrm.style.height = 360+"px";
		}
	}	
	thumbs2 = document.getElementById("category2").getElementsByTagName("img");
	for(var i = 0; i<thumbs2.length; ++i) {
		image = thumbs2[i];
		image.onclick = function() {
			var url=this.src;
			document.getElementById("msg_img").src=url;
			ifrm = document.getElementById("iframe");
			ifrm.setAttribute("src", "//www.youtube.com/embed/"+this.alt);
			ifrm.style.width = 640+"px";
			ifrm.style.height = 360+"px";
		}
	}	
	thumbs3 = document.getElementById("category3").getElementsByTagName("img");
	for(var i = 0; i<thumbs3.length; ++i) {
		image = thumbs3[i];
		image.onclick = function() {
			var url=this.src;
			document.getElementById("msg_img").src=url;
			ifrm = document.getElementById("iframe");
			ifrm.setAttribute("src", "//www.youtube.com/embed/"+this.alt);
			ifrm.style.width = 640+"px";
			ifrm.style.height = 360+"px";
		}
	}		
}

