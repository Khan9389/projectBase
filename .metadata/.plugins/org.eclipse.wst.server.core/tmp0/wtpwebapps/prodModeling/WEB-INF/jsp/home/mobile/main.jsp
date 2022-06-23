<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/jsp/common/include/common_header.jsp" %>
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<title>패션3D미팅</title>
	<%@include file="/WEB-INF/jsp/common/include/mobile/mo_static_resource.jsp" %>
</head>
<body>
	<%@include file="/WEB-INF/jsp/common/include/mobile/mo_header.jsp"%>
	<div class="sub_header">
		<div class="opt_selc">
			<select class="select_home" id="mobile_option_select">
				<option seleted value="F" value2="T">여성상의</option>
				<option value="F" value2="P">여성하의</option>
				<option value="F" value2="C">여성외투</option>
				<option value="F" value2="D">여성윈피스</option>
				<option value="M" value2="T">남성상의</option>
				<option value="M" value2="P">남성하의</option>
				<option value="M" value2="C">남성외투</option>
				<option value="M" value2="D">남성원피스</option>
			</select>
		</div>
		
		<div class="brand_selc">
			<select class="select_home" id="brdList">
				
				
			</select>
		</div>		
	</div>
	<div class="container">
		<div class="wrap">
			<div class="cont_body">
				<div class="itemArea" id="listBox">
				<!-- 
					<div class="item_prod">
						<div class="item_state">
							<button type="button" class="itemLike" onclick="cfnPutWishList(this);">관심상품 추가</button>
							<a href="javascript:void(0);" class="itemLink">
								<div class="itemPic">
									<img alt="BLACK-a" class=" vLHTC pd_img" src="/static_resources/home/image/main/product/K221TS060P_BK_01.jpg">
								</div>
								<div class="itemName">[컬리수] 네온 포인트 민소매 티셔츠 [여름][컬리수] 네온 포인트 민소매 티셔츠 [여름][컬리수] 네온 포인트 민소매 티셔츠 [여름][컬리수] 네온 포인트 민소매 티셔츠 [여름][컬리수] 네온 포인트 민소매 티셔츠 [여름]</div>
							</a>
						</div>
					</div>
				 -->
					
					
				</div>
			</div>
		</div>
	</div>
	<%@include file="/WEB-INF/jsp/common/include/mobile/mo_lnb.jsp"%>
	
<%-- 	<%@include file="/WEB-INF/jsp/common/include/mobile/mo_footer.jsp"%> --%>
</body>

<script>
var mbrId = "<%=MBR_ID%>";

$(function(){
	
	getBrd(); // 브랜드 조회
	
	//카테고리 변경
	$("#mobile_option_select").change(function(){
		getPrd();
	})
	
	//브랜드 변경
	$("#brdList").change(function(){
		getPrd();
	})

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
 		
	 		listDivHtml += '<option data-nm="' + datalist[i].BRN_NM + '" data-cd="' + datalist[i].BRN_CD + '" value="' + datalist[i].BRN_CD + '"">'+ datalist[i].BRN_NM +'</option>';
			//listDivHtml += ;	
 		}
	$("#brdList").html(listDivHtml);
	
	getPrd();
}
//브랜드 조회 E

function getPrd(){
	
	params = {
		prdGen 	: $("#mobile_option_select :selected").attr("value"),
		prdTyp 	: $("#mobile_option_select :selected").attr("value2"),
		brnCd 	: $("#brdList").val(),
		mbrId 	: mbrId,
	}

	cf_call("/list/getPrd", params, getPrdCB);
}

function getPrdCB(data){

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
}
</script>
</html>