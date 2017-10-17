// JavaScript Document
	$(function()
	{
		$(".size:eq(0)").click(function()
		{
			$("#hide1").show();
			$("#hide2").hide();
		})
		$(".size:eq(1)").click(function()
		{			
			$("#hide1").hide();
			$("#hide2").show();
		})
	})
	$(function()
	{
		$("#commentForm").validate();				
	})

