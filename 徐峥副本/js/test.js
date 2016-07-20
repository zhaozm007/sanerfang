
//点击音乐停止
function musicFun(){
	var isOn = true;
	$("#img_one_music").on("click",function(){
		if(isOn){
			$(this).children().attr("src","img/off.png");
			music.pause();
			isOn = false;
		}else{
			$(this).children().attr("src","img/jian.png");;
				music.play();
				isOn = true;
			}
	})
		
		
}
musicFun();


//所有图片加载完弹出下一页面
//setTimeout(function(){
//	$(".load").css("display","none");
//},2000)


//文字一条条出现
function textBlock(){
	
	var ps = $(".Ps p");
	var i = -1;
	var timer = setInterval(function(){
		i++;
		$(ps).eq(i).css("display","block");
		if(i == 7){

			$(".img_two_sanguang").css("animation","moveQiu2 5s linear");
			$(".img_two_qiu2").css("animation","moveQiu2 6s linear infinite");
		}
		if(i >= ps.length+2){
			clearInterval(timer);
			$(".Ps").fadeOut("slow");
			$(".img_two_sanguang").animate({
				left:"66%",
				top:"28%"
			},1000,function(){
				$(this).animate({
					top:"29%"
				},2000)
			
			})
			moveFun();
		}
	},1000)
}
textBlock();



//给徐峥飞行更换衣服
function moveFun(){
	$(".flyPeople").css({
		animation: "flyP 4s linear",
		display:"block",
	})
	$(".img_three_qiu3").animate({
		left:"25%"
	},1500,function(){
		$(this).animate({
			top:"79%"
		},3000,function(){
			//手机旋转出先
			$(".img_four_phone").css("animation","Phone 1s linear").fadeIn(2500).delay(1000).animate({
				opacity: 0
			},500,function(){
				//手机破碎，徐峥散落到各个星球
				shardFun();
				
				
			});
			$(".shardPhone").delay(2000).fadeIn(500);
			//让所有星球渐渐消失
			$(".img_three_qiu3").add(".img_two_sanguang").add(".img_two_qiu2").add(".img_two_qiu").delay(1000).fadeOut("slow");
			
		})
	})
	var count = 0;
	var i = 0;
	var array = ["img/sanxing.png","img/sijiao.png","img/wen.png"];
	var timer2 = setInterval(function(){
		count++;
		i++
		if(count == 3){
			count = 0;
		}
		if(i == 8){
			clearInterval(timer2);
			$(".flyPeople").css("display","none");
		}
		$(".img_three_sijiao").attr("src",array[count]);
	},500)
	
}

//手机破碎，徐峥散落到各个星球
function shardFun(){
	$(".shard_phone_1").css("animation","shard_phone_1 3s");
	$(".shard_phone_2").css("animation","shard_phone_2 3s");
	$(".shard_phone_3").css("animation","shard_phone_3 3s");
	$(".shard_phone_4").css("animation","shard_phone_4 3s");
	$(".shard_phone_5").css("animation","shard_phone_5 3s");
	$(".shard_phone_6").css("animation","shard_phone_6 3s");
	$(".shard_phone_7").css("animation","shard_phone_7 3s");
	$(".shard_phone_8").css("animation","shard_phone_8 3s");
	//碎片爆裂，星球渐现
	$(".stars").fadeIn(1000);
	
	//定时器
	setTimeout(function(){
		$(".shardPhone").css("display","none");
		$(".footerText").css("animation","textMove 2s infinite")
	},3000)
	
	
}

//点击进入游戏
function clickInGame(){
	$(".footerText").on("click",function(){
		beginGame();
		
	})
}
clickInGame();

function beginGame(){
	//星球消失
	$(".stars").fadeOut("farst");
	//出现landing文字
	$(".landing").fadeIn("farst");
	//1s后出现游戏页面
	setTimeout(function(){
		$(".bg").css("display","none");
		$(".gameBg").css("display","block");
	},1000)
	
}






function findXZ(){
	//获取照片容器
	var headBox = document.getElementsByClassName("headbox")[0];
	//获取总容器
	var head = document.getElementsByClassName("head")[0];
	//定义初始照片底数
	var index = 2;
	//定以一个bol值
	var bol = true;
	//获取倒计时元素
	var timeP = document.getElementById("timeP");
	//获取游戏结束元素
	var gameOver = document.getElementsByClassName("gameOver")[0];
	//获取再来一次按钮
	var again = document.getElementsByClassName("again")[0];
	//定义一份初始变量
	var bingo = -1;
	//获取点击正确的弹框
	var clickTrue = document.getElementsByClassName("clickTrue")[0];
	//获取点击正确弹框 显示的图片
	var trueShardImg = document.getElementById("trueShardImg");
	//获取点击正确文字的标签
	var trueText_p1 = document.getElementById("trueText_p1");
	var trueText_p2 = document.getElementById("trueText_p2");
	var suipian = document.getElementsByClassName("suipian")[0];
	var gameBg_p = document.getElementById("gameBg_p");
	
	
	//创建点击正确跳转下一关的文字数组
	
	//创建点击正确获得碎片的坐标的数组
	var shardArray = [{left:"0%",top:"0%"},
		{left:"-100%",top:"0%"},
		{left:"-200%",top:"0%"},
		{left:"-300%",top:"0%"},
		{left:"-400%",top:"0%"},
		{left:"0%",top:"-105%"},
		{left:"-107%",top:"-105%"},
		{left:"-209%",top:"-105%"}];
		
	//创建对应碎片的文字
	var textArray1 = ["像初恋一样手感的","帮助你防火防盗","帮你省下单反钱的","促进多巴胺分泌的","可以自动区分女汉子和男妹子的","快的能让时间变慢的","轻松抓拍多动症患者的","duang duang duang 效果的"];
	var textArray2 = ["双2.5D弧面玻璃","防女友的眼球识别加密系统","1300万像素镜头","Hi-Fi音质耳放","知信美颜系统","八核1.7GHz处理器","PDAF快速相位对焦系统","FunTouch Os 系统"];
	var textArray3 = ["你获得1/8碎片","你获得2/8碎片","你获得3/8碎片","你获得4/8碎片","你获得5/8碎片","你获得6/8碎片","你获得7/8碎片","你获得8/8碎片",]
	var textArray4 = ["第一关 水星","第二关 金星","第三关 地球","第四关 火星","第五关 木星","第六关 土星","第七关 天王星","第八关 海王星"];
	
	//创建头像
	function creatorHead(){
		//头像总数量
		var headNum = Math.pow(index,2);
		for (var i = 0; i < headNum; i++) {
			//创建新的图片容器
			var newHeadBox = document.createElement("div");
			//计算容器的宽度
			var headBoxWidth = head.clientWidth/index + "px";
			//设置容器宽高
			newHeadBox.style.width = headBoxWidth;
			newHeadBox.style.height = headBoxWidth;
			//创建包贝尔头像的背景图片
			var headBG = document.createElement("img");
			//插入图片路径
			headBG.src = "img/dingbu.png";
			//创建包贝尔头像
			var baobeier = document.createElement("img");
			//插入图片路径
			baobeier.src = "img/baobei.png";
			
			//插入到html中
			newHeadBox.appendChild(headBG);
			newHeadBox.appendChild(baobeier);
			head.appendChild(newHeadBox);
			
		};
		
		//获取所有包贝尔头像容器 组成数组
		var childNum = head.children;
		//设置一个随机数。用来更改徐峥的头像
		var randomNum = Math.round(Math.random()*(childNum.length-1));
		var xuzheng = childNum[randomNum].lastChild;
		xuzheng.src = "img/guang.png";
		
		childNum[randomNum].onclick = function(){
			if(bol){
				//清空所有图片
				removeHtml();
				index++;
				
				bingo++;
				//收集碎片
				clickTrueFun();
			}
		}
		
		
		
		
		
		
		
		
		
		
		
		
	}
	creatorHead();
	
	//清空所有图片
		function removeHtml(){
			head.innerHTML = "";
		};
	
	//倒计时30秒
		function countDown(){
			var time = 30;
			var timer = setInterval(function(){
				time -= 0.01;
				time = time.toFixed(2);
				if(time <= 0){
					bol = false;
					clearInterval(timer);
					gameOver.style.display = "block";
				}
				
				timeP.innerHTML = time;
			},10);
			
		}
		countDown();
	
		//点击再来一次开始游戏
		again.onclick = function(){
			//game界面消失
			gameOver.style.display = "none";
			//清空图片
			removeHtml();
			//index恢复初始值
			index = 2;
			//bol恢复初始值
			bol = true;
			//bingo恢复初始值
			bingo = -1;
			//创建图片
			creatorHead();
			//开始定时器
			countDown();
		}
	
	//点击正确获取卡片
	function clickTrueFun(){
		clickTrue.style.display = "block";
		setTimeout(function(){
			clickTrue.style.display = "none";
			//创建图片
			creatorHead();
		},1500);
		//每点击正确换一次位置
		var position = shardArray[bingo];
		trueShardImg.style.left = position.left;
		trueShardImg.style.top = position.top;
		//每点击正确换一次文字
		trueText_p1.innerHTML = textArray1[bingo];
		trueText_p2.innerHTML = textArray2[bingo];
		suipian.innerHTML = textArray3[bingo];
		gameBg_p.innerHTML = textArray4[bingo+1];
		
	};
	
	
	
	
	
	
	
	
	
	
	
}
findXZ();
