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
				<p class="title displayH t_c">브랜드관리</p>
			</div>
			<div class="cont_body">
				<div class="sec_heads">
   					<select class="table_select" id="searchType">
						<option seleted  value="all">브랜드명/고객사명</option>
						<option value="bNm">브랜드명</option>
						<option value="cNm">고객사명</option>
					</select>
					<div class="input_area">
						<div class="form_field">
							<div class="input_wrap">
								<input type="text" class="form_control" placeholder="브랜드명 또는 고객사명를 입력해주세요."  id="searchVal" onkeyup="if( event.keyCode==13 ){ getList('enter');}">
							</div>
							<div>
								<button type="button" class="btn btn_dark"  onclick="getList('enter')">
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
								<th>브랜드명</th>
								<th>브랜드코드</th>
								<th>고객사명</th>
								<th>등록일</th>
								<th>등록자</th>
							</tr>
						</thead>
						<tbody id="listDiv">
							<!-- <tr>	
								<td>여성 스트라이프 풀오버 스웨터(L221KT605P)</td>	
								<td>L221KT605P</td>
								<td>LPGA</td>	
								<td>3Dbank</td>
								<td>남성</td>
							</tr> -->
						</tbody>
					</table>
					<%@include file="/WEB-INF/jsp/common/include/pagination.jsp"%>
				</div>
				
				<div class="table-y">
					<ul class="btnArea">
						<li><a href="javascript:void(0);" class="btn btn_default" onclick="brnNew()">신규</a></li>
						<li><a href="javascript:void(0);" class="btn btn_dark" onclick="brnSave()">저장</a></li>
						<li><a href="javascript:void(0);" class="btn btn_gray" onclick="brnDelete()">삭제</a></li>
					</ul>
					
					<table>
						<colgroup>
							<col style="width: 10%">
							<col style="width: 35%">
							<col style="width: 10%">
							<col style="width: 35%">
						</colgroup>
						<tbody id="listDiv">
							<caption>테스트</caption>							
							<tr> 
								<th>브랜드명</th> 
								<td>
									<div class="table_input_wrap">
										<input type="text" class="form_Area brnInfo" id="brnNm" placeholder="브랜드명을 입력해주세요">
									</div>
								</td> 
								
								<th>브랜드코드</th> 
								<td>
									<div class="table_input_wrap">
										<input type="text" class="form_Area brnInfo" id="brnCd" placeholder="브랜드코드를 입력해주세요">
										<div class="table_btnArea">
											<button class="btn btn_dark" onclick="brnDupChk()">중복체크</button>
										</div>
									</div>
								</td> 
							</tr>
							
							<tr> 
								<th>브랜드로고</th> 
								<td colspan="4">
									<div class="table_input_file">
										<div class="filebox">
										    <input class="upload-name file_brnFile" class="form_Area" placeholder="첨부파일" id="fileTxt_brnFile" readonly>
										    <label for="file_brnFile" class="btn btn_darkgray" >파일찾기</label> 
										    <input type="file" id="file_brnFile">
										</div>
										<!-- <input type="text" class="form_Area" placeholder="상품코드를 입력해주세요">
										<div class="table_btnArea">
											<button class="btn btn_darkgray">파일찾기</button>
										</div> -->
									</div>
								</td>
							</tr>
							<tr> 
								<th>고객사명</th> 
								<td colspan="4">
									<div class="table_input_wrap">
										<select class="form_Area"  id="selCusCd">
											<option value="">고객사 선택</option>
											<%
											for (PentasMap map : cusList) {
											%>
											<option value="<%=map.get("CUS_CD")%>"><span><%=map.get("CUS_NM")%></span></option>
											<%
											}
											%>
										</select>
										<div class="table_btnArea">
											<button class="btn btn_default" onclick="addCus()">추가</button>
										</div>
									</div>
									<div class="table_input_wrap" id="cusSelectList" style="display: flex; flex-direction: column;">
										<!-- <div style="display:flex">
											<input class="form_Area" type="text" readonly></input>
											<div class="table_btnArea">
												<button class="btn btn_gray">삭제</button>
											</div>
										</div>
										<div>
											<input class="form_Area" type="text" readonly></input>
											<div class="table_btnArea">
												<button class="btn btn_gray">삭제</button>
											</div>
										</div> -->
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
<script>

