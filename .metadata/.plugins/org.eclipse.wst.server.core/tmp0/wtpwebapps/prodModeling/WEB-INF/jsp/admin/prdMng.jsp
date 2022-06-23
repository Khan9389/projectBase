<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/jsp/common/include/common_header.jsp" %>
<%
	List<PentasMap> cusList = (List<PentasMap>) request.getAttribute("cusList");
%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>펜타에스</title>
	<%@include file="/WEB-INF/jsp/common/include/gw_static_resource.jsp" %>
</head>
<body>
	<%@include file="/WEB-INF/jsp/common/include/header_gw.jsp"%>
	<div id="container" class="container main" style="padding-top: 80px; display: flex;">			
		<%@include file="/WEB-INF/jsp/common/include/lnb.jsp"%>
		<div class="wrap">
			<div class="cont_head">
				<p class="title displayH t_c">상품관리</p>
			</div>
			<div class="cont_body">
				<div class="sec_heads">
   					<select class="table_select" id="searchType">
						<option seleted value="all">상품명/고객사명/브랜드명</option>
						<option value="nm">상품명</option>
						<option value="cus">고객사명</option>
						<option value="brn">브랜드명</option>
					</select>
					<div class="input_area">
						<div class="form_field">
							<div class="input_wrap">
								<input type="text" class="form_control" placeholder="상품명/고객사명/브랜드명을 입력해주세요." id="searchVal" onkeyup="srchList()">
							</div>
							<div>
								<button type="button" class="btn btn_dark" onclick="getList('enter')">
									<span>검색</span>
								</button>	
							</div>
						</div>
					</div>
				</div>
				
				<div class="table-x">
					<table>
						<colgroup>
							<col style="width: 25%">
						</colgroup>
						<thead>
							<tr>
								<th>상품명</th>
								<th>상품코드</th>
								<th>브랜드명</th>
								<th>고객사명</th>
								<th>성별</th>
								<th>분류</th>
								<th>3D데이터</th>
								<th>2D데이터</th>
								<th>등록일</th>
								<th>등록자</th>
							</tr>
						</thead>
						<tbody id="listDiv">
						</tbody>
					</table>
					<%@include file="/WEB-INF/jsp/common/include/pagination.jsp"%>
				</div>
				
				<div class="table-y">
					<ul class="btnArea">
						<li><a href="javascript:void(0);" class="btn btn_default" onclick="prdNew()">신규</a></li>
						<li><a href="javascript:void(0);" class="btn btn_dark" onclick="prdSave()">저장</a></li>
						<li><a href="javascript:void(0);" class="btn btn_gray" onclick="prdDelete()">삭제</a></li>
					</ul>
					
					<table>
						<colgroup>
							<col style="width: 10%">
							<col style="width: 35%">
							<col style="width: 10%">
							<col style="width: 35%">
						</colgroup>
						<tbody>
							<caption>테스트</caption>							
							<tr> 
								<th>상품명<span class="t_req ml5">*</span></th> 
								<td>
									<div class="table_input_wrap">
										<input type="text" class="form_Area prdInfo" placeholder="상품명을 입력해주세요" id="prdNm">
									</div>
								</td> 
								
								<th>상품코드<span class="t_req ml5">*</span></th> 
								<td>
									<div class="table_input_wrap t-btn">
										<input type="text" class="form_Area prdInfo" placeholder="상품코드를 입력해주세요" id="prdCd">
										<div class="table_btnArea">
											<button class="btn btn_dark" id="dupChkBtn" onclick="prdDupChk()">중복체크</button>
										</div>
									</div>
								</td> 
							</tr>
							<tr> 
								<th>고객사명<span class="t_req ml5">*</span></th> 
								<td>
									<div class="table_input_wrap">
									<select class="form_Area" id="selCusCd" onchange="cusOwnBrn()">
										<option value="">고객사 선택</option>
										<%
										for (PentasMap map : cusList) {
										%>
										<option value="<%=map.get("CUS_CD")%>"><span><%=map.get("CUS_NM")%></span></option>
										<%
										}
										%>
									</select>
									</div>
								</td> 
								
								<th>브랜드명<span class="t_req ml5">*</span></th> 
								<td>
									<div class="table_input_wrap">
										<select class="form_Area" id="ownBrn">
											<option value="">브랜드 선택</option>
										</select>
									</div>
								</td>  
							</tr>
							<tr> 
								<th>성별<span class="t_req ml5">*</span></th> 
								<td>
									<div class="table_input_wrap">
										<!-- <div class="select_month_box"> -->
										<div class="form_field">
											<div>
												<input type="radio" name="prdGen" id="rdi-month1" checked value="F">
												<label for="rdi-month1"><span>여성</span></label>
											</div>
											<div>
												<input type="radio" name="prdGen" id="rdi-month2" value="M">
												<label for="rdi-month2"><span>남성</span></label>
											</div>
											<div>
												<input type="radio" name="prdGen" id="rdi-month3" value="A">
												<label for="rdi-month3"><span>남여공용</span></label>
											</div>
										</div>
										<!-- </div> -->
									</div>
								</td> 
								
								<th>분류<span class="t_req ml5">*</span></th> 
								<td>
									<div class="table_input_wrap">
										<div class="form_field">
											<div>
												<input type="radio" name="prdTyp" id="rdi-month4" checked value="T">
												<label for="rdi-month4"><span>상의</span></label>
											</div>
											<div>
												<input type="radio" name="prdTyp" id="rdi-month5" value="P">
												<label for="rdi-month5"><span>하의</span></label>
											</div>
											<div>
												<input type="radio" name="prdTyp" id="rdi-month6" value="D">
												<label for="rdi-month6"><span>세트복</span></label>
											</div>
											<div>
												<input type="radio" name="prdTyp" id="rdi-month7" value="C">
												<label for="rdi-month7"><span>아우터</span></label>
											</div>
										</div>
									</div>
								</td>  
							</tr>
							<tr> 
								<th>2D데이터<span class="t_req ml5">*</span></th> 
								<td>
									<div class="table_input_file">
										<div class="filebox">
										    <input type="text" readonly="readonly" class="upload-name form_Area prdInfo" placeholder="첨부파일" onchange="getRealPath()" id="prd2d">
										    <label for="file_prdDat2d" class="btn btn_gray" >파일업로드</label> 
										    <input type="file" id="file_prdDat2d">
										</div>
									</div>
								</td>
								<th>3D데이터</th> 
								<td>
									<div class="table_input_file">
										<div class="filebox">
										    <input type="text" readonly="readonly" class="form_Area upload-name-tw prdInfo" placeholder="첨부파일" onchange="getRealPath()" id="prd3d">
										    <label for="file_prdDat3d" class="btn btn_gray" >파일업로드</label> 
										    <input type="file" id="file_prdDat3d">
										</div>
										<div class="form_field filter">
											<div>
												<input id="prdRepYn" type="checkbox">
												<label for="prdRepYn"> <span>대표상품설정</span> </label>
											</div>
										</div>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
	
	<%@include file="/WEB-INF/jsp/common/include/footer_gw.jsp"%>
