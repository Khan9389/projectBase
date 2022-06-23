<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/jsp/common/include/common_header.jsp" %>
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
			<%@include file="/WEB-INF/jsp/common/include/home_lnb.jsp"%>
			<div class="content main_pick">
				<div class="cont_head">
					<p class="title displayH t_c">브랜드</p>
				</div>
				<div class="cont_body">
					<!-- 상단 브랜드 관련 swiper [s] -->
					<div class="swiper-container post-pick-nav">
						<div class="swiper-wrapper" id="brdList"> 
							<!-- 브랜드 -->
						</div> 
						
						<div class="swiper-button-prev" tabindex="-1" role="button" aria-label="이전 슬라이드" aria-disabled="true"></div>
						<div class="swiper-button-next" tabindex="0" role="button" aria-label="다음 슬라이드" aria-disabled="false"></div>
						<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
					</div>
					<!-- 상단 브랜드 관련 swiper [e] -->
				</div>
				
				<!-- 컨텐츠시작 [s] -->
				<div class="swiper-container post-pick-for">
					<div class="swiper-wrapper">
						<div class="swiper-slide" >
							<div class="pick_look">
								<div class="swiper-container post-lookbooks">
									<div class="swiper-wrapper" id="iframeList">
									</div>
										<div class="swiper-pagination"></div>
								</div>
							</div>

							<div class="pick_item">
								<div class="itemGrp" id="prdList"> 
									<!-- 상품 --> 								
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- //content -->
	<!-- </div> -->
	<%@include file="/WEB-INF/jsp/common/include/home_footer.jsp"%>
</body>

<script>
$(function(){
	getBrd(); // 브랜드 조회
	
	
});

// 브랜드 조회 S
function getBrd(){
	params = {}
	cf_call("/getBrd", params, getBrdCB);
}

function getBrdCB(data){
	datalist = data.result;
	$("#brdList").html("");
	var listDivHtml = "";
	
 	for(var i=0; i<datalist.length; i++){
 		if(i == 0){
	 		listDivHtml += '<div class="swiper-slide swiper-slide-thumb-active" data-nm="' + datalist[i].BRN_NM + '" data-cd="' + datalist[i].BRN_CD + '" onclick="getPrd(\'' + datalist[i].BRN_CD + '\')"">';
 		}else{
	 		listDivHtml += '<div class="swiper-slide" data-nm="' + datalist[i].BRN_NM + '" data-cd="' + datalist[i].BRN_CD + '" onclick="getPrd(\'' + datalist[i].BRN_CD + '\')"">';
 		}
		listDivHtml += '	<img src="/fileDn?p='+datalist[i].BRN_LGO+'" class="thumimg '+i+'">';
		listDivHtml += '</div>';	
	}

	$("#brdList").html(listDivHtml);

	getPrd(datalist[0].BRN_CD); // 상품 조회

}
//브랜드 조회 E

// 상품 조회 S
function getPrd(brnCd){
	
	params = {
		brnCd : brnCd,
		mbrId : "<%=MBR_ID%>"
	}
	
	cf_call("/getPrd", params, getPrdCB);
}

function getPrdCB(data){
	datalist = data.prdList;
	var wishArry = [];
	for(i in data.wishList){
		wishArry.push(data.wishList[i].PRD_CD)
	}
	
	$("#prdList").html("");
	$("#iframeList").html("");
	
	var listDivHtml = "";
	var iframeHtml = "";

	for(var i=0; i<datalist.length; i++){
		listDivHtml += '<div class="item_prod">';
		listDivHtml += '	<div class="item_state">';
		if(wishArry.includes(datalist[i].PRD_CD)){
			listDivHtml += '		<button type="button" class="itemLikeY" onclick="wishPrd(this)" lk="Y" bCd="'+ datalist[i].BRN_CD +'" pCd="'+ datalist[i].PRD_CD +'" typ="'+ datalist[i].PRD_TYP +'" pGen="'+ datalist[i].PRD_GEN +'">관심상품 추가</button>';
		}else{
			listDivHtml += '		<button type="button" class="itemLikeN" onclick="wishPrd(this)" lk="N" bCd="'+ datalist[i].BRN_CD +'" pCd="'+ datalist[i].PRD_CD +'" typ="'+ datalist[i].PRD_TYP +'" pGen="'+ datalist[i].PRD_GEN +'" >관심상품 추가</button>';
		}
		listDivHtml += '		<a href="javascript:void(0);" class="itemLink">';
	 	listDivHtml += '			<div class="itemPic">';
		listDivHtml += '				<img alt="BLACK-a" class="vLHTC pd_img" src="/fileDn?p='+datalist[i].PRD_2D_DAT+'">';
		listDivHtml += '			</div>';
		listDivHtml += '			<div class="itemName">[' + datalist[i].BRN_NM + '] ' + datalist[i].PRD_NM + ' (' + datalist[i].PRD_CD + ') ['+ datalist[i].PRD_TYP_NM +']</div>';
		listDivHtml += '		</a>';
		listDivHtml += '	</div>';
		listDivHtml += '</div>';
		
		
		iframeHtml +='<div class="swiper-slide">';
		iframeHtml +='	<div class="img_box">';
		iframeHtml +='		<iframe id="3dviewer" width="100%" height="100%" frameborder="0"  src="/static_resources/viewer/embed_viewer.html?sex='+datalist[i].IFR_GEN+'&'+datalist[i].IFR_TYPE+'=/fileDn?p='+datalist[i].PRD_3D_DAT+'"></iframe>';
		iframeHtml +='</div></div>';
		
		
	}
	$("#prdList").html(listDivHtml);
	$("#iframeList").html(iframeHtml);
	swiperSet();
	//swiperSet();
}
//상품 조회 E








function swiperSet(){
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
	
	var main_pick_lookbook = new Swiper('.post-lookbooks', { //top
		slidesPerView: 1,
		speed : 1000,
		loop: true,
		autoplay: {
			delay: 10000,
			disableOnInteraction: false,
		},
		pagination : { // 페이징 설정
			el : '.post-lookbooks .swiper-pagination',
			clickable : true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
		},
	});
	$(".main_pick .post-pick-nav .swiper-slide").on('click', function(){
		$(".main_pick .post-pick-nav .swiper-slide").removeClass("swiper-slide-thumb-active");
		$(this).addClass("swiper-slide-thumb-active");
	});
}
</script>
</html>