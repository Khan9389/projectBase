<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
	String loginStat = StringUtil.defaultString((String) request.getAttribute("loginStat"), "");
	String MBR_ID = StringUtil.defaultString((String) session.getAttribute("MBR_ID")); // 사용자 ID
%>
<header id="header">
	<!-- head start -->
	<div class="common_header main_header">
		<!-- top title [s] -->
		<div class="header_warp">
			<div class="headerV18 headerVnew">
				<div class="inner">
					<!-- 로고 [s] -->
					<h1><a href="/"></a></h1>
					<!-- 로고 [e] -->
					
					<div class="util_group">
						<span class='offLogin' style="display:none"><a href="javascript:void(0);" onclick="goLoginPop()"	title="로그인 바로가기">로그인</a></span> 
						<span class='offLogin' style="display:none"><a href="javascript:void(0);" onclick="goJoinPop()" title="회원가입 바로가기">회원가입</a></span>
						<span class='onLogin' style="display:none">환영합니다. <%=MBR_ID%> 님</span>
						<span class='onLogin' style="display:none"><a href="javascript:void(0);" onclick="goShowRoom()" title="마이페이지 바로가기">마이룸</a></span>
						<span class='onLogin' style="display:none"><a href="/logoutProc" >로그아웃</a></span>
					</div>
				</div>
			</div>
		</div>
		<!-- top title [e] -->		
	</div>

	
</header>

<!-- 로그인 팝업 [s] -->
<div class="layerPrivacy">
	<div class="bg"></div>
	<div class="popupcont">
		<div class="popupBody">
			<div class="btn_close">
				<a href="javascript:void(0);">close</a>
			</div>
			<div class="content login">
				<!-- 페이지특정 클래스 = login -->
				<div class="cont_head">
					<h4>로그인</h4>
				</div>
				<div class="cont_body">
					<div class="form_wrap form_col_c form_full">
						<input type="hidden" name="_csrf">
						<div class="form_field">
							<label class="input_label sr-only">아이디</label>
							<div class="ui_col_12">
								<div class="input_wrap">
									<input type="text" name="mbrId" id="mbrId" placeholder="아이디" class="form_control" onkeyup="if( event.keyCode==13 ){ $('#mbrPw').focus();}">
								</div>
							</div>
						</div>
						
						<div class="form_field mt10">
							<label class="input_label sr-only">비밀번호</label>
							<div class="ui_col_12">
								<div class="input_wrap">
									<input type="password" name="mbrPw" id="mbrPw" class="form_control" placeholder="비밀번호" onkeyup="if( event.keyCode==13 ){ goLogin();}">
								</div>
							</div>
						</div>
						
						<div class="ui_row mt40">
							<div class="ui_col_12">
								<button type="button" class="btn btn_dark btn_block" onclick="goLogin()">
									<span>로그인</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- 로그인 팝업 [e] -->


<!-- 회원가입 팝업 [s] -->
<div class="layerPrivacy_poly">
	<div class="bg"></div>
	<div class="popupcont">
		<div class="popupBody">
			<div class="btn_close">
				<a href="javascript:void(0);">close</a>
			</div>
			<div class="content login">
				<div class="cont_head">
					<h4>회원가입</h4>
				</div>
				<div class="cont_body">
					<div class="form_wrap form_col_c form_full">
						<input type="hidden" name="_csrf">
						<div class="form_field">
							<label class="input_label sr-only">아이디</label>
							<div class="ui_col_12">
								<div class="input_wrap">
									<input type="text" name="joinId" id="joinId" placeholder="아이디" class="form_control" onkeyup="if( event.keyCode==13 ){ $('#joinPw').focus();}">
								</div>
							</div>
						</div>
						
						<!-- 비밀번호 [s] -->
						<div class="form_field mt10">
							<label class="input_label sr-only">비밀번호</label>
							<div class="ui_col_12">
								<div class="input_wrap">
									<input type="password" name="joinPw" id="joinPw" class="form_control" placeholder="비밀번호" onkeyup="if( event.keyCode==13 ){ $('#joinPwChk').focus();}">
								</div>
							</div>
						</div>
						<!-- 비밀번호 [e] -->
						
						<!-- 비밀번호 확인 [s] -->
						<div class="form_field mt10">
							<label class="input_label sr-only">비밀번호 확인</label>
							<div class="ui_col_12">
								<div class="input_wrap">
									<input type="password" name="joinPwChk" id="joinPwChk" class="form_control" placeholder="비밀번호 화인" onkeyup="if( event.keyCode==13 ){ joinMbr();}">
								</div>
							</div>
						</div>
						<!-- 비밀번호 확인 [e] -->
						
						<div class="ui_row mt40">
							<div class="ui_col_12">
								<button type="button" class="btn btn_dark btn_block" onclick="joinMbr()">
									<span>회원가입</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- 회원가입 팝업 [e] -->
