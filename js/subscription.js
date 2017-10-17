// JavaScript Document
$(function()
	{
		/*表单验证*/
		$(".input:eq(0)").keyup(function()
		{
			var mailval=$(".input:eq(0)").val();
			var email=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
			if(mailval=='')
			{
				$(".tip:eq(0)").html('邮箱地址不能为空！');	
				$(".input:eq(0)").select().focus();
			}
			else
			{			
				if(email.test(mailval)==false)
				{
					$(".tip:eq(0)").html('邮箱格式不正确！');
				}
				else{$(".tip:eq(0)").html('<font color="green">㊣</font>');}
			}
		})
		$(".input:eq(0)").blur(function()
		{
			var mailval=$(".input:eq(0)").val();
			if(mailval=='')
			{
				$(".tip:eq(0)").html('邮箱地址不能为空！');				
				$(".input:eq(0)").select().focus();
			}
		})
		$(".input:eq(2)").blur(function()
		{
			var job=$(".input:eq(2)").val();
			if(job=='')
			{
				$(".tip:eq(2)").html('职位不能为空！');
				$(".input:eq(2)").select().focus();
			}
			else{$(".tip:eq(2)").html('<font color="green">㊣</font>');}	
		})
		
		$(".input:eq(3)").blur(function()
		{
			var workarea=$(".input:eq(3)").val();
			if(workarea=='')
			{
				$(".tip:eq(3)").html('工作地点不能为空！');
				$(".input:eq(3)").select().focus();
			}
			else{$(".tip:eq(3)").html('<font color="green">㊣</font>');}	
		})
		$(".input:eq(1)").mouseup(function()
		{
			var week=$(".input:eq(1)").val();
			if(week==1)
			{
				$(".tip:eq(1)").html('请选择周期！');
			}
			else{$(".tip:eq(1)").html('<font color="green">㊣</font>');}	
		})
		
		/*保存时进行判断*/
		$(".block:eq(0)").click(function()
		{
			var mailval=$(".input:eq(0)").val();
			var email=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
			if(mailval=='')
			{
				$(".tip:eq(0)").html('邮箱地址不能为空！');
				$(".input:eq(0)").select().focus();
			}
			else
			{			
				if(email.test(mailval)==false)
				{
					$(".tip:eq(0)").html('邮箱格式不正确！');
					$(".input:eq(0)").select().focus();
				}
				else{$(".tip:eq(0)").html('<font color="green">㊣</font>');}
			}
			var week=$(".input:eq(1)").val();
			if(week==1)
			{
				$(".tip:eq(1)").html('请选择周期！');
			}
			else{$(".tip:eq(1)").html('');}	
			var job=$(".input:eq(2)").val();
			if(job=='')
			{
				$(".tip:eq(2)").html('职位不能为空！');
			}
			else{$(".tip:eq(2)").html('');}	
			var workarea=$(".input:eq(3)").val();
			if(workarea=='')
			{
				$(".tip:eq(3)").html('工作地点不能为空！');
			}
			else{$(".tip:eq(3)").html('');}			
		})
		/*重置按钮*/
		$(".block:eq(1)").click(function()
		{
			$("#hide input").click();
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