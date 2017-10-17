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
		/*---------------------*/
		$(".delet").click(function()
		{
			$(this).parent().parent().parent().remove();
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