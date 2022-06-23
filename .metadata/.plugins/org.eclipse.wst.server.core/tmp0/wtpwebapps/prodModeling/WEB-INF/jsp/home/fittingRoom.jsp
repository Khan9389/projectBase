<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/jsp/common/include/common_header.jsp"%>
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<title>패션3D미팅</title>
	<%@include file="/WEB-INF/jsp/common/include/home_static_resource.jsp"%>
	
	<script src="/static_resources/viewer/js/fashion.bundle.js"></script>
	<script src="/static_resources/viewer/js/lib/jquery-3.1.1.min.js"></script>
	<script src="/static_resources/viewer/js/lib/draco/draco_decoder.js"></script>
	<script src="/static_resources/viewer/js/lib/draco/msc_basis_transcoder.js"></script>
</head>
<body>
	<%@include file="/WEB-INF/jsp/common/include/home_header.jsp"%>
	<div id="container" class="container main">
		<div class="wrap">
			<%@include file="/WEB-INF/jsp/common/include/home_lnb.jsp"%>
			<!-- 상품 대표설명 -->
			<div class="content pd_detail dp_list">
				<div class="cont_head">
					<p class="displayH t_c">마이피팅룸</p>
				</div>
				<div class="cont_bodys">
					<!-- CONT-BODY -->
					<div class="item_detail" style="display: flex;">
						<div class="area_pic">
							<div class="thumb_list_wrap">
								<div class="thumb_nav_wrap" style="display: flex;">
									<button class="button" onclick="genderChange()">모델전환</button>
									<button class="button" onclick="clothReset()">의류리셋</button>
									<button class="button" onClick="goSavePop()">저장하기</button>
								</div>
								
								<div class="thumbs">
									<iframe id="3dviewer" width="100%" height="100%" frameborder="0" src="/static_resources/viewer/embed_viewer.html"></iframe>
								</div>
								
								<!-- <div id="_inven" style="position:absolute; margin-left:50%; padding:10px; font-size:18px">
								    <div name="sex" style="padding:10px">
								      [성별]
								      <span val="m" check="on">남성</span>
								      <span val="f">여성</span>
								    </div>
							  	
								    <div name="top" style="padding:10px">
								      [상의]
								      <span val="data/model/clothes/1.glb" check="on">상의-1</span>
								      <span val="data/model/clothes/2.glb">상의-2</span>
								    </div>
								    
								    <div name="pants" style="padding:10px">
								      [하의]
								      <span val="data/model/clothes/11.glb" check="on">하의-1</span>
								      <span val="data/model/clothes/12.glb">하의-2</span>
								    </div>
								    
								    <div name="coat" style="padding:10px">
								      [외투]
								      <span val="data/model/clothes/21.glb">외투-1</span>
								    </div>
								    <div name="dress" style="padding:10px">
								      [원피스]
								      <span val="data/model/clothes/31.glb">원피스-1</span>
								    </div>
								  </div>  -->
							</div>
						</div>
						
						<div class="contents main_recomm">
							<div class="cont_body">
								<div class="fitsec_head">
									<div class="filter action tag_list">
										<button class="btn active" onClick="getList('F')" data-tab="tag1">#여성</button>
										<button class="btn" onClick="getList('M')" data-tab="tag2">#남성</button>
										<button class="btn" onClick="getList('A')" data-tab="tag3">#남여공용</button>
									</div>
									
									<select class="select_home" name="setName" id="setName" onchange="onSet()">
										<!-- <option value="">세트 선택하기</option> -->
									</select>
								</div>
								
								<div class="fitsec_body">
									<div class="tagitem active">
										<div class="sec_body_content">
											<!-- 상의 [s] -->
											<div class="swiper-container post-recomm">
												<h5 class="toptitle">상의</h5>
												<div class="swiper-wrapper" id="T"></div>
											</div>
											<!-- 상의 [e] -->
											
											<!-- 하의 [s] -->
											<div class="swiper-container post-recomm">
												<h5 class="toptitle">하의</h5>
												<div class="swiper-wrapper" id="P"></div>
											</div>
											<!-- 하의 [s] -->
											
											<!-- 외투 [s] -->
											<div class="swiper-container post-recomm">
												<h5 class="toptitle">외투</h5>
												<div class="swiper-wrapper" id="C"></div>
											</div>
											<!-- 외투 [e] -->
											
											<!-- 원피스 [s] -->
											<div class="swiper-container post-recomm">
												<h5 class="toptitle">원피스</h5>
												<div class="swiper-wrapper" id="D"></div>
											</div>
											<!-- 원피스 [e] -->
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<%@include file="/WEB-INF/jsp/common/include/home_footer.jsp"%>
</body>