<script>
$(function(){
	$('.layerPrivacy .btn_close, .layerPrivacy .bg').click(function() {
		$('.layerPrivacy').removeClass('on');
	});
	$('.layerPrivacy_poly .btn_close, .layerPrivacy_poly .bg').click(function() {
		$('.layerPrivacy_poly').removeClass('on');
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
	$('.layerPrivacy').addClass('on');
}

function goJoinPop() {
	$("#joinId").val('');
	$("#joinPw").val('');
	$("#joinPwChk").val('');
	$('.layerPrivacy_poly').addClass('on');
}

function validateJoin(){
	
	if(cf_isEmpty($("#joinId").val().trim())){
		alert("아이디를 입력하세요.");
		$("#joinId").focus();  return false;
	}
	if(cf_isEmpty($("#joinPw").val().trim())){
		alert("비밀번호를 입력하세요.");
		$("#joinPw").focus();  return false;
	}
	
	if($("#joinPw").val() != $("#joinPwChk").val()){
		alert("비밀번호를 확인해주세요.")
		$("#joinPwChk").focus(); return false;		
	}
	return true;
}

function joinMbr(){
	if(!validateJoin()) 
		return;
	
	params = {
		mbrId : $("#joinId").val(),
		mbrPw : CryptoJS.SHA256($("#joinPw").val()).toString() 
	}
	cf_call("/joinMbr", params, joinMbrCB);
}

function joinMbrCB(data){
	if(data.result == "succ"){
		alert("회원가입이 완료되었습니다.");
		location.href="/";
	}else{
		alert("이미 사용중인 아이디입니다.");
	}
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


function goShowRoom() {
	location.href="/fittingRoom";
}

function goList(gen, typ){
	
	params = {
		gen : gen,
		typ : typ
	}
	cf_gotoUrl("/list", params);
}


//상품 좋아요 S
function isLogin(){
	if("<%=MBR_ID%>" == "" || "<%=MBR_ID%>" == null || "<%=MBR_ID%>" == undefined){
		alert("로그인후 이용 가능합니다.")		
		return false;
	}
	return true;
}

function wishPrd(v){
	if(!isLogin()){
		return
	}
	
	var likeYn = $(v).attr("lk");
	var brnCd = $(v).attr("bCd");
	var prdCd = $(v).attr("pCd");
	var prdTyp = $(v).attr("typ");
	var prdGen = $(v).attr("pGen");
	
	params = {
		mbrId : "<%=MBR_ID%>",
		likeYn : likeYn,
		brnCd : brnCd,
		prdCd : prdCd,
		prdTyp : prdTyp,
		prdGen : prdGen
	}
	
	cf_call("/wishPrd", params, function(data){
		if(data.result.process == "succ"){
			if(likeYn == "Y"){
				$(v).attr('class','itemLikeN');
				$(v).attr('lk','N');
			}else{
				$(v).attr('class','itemLikeY');
				$(v).attr('lk','Y');
			}
		}else{
			alert(data.result.msg)
		}
		
	});
}
//상품 좋아요 E
</script>