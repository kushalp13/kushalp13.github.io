function login()
	{
		var uname = document.getElementById("uname").value;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(uname =='')
		{
			alert("Please enter username.");
		}
		else if(!filter.test(uname))
		{
			alert("Enter valid email id.");
        }
		else
		{
            alert('Thank You for Login');
            window.location = "/head/home_page.html";
		}
	}		
document.getElementById("sendlogin").addEventListener("click",login);