<div class=layerPrivacy_alret>
	<div class="bg"></div>
	<div class="popupcont">
		<div class="popupBody">
			<div class="btn_close">
				<a href="javascript:void(0);">close</a>
			</div>

			<div class="cont_head">
				<h4>세트저장</h4>
			</div>
			<div class="cont_body">
				<div class="form_wrap form_col_c form_full">
					<input type="hidden" name="_csrf">
					<div class="form_field mt10">
						<label class="input_label sr-only">저장할 세트명을 입력하세요.</label>
						<div class="ui_col_12">
							<div class="input_wrap">
								<input type="text" name="setNm" id="setNm" class="form_control" placeholder="저장할 세트명을 입력하세요.">
							</div>
						</div>
					</div>
					
					<div class="ui_row mt40">
						<div class="ui_col_12">
							<button type="button" class="btn btn_dark btn_block" onclick="goSave()">
								<span>저장</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<script>
var tab_id = 'tag1'; // tab 분기를 위한 변수
var mbrId = "<%=MBR_ID%>";
var load
var viewParams = {sex: 'f', top: null, pants: null, coat: null, dress: null};
var saveParam = {
	T : null,
	P : null,
	C : null,
	D : null
}

$(function(){
	
	$('.layerPrivacy_alret .btn_close, .layerPrivacy_alret .bg').click(function() {
		$('.layerPrivacy_alret').removeClass('on');
	});
	
	$('.tag_list .btn').click(function(){
		$('.tag_list .btn').removeClass('active');
		$(this).addClass('active');
		$("#" + tab_id).addClass('active');
		$("#setName").val("");
	});
	
	swiperSet();
	
	getWishList();
	
	getList('F');
	
	
});

// 스와이퍼 [s]
function swiperSet(){
	var main_pick_nav = new Swiper('.post-recomm', { 
		slidesPerView: "auto",
		pagination: {},
		navigation: {},
		on:{}
	});
}
// 스와이퍼 [e]

// 저장된 상품 S
function getWishList() {	
	var params = {
		mbrId : "<%=MBR_ID%>"
	}
	
	cf_call("/fittingRoom/getWishList", params, getWishListCB);
}
function getWishListCB(data) {
	sh_dataList = data;
	
	$("#setName").html("");
	var ownBrnList = "";
	ownBrnList += '<option value="">세트 선택하기</option>';
	
	if (data.length > 0) {
		for (var i = 0; i < sh_dataList.length; i++) {
			ownBrnList += '<option value="'+ sh_dataList[i].SET_CD +'">'+ sh_dataList[i].SET_NM +'</option>';
		}
	}
	
	$("#setName").html(ownBrnList);
}
// 저장된 상품 S


// 좋아요 상품 S
function getList(sex){
	params = {
		sex : sex,
		mbrId : "<%=MBR_ID%>"
	}
 	cf_call("/fittingRoom/getList", params, getListCB);
}

