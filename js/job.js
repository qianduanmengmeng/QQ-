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
		
		
		/*底部拉钩微信图片显示*/
		$("#fs4").hover(function()
		{
			$("#hidefootimg").fadeIn(500);
		},function()
		{
			$("#hidefootimg").fadeOut(500);
		})
		/*文本域*/
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
	})