// JavaScript Document
function ID(id){
   return typeof id=='string'?document.getElementById(id):document.getElementById('id');
}
function TAG(tag,obj){
   return (typeof obj=='object'?obj:ID(obj)).getElementsByTagName(tag);
}
function getByClass(oP,oC){
	var elements = document.getElementsByTagName('*');
	var eArrs = [];
	for(var i=0;i<elements.length;i++){
		if(elements[i].className==oC){
			eArrs.push(elements[i]);
		}		
	}
	return eArrs;
}
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
	    return getComputedStyle(obj,false)[attr];	
	}
}
function initFocus(tag){
   var iCur = 0,iNext = 0,move_over = true;
   var timer = null;
   var Focus = ID(tag);
   var oPic = getByClass(Focus,'oPic')[0];
   var oPics = TAG('li',oPic);
   var oBtn = getByClass(Focus,'oBtn')[0];
   var oBtns = TAG('li',oBtn);
   var oText = getByClass(Focus,'oText')[0];
   var oTexts = TAG('li',oText);
   oPics[iCur].style.zIndex = 10;
   oBtns[iCur].className = 'active';
   oTexts[iCur].style.top = 0;
   Focus.onmouseover = function(){clearInterval(timer);}   
   Focus.onmouseout = function(){timer = setInterval(autoPlay,3000);}
   for(var i=0;i<oBtns.length;i++){
	   oPics[i].timer = null;
	   oBtns[i].Index = i;	   
	   oBtns[i].onclick = function(){	
	       if(this.className!='active' && move_over){			     
			   move(this.Index);			  		   
			   oPics[iCur].style.zIndex = 10;		   
		       oPics[this.Index].style.zIndex = 9;
			   iNext = this.Index;
		   }
	   }	   
   }   
   var autoPlay = function(){
	   if(iNext>=oPics.length-1){
		   iNext = 0;
	   }else{
		   iNext++;   
	   } 
	   move(iNext);
	   oPics[iCur].style.zIndex = 10;		   
	   oPics[iNext].style.zIndex = 9;  	   	
   }
   clearInterval(timer);
   timer = setInterval(autoPlay,3000);   
   
   
   var move = function(next){
	   move_over = false;
	   for(var i=0;i<oPics.length;i++){
		   oPics[i].style.zIndex = 5;  
	   }	  
	   changeFocus(next);
	   setBtn(next);	   
	   //setText(next);	  
   }
   var changeFocus = function(next){	   
	   doMove(oPics[iCur],{left:-480},function(){
		   oPics[iCur].style.zIndex = 9;		   
		   oPics[next].style.zIndex = 10;
		   doMove(oPics[iCur],{left:0},function(){
			    move_over = true;  
			 }); 
	   });
	   doMove(oPics[next],{left:480},function(){
		   	for(var i=0;i<oTexts.length;i++){
		      oTexts[i].style.top = 30 + 'px';
	        }	   
			oTexts[next].style.top = 0 + 'px';
		    doMove(oPics[next],{left:0},function(){
			   oPics[iCur].style.zIndex = 5;   
			   iCur = next;  
		   })   
	   });	   
   }  
   
   var setBtn = function(iCur){
	   for(var i=0;i<oBtns.length;i++){
		   oBtns[i].className = '';
	   }
	   oBtns[iCur].className = 'active';
   }
   var setText = function(iCur){
	   for(var i=0;i<oTexts.length;i++){
		  oTexts[i].style.top = 30 + 'px';
	   }	
	      oTexts[iCur].style.top = 0 + 'px';
   }
   
}
function doMove(obj,json,fn){
	clearInterval(obj.timer);	
	obj.timer = setInterval(function(){
	   var speed = 0;
	   var tf = true;
	   for(attr in json){		   
		   iCur = parseInt(getStyle(obj,attr));			  
		   if(iCur<=json[attr]){
		       speed = 40;
		   }else{
			   speed = -40   
		   }
		   if(iCur != json[attr]){
			   tf = false;			  
		   }		   
		   obj.style[attr] = iCur + speed + 'px';
	   }
	   if(tf){		  
		   clearInterval(obj.timer);
		   obj.style[attr] = (iCur) + 'px';
		   if(fn){
			  fn();   
		   }
	    }
	   	   
	},30);
}