function getListCB(data){
	g_dataList = data;
	
	$("#T").html("");
	$("#P").html("");
	$("#C").html("");
	$("#D").html("");
	
	var topHtml = "";
	var pantsHtml = "";
	var setHtml = "";
	var outerHtml = "";
	
	for(var i = 0; i < g_dataList.length; i++){
		if(g_dataList[i].PRD_TYP == "T"){
			topHtml += '<div class="swiper-slide">';
			topHtml += '	<div class="item_prod">';
			topHtml += '		<div class="item_state fitting">';
			if(saveParam.T == g_dataList[i].PRD_CD){
				topHtml += '			<a href="javascript:void(0);" class="itemLink T fitActive" data-type="'+ g_dataList[i].PRD_TYP +'" data-prdCd="' + g_dataList[i].PRD_CD + '" data-3D="/fileDn?p=' + g_dataList[i].PRD_3D_DAT + '">';
			}else{
				topHtml += '			<a href="javascript:void(0);" class="itemLink T" data-type="'+ g_dataList[i].PRD_TYP +'" data-prdCd="' + g_dataList[i].PRD_CD + '" data-3D="/fileDn?p=' + g_dataList[i].PRD_3D_DAT + '">';				
			}
			topHtml += '				<div class="itemPic fitting">';
			topHtml += '					<img src="/fileDn?p='+g_dataList[i].PRD_2D_DAT+'">';
			topHtml += '				</div>';
			topHtml += '			</a>';
			topHtml += '		</div>';
			topHtml += '	</div>';
			topHtml += '</div>';
		}
		
		if(g_dataList[i].PRD_TYP == "P"){
			pantsHtml += '<div class="swiper-slide">';
			pantsHtml += '	<div class="item_prod">';
			pantsHtml += '		<div class="item_state fitting" name="top">';
			if(saveParam.P == g_dataList[i].PRD_CD){
				pantsHtml += '			<a href="javascript:void(0);" class="itemLink P fitActive" data-type="'+ g_dataList[i].PRD_TYP +'" data-prdCd="'+g_dataList[i].PRD_CD + '" data-3D="/fileDn?p=' + g_dataList[i].PRD_3D_DAT + '">';
				
			}else{
				pantsHtml += '			<a href="javascript:void(0);" class="itemLink P" data-type="'+ g_dataList[i].PRD_TYP +'" data-prdCd="'+g_dataList[i].PRD_CD + '" data-3D="/fileDn?p=' + g_dataList[i].PRD_3D_DAT + '">';				
			}
			pantsHtml += '				<div class="itemPic fitting">';
			pantsHtml += '					<img src="/fileDn?p='+g_dataList[i].PRD_2D_DAT+'">';
			pantsHtml += '				</div>';
			pantsHtml += '			</a>';
			pantsHtml += '		</div>';
			pantsHtml += '	</div>';
			pantsHtml += '</div>';
		}
		
		if(g_dataList[i].PRD_TYP == "C"){
			outerHtml += '<div class="swiper-slide">';
			outerHtml += '	<div class="item_prod">';
			outerHtml += '		<div class="item_state fitting">';
			if(saveParam.C == g_dataList[i].PRD_CD){
				outerHtml += '			<a href="javascript:void(0);" class="itemLink C fitActive" data-type="'+ g_dataList[i].PRD_TYP +'" data-prdCd="'+g_dataList[i].PRD_CD + '" data-3D="/fileDn?p=' + g_dataList[i].PRD_3D_DAT + '">';
			}else{
				outerHtml += '			<a href="javascript:void(0);" class="itemLink C" data-type="'+ g_dataList[i].PRD_TYP +'" data-prdCd="'+g_dataList[i].PRD_CD + '" data-3D="/fileDn?p=' + g_dataList[i].PRD_3D_DAT + '">';				
			}
			outerHtml += '				<div class="itemPic fitting">';
			outerHtml += '					<img src="/fileDn?p='+g_dataList[i].PRD_2D_DAT+'">';
			outerHtml += '				</div>';
			outerHtml += '			</a>';
			outerHtml += '		</div>';
			outerHtml += '	</div>';
			outerHtml += '</div>';
		} 
		
		if(g_dataList[i].PRD_TYP == "D"){
			setHtml += '<div class="swiper-slide">';
			setHtml += '	<div class="item_prod">';
			setHtml += '		<div class="item_state fitting">';
			if(saveParam.D == g_dataList[i].PRD_CD){
				setHtml += '			<a href="javascript:void(0);" class="itemLink D fitActive"  data-type="'+ g_dataList[i].PRD_TYP +'" data-prdCd="'+g_dataList[i].PRD_CD + '" data-3D="/fileDn?p=' + g_dataList[i].PRD_3D_DAT + '">';
			}else{
				setHtml += '			<a href="javascript:void(0);" class="itemLink D"  data-type="'+ g_dataList[i].PRD_TYP +'" data-prdCd="'+g_dataList[i].PRD_CD + '" data-3D="/fileDn?p=' + g_dataList[i].PRD_3D_DAT + '">';				
			}
			setHtml += '				<div class="itemPic fitting">';
			setHtml += '					<img src="/fileDn?p='+g_dataList[i].PRD_2D_DAT+'">';
			setHtml += '				</div>';
			setHtml += '			</a>';
			setHtml += '		</div>';
			setHtml += '	</div>';
			setHtml += '</div>';
		}
		
		
	}
	$("#T").html(topHtml);
	$("#P").html(pantsHtml);
	$("#C").html(outerHtml);
	$("#D").html(setHtml);
	
	
	$(".itemLink").on('click', function(){	
		var type = $(this).attr("data-type");
		var prdCd = $(this).attr("data-prdCd");
		var data3D = $(this).attr("data-3D");
		
		if($(this).hasClass("fitActive")){
			
			$(this).removeClass('fitActive');
			prdCd = null;
			data3D = null;
		}else{
			$(".itemLink."+type).removeClass('fitActive');
			$(this).addClass('fitActive');
		}
		
		viewClothSet(type, data3D, prdCd);
	});
}
//좋아요 상품 E







