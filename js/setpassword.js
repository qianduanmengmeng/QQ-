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
		/*保存验证*/
			
		$(".save").click(function()
		{
			var nowpassd=$(".input:eq(0)").val();
			var newpassd=$(".input:eq(1)").val();
			var repassd=$(".input:eq(2)").val();
			if(nowpassd=='')
			{				
				$(".tip:eq(0)").html('<font color="red">输入不能为空</font>');
			}
			else{$(".tip:eq(0)").html('<font color="green">√㊣</font>');}
			if(newpassd=='')
			{				
				$(".tip:eq(1)").html('<font color="red">输入不能为空</font>');
			}
			else{$(".tip:eq(1)").html('<font color="green">√㊣</font>');}
			if(repassd=='')
			{				
				$(".tip:eq(2)").html('<font color="red">输入不能为空</font>');
			}
			else
			{
				if(newpassd==repassd)
				{
					$(".tip:eq(2)").html('<font color="green">√㊣</font>');	
				}
				else
				{
					$(".tip:eq(2)").html('<font color="red">新密码不一致</font>');
					$(".input:eq(2)").select();
				}
			}			
		})
		$(".input:eq(0)").blur(function()
		{
			var nowpassd=$(".input:eq(0)").val();
			var newpassd=$(".input:eq(1)").val();
			var repassd=$(".input:eq(2)").val();
			if(nowpassd=='')
			{				
				$(".tip:eq(0)").html('<font color="red">输入不能为空</font>');
				$(".input:eq(0)").select();
			}
			else{$(".tip:eq(0)").html('<font color="green">√㊣</font>');}
		})
		$(".input:eq(1)").blur(function()
		{
			var nowpassd=$(".input:eq(0)").val();
			var newpassd=$(".input:eq(1)").val();
			var repassd=$(".input:eq(2)").val();
			if(newpassd=='')
			{				
				$(".tip:eq(1)").html('<font color="red">输入不能为空</font>');
				$(".input:eq(1)").select().focus();
			}
			else{$(".tip:eq(1)").html('<font color="green">√㊣</font>');}
		})
		$(".input:eq(2)").keyup(function()
			{
				var nowpassd=$(".input:eq(0)").val();
				var newpassd=$(".input:eq(1)").val();
				var repassd=$(".input:eq(2)").val();
				if(newpassd==repassd)
				{
					$(".tip:eq(2)").html('<font color="green">√㊣</font>');	
				}
				else
				{
					$(".tip:eq(2)").html('<font color="red">新密码不一致</font>');
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