</body>
<div class="layerPrivacy">
	<div class="bg"></div>
	<div class="popupcont">
		<div class="popupBody">
			<div class="btn_close">
				<a href="javascript:void(0);">close</a>
			</div>

			<div class="pop_cont_head">
				<h4>3D데이터</h4>
			</div>
			
			<div class="cont_body">
				<div class="item_prod">
					<div class="item_state">
					 	<div class="itemPic">
					 		<iframe id="3dviewer" width="100%" height="100%" frameborder="0" src="/static_resources/viewer/embed_viewer.html?sex=f&top=/fileDn?p=12b3642d3d8e42beac57c540a3abefb7"></iframe>
							<!-- <img alt="BLACK-a" class="vLHTC pd_img" src="/static_resources/home/image/main/product/C222TSG12P_BK_01.jpg"> -->
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="layerPrivacy_poly">
	<div class="bg"></div>
	<div class="popupcont">
		<div class="popupBody">
			<div class="btn_close">
				<a href="javascript:void(0);">close</a>
			</div>

			<div class="pop_cont_head">
				<h4>2D데이터</h4>
			</div>
			
			<div class="cont_body">
				<div class="item_prod">
					<div class="item_state">
					 	<div class="itemPic">
							<img alt="BLACK-a" class="vLHTC pd_img" id="img_prd2d" src="/static_resources/home/image/main/product/C222TSG12P_BK_01.jpg">
						</div>