// 세트저장하기 [s]
function goSavePop() {
	$("#setNm").val("");
	$('.layerPrivacy_alret').addClass('on');
}


function goSave() {
	var UppPrd = saveParam.T;
	var LowPrd = saveParam.P;
	var SetPrd = saveParam.D;
	var OthPrd = saveParam.C;
	
	var params = {
		mbrId : mbrId,
		setNm : $("#setNm").val(),
		setUppPrd : saveParam.T == null ? '' : saveParam.T,
		setLowPrd : saveParam.P == null ? '' : saveParam.P,
		setOthPrd : saveParam.C == null ? '' : saveParam.C,
		setSetPrd : saveParam.D == null ? '' : saveParam.D,
	}
	console.log(params)
	cf_call("/fittingRoom/getSave", params, goSaveCB);
}
function goSaveCB(data) {
	alert("저장이 완료되었습니다.");
	
	location.href="/fittingRoom";
}
// 세트저장하기 [e]

// 세트 불러오기 S
function onSet(){
	params = {
		setCd : $("#setName").val()
	}
	cf_call("/fittingRoom/onSet", params, onSetCB);
	
}
function onSetCB(data){
	console.log(data)
	$('.tag_list .btn').removeClass('active');
	
	$("#T").html("");
	$("#P").html("");
	$("#C").html("");
	$("#D").html("");
	
	var tHtml = "";
	var pHtml = "";
	var cHtml = "";
	var dHtml = "";
	
	viewParams.top = null;
	viewParams.pants = null;
	viewParams.coat = null;
	viewParams.dress = null;
	saveParam.T = null;
	saveParam.P = null;
	saveParam.C = null;
	saveParam.D = null;
	
	if( !cf_isEmpty(data.SET_UPP_PRD) ){
		tHtml += '<div class="swiper-slide">';
		tHtml += '	<div class="item_prod">';
		tHtml += '		<div class="item_state fitting">';
		tHtml += '			<a href="javascript:void(0);" class="itemLink T fitActive" data-type="T" data-prdCd="' + data.SET_UPP_PRD + '" data-3D="/fileDn?p=' + data.UPP_3D + '">';
		tHtml += '				<div class="itemPic fitting">';
		tHtml += '					<img src="/fileDn?p='+data.UPP_2D+'">';
		tHtml += '				</div>';
		tHtml += '			</a>';
		tHtml += '		</div>';
		tHtml += '	</div>';
		tHtml += '</div>';
		
		viewParams.top = "/fileDn?p=" + data.UPP_3D;
		saveParam.T = data.SET_UPP_PRD;
	}
	
	if( !cf_isEmpty(data.SET_LOW_PRD) ){
		pHtml += '<div class="swiper-slide">';
		pHtml += '	<div class="item_prod">';
		pHtml += '		<div class="item_state fitting">';
		pHtml += '			<a href="javascript:void(0);" class="itemLink T fitActive" data-type="P" data-prdCd="' + data.SET_LOW_PRD + '" data-3D="/fileDn?p=' + data.LOW_3D + '">';
		pHtml += '				<div class="itemPic fitting">';
		pHtml += '					<img src="/fileDn?p='+data.LOW_2D+'">';
		pHtml += '				</div>';
		pHtml += '			</a>';
		pHtml += '		</div>';
		pHtml += '	</div>';
		pHtml += '</div>';
		
		viewParams.pants = "/fileDn?p=" + data.LOW_3D;
		saveParam.P = data.SET_LOW_PRD;
	}
	
	if( !cf_isEmpty(data.SET_OTH_PRD) ){
		cHtml += '<div class="swiper-slide">';
		cHtml += '	<div class="item_prod">';
		cHtml += '		<div class="item_state fitting">';
		cHtml += '			<a href="javascript:void(0);" class="itemLink T fitActive" data-type="C" data-prdCd="' + data.SET_OTH_PRD + '" data-3D="/fileDn?p=' + data.OTH_3D + '">';
		cHtml += '				<div class="itemPic fitting">';
		cHtml += '					<img src="/fileDn?p='+data.OTH_2D+'">';
		cHtml += '				</div>';
		cHtml += '			</a>';
		cHtml += '		</div>';
		cHtml += '	</div>';
		cHtml += '</div>';
		
		viewParams.coat = "/fileDn?p=" + data.OTH_3D;
		saveParam.C = data.SET_OTH_PRD;
	}
	
	if( !cf_isEmpty(data.SET_SET_PRD) ){
		dHtml += '<div class="swiper-slide">';
		dHtml += '	<div class="item_prod">';
		dHtml += '		<div class="item_state fitting">';
		dHtml += '			<a href="javascript:void(0);" class="itemLink T fitActive" data-type="D" data-prdCd="' + data.SET_SET_PRD + '" data-3D="/fileDn?p=' + data.SET_3D + '">';
		dHtml += '				<div class="itemPic fitting">';
		dHtml += '					<img src="/fileDn?p='+data.SET_2D+'">';
		dHtml += '				</div>';
		dHtml += '			</a>';
		dHtml += '		</div>';
		dHtml += '	</div>';
		dHtml += '</div>';
		
		viewParams.dress = "/fileDn?p=" + data.SET_3D;
		saveParam.D = data.SET_SET_PRD;
	}
	
	$("#T").html(tHtml);
	$("#P").html(pHtml);
	$("#C").html(cHtml);
	$("#D").html(dHtml);
	
	load();
	
	$(".itemLink").on('click', function(){	
		var type = $(this).attr("data-type");
		var prdCd = $(this).attr("data-prdCd");
		var data3D = $(this).attr("data-3D");
		
		if($(this).hasClass("fitActive")){
			
			$(this).removeClass('fitActive');
			prdCd = null;
			data3D = null;
		}else{
			$(".itemLink."+type).removeClass('fitActive');
			$(this).addClass('fitActive');
		}
		
		viewClothSet(type, data3D, prdCd);
	});
}
//세트 불러오기 E






