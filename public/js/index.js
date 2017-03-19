//登录注册页
$('.pass-reglink').click(function(){
	$('.login_tab').text('用户注册');
	$('#tab1').addClass('hide');
	$('#tab2').removeClass('hide');
})
$('.pass-loglink').click(function(){
	$('.login_tab').text('用户登录');
	$('#tab1').removeClass('hide');
	$('#tab2').addClass('hide');
})
//用户名
$('input#tab1-login-user').focus(function(){
	$('.user_msg').text('4-12位英文字母，区分大小写');
}).blur(function(){
	var regUser = /^[A-z]{4,12}$/;
	var val = $('input[name="user"]').val();
//	console.log(val);
	if(!val || !regUser.test(val)){
		$('.user_msg').css('color','red');
	}else{
		$('.user_msg').text('');
		$('.user_msg').css('color','#333');
	}
})
//密码
$('input#tab1-login-password').focus(function(){
	$('.pwd_msg').text('6~14个字符，支持数字、大小写字符');
}).blur(function(){
	$('.pwd_msg').text('');
})
//确认密码
$('input#tab1-again-password').focus(function(){
	$('.confirm_msg').text('必须与密码一致');
}).blur(function(){
	$('.confirm_msg').text('');
})
