// JavaScript Document

		var mouseover_tid=[];
		var mouseout_tid=[];
	//鼠标进入div显示隐藏部分
	$(function()
	{
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
		/*控制左边导航栏div1的显示*/
		$("#container2-1").mouseover(function()
		{
			$("#container2-1").addClass("addborder");
			$("#hidediv1").css("display","block");
		})
		$("#hidediv1").mouseover(function()
		{
			$("#container2-1").addClass("addborder");
			$("#hidediv1").css("display","block");
		})
		$("#hidediv1").mouseout(function()
		{
			if($("#container2-1").mouseover())
			{
				$("#container2-1").removeClass("addborder");
				$("#hidediv1").css("display","none");	
			}			
		})
		$("#container2-1").mouseout(function()
		{
			$("#container2-1").removeClass("addborder");
			$("#hidediv1").css("display","none");	
		})
		/*控制左边导航栏div1的显示*/
		$("#container2-2").mouseover(function()
		{
			$("#container2-2").addClass("addborder");
			$("#hidediv2").css("display","block");
		})
		$("#hidediv2").mouseover(function()
		{
			$("#container2-2").addClass("addborder");
			$("#hidediv2").css("display","block");
		})
		$("#container2-2").mouseout(function()
		{
			$("#container2-2").removeClass("addborder");
			$("#hidediv2").css("display","none");	
		})
		$("#hidediv2").mouseout(function()
		{
			$("#container2-2").removeClass("addborder");
			$("#hidediv2").css("display","none");	
		})
		/*控制左边导航栏div3的显示*/
		$("#container2-3").mouseover(function()
		{
			$("#container2-3").addClass("addborder");
			$("#hidediv3").css("display","block");
		})
		$("#hidediv3").mouseover(function()
		{
			$("#container2-3").addClass("addborder");
			$("#hidediv3").css("display","block");
		})
		$("#container2-3").mouseout(function()
		{
			$("#container2-3").removeClass("addborder");
			$("#hidediv3").css("display","none");	
		})
		$("#hidediv3").mouseout(function()
		{
			$("#container2-3").removeClass("addborder");
			$("#hidediv3").css("display","none");	
		})
		/*控制左边导航栏div4的显示*/
		$("#container2-4").mouseover(function()
		{
			$("#container2-4").addClass("addborder");
			$("#hidediv4").css("display","block");
		})
		$("#hidediv4").mouseover(function()
		{
			$("#container2-4").addClass("addborder");
			$("#hidediv4").css("display","block");
		})
		$("#container2-4").mouseout(function()
		{
			$("#container2-4").removeClass("addborder");
			$("#hidediv4").css("display","none");	
		})
		$("#hidediv4").mouseout(function()
		{
			$("#container2-4").removeClass("addborder");
			$("#hidediv4").css("display","none");	
		})
		/*控制左边导航栏div5的显示*/
		$("#container2-5").mouseover(function()
		{
			$("#container2-5").addClass("addborder");
			$("#hidediv5").css("display","block");
		})
		$("#hidediv5").mouseover(function()
		{
			$("#container2-5").addClass("addborder");
			$("#hidediv5").css("display","block");
		})
		$("#container2-5").mouseout(function()
		{
			$("#container2-5").removeClass("addborder");
			$("#hidediv5").css("display","none");	
		})
		$("#hidediv5").mouseout(function()
		{
			$("#container2-5").removeClass("addborder");
			$("#hidediv5").css("display","none");	
		})
		/*控制左边导航栏div6的显示*/
		$("#container2-6").mouseover(function()
		{
			$("#container2-6").addClass("addborder");
			$("#hidediv6").css("display","block");
		})
		$("#hidediv6").mouseover(function()
		{
			$("#container2-6").addClass("addborder");
			$("#hidediv6").css("display","block");
		})
		$("#container2-6").mouseout(function()
		{
			$("#container2-6").removeClass("addborder");
			$("#hidediv6").css("display","none");	
		})
		$("#hidediv6").mouseout(function()
		{
			$("#container2-6").removeClass("addborder");
			$("#hidediv6").css("display","none");	
		})
		/*广告鼠标悬停的切换*/

		
		$(".hidead").hover(function()
		{	
			$(this).addClass("addop");		
		},function()
		{
			$(this).removeClass("addop");	
		})

		/*banner 图的切换*/		
		/*选项卡切换*/
		$("#workstation1").click(function()
		{
			$("#workstation1").css("border-top-color","#009933");
			$("#workstation2").css("border-top-color","#FFFFFF");
			$("#workdiv").show();
			$("#workdiv2").hide();
		})
		$("#workstation2").click(function()
		{
			$("#workstation2").css("border-top-color","#009933");
			$("#workstation1").css("border-top-color","#FFFFFF");
			$("#workdiv2").show();
			$("#workdiv").hide();
		})
		/*微信二维码的悬浮显示*/
		$("#fs4").hover(function()
		{
			$("#hidefootimg").show();
		},function()
		{
			$("#hidefootimg").hide();
		})
		/*$(".divimg:eq(0)").hover(function()
		{
			clearTimeout(T);
			$("#boderdiv1").slideDown("fast");
			$("#bannerimg img").attr("src","images/bannerimg/4.jpg");
		},function()
		{
			setInterval("banner()",2000);
			$("#boderdiv1").hide();
		})									
		$(".divimg:eq(1)").hover(function()
		{
			clearTimeout(T);
			$("#boderdiv2").slideDown("fast");
			$("#bannerimg img").attr("src","images/bannerimg/5.jpg");
		},function()
		{
			setInterval("banner()",2000);
			$("#boderdiv2").hide();
		})										
		$(".divimg:eq(2)").hover(function()
		{
			clearTimeout(T);
			$("#boderdiv3").slideDown("fast");
			$("#bannerimg img").attr("src","images/bannerimg/6.jpg");			
		},function()
		{
			setInterval("banner()",2000);
			$("#boderdiv3").hide();
		})*/
								
	})
		var x=4;
		function banner()
		{			
			$("#bannerimg img").attr("src","images/bannerimg/"+x+".jpg");
			$("#boderdiv"+(x-3)).slideDown("fast").siblings(this).hide();			
			x++;
			if(x>=7)
			{
				x=4;
			}
			T=setTimeout("banner()",2000);
		}		
		window.onload=function()
		{
			banner();
		}		
