function login()
	{
		var uname = document.getElementById("uname").value;
		var pwd = document.getElementById("pwd").value;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(uname =='')
		{
			alert("Please enter username.");
		}
		else if(pwd=='')
		{
        	alert("Enter the password");
		}
		else if(!filter.test(uname))
		{
			alert("Enter valid email id.");
		}
		else if(pwd.length < 6 || pwd.length > 6)
		{
			alert("Password min and max length is 6.");
		}
		else
		{
	        alert('Thank You for Login');
            window.location = "/employee_html/home_page.html";
		}
	}	
document.getElementById("sendlogin").addEventListener("click",login);