<!-- 						<div class="table-z">								 -->
<!-- 							<table> -->
<!-- 								<colgroup> -->
<!-- 									<col style="width: 15%"> -->
<!-- 									<col style="width: 40%"> -->
<!-- 								</colgroup> -->
<!-- 								<tbody> -->
<!-- 									<caption>테스트</caption> -->
<!-- 									<tr> -->
<!-- 										<th>상품명</th>  -->
<!-- 										<td class="item itemNames">PRDNM (PRDCD) [U]</td>  -->
<!-- 									</tr> -->
<!-- 									<tr>  -->
<!-- 										<th>상품코드</th>  -->
<!-- 										<td class="item itemcode">L221KT605P</td> -->
<!-- 									</tr> -->
<!-- 									<tr>  -->
<!-- 										<th>브랜드명</th>  -->
<!-- 										<td class="item itemBrands">[아디다스]</td> -->
<!-- 									</tr> -->
<!-- 									<tr>  -->
<!-- 										<th>성별</th>  -->
<!-- 										<td class="item itemSex">남자</td> -->
<!-- 									</tr> -->
<!-- 									<tr>  -->
<!-- 										<th>분류</th>  -->
<!-- 										<td class="item itemCate">상의</td> -->
<!-- 									</tr> -->
<!-- 								</tbody> -->
<!-- 							</table> -->
<!-- 						</div> -->
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<script>
$(function(){
	getList();
	
	$("#file_prdDat2d").on('change',function(){
		var fileName = $("#file_prdDat2d").val();
		$(".upload-name").val(fileName.substr(12,fileName.length));
	});		
	$("#file_prdDat3d").on('change',function(){
		var fileNames = $("#file_prdDat3d").val();
		$(".upload-name-tw").val(fileNames.substr(12,fileNames.length));
	});
	
	$('.layerPrivacy .btn_close, .layerPrivacy .bg').click(function() {
		$('.layerPrivacy').removeClass('on');
	});
	$('.layerPrivacy_poly .btn_close, .layerPrivacy_poly .bg').click(function() {
		$('.layerPrivacy_poly').removeClass('on');
	});
	
 
});

function prd3dView(sex, type, src) {
	$('.layerPrivacy').addClass('on');
	
	if(sex == "A" || sex == "M"){
		sex = "m";		
	}else{
		sex = "f";
	}
	
	if(type == "T"){
		type = "top";
	}else if(type == "P"){
		type = "pants";
	}else if(type == "C"){
		type = "coat";
	}else if(type == "D"){
		type = "dress";
	}
	$("#3dviewer").attr("src", "/static_resources/viewer/embed_viewer.html?sex=" + sex + "&"+ type +"=/fileDn?p="+src );
}

function prd2dView(data) {
	setImgFile("prd2d", data);
	
	$('.layerPrivacy_poly').addClass('on');
}

var selectedPrd = {};
var dupChk = false;

function isLogin(){
	if("<%=MBR_ID%>" == "" || "<%=MBR_ID%>" == null || "<%=MBR_ID%>" == undefined){
		alert("로그인후 이용 가능합니다.");	
		return false;
	}
	return true;
}

function srchList(){
	if (window.event.keyCode === 13) {
		getList('enter');
   }
}

function getList(val){
	cv_pageInfo.func = getList;
	
	var pageInfo = {
			pageNo : cv_pageInfo.pageNo,
			orders : [
				{target : "CUS_CD", isAsc : true},
				{target : "BRN_CD", isAsc : true},
				{target : "AMD_DT", isAsc : false},
			],
			limit : 5
	}
	params = {
		searchType : $("#searchType").val(),	// 검색유형
		searchVal : $("#searchVal").val()		// 검색어
	}
	
	if(val == 'enter')
		pageInfo.pageNo = 1;
	
	cf_callPage("/admin/prdMng/getList", params, pageInfo, getListCB);
}