var dupChk = false;
var selectedCus = [];
var setInsertTyp = '';
$(function(){
	getList();
	$("#brnCd").change(function(){
		dupChk = false;
    });
	
	$("#file_brnFile").on('change',function(){
		$("#fileTxt_brnFile").val( $("#file_brnFile").val().substr("12") );
	});
});


function getList(val){
	cv_pageInfo.func = getList;
	
	var pageInfo = {
			pageNo : cv_pageInfo.pageNo,
			orders : [
				{target : "BRN_CD", isAsc : false}
			],
			limit : 5
	}
	params = {
		searchType : $("#searchType").val(),	// 검색유형
		searchVal : $("#searchVal").val()		// 검색어
	}
	
	if(val == 1)
		pageInfo.pageNo = 1;
		
	cf_callPage("/admin/brnMng/getList", params, pageInfo, getListCB);
}

function getListCB(data){
	console.log(data);
	g_dataList = data.list;
	$("#listDiv").html("");
	var listDivHtml = "";
	
	if (g_dataList.length === 0) {
		listDivHtml += '<tr onclick="brnNew()">';
		listDivHtml += '	<td colspan="5">해당하는 정보가 없습니다.</td>';
		listDivHtml += '</tr>';
	} else {
		for (var i = 0; i < g_dataList.length; i++) {
			listDivHtml += '<tr onclick="getInfo(\'' + g_dataList[i].BRN_CD + '\')"">';
			listDivHtml += '	<td>'+ g_dataList[i].BRN_NM +'</td>';
			listDivHtml += '	<td>'+ g_dataList[i].BRN_CD +'</td>';
			listDivHtml += '	<td>'+ g_dataList[i].CUS_NM +'</td>';
			listDivHtml += '	<td>'+ g_dataList[i].INP_DT +'</td>';
			listDivHtml += '	<td>'+ g_dataList[i].INP_ID +'</td>';
			listDivHtml += '</tr>';
		}
	}
	
	
	$("#listDiv").html(listDivHtml);
}

function getInfo(brnCd){
	
	params = {
		brnCd : brnCd
	}
	cf_call("/admin/brnMng/getInfo", params, getInfoCB)
}

function getInfoCB(data){
	brnNew();
	setInsertTyp = data[0].BRN_CD;
	dupChk = true;
	console.log(data);
	console.log(data[0]);
	
	$("#brnNm").val(data[0].BRN_NM).attr("readonly", true)
	$("#brnCd").val(data[0].BRN_CD).attr("readonly", true)
	
	$("#fileTxt_brnFile").val(data[0].BRN_LGO);
	/* var orgNm = {
		FILE_STOR_NAME: data[0].BRN_LGO,
	}
	cf_call("/getFileOrgNm", orgNm, function(data) {$("#fileTxt_brnFile").val(data.FILE_ORIG_NAME + "." + data.FILE_ORIG_EXT); }); */
	
	for (var i = 0; i < data.length; i++) {
		var listDivHtml = "";
		listDivHtml += "<div style='display:flex; padding: 7px 0px;' class='cusList " + data[i].CUS_CD +"'>"
		listDivHtml += "	<input class='form_Area' type='text' readonly value='"+data[i].CUS_NM+"'></input>";
		listDivHtml += "	<div class='table_btnArea'>";
		listDivHtml += "		<button class='btn btn_gray' onclick='delCus(" + data[i].CUS_CD + ")'>삭제</button>";
		listDivHtml += "	</div>";
		listDivHtml += "</div>";
		
		selectedCus.push(data[i].CUS_CD + '');
		$("#cusSelectList").append(listDivHtml);
	}
}

function isLogin(){
	if("<%=MBR_ID%>" == "" || "<%=MBR_ID%>" == null || "<%=MBR_ID%>" == undefined){
		alert("로그인후 이용 가능합니다.")		
		return false;
	}
	return true;
}

