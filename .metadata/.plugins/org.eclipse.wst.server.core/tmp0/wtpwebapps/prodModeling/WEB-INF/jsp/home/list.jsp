<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/jsp/common/include/common_header.jsp" %>
<%
	String gen = StringUtil.defaultString((String)request.getAttribute("gen"), "");
	String typ = StringUtil.defaultString((String)request.getAttribute("typ"), "");
	/* String brn = StringUtil.defaultString((String)request.getAttribute("brn"), ""); */
%>
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<title>패션3D미팅</title>
	<%@include file="/WEB-INF/jsp/common/include/home_static_resource.jsp" %>
</head>
<body>
	<%@include file="/WEB-INF/jsp/common/include/home_header.jsp"%>
	<div id="container" class="container main" style="padding-top: 80px;">
		<div class="wrap">
			<%-- <%@include file="/WEB-INF/jsp/common/include/home_lnb.jsp"%> --%>
			<div class="lnb">
				<div class="lnb_tit">
					<h3>카테고리</h3>
				</div>
				<div class="lnb_category">
					<ul class="category" id="ulAllCate">
						<li class="on">
							<a href="javascript:void(0);">여성</a>
							<div class="sub_cate" style="display: block;">
								<ul>
									<li><a href="javascript:void(0);" class="FT" onclick="getPrdToLnb('F','T')">상의</a></li>
									<li><a href="javascript:void(0);" class="FP" onclick="getPrdToLnb('F','P')">하의</a></li>
									<li><a href="javascript:void(0);" class="FC" onclick="getPrdToLnb('F','C')">외투</a></li>
									<li><a href="javascript:void(0);" class="FD" onclick="getPrdToLnb('F','D')">원피스</a></li>
								</ul>
							</div>
						</li>
						
						<li>
							<a href="javascript:void(0);" onclick="">남성</a>
							<div class="sub_cate" style="display: block;">
								<ul>
									<li><a href="javascript:void(0);" class="MT" onclick="getPrdToLnb('M','T')">상의</a></li>
									<li><a href="javascript:void(0);" class="MP" onclick="getPrdToLnb('M','P')">하의</a></li>
									<li><a href="javascript:void(0);" class="MC" onclick="getPrdToLnb('M','C')">외투</a></li>
									<li><a href="javascript:void(0);" class="MD" onclick="getPrdToLnb('M','D')">원피스</a></li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<!--  -->
			<div class="content main_pick dp_list">
				<div class="cont_head">
					<p class="title displayH t_c" id="genTitle">여성</p>
				</div>
				
				<div class="cont_body" style="border-top: none; border-bottom: none;">
					<div class="swiper-container post-pick-nav" style="border-top: 1px solid #222; border-bottom: 1px solid #ddd;">
						<div class="swiper-wrapper" id="brdList"> 
							<!-- 브랜드 -->
							<!-- <div class="swiper-slide">
								<img src="/static_resources/home/image/main/brand/BRAND_2143_20210817115923.png">
							</div> -->
						</div> 
						
						<div class="swiper-button-prev" tabindex="-1" role="button" aria-label="이전 슬라이드" aria-disabled="true"></div>
						<div class="swiper-button-next" tabindex="0" role="button" aria-label="다음 슬라이드" aria-disabled="false"></div>
						<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
					</div>
					<!-- 상단 브랜드 관련 swiper [e] -->
						
					<div class="list_content"> 
						<div id="listBoxOuter" class="itemsGrp">
							<ul class="productlist quarter" id="listBox">
								<!-- <div class="item_prod" id="B222DP934PIG">
									<div class="item_state">
										<button type="button" class="itemLike" >관심상품 추가</button><a href="javascript:void(0);" class="itemLink">
										<div class="itemPic">
											<img class=" vLHTC pd_img" src="/static_resources/home/image/main/product/B222DP800P_IND.jpg">
										</div>
										<p class="itemBrand">
											BUCKAROO
										</p>
										<div class="itemName">
											여성 5부 루즈핏 L톤(B222DP934P)
										</div>
										
										</a>
									</div>
								</div> -->
							</ul>
						</div>
					</div>
				</div>
				<div class="last_page" id="endPage" style="display:none;">
					<span>마지막 페이지입니다.</span>
				</div>
			</div>
		</div>
	</div>
	<%@include file="/WEB-INF/jsp/common/include/home_footer.jsp"%>
</body>
<script>
var glPrdGen = "<%=gen%>";
var glPrdTyp = "<%=typ%>";
var glBrnCd = '';

$(function(){
	getBrd();
});

function setLnb(g, t){
	
	if(g == "F"){
		$("#genTitle").text("여성")
	}else{
		$("#genTitle").text("남성")
	}
	
	
	$("#ulAllCate li div ul li a").removeClass("on");
	$("." + g + t ).addClass("on");
}

function getBrd(){
	params={}
	cf_call("/getBrd", params, getBrdCB);
}