function getListCB(data){
	g_dataList = data.list;
	$("#listDiv").html("");
	var listDivHtml = "";
	console.log(11111111111, g_dataList );
	if (g_dataList.length === 0) {
		listDivHtml += '<tr onclick="getInfo()">';
		listDivHtml += '	<td colspan="10">해당하는 정보가 없습니다.</td>';
		listDivHtml += '</tr>';
	} else {
		for (var i = 0; i < g_dataList.length; i++) {
			listDivHtml += "<tr onclick='getInfo("+ JSON.stringify(g_dataList[i]) +")'>";
			listDivHtml += '	<td>'+ g_dataList[i].PRD_NM + '</td>';
			listDivHtml += '	<td>'+ g_dataList[i].PRD_CD +'</td>';
			listDivHtml += '	<td>'+ g_dataList[i].BRN_NM +'</td>';
			listDivHtml += '	<td>'+ g_dataList[i].CUS_NM +'</td>';
			listDivHtml += '	<td>'+ g_dataList[i].PRD_GEN_NM +'</td>';
			listDivHtml += '	<td>'+ g_dataList[i].PRD_TYP_NM +'</td>';
			if(g_dataList[i].PRD_3D_DAT){
				listDivHtml += "	<td><a href='javascript:void(0);' onclick='prd3dView(`"+ g_dataList[i].PRD_GEN + "`,`" + g_dataList[i].PRD_TYP + "`,`"+ g_dataList[i].PRD_3D_DAT +"`)' class='view'>3DVIEW</a></td>";
			} else {
				listDivHtml += '	<td> - </td>';
			}
			listDivHtml += "	<td><a href='javascript:void(0);' onclick='prd2dView(`"+ g_dataList[i].PRD_2D_DAT +"`)' class='view'>보기</a></td>";
			listDivHtml += '	<td>'+ g_dataList[i].INP_DT +'</td>';
			listDivHtml += '	<td>'+ g_dataList[i].INP_ID +'</td>';
			listDivHtml += '</tr>';
		}
	}
	
	$("#listDiv").html(listDivHtml);
}

function getInfo(obj){
	selectedPrd = obj;
	dupChk = true;
	
	$("#prdNm").val(selectedPrd.PRD_NM);
	$("#prdNm").attr('disabled', true);
	$("#prdCd").val(selectedPrd.PRD_CD);
	$("#prdCd").attr('disabled', true);
	$("#dupChkBtn").attr('disabled', true);

	$("#selCusCd").val(selectedPrd.CUS_CD);
	$("#selCusCd").attr('disabled', true);
	cusOwnBrn();
	
	$('input:radio[name=prdGen]:input[value="'+ selectedPrd.PRD_GEN +'"]').prop("checked", true);
	$('input:radio[name=prdTyp]:input[value="'+ selectedPrd.PRD_TYP +'"]').prop("checked", true);
	
	var orgNm = {
			FILE_STOR_NAME: "",
		}
	$("#prd2d").val(selectedPrd.PRD_2D_DAT);
	$("#prd3d").val(selectedPrd.PRD_3D_DAT);
	//orgNm.FILE_STOR_NAME = selectedPrd.PRD_2D_DAT;
	//cf_call("/getFileOrgNm", orgNm, function(data) {$("#prd2d").val(data.FILE_ORIG_NAME + "." + data.FILE_ORIG_EXT); });

	//orgNm.FILE_STOR_NAME = selectedPrd.PRD_3D_DAT;
	//cf_call("/getFileOrgNm", orgNm, function(data) {$("#prd3d").val(data.FILE_ORIG_NAME + "." + data.FILE_ORIG_EXT); });

	/* 3d 데이터 처리 필요 */
	
	if(selectedPrd.PRD_REP_YN === 'Y'){
		$("#prdRepYn").prop("checked", true);
	} else {
		$("#prdRepYn").prop("checked", false);
	}
}

function prdNew(){
	selectedPrd = {};
	dupChk = false;
	
	$(".prdInfo").val("");
	$("#selCusCd").val("");
	
	$("#prdNm").attr('disabled', false);
	$("#prdCd").attr('disabled', false);
	$("#selCusCd").attr('disabled', false);
	$("#dupChkBtn").attr('disabled', false);
	cusOwnBrn();
	
 	$("#ownBrn").attr('disabled', false);
 	
 	$('input:radio[name=prdGen]:input[value=F]').prop("checked", true);
	$('input:radio[name=prdTyp]:input[value=T]').prop("checked", true);
	
	$("#prdRepYn").prop("checked", false);
}

