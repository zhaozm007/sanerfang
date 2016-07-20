
//  (function(doc,win){
//      var docEl = doc.documentElement,  //文档根标签
//          resizeEvent =  'orientationchange' in window ? 'orientationchang' :'resize'; //viewport变化事件源
//
//      var rescale = function(){//重置方法
//          win.clientWidth = docEl.clientWidth;
//          if (!win.clientWidth) return;
//          docEl.style.fontSize = 40 * (win.clientWidth / 640) + 'px';
//          // win.base = 20 * (win.clientWidth / 640);
//
//          // console.log("视窗宽度=="+win.clientWidth);
//          // console.log("1rem=="+docEl.style.fontSize);
//      }
//
//      if (!doc.addEventListener) return;
//      // console.log(doc.addEventListener);
//      win.addEventListener(resizeEvent, rescale, false);
//      doc.addEventListener('DOMContentLoaded', rescale, false);
//
//  })(document, window);

function geiWidthHeight(){
	var winWidth=0;
	var winHeight=0;
	//获取窗口宽度
	if (window.innerWidth){
	    winWidth = window.innerWidth;
	}else if ((document.body) && (document.body.clientWidth)){
	    winWidth = document.body.clientWidth;
	}
	winWidth = parseInt(winWidth) + "px";
	document.documentElement.style.fontSize = 40 * (document.documentElement.clientWidth / 640) + 'px';
	//获取窗口高度
	if (window.innerHeight){
		winHeight = window.innerHeight;
	}else if((document.body) && (document.body.clientHeight)){
		winHeight = document.body.clientHeight;
	}
	winHeight = parseInt(winHeight) + "px";
	$(".box").css("height",winHeight);
	$(".box").css("width",winWidth);
}
geiWidthHeight();