function getBrdCB(data){
	datalist = data.result;
		
	$("#brdList").html("");
	var listDivHtml = "";
	
 	for(var i=0; i<datalist.length; i++){
 		if(i == 0){
	 		listDivHtml += '<div class="swiper-slide swiper-slide-thumb-active" data-nm="' + datalist[i].BRN_NM + '" data-cd="' + datalist[i].BRN_CD + '" onclick="getPrdToBrn(\'' + datalist[i].BRN_CD + '\')"">';
 		}else{
	 		listDivHtml += '<div class="swiper-slide" data-nm="' + datalist[i].BRN_NM + '" data-cd="' + datalist[i].BRN_CD + '" onclick="getPrdToBrn(\'' + datalist[i].BRN_CD + '\')"">';
 		}
 		//listDivHtml += '<div class="swiper-slide" data-nm="' + datalist[i].BRN_NM + '" data-cd="' + datalist[i].BRN_CD + '" onclick="getPrdToBrn(\'' + datalist[i].BRN_CD + '\')"">';
	 	//listDivHtml += '<div class="swiper-slide" data-nm="' + datalist[i].BRN_NM + '" data-cd="' + datalist[i].BRN_CD + '">';
		listDivHtml += '	<img src="/fileDn?p='+datalist[i].BRN_LGO+'">';
		listDivHtml += '</div>';	
	}

	$("#brdList").html(listDivHtml);

	getPrdToBrn(datalist[0].BRN_CD); // 상품 조회
	setSwiper();
}

function getPrdToBrn(brnCd){
	
	glBrnCd = brnCd;
	
	params = {
		prdGen : glPrdGen,
		prdTyp : glPrdTyp,
		brnCd : glBrnCd,
		mbrId : "<%=MBR_ID%>"
	}
	console.log(2222, params)
	getPrd(params);
}

function getPrdToLnb(g, t){
	
	glPrdGen = g;
	glPrdTyp = t;
	
	params = {
		prdGen : glPrdGen,
		prdTyp : glPrdTyp,
		brnCd : glBrnCd,
		mbrId : "<%=MBR_ID%>"
	}
	getPrd(params);
	
}

function getPrd(p){
	params = p;
	
	cf_call("/list/getPrd", params, getPrdCB);
}
function getPrdCB(data){
	console.log(data)
	datalist = data.prdList;
	
	$("#listBox").html("");
	var listDivHtml = "";
	
	for(var i=0; i<datalist.length; i++){
		listDivHtml += '<div class="item_prod">';
		listDivHtml += '	<div class="item_state">';
		if(datalist[i].LKPRD == "Y"){
			listDivHtml += '		<button type="button" class="itemLikeY" onclick="wishPrd(this)" lk="Y" bCd="'+ datalist[i].BRN_CD +'" pCd="'+ datalist[i].PRD_CD +'" typ="'+ datalist[i].PRD_TYP +'" pGen="'+ datalist[i].PRD_GEN +'">관심상품 추가</button>';
		}else{
			listDivHtml += '		<button type="button" class="itemLikeN" onclick="wishPrd(this)" lk="N" bCd="'+ datalist[i].BRN_CD +'" pCd="'+ datalist[i].PRD_CD +'" typ="'+ datalist[i].PRD_TYP +'" pGen="'+ datalist[i].PRD_GEN +'" >관심상품 추가</button>';
		}
		listDivHtml += '		<div class="itemPic">';
		listDivHtml += '			<img class=" vLHTC pd_img" src="/fileDn?p='+datalist[i].PRD_2D_DAT+'">';
		listDivHtml += '		</div>';
		//listDivHtml += '		<p class="itemBrand">' + datalist[i].BRN_NM + '</p>';
		listDivHtml += '		<div class="itemName">[' + datalist[i].BRN_NM + '] ' + datalist[i].PRD_NM + ' (' + datalist[i].PRD_CD + ') ['+ datalist[i].PRD_TYP_NM +']</div>';
		listDivHtml += '	</div>';
		listDivHtml += '</div>';
	}
	
	$("#listBox").html(listDivHtml);
	setLnb(glPrdGen, glPrdTyp);
}

function setSwiper(){
	
	/* SLIDE - MAIN_PICK */
	var main_pick_nav = new Swiper('.post-pick-nav', { 
		// top
		initialSlide: 0,
		slidesPerView: 6,
		slidesPerGroup: 6,
		loop: false,
		slideToClickedSlide : true,

		freeMode: false,
		
		navigation: {
			nextEl: '.main_pick .swiper-button-next',
			prevEl: '.main_pick .swiper-button-prev',
		},
	});
	$(".main_pick .post-pick-nav .swiper-slide").on('click', function(){
		$(".main_pick .post-pick-nav .swiper-slide").removeClass("swiper-slide-thumb-active");
		$(this).addClass("swiper-slide-thumb-active");
	});
}
</script>
</html>