function validate(){
	if(cf_isEmpty($("#prdNm").val().trim())){
		alert("상품명을 입력해주세요.");
		$("#prdNm").focus();
		return false;
	}
	if(cf_isEmpty($("#prdCd").val().trim())){
		alert("상품코드를 입력해주세요.");
		$("#prdCd").focus();
		return false;
	}
	
	if(!dupChk){
		alert("상품코드 중복여부를 확인해주세요.");
		return false;
	}
	
	if(cf_isEmpty($("#selCusCd").val())){
		alert("고객사를 선택해주세요.");
		return false;
	}
	
	if(cf_isEmpty($("#ownBrn").val())){
		alert("브랜드를 선택해주세요.");
		$("#cusPno").focus();
		return false;
	} 
	
	if(cf_isEmpty($("#prd2d").val().trim())){
		alert("2D 데이터를 업로드해주세요.");
		return false;
	}
	
	return true;
}

function prdSave(){
	if(!isLogin()) return;
	
	if(!validate()) return;
	
	var fileList = [];
	var upfileIds = [];
	setFileList(fileList, upfileIds, "prdDat2d");
	setFileList(fileList, upfileIds, "prdDat3d");
	
	params = {
			upfileIds		: upfileIds,
			fileUseTable	:"TBL_PRD",
			prdNm			: $("#prdNm").val(),
			prdCd			: $("#prdCd").val(),
			cusCd	 		: $("#selCusCd").val(),
			brnCd	 		: $("#ownBrn").val(),
			prdGen	 		: $("input[name='prdGen']:checked").val(),
			prdTyp	 		: $("input[name='prdTyp']:checked").val(),
			prdDat2d	 	: $("#prd2d").val(),
			prdDat3d		: $("#prd3d").val(),
			prdRepYn		: $("#prdRepYn").is(":checked") ? "Y" : "N"
	};
	
	console.log(params)
	cf_callWithFiles("/admin/prdMng/prdSave", fileList, params, function(data){
		alert('상품이 등록되었습니다.');
		prdNew();
		getList();
		window.scrollTo(0,0);
	});
}

function prdDupChk(){
	
	if(cf_isEmpty($("#prdCd").val())) {
		alert("상품코드를 입력해주세요.");
		return;
	}
	
	var params = {
			prdCd : $("#prdCd").val()
		}
	
	cf_call("/admin/prdMng/prdDupChk", params, function(data){
		console.log(data)
		if(data.rsltStatus == 'prdCdExist'){
			alert("등록된 상품코드 입니다.\n상품코드를 확인해주세요.");
			return;
		}
		
		alert("등록 가능한 상품코드입니다.");
		dupChk = true;
	});
}

function prdDelete(){
	if(!isLogin()) return;
	
	if(cf_isEmpty(selectedPrd.PRD_CD)){
		alert("선택된 상품이 없습니다.");
		return
	}
	var params = {
			prdCd : selectedPrd.PRD_CD,
		}
	
	cf_call("/admin/prdMng/prdDelete", params, function(data){
		alert("삭제되었습니다.");
		prdNew();
		getList();
		window.scrollTo(0,0);
	});
}


/* 고객사 선택 */
function cusOwnBrn(val){
	
	var cusCd = $("#selCusCd").val();
	
	if(cusCd === ''){
		$("#ownBrn").html("");
		var ownBrnList = "";
		ownBrnList += '<option>브랜드 선택</option>';
		
		$("#ownBrn").html(ownBrnList);
		return
	}
	
	if(cusCd !== '' || cusCd !== null || cusCd !== undefined){
		var params = {
				cusCd : cusCd
		}
		
		cf_call("/admin/prdMng/ownBrnList", params, function(data){
			$("#ownBrn").html("");
			var ownBrnList = "";
			ownBrnList += '<option>브랜드 선택</option>';
			if (data.length > 0) {
				for (var i = 0; i < data.length; i++) {
					ownBrnList += '<option value="'+ data[i].BRN_CD +'">'+ data[i].BRN_NM +'</option>';
				}
			}
			
			$("#ownBrn").html(ownBrnList);
			
			// 상품 선택시 브랜드 선택 처리
			if(Object.keys(selectedPrd).length > 0){
				$("#ownBrn").val(selectedPrd.BRN_CD);
			 	$("#ownBrn").attr('disabled', true);
			}
		});
	}
}


/* 파일 업로드 S */
function setFileList(fileList, upfileIds, target){
	if(!cf_isFileEmpty("file_" + target)){
		upfileIds.push(target);
		fileList.push($("#file_" + target)[0].files[0]);
	}	
}
/* 파일 업로드 E */

/* 이미지 설정 */
function setImgFile(target, data){
	$("#img_" + target).val(data);
	$("#img_" + target).attr("src", "/fileDn?p=" + data);
}
</script>
</html>