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
		/*-----------------------------------------------------------*/
		$(".changeimg").click(function()
		{
			$(".file").click();
		})
		/*--------------------------------------*/
		$(".v1").hover(function()
		{
			$(".v1 img").attr('src','images/mycompany/v2.png');
			$(".reid").show();
		},function()
		{
			$(".v1 img").attr('src','images/mycompany/v1.png');
			$(".reid").hide();
		})
		/*---------------------------------------------------------*/
		$(".edit:eq(0)").click(function()
		{
			$(".edithide0").slideDown("slow");
		})
		/*-------------------------------left1修改信息------------------------------------*/
		$(".btn:eq(0)").click(function()
		{
			var valname=$(".input:eq(0)").val();						
			var tagsuc=$(".input:eq(1)").val();			
			var pl=$(".input:eq(0)").attr("placeholder");
			var p2=$(".input:eq(1)").attr("placeholder");
			if(valname=="")
			{					
				$(".input:eq(0)").attr("placeholder","此处不能为空！");
				$(".input:eq(0)").select().focus();				
			}
			
			if(tagsuc=="")
			{
				$(".input:eq(1)").attr("placeholder","此处不能为空！");
				$(".input:eq(1)").select().focus();
			}
			if(valname!=""&&tagsuc!="")
			{
				$(".top1:eq(0)").text(valname);	
				$(".top2:eq(0)").text(tagsuc);	
				$(".edithide0").slideUp("slow");
			}								
		})
		$(".btn:eq(1)").click(function()
		{
			$(".edithide0").slideUp("slow");
		})
		$(".btn:eq(3)").click(function()
		{
			$(".edithide").slideUp("slow");
		})
		$(".btn:eq(4)").click(function()
		{
			$(".edithide").slideUp("slow");
		})
		$(".edittex").click(function()
		{
			$(".edithide").slideDown("slow");
		})
		/*底部拉钩微信图片显示*/
		$("#fs4").hover(function()
		{
			$("#hidefootimg").fadeIn(500);
		},function()
		{
			$("#hidefootimg").fadeOut(500);
		})
		/*-----------------------------------------*/
		$(".hidecomde1").hover(function()
		{
			$(".hidecomde1-1").addClass("addbg");
		},function()
		{
			$(".hidecomde1-1").removeClass("addbg");
		})
		/*文本域*/
		$("#txtarea1").keyup(function()
		{
			var textval=$(this).val().length;
			console.log(textval);
			var str=parseInt(300-textval);
			console.log(str);
			if(str>0)
			{
				$("#num1").html('<font color="#FF0000">'+str+'</font>');
			}
			else
			{
				$("#num1").html('<font color="#FF0000">'+0+'</font>');
				$("#num1").val($('#num').val().substring(0,100));
			}
		})
		/*添加产品显示*/
		$(".addproduct").click(function()
		{
			$(".hidecomde").slideDown("slow");
		})
		/*隐藏产品*/
		$(".btn1:eq(0)").click(function()
		{
			$(".hidecomde").slideUp("slow");
		})
		/*编辑产品信息*/
		$(".changformation").click(function()
		{
			$(".hidecomdechange").slideDown("slow");
		})
		//修改产品名称和产品描述
		$(".btn2:eq(0)").click(function()
		{
			//值传递
			var proname=$(".input1:eq(0)").val();
			var promation=$("#txtarea1").val();
			if(proname!=""&&promation!="")
			{
				$("#productname").text(proname);
				$(".producttext").text(promation);
				$(".hidecomdechange").slideUp("slow");	
			}
			else if(proname=="")
			{
				$(".input1:eq(0)").attr("placeholder","产品名称不能为空！");
				$(".input1:eq(0)").select().focus();
			}		
			else if(promation=="")
			{
				$("#txtarea1").attr("placeholder","产品描述不能为空！");
			}	
		})
		/*公司描述*/
		/*文本域*/
		$("#txtarea2").keyup(function()
		{
			var textval=$(this).val().length;
			console.log(textval);
			var str=parseInt(300-textval);
			console.log(str);
			if(str>0)
			{
				$("#num2").html('<font color="#FF0000">'+str+'</font>');
			}
			else
			{
				$("#num2").html('<font color="#FF0000">'+0+'</font>');
				$("#num2").val($('#num').val().substring(0,100));
			}
		})
		$(".introduce").click(function()
		{
			$(".hideintroduce").slideDown("slow");
		})
		
		/*-----------------------------------------------------------------------*/
		
		//公司描述
		$(".btn3:eq(0)").click(function()
		{
			var information=$("#txtarea4").val();
			if(information!="")
			{
				$(".companytext").text(information);
				$(".hideintroduce").slideUp("slow");	
			}
			else
			{
				$(".hideintroduce").select().focus();
				$("#txtarea4").attr("placeholder","此处不能为空!");
			}		
		})
		$(".btn3:eq(1)").click(function()
		{
			$("#txtarea4").val(null);
			$(".hideintroduce").slideUp("slow");
		})
		/*----------------------hide right1------------------------*/
		/*------------------------------------------*/
		$(".editright:eq(0)").click(function()
		{
			
			$(".hideright1").slideDown("slow");
		})
		//修改公司信息
		$(".btnright1:eq(0)").click(function()
		{
			var position=$(".hideposition").val();
			var area=$(".hidearea").val();
			var size=$(".hidesize").val();
			var index=$(".hideindex").val();
			if(position!=""&&index!="")
			{
				$(".position").text(position);	
				$(".area").text(area);
				$(".size").text(size);
				$(".index").text(index);	
				$(".hideright1").slideUp("slow");
			}
			else if(position=="")
			{				
				$(".hideposition").attr("placeholder","此处不能为空！");
				$(".hideposition").select().focus();
			}
			else
			{
				$(".hideindex").attr("placeholder","此处不能为空！");
				$(".hideindex").select().focus();
			}		
			
		})
		
		$(".btnright1:eq(1)").click(function()
		{
			$(".hideright1").slideUp("slow");
		})
		/*----------------------hide right2------------------------*/
		$(".editright:eq(1)").click(function()
		{
			$(".hideright2").slideDown("slow");
		})
		//编辑融资阶段
		$(".btnright2:eq(0)").click(function()
		{
			var stage=$(".hidestage").val();
			$(".stage").text(stage);
			$(".hideright2").slideUp("slow");
		})
		$(".btnright2:eq(1)").click(function()
		{
			$(".hideright2").slideUp("slow");
		})
		/*----------------------hide right3------------------------*/
		$(".editright:eq(2)").click(function()
		{
			$(".hideright3").slideDown("slow");
		})
		//创始人编辑
		$(".btnright3:eq(0)").click(function()
		{
			var name=$(".hidename").val();
			var job=$(".hidejob").val();
			var tag=$(".hidetag").val();
			if(name!=""&&job!=""&&tag!="")
			{
				$(".name").text(name);
				$(".job").text(job);
				$(".tag").text(tag);
				$(".hideright3").slideUp("slow");
			}
			else if(name=="")
			{
				$(".hidename").attr("placeholder","姓名不能为空");
				$(".hidename").select().focus();
			}
			else if(job=="")
			{
				$(".hidejob").attr("placeholder","职位不能为空！");
				$(".hidejob").select().focus();
			}
			else if(tag=="")
			{
				$(".hidetag").attr("placeholder","个人描述不能为空！");
				$(".hidetag").select().focus();
			}
		})
		
		$(".btnright3:eq(1)").click(function()
		{
			$(".hideright3").slideUp("slow");
		})
		/*文本域*/
		$("#txtarea3").keyup(function()
		{
			var textval=$(this).val().length;
			console.log(textval);
			var str=parseInt(300-textval);
			console.log(str);
			if(str>0)
			{
				$("#num3").html('<font color="#FF0000">'+str+'</font>');
			}
			else
			{
				$("#num3").html('<font color="#FF0000">'+0+'</font>');
				$("#num3").val($('#num').val().substring(0,300));
			}
		})
		/*文本域*/
		$("#txtarea4").keyup(function()
		{
			var textval=$(this).val().length;
			console.log(textval);
			var str=parseInt(300-textval);
			console.log(str);
			if(str>0)
			{
				$("#num4").html('<font color="#FF0000">'+str+'</font>');
			}
			else
			{
				$("#num4").html('<font color="#FF0000">'+0+'</font>');
				$("#num4").val($('#num').val().substring(0,300));
			}
		})
		/*----------------------hide right4------------------------*/
		$(".addright:eq(0)").click(function()
		{
			$(".hideright4").slideDown("slow");
		})
		$(".btnright4:eq(0)").click(function()
		{ 
			$(".hideright4").slideUp("slow");
		})
		$(".btnright4:eq(1)").click(function()
		{
			$(".hideright4").slideUp("slow");
		})
		/*-------------------------------------------------------------*/
		$(".changetitle").click(function()
		{
			$(".hideright5").slideDown("fast");
		})
		$(".btnright5:eq(0)").click(function()
		{
			$(".hideright5").slideUp("fast");
		})
		$(".btnright5:eq(1)").click(function()
		{
			$(".hideright5").slideUp("fast");
		})
	})