// 3D viewer
function genderChange(){
	if(viewParams.sex == 'm'){
		viewParams.sex = 'f';
		load();
	}else{
		viewParams.sex = 'm';
		load();
	}
}
function clothReset(){
	viewParams = {sex: viewParams.sex , top: null, pants: null, coat: null, dress: null};
	saveParam = {T : null,P : null,C : null,D : null}
	$(".itemLink").removeClass('fitActive');
	
	load();
}

function viewClothSet(type, data3D, prdCd){
	
	switch(type) {
		case 'T':
			//입기
			saveParam.T = prdCd;
			viewParams.top = data3D;
			
			//벗기
			saveParam.D = null;
			viewParams.dress = null;
			$(".itemLink.D").removeClass('fitActive');
			break;
			
		case 'P':
			// 입기 
			saveParam.P = prdCd;
			viewParams.pants = data3D;
			
			//벗기
			saveParam.D = null;
			viewParams.dress = null;
			$(".itemLink.D").removeClass('fitActive');
			break;
		case 'C':
			// 입기 
			saveParam.C = prdCd;
			viewParams.coat = data3D;
			break;
		case 'D':
			// 입기 
			saveParam.D = prdCd;
			viewParams.dress = data3D;
			
			// 벗기
			saveParam.T = null;
			viewParams.top = null;
			saveParam.P = null;
			viewParams.pants = null;
			$(".itemLink.T").removeClass('fitActive');
			$(".itemLink.P").removeClass('fitActive');
			break;
	}
	load();
	console.log("##### savrParam", saveParam)
}

$(function(){
	load = function() {
	
		console.log('# viewParams', viewParams);
		var func = function() {
			var viewer = $('#3dviewer')[0].contentWindow.viewer;
			if (typeof viewer == 'object' && viewer.isLoaded) {
				viewer.load_set(viewParams);
			} else {
				setTimeout(func, 100);
			}
		}
  		func();
	}
	load();
});
//3D viewer
</script>
</html>