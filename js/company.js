// JavaScript Document
/*微信二维码的悬浮显示*/
	$(function()
	{
		$("#fs4").hover(function()
		{	
			$("#hidefootimg").show();
		},function()
		{
			$("#hidefootimg").hide();
		})	
	}) 
	$(function()
	{
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
	})

		