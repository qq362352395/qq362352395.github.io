/*
	Function  :邀请函
	Author    :林亦凡
	Build_Date:2018.11.14
	Version   :1.0
 */
var canvas = document.getElementById("canvas");
var ctx=canvas.getContext("2d");
var iCanvasWidth=canvas.width,
	iCanvasHeight=canvas.height;
var style={color:"rgba(0,0,0,1)",
		   font_size:38,
		   align:"center",
		   valign:"middle",
		   font_family:"Arial"};
var stylexingxing={color:"white",
		   font_size:60,
		   align:"center",
		   valign:"middle",
		   font_family:"STXingkai"};
var rect={x:0,y:0,w:0,h:0};
var sPoint={x:0,y:0};
var ePoint={x:0,y:0};
var xPoint={x:0,y:0};
var flag3=0;
var randomx=[];
var randomy=[];


//基础函数
function drawRect(rect,style,mode){
	ctx.beginPath();
	ctx.rect(rect.x,rect.y,rect.w,rect.h);
	ctx.save();
	if(!mode){
		ctx.strokeStyle = style.color;
		ctx.stroke();
	}
	else{
		ctx.fillStyle = style.color;
		ctx.fill();
	}
	ctx.restore();
	ctx.closePath();
}
function drawLine(sPoint,ePoint,style){
	ctx.beginPath();
	ctx.moveTo(sPoint.x,sPoint.y);
	ctx.lineTo(ePoint.x,ePoint.y);
	ctx.strokeStyle = stylexingxing.color;
	ctx.stroke();
}
function drawText(txt,xPoint,style,mode){
	ctx.font = style.font_size+"px "+style.font_family;
	ctx.textAlign = style.align;
	ctx.textBaseline = style.valign;
	if(!mode){
		ctx.strokeStyle = style.color;
		ctx.strokeText(txt, xPoint.x, xPoint.y);	
	}
	else{
		ctx.fillStyle = style.color;
		ctx.fillText(txt,xPoint.x, xPoint.y);	
	}
}


//右下角模拟翻页按钮
function drawAX(){
	ctx.strokeStyle="rgba(178,34,34,0.95)";
	ctx.fillStyle="rgba(178,34,34,0.95)";
	ctx.save();
	ctx.shadowBlur=5;
	ctx.shadowColor="rgba(255,255,255,0.8)";
    ctx.shadowOffsetX=1;
    ctx.shadowOffsetY=3;
	ctx.beginPath();
	ctx.moveTo(375,550);
	ctx.bezierCurveTo(385,540,395,550,375,570);
	ctx.stroke();
	ctx.fill();
	ctx.restore();
	ctx.beginPath();
	ctx.moveTo(375,550);
	ctx.bezierCurveTo(365,540,355,550,375,570);
	ctx.stroke();
	ctx.fill();
    
}
//绘制背景
for(var i=1;i<=100;i++){
		randomx[i]=parseInt(Math.random()*400);
		randomy[i]=parseInt(Math.random()*600);
	}
function drawbg(){
	rect={x:0,y:0,w:400,h:600};
	style.color='black';
	drawRect(rect,style,1);
	//随机数产生小星星 模拟星空
	for(var i=1;i<=100;i++){
		rect={x:randomx[i],y:randomy[i],w:2,h:2};
		stylexingxing.color='white';
		drawRect(rect,stylexingxing,1);
	}
}

//鼠标点击事件注册  模拟翻页
function onCanvasClick(event){
	
	if(event.clientX<=395
		&&event.clientX>=355
		&&event.clientY<=570
		&&event.clientY>=540
	){
		// console.log(style.color);
		ctx.clearRect(0,0,iCanvasWidth,iCanvasHeight);
		drawbg();
		id=setInterval(onInterval,15);
	}
}


function drawFirstPage(){
	sPoint={x:40,y:40};
	ePoint={x:100,y:40};
	// console.log(sPoint);
	drawLine(sPoint,ePoint,style);
	ePoint={x:40,y:160};
	drawLine(sPoint,ePoint,style);
	sPoint={x:40,y:160};
	ePoint={x:100,y:160};
	drawLine(sPoint,ePoint,style);

	sPoint={x:300,y:40};
	ePoint={x:360,y:40};
	drawLine(sPoint,ePoint,style);
	sPoint={x:360,y:40};
	ePoint={x:360,y:160};
	drawLine(sPoint,ePoint,style);
	sPoint={x:360,y:160};
	ePoint={x:300,y:160};
	drawLine(sPoint,ePoint,style);

	sPoint={x:175,y:349};
	ePoint={x:225,y:349};
	drawLine(sPoint,ePoint,style);
	sPoint={x:175,y:350};
	ePoint={x:225,y:350};
	drawLine(sPoint,ePoint,style);
	sPoint={x:175,y:351};
	ePoint={x:225,y:351};
	drawLine(sPoint,ePoint,style);

	txt='感恩节快乐';
	xPoint={x:200,y:100};
	drawText(txt,xPoint,stylexingxing,1);

	txt='thanksgiving';
	xPoint={x:200,y:40};
	stylexingxing.font_size=35;
	drawText(txt,xPoint,stylexingxing,1);

	txt='毫无诚意的感恩节贺卡';
	xPoint={x:200,y:160};
	stylexingxing.font_size=17;
	stylexingxing.font_family='YouYuan';
	drawText(txt,xPoint,stylexingxing,1);

	txt='制作人：林亦凡';
	xPoint={x:200,y:325};
	stylexingxing.font_size=20;
	drawText(txt,xPoint,stylexingxing,1);

	txt='2018.11.22';
	xPoint={x:200,y:375};
	stylexingxing.font_size=16;
	drawText(txt,xPoint,stylexingxing,1);
}


// function drawSecondPage(){
// 	ctx.save();
// 	rect={x:40,y:40,w:320,h:520};
// 	style.color="rgba(96,96,96,0.7)";
// 	ctx.shadowBlur=2;
// 	ctx.shadowColor="rgba(255,255,255,0.3)";
//     ctx.shadowOffsetX=5;
//     ctx.shadowOffsetY=5;
// 	drawRect(rect,style,1);

// 	rect={x:150,y:130,w:100,h:40};
// 	style.color="#66CCFF";
// 	drawRect(rect,style,1);

// 	rect={x:150,y:300,w:100,h:40};
// 	drawRect(rect,style,1);

// 	ctx.restore();

// 	txt='活动说明';
// 	xPoint={x:200,y:80};
// 	stylexingxing.font_size=22;
// 	stylexingxing.font_family='youyuan';
// 	stylexingxing.color="#66CCFF";
// 	drawText(txt,xPoint,stylexingxing,1);

// 	txt='机房集合';
// 	xPoint={x:200,y:150};
// 	stylexingxing.font_size=18;
// 	stylexingxing.color="white";
// 	drawText(txt,xPoint,stylexingxing,1);

// 	txt='时间11月22日7:55';
// 	xPoint={x:200,y:200};
// 	stylexingxing.font_size=18;
// 	stylexingxing.color="#66CCFF";
// 	drawText(txt,xPoint,stylexingxing,1);

// 	txt='地点:机房13-203';
// 	xPoint={x:200,y:225};
// 	stylexingxing.font_size=18;
// 	drawText(txt,xPoint,stylexingxing,1);

// 	txt='内容:自主预习';
// 	xPoint={x:200,y:250};
// 	stylexingxing.font_size=18;
// 	drawText(txt,xPoint,stylexingxing,1);

// 	txt='老师上课';
// 	xPoint={x:200,y:320};
// 	stylexingxing.font_size=18;
// 	stylexingxing.color="white";
// 	drawText(txt,xPoint,stylexingxing,1);

// 	txt='时间11月22日8:05';
// 	xPoint={x:200,y:370};
// 	stylexingxing.font_size=18;
// 	stylexingxing.color="#66CCFF";
// 	drawText(txt,xPoint,stylexingxing,1);

// 	txt='地点:机房13-203';
// 	xPoint={x:200,y:395};
// 	stylexingxing.font_size=18;
// 	drawText(txt,xPoint,stylexingxing,1);

// 	txt='内容:感恩节上课';
// 	xPoint={x:200,y:420};
// 	stylexingxing.font_size=18;
// 	drawText(txt,xPoint,stylexingxing,1);
// }


function drawSecondPage2(flage3){
	ctx.save();
	rect={x:40,y:40,w:320,h:520};
	style.color="rgba(96,96,96,0.7)";
	ctx.shadowBlur=2;
	ctx.shadowColor="rgba(255,255,255,0.3)";
    ctx.shadowOffsetX=5;
    ctx.shadowOffsetY=5;
	drawRect(rect,style,1);

	rect={x:flag3-50,y:130,w:100,h:40};
	style.color="#66CCFF";
	drawRect(rect,style,1);

	rect={x:flag3-50,y:300,w:100,h:40};
	drawRect(rect,style,1);

	ctx.restore();

	txt='感恩有你';
	xPoint={x:flag3,y:80};
	stylexingxing.font_size=22;
	stylexingxing.font_family='youyuan';
	stylexingxing.color="#66CCFF";
	drawText(txt,xPoint,stylexingxing,1);

	txt='感谢你们';
	xPoint={x:flag3,y:150};
	stylexingxing.font_size=18;
	stylexingxing.color="white";
	drawText(txt,xPoint,stylexingxing,1);

	txt='给我关爱';
	xPoint={x:flag3,y:200};
	stylexingxing.font_size=18;
	stylexingxing.color="#66CCFF";
	drawText(txt,xPoint,stylexingxing,1);

	txt='给我快乐';
	xPoint={x:flag3,y:225};
	stylexingxing.font_size=18;
	drawText(txt,xPoint,stylexingxing,1);

	txt='和我成长';
	xPoint={x:flag3,y:250};
	stylexingxing.font_size=18;
	drawText(txt,xPoint,stylexingxing,1);

	txt='祝福你们';
	xPoint={x:flag3,y:320};
	stylexingxing.font_size=18;
	stylexingxing.color="white";
	drawText(txt,xPoint,stylexingxing,1);

	txt='身体健康';
	xPoint={x:flag3,y:370};
	stylexingxing.font_size=18;
	stylexingxing.color="#66CCFF";
	drawText(txt,xPoint,stylexingxing,1);

	txt='万事如意';
	xPoint={x:flag3,y:395};
	stylexingxing.font_size=18;
	drawText(txt,xPoint,stylexingxing,1);

	txt='知足常乐';
	xPoint={x:flag3,y:420};
	stylexingxing.font_size=18;
	drawText(txt,xPoint,stylexingxing,1);
}

function onInterval(){
	if(flag3>=200)
		clearInterval(id);
	
	ctx.clearRect(0,0,iCanvasWidth,iCanvasHeight);
	drawbg();
	drawSecondPage2(flag3);

	flag3+=1;
}

drawbg();
drawAX();
drawFirstPage();
canvas.onclick=onCanvasClick;