function validate(){
	if(cf_isEmpty($("#brnNm").val().trim())){
		alert("브랜드명을 입력하세요.");
		$("#brnNm").focus();  return false;
	}
	if(cf_isEmpty($("#brnCd").val().trim())){
		alert("브랜드코드를 입력해주세요.");
		$("#brnCd").focus();  return false;
	}
	
	if(cf_isEmpty($("#fileTxt_brnFile").val().trim())){
		alert("브랜드이미지를 등록해주세요.");
		$("#brnLgo").focus();  return false;
	}
	
	if(selectedCus.length == 0){
		alert("고객사를 등록해주세요.")
		$("#selCusCd").focus(); return false;		
	}
	
	if(!dupChk){
		alert("브랜드 코드 중복체크 확인이 필요합니다.")
		$("#brnCd").focus(); return false;
	}
	
	return true;
	
}
function brnSave(){
	if(!isLogin()){
		return
	}
	if(!validate()){
		return;
	} 
	
	/* 파일 업로드 S */
	var fileList = [];
	var upfileIds = [];
	setFileList(fileList, upfileIds, "brnFile");
	/* 파일 업로드 E */
	
	params = {
		/* 파일 업로드 S */
		upfileIds 	: upfileIds,
		fileUseTable: "TBL_BRN",
		/* 파일 업로드 E */
			
		brnId : setInsertTyp, 
		mbrId : "<%=MBR_ID%>",
		brnNm : $("#brnNm").val(),
		brnCd : $("#brnCd").val(),
		
		brnFile	: $("#fileTxt_brnFile").val(),
		selectedCus : selectedCus
	}
	console.log(params)
	//return;
	cf_callWithFiles("/admin/brnMng/brnSave", fileList ,params, brnSaveCB)
}

function brnSaveCB(data){
	console.log(data)
	if(data.rsltStatus == "SUCC"){
		alert("저장 하였습니다.")
		location.reload();
	}
}


function setFileList(fileList, upfileIds, target){
	if(!cf_isFileEmpty("file_" + target)){
		upfileIds.push(target);
		fileList.push($("#file_" + target)[0].files[0]);
	}	
}






function brnNew(){
	selectedCus = [];
	$(".brnInfo").val("").attr("readonly", false);
	$(".upload-name").val("");
	$("#selCusCd").val("");
	$(".cusList").remove();
	setInsertTyp = '';
}

function brnDelete(){
	if(!isLogin()){
		return
	}
	
	if(!$('#brnCd')[0].hasAttribute("readonly")){
		alert("브랜드를 선택해주세요.");
		return;
	}
	
	if($("#brnCd").val() === '') {
		alert("브랜드를 선택해주세요.");
		return;
	}
	
	var params = {
			brnCd : $("#brnCd").val(),
			mbrId : "<%=MBR_ID%>"
		}
	
	cf_call("/admin/brnMng/brnDelete", params, function(data){
		if(data.rsltStatus == 'SUCC'){
			alert("삭제 하였습니다.");
			location.reload();
		}
		
		if(data.rsltStatus == 'FAIL'){
			alert("다시 시도해주세요.");
		}
	});
}

function brnDupChk(){
	if($("#brnCd").val() === '') {
		alert("브랜드코드를 입력해주세요.");
		return;
	}
	
	var params = {
			brnCd : $("#brnCd").val()
		}
	
	cf_call("/admin/brnMng/brnDupChk", params, function(data){
		if(data.rsltStatus == 'brnCdExist'){
			alert("등록된 브랜드코드 입니다.\n브랜드코드를 확인해주세요.");
			return;
		}
		
		alert("등록 가능한 브랜드코드입니다.");
		dupChk = true;
	});
}

function addCus(){
	if($("#selCusCd").val() == ''){
		alert("고객사를 선택해주세요.")
		return;
	}
	if(selectedCus.includes($("#selCusCd").val())){
		alert("이미 추가된 고객사입니다.")
		return
	}
	
	selectedCus.push($("#selCusCd").val());
	
	var listDivHtml = "";
	listDivHtml += "<div style='display:flex; padding: 7px 0px;' class='cusList " + $("#selCusCd").val() +"'>"
	listDivHtml += "	<input class='form_Area' type='text' readonly value='"+$("#selCusCd :selected").text()+"'></input>";
	listDivHtml += "	<div class='table_btnArea'>";
	listDivHtml += "		<button class='btn btn_gray' onclick='delCus(" + $("#selCusCd").val() + ")'>삭제</button>";
	listDivHtml += "	</div>";
	listDivHtml += "</div>";
	
	$("#cusSelectList").append(listDivHtml);
}

function delCus(v){
	var index = selectedCus.indexOf(v + ''); 
	if (index > -1) {
		selectedCus.splice(index, 1);
	}

	$(".cusList." + v).remove();
}
</script>
</html>