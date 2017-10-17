// JavaScript Document
$(function()
	{
		/*head 下拉菜单的显示与隐藏*/
		$("#headdisplay").hover(function()
		{
			$("#middleright ul").show();
			$("#middleright span").html("郭萌&nbsp;&nbsp;&nbsp;&nbsp;▲");
		},function()
		{
			$("#middleright ul").hide();
			$("#middleright span").html("郭萌&nbsp;&nbsp;&nbsp;&nbsp;▼");			
		})
		$("#middleright ul").hover(function()
		{
			$("#middleright span").html("郭萌&nbsp;&nbsp;&nbsp;&nbsp;▲");
			$("#middleright ul").show();
		},function()
		{
			$("#middleright span").html("郭萌&nbsp;&nbsp;&nbsp;&nbsp;▼");
			$("#middleright ul").hide();
		})
		/*姓名重置*/
		$("#reset").click(function()
		{
			$("#mainleft1-2 input").attr("placehoder",$("#sp1").html());
			$("#mainleft1-2").slideDown(200);
		})
		$("#resave").click(function()
		{
			var val=$("#mainleft1-2 input").val();
			if(val=="")
			{
				$("#sp1").html($("#mainleft1-2 input").attr("placehoder"));	
				
			}
			else{$("#sp1").html(val);}
			$("#name").html(val);
			$("#mainleft1-2").slideUp(200);
		})
		/*性别选择*/
		
		
		$(".block:eq(0)").click(function()
		{	$("#sex").html("男");		
			$("#hideimg1").show();
			$("#hideimg2").hide();
			$(".block:eq(0)").addClass("addsexboder");
			$(".block:eq(1)").removeClass("addsexboder");
		})
		$(".block:eq(1)").click(function()
		{	$("#sex").html("女");				
			$("#hideimg1").hide();
			$("#hideimg2").show();
			$(".block:eq(1)").addClass("addsexboder");
			$(".block:eq(0)").removeClass("addsexboder");
		})
		/*图片更改*/		
		$("#changeimga").click(function()
		{
			$("#file1 input[type='file']").click();
		})
		/*上传简历*/
		$("#file2").click(function()
		{
			$("#hideresuemmiddle input[type='file']").click();
		})
		/*上传简历弹框的close*/
		$(".close").click(function()
		{
			$("#bighideresume").removeClass("addbighideresume");
			$("#hideresume").removeClass("addhideresume");
		})
		$("#up").click(function()
		{
			$("#bighideresume").addClass("addbighideresume");
			$("#hideresume").addClass("addhideresume");
		})
		
		/*编辑修改信息*/
		$("#show").click(function()
		{
			$("#hidemainleft3").slideDown(200);
		})
		$("#cancel").click(function()
		{
			if($("#sex").html("男"))
			{
				$("#sex").html("男");
			}
			else
			{
				$("#sex").html("女");
			}
			$("#hidemainleft3").slideUp(200);
		})
		$("#save").click(function()
		{
			$("#name").text($("#formname").val());
			$("#sp1").html($("#formname").val());			
			$("#record").html($("#formrecord").val());
			$("#experience").html($("#formexperience").val());
			$("#phone").html($("#formphone").val());
			$("#email").html($("#formemail").val());
			$("#hidemainleft3").slideUp(200);
		})
		/**/
		$("#mainleft2-2 a").click(function()
		{
			$("#hidemainleft5").slideDown(200);
		})
		/**/
		$("#mainleft4-1").click(function()
		{
			$("#hidemainleft4").slideDown(200);
		})
		$(".hideleft4").click(function()
		{
			$("#hidemainleft4").slideUp(200);
		})
		$("#mainleft5-1").click(function()
		{
			$("#hidemainleft5").slideDown(200);
		})
		$(".hideleft4").click(function()
		{
			$("#hidemainleft5").slideUp(200);
		})
		$("#mainleft6-1").click(function()
		{
			$("#hidemainleft6").slideDown(200);
		})
		$(".hideleft4").click(function()
		{
			$("#hidemainleft6").slideUp(200);
		})
		$("#mainleft7-1").click(function()
		{
			$("#hidemainleft7").slideDown(200);
		})
		$(".hideleft4").click(function()
		{
			$("#hidemainleft7").slideUp(200);
		})
		$("#mainleft8-1").click(function()
		{
			$("#hidemainleft8").slideDown(200);
		})
		$(".hideleft4").click(function()
		{
			$("#hidemainleft8").slideUp(200);
		})
		$("#mainleft9-1").click(function()
		{
			$("#hidemainleft9").slideDown(200);
		})
		$(".hideleft4").click(function()
		{
			$("#hidemainleft9").slideUp(200);
		})
		
		/*判断文本域中的字数*/
		$("#txtarea").keyup(function()
		{
			var textval=$(this).val().length;
			console.log(textval);
			var str=parseInt(600-textval);
			console.log(str);
			if(str>0)
			{
				$("#num").html('您还可以输入<font color="#FF0000">'+str+'</font>个字');
			}
			else
			{
				$("#num").html('您还可以输入<font color="#FF0000">'+0+'</font>个字');
				$("#num").val($('#num').val().substring(0,600));
			}
		})
		$("#txtarea2").keyup(function()
		{
			var textval=$(this).val().length;
			console.log(textval);
			var str=parseInt(100-textval);
			console.log(str);
			if(str>0)
			{
				$("#num2").html('您还可以输入<font color="#FF0000">'+str+'</font>个字');
			}
			else
			{
				$("#num2").html('您还可以输入<font color="#FF0000">'+0+'</font>个字');
				$("#num2").val($('#num').val().substring(0,100));
			}
		})
		/*图标显示*/
		$("#mainleft4").hover(function()
		{
			$(".hideimg:eq(0)").show();
		},function()
		{
			$(".hideimg:eq(0)").hide();
		})
		$("#mainleft5").hover(function()
		{
			$(".hideimg:eq(1)").show();
		},function()
		{
			$(".hideimg:eq(1)").hide();
		})
		$("#mainleft6").hover(function()
		{
			$(".hideimg:eq(2)").show();
		},function()
		{
			$(".hideimg:eq(2)").hide();
		})
		$("#mainleft7").hover(function()
		{
			$(".hideimg:eq(3)").show();
		},function()
		{
			$(".hideimg:eq(3)").hide();
		})
		$("#mainleft8").hover(function()
		{
			$(".hideimg:eq(4)").show();
		},function()
		{
			$(".hideimg:eq(4)").hide();
		})
		$("#mainleft9").hover(function()
		{
			$(".hideimg:eq(5)").show();
		},function()
		{
			$(".hideimg:eq(5)").hide();
		})
		
		
		/*底部拉钩微信图片显示*/
		$("#fs4").hover(function()
		{
			$("#hidefootimg").fadeIn(500);
		},function()
		{
			$("#hidefootimg").fadeOut(500);
		})
		
	})
	window.onload=function()
	{
			timer("step1Canvas",0,30,400);
	}
	/*定时器函数*/
	function timer(id,start,end,interval){
    window.setTimeout(function()
		{
        circle(id,start/100);
        start++;		
        if(start<end+1){
            timer(id,start,end,interval);
        }
    },interval);
	}
	
	/*绘制圆*/
	function circle(id,percent){
    var p=(percent*100).toFixed(0);
    var c=document.getElementById(id);
    var cxt=c.getContext("2d");
    //生成圆形（底圆）
    cxt.fillStyle="#D0D0D0";
    cxt.beginPath();
    cxt.moveTo(75, 75); 
    cxt.arc(75,75,70,0,Math.PI*2,false);
    cxt.closePath();
    cxt.fill();
    //生成扇形
    cxt.fillStyle="#009966";
    cxt.beginPath();
    cxt.moveTo(75, 75);
    if(percent==1){
        cxt.arc(75,75,70,0,Math.PI*2,false);
    }else if(percent==0){
        cxt.arc(75,75,70,0,0,true);
    }else{
        cxt.arc(75,75,70,Math.PI,Math.PI+Math.PI*2*percent,false);
    }
    cxt.closePath();
    cxt.fill();
    //生成圆形（上层园）
    cxt.fillStyle="#FFFFFF";
    cxt.beginPath();
    cxt.moveTo(75, 75); 
    cxt.arc(75,75,50,0,Math.PI*2,false);
    cxt.closePath();
    cxt.fill();
    //生成中间百分比文字
    cxt.font="20px arial";
    cxt.fillStyle="#000000";
    cxt.fillText(p+"%",55,75);
	//  cxt.fillText("0%",160,75);
	}