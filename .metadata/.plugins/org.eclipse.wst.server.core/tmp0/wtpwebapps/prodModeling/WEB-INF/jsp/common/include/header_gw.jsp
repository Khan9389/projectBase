<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	String loginStat = StringUtil.defaultString((String) request.getAttribute("loginStat"), "");
	String MBR_ID = StringUtil.defaultString((String) session.getAttribute("MBR_ID")); // 사용자 ID
%>
<!-- header -->
<header id="header">
	<div class="header_warp">
		<div class="inner">
			<!-- 로고 [s] -->
			<h1><a href="/"></a></h1>
			<!-- 로고 [e] -->
			<div class="util_group">
				<span class='offLogin' style="display:none"><a href="javascript:void(0);" onclick="goLoginPop()"	title="로그인 바로가기">로그인</a></span> 
				<span class='onLogin' style="display:none">환영합니다. <%=MBR_ID%> 님</span>
				<span class='onLogin' style="display:none"><a href="/logoutProc" >로그아웃</a></span>
			</div>
		</div>
	</div>
</header>

<!-- header -->


<!-- 로그인 팝업 [s] -->
<div class="layerPrivacy_login">
	<div class="bg"></div>
	<div class="popupcont">
		<div class="popupBody">
			<div class="btn_close">
				<a href="javascript:void(0);">close</a>
			</div>
			<div class="content login">
				<!-- 페이지특정 클래스 = login -->
				<div class="pop_cont_head">
					<h4>로그인</h4>
				</div>
				<div class="cont_body">
					<form class="form_wrap form_col_c form_full">
						<input type="hidden" name="_csrf">
						<div class="form_field">
							<label class="input_label sr-only">아이디</label>
							<div class="ui_col_12">
								<div class="input_wrap">
									<input type="text" name="mbrId" id="mbrId" placeholder="아이디" class="form_control ml0" onkeyup="if( event.keyCode==13 ){ $('#mbrPw').focus();}">
								</div>
							</div>
						</div>
						
						<div class="form_field mt10">
							<label class="input_label sr-only">비밀번호</label>
							<div class="ui_col_12">
								<div class="input_wrap">
									<input type="password" name="mbrPw" id="mbrPw" class="form_control ml0" placeholder="비밀번호" onkeyup="if( event.keyCode==13 ){ goLogin();}">
								</div>
							</div>
						</div>
						
						<div class="ui_row mt40">
							<div class="ui_col_12">
								<button type="button" class="btn btn_dark btn_block ml0" onclick="goLogin()">
									<span>로그인</span>
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- 로그인 팝업 [e] -->


<script>
$(function(){
	$('.layerPrivacy_login .btn_close, .layerPrivacy .bg').click(function() {
		$('.layerPrivacy_login').removeClass('on');
	});
	
	var loginStat = "<%=loginStat%>";
	
	if(loginStat === "LOGIN_FAIL"){
		alert("로그인 정보를 확인하세요.")
	}
	if( "<%=MBR_ID%>" == "" || "<%=MBR_ID%>" == undefined){
		$(".offLogin").show();	
	}else{
		$(".onLogin").show();
	}
	/* else if(loginStat === "FAIL_PW_ERR"){
		alert("비밀번호를 확인하세요.")
	} */
})

function goLoginPop() {
	$("#mbrId").val('');
	$("#mbrPw").val('');
	$('.layerPrivacy_login').addClass('on');
}

function validateLogin(){
	
	if(cf_isEmpty($("#mbrId").val().trim())){
		alert("아이디를 입력하세요.");
		$("#mbrId").focus();  return false;
	}
	if(cf_isEmpty($("#mbrPw").val().trim())){
		alert("비밀번호를 입력하세요.");
		$("#mbrPw").focus();  return false;
	}
	return true;
}

function goLogin(){
	
	if(!validateLogin()) return;
	
	var params = {
			mbrId : $("#mbrId").val(),
			inputMbrPw : CryptoJS.SHA256($("#mbrPw").val()).toString(),
		}
	cf_gotoUrl("/loginProc", params);
}

</script>