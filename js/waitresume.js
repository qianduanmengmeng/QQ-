// JavaScript Document
$(function()
	{
		/*head 下拉菜单的显示与隐藏*/
		$("#headdisplay").hover(function()
		{
			$("#middleright ul").show();
			$("#middleright span").html("张豪&nbsp;&nbsp;&nbsp;&nbsp;▲");
		},function()
		{
			$("#middleright ul").hide();
			$("#middleright span").html("张豪&nbsp;&nbsp;&nbsp;&nbsp;▼");			
		})
		$("#middleright ul").hover(function()
		{
			$("#middleright span").html("张豪&nbsp;&nbsp;&nbsp;&nbsp;▲");
			$("#middleright ul").show();
		},function()
		{
			$("#middleright span").html("张豪&nbsp;&nbsp;&nbsp;&nbsp;▼");
			$("#middleright ul").hide();
		})
		
		/*-------------------------点击显示-------------------------------------*/
		var flag=true;
		$("#mainright2-1 a").click(function()
		{
			if(flag==true)
			{
				$("#triangle").html('<font color="#333333">▲</font>');
				$(".mainright2-2").addClass("addheight");
				$(".mainright2-2 table").slideDown(1000);
			}
			else
			{
				$(".mainright2-2 table").hide(100);
				$(".mainright2-2").removeClass("addheight");
				$("#triangle").html('<font color="#333333">▼</font>');
			}
			flag=!flag;
		})
		/*简历删除*/
		$("#delet").click(function()
		{
			var gre=confirm("你确定要删除此简历吗？")
			if(gre==true)
			{
				$(".check:checked").parent().parent().remove();
			}
		})
		$(".delet").click(function()
		{
			var gre=confirm("你确定要删除所有简历吗？")
			if(gre==true)
			{
				$(".check:checked").parent().parent().remove();
			
			}
		})
		$("#mainright2 input[type='checkbox']:eq(0)").click(function()
		{
			if(flag==true)
			{
				$("#mainright2 input[type='checkbox']:gt(0)").attr("checked",true);
			}
			else
			{
				$("#mainright2 input[type='checkbox']:gt(0)").attr("checked",false);
			}
			flag=!flag;
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