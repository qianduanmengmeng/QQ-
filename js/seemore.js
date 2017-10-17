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
		//这是搜索切换
		$("#hiddenDiv").mouseover(function()
		{
			$("#hiddenDiv").show();
			if($("#hiddenDiv").find("span").text()=="职位")
			{
				$("#search-1").find("span").html("公司<font style='color:#009966'>&nbsp;▲</font>");	
			}
			else
			{
				$("#search-1").find("span").html("职位<font style='color:#009966'>&nbsp;▲</font>");	
			}
		})
		$("#hiddenDiv").mouseout(function()
		{
			$("#hiddenDiv").hide();
			if($("#hiddenDiv").find("span").text()=="职位")
			{
				$("#search-1").find("span").html("公司<font style='color:#009966'>&nbsp;▼</font>");	
			}							
			else
			{
				$("#search-1").find("span").html("职位<font style='color:#009966'>&nbsp;▼</font>");	
			}	
		})
		$("#search-1").mouseover(function()
		{			
			$("#hiddenDiv").show();			
			if($("#hiddenDiv").find("span").text()=="职位")
			{
				$("#search-1").find("span").html("公司<font style='color:#009966'>&nbsp;▲</font>");	
			}
			else
			{
				$("#search-1").find("span").html("职位<font style='color:#009966'>&nbsp;▲</font>");	
			}
		})
		$("#search-1").mouseout(function()
		{			
			$("#hiddenDiv").hide();
			if($("#hiddenDiv").find("span").text()=="职位")
			{
				$("#search-1").find("span").html("公司<font style='color:#009966'>&nbsp;▼</font>");	
			}								
			else
			{
				$("#search-1").find("span").html("职位<font style='color:#009966'>&nbsp;▼</font>");	
			}
		})
		$("#hiddenDiv").click(function()
		{			
			if($("#hiddenDiv").find("span").text()=="公司")
			{				
				$("#search-1").find("span").html("公司<font style='color:#009966'>&nbsp;▼</font>");	
				$("#hiddenDiv").find("span").html("职位");
				$("#search-2 input").attr("placeholder","请输入公司名称 如：拉钩"); 
				return;
			}
			if($("#hiddenDiv").find("span").text()=="职位")
			{
				$("#search-1").find("span").html("职位<font style='color:#009966'>&nbsp;▼</font>");	
				$("#hiddenDiv").find("span").html("公司");			
				$("#search-2 input").attr("placeholder","请输入职位名称 如：拉钩"); 	
			}
		})
		/*隐藏的更多城市显示*/
		var flag=true;
		$(".click").click(function()
		{
			if(flag)
			{
				$("#hidecity").slideDown(200);
				$(".colorgreen").html("▲");
			}
			else
			{
				$("#hidecity").slideUp(200);
				$(".colorgreen").html("▼");
			}
			flag=!flag;
		})
		/*left 收缩*/
		$(".show:eq(0)").click(function()
		{
			if($(".trangle:eq(0)").html()=='<font style="font-size:18px">▼</font>')
			{
				$(".mainleft1 ul").slideUp(400);				
				$(".trangle:eq(0)").html('<font style="font-size:30px">▶</font>');
				$(".mainleft1").animate({height:"50px"},400);
			}
			else
			{
				$(".mainleft1 ul").slideDown(200);
				$(".trangle:eq(0)").html('<font style="font-size:18px">▼</font>');
				$(".mainleft1").animate({height:"210px"},400);
			}			
		})
		$(".show:eq(1)").click(function()
		{
			if($(".trangle:eq(1)").html()=='<font style="font-size:18px">▼</font>')
			{
				$(".mainleft2 ul").slideUp(400);				
				$(".trangle:eq(1)").html('<font style="font-size:30px">▶</font>');
				$(".mainleft2").animate({height:"50px"},400);
			}
			else
			{
				$(".mainleft2 ul").slideDown(200);
				$(".trangle:eq(1)").html('<font style="font-size:18px">▼</font>');
				$(".mainleft2").animate({height:"210px"},400);
			}			
		})
		$(".show:eq(2)").click(function()
		{
			if($(".trangle:eq(2)").html()=='<font style="font-size:18px">▼</font>')
			{
				$(".mainleft3 ul").slideUp(400);				
				$(".trangle:eq(2)").html('<font style="font-size:30px">▶</font>');
				$(".mainleft3").animate({height:"50px"},400);
			}
			else
			{
				$(".mainleft3 ul").slideDown(200);
				$(".trangle:eq(2)").html('<font style="font-size:18px">▼</font>');
				$(".mainleft3").animate({height:"180px"},400);
			}			
		})
		$(".show:eq(3)").click(function()
		{
			if($(".trangle:eq(3)").html()=='<font style="font-size:18px">▼</font>')
			{
				$(".mainleft4 ul").slideUp(400);				
				$(".trangle:eq(3)").html('<font style="font-size:30px">▶</font>');
				$(".mainleft4").animate({height:"50px"},400);
			}
			else
			{
				$(".mainleft4 ul").slideDown(200);
				$(".trangle:eq(3)").html('<font style="font-size:18px">▼</font>');
				$(".mainleft4").animate({height:"130px"},400);
			}			
		})
		$(".show:eq(4)").click(function()
		{
			if($(".trangle:eq(4)").html()=='<font style="font-size:18px">▼</font>')
			{
				$(".mainleft5 ul").slideUp(400);				
				$(".trangle:eq(4)").html('<font style="font-size:30px">▶</font>');
				$(".mainleft5").animate({height:"50px"},400);
			}
			else
			{
				$(".mainleft5 ul").slideDown(200);
				$(".trangle:eq(4)").html('<font style="font-size:18px">▼</font>');
				$(".mainleft5").animate({height:"160px"},400);
			}			
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