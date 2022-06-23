<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/jsp/common/include/common_header.jsp" %>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>고객사관리</title>
	<%@include file="/WEB-INF/jsp/common/include/gw_static_resource.jsp" %>
</head>
<body>
	<%@include file="/WEB-INF/jsp/common/include/header_gw.jsp"%>
	<div id="container" class="container main" style="padding-top: 80px; display: flex;">			
		<%@include file="/WEB-INF/jsp/common/include/lnb.jsp"%>
		<div class="wrap">
			<div class="cont_head">
				<p class="title displayH t_c">고객사관리</p>
			</div>
			<div class="cont_body">
				<div class="sec_heads">
   					<select class="table_select" id="searchType">
						<option seleted value="all">고객사명 / 사업자번호</option>
						<option value="nm">고객사명</option>
						<option value="bno">사업자번호</option>
					</select>
					<div class="input_area">
						<div class="form_field">
							<div class="input_wrap">
								<input type="text" class="form_control" placeholder="고객사명 또는 사업자번호를 입력해주세요." id="searchVal" onkeyup="srchList()">
							</div>
							<div>
								<button type="button" class="btn btn_dark" onclick="getList()">
									<span>검색</span>
								</button>
							</div>
						</div>
					</div>
				</div>
				
				<div class="table-x">
					<table>
						<colgroup>
							<col style="width: 0%">
							<col style="width: 25%">
							<col style="width: 25%">
							<col style="width: 25%">
							<col style="width: 25%">
						</colgroup>
						<thead>
							<tr>
								<th></th>
								<th>고객사명</th>
								<th>사업자번호</th>
								<th>대표자</th>
								<th>전화번호</th>
							</tr>
						</thead>
						<tbody id="listDiv">
						</tbody>
					</table>
					<%@include file="/WEB-INF/jsp/common/include/pagination.jsp"%>
				</div>
				
				<div class="table-y">
					<ul class="btnArea">
						<li><a href="javascript:void(0);" class="btn btn_default" onclick="cusNew()">신규</a></li>
						<li><a href="javascript:void(0);" class="btn btn_dark" onclick="cusSave()">저장</a></li>
						<li><a href="javascript:void(0);" class="btn btn_gray" onclick="cusDel()">삭제</a></li>
					</ul>
					
					<table>
						<colgroup>
							<col style="width: 10%">
							<col style="width: 35%">
							<col style="width: 10%">
							<col style="width: 35%">
						</colgroup>
						
						<tbody id="listDiv2">
							<caption>고객사 등록</caption>							
							<tr> 
								<th>고객사명<span class="t_req ml5">*</span></th> 
								<td>
									<div class="table_input_wrap">
										<input type="text" class="form_Area cusInfo" id="cusNm" placeholder="고객사명을 입력해주세요.">
									</div>
								</td> 
								<th>대표자<span class="t_req ml5">*</span></th> 
								<td>
									<div class="table_input_wrap t-btn">
										<input type="text" class="form_Area cusInfo" id="cusCeo" placeholder="대표자명을 입력해주세요.">
									</div>
								</td> 
							</tr>
							<tr> 
								<th>사업자번호<span class="t_req ml5">*</span></th> 
								<td>
									<div class="table_input_wrap t-btn">
										<input type="text" class="form_Area cusInfo" id="cusBno" maxlength="12" placeholder="사업자번호를 입력해주세요.">
									</div>
								</td> 
								<th>회사번호<span class="t_req ml5">*</span></th> 
								<td>
									<div class="table_input_wrap t-btn">
										<input type="text" class="form_Area cusInfo" id="cusPno" maxlength="13" placeholder="회사연락처를 입력해주세요.">
									</div>
								</td>  
							</tr>
							<tr> 
								<th>주소<span class="t_req ml5">*</span></th> 
								<td colspan="4">
									<div class="table_input_wrap t-btn">
										<input type="text" class="form_Area cusInfo" id="cusAdd" placeholder="주소를 입력해주세요.">
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
$(function(){
	getList();
	
	// 사업자번호 입력 '-' 처리
	$("#cusBno").on("propertychange change paste input", function() {
	    var val = $("#cusBno").val().trim();
	    val = val.replace(/[^0-9]/g, '');
	    
	    $("#cusBno").val(Numformat('bno',val));
	});
	
	// 사업자번호 입력 '-' 처리
	$("#cusPno").on("propertychange change paste input", function() {
	    var val = $("#cusPno").val().trim();
	    val = val.replace(/[^0-9]/g, '');

	    $("#cusPno").val(Numformat('pno',val));
	});
});

var selectedCus = {};

function isLogin(){
	if("<%=MBR_ID%>" == "" || "<%=MBR_ID%>" == null || "<%=MBR_ID%>" == undefined){
		alert("로그인후 이용 가능합니다.");	
		return false;
	}
	return true;
}

function srchList(){
	if (window.event.keyCode === 13) {
		getList();
   }
}

function getList(){
	cv_pageInfo.func = getList;
	
	var pageInfo = {
			pageNo : cv_pageInfo.pageNo,
			orders : [
				{target : "CUS_CD", isAsc : false}
			],
			limit : 5
	}
	params = {
		searchType : $("#searchType").val(),	// 검색유형
		searchVal : $("#searchVal").val()		// 검색어
	}
	
	cf_callPage("/admin/cusMng/getList", params, pageInfo, getListCB);
}

function getListCB(data){
	g_dataList = data.list;
	$("#listDiv").html("");
	var listDivHtml = "";
	
	if (g_dataList.length === 0) {
		listDivHtml += '<tr onclick="getInfo()">';
		listDivHtml += '	<td colspan="5">해당하는 정보가 없습니다.</td>';
		listDivHtml += '</tr>';
	} else {
		for (var i = 0; i < g_dataList.length; i++) {
			listDivHtml += "<tr onclick='getInfo("+ JSON.stringify(g_dataList[i]) +")'>";
			listDivHtml += '	<td><input type="hidden" value="' + g_dataList[i].CUS_CD +'"/></td>';
			listDivHtml += '	<td>'+ g_dataList[i].CUS_NM +'</td>';
			listDivHtml += '	<td>'+ Numformat('bno',g_dataList[i].CUS_BNO) +'</td>';
			listDivHtml += '	<td>'+ g_dataList[i].CUS_CEO +'</td>';
			listDivHtml += '	<td>'+ Numformat('pno',g_dataList[i].CUS_PNO) +'</td>';
			listDivHtml += '</tr>';
		}
	}
	
	$("#listDiv").html(listDivHtml);
	
}

function getInfo(obj){
	selectedCus = obj;
	
	$("#cusNm").val(selectedCus.CUS_NM);
	$("#cusCeo").val(selectedCus.CUS_CEO);
	$("#cusBno").val(Numformat('bno',selectedCus.CUS_BNO));
	$('#cusBno').attr('readonly', true);
	
	$("#cusPno").val(Numformat('pno',selectedCus.CUS_PNO));
	$("#cusAdd").val(selectedCus.CUS_ADD);
}

function cusNew(){
	selectedCus = {};
	$('#cusBno').attr('readonly', false);
	$(".cusInfo").val("");
}

function cusSave(){
	if(!isLogin()) return;
	
	if(!validate()) return;
	var params = {
		cusCd : Object.keys(selectedCus).length === 0 ? "" : selectedCus.CUS_CD,
		cusNm : $("#cusNm").val(),
		cusCeo : $("#cusCeo").val(),
		cusBno : $("#cusBno").val().replace(/[^0-9]/g, ''),
		cusPno : $("#cusPno").val().replace(/[^0-9]/g, ''),
		cusAdd : $("#cusAdd").val()
	}
	
	cf_call("/admin/cusMng/cusSave", params, function(data){
		if(data.rsltStatus == 'bnoExist'){
			alert("등록된 사업자번호 입니다.\n사업자번호를 확인해주세요.");
			return;
		}
		
		alert("저장되었습니다.");
		cusNew();			// 선택기업 초기화, 고객사정보 입력 컨텐츠 초기화
		getList();			// 리스트 새로 그리기
		window.scrollTo(0,0);
	});
}

function cusDel(){
	if(!isLogin()) return;
	
	if(selectedCus.CUS_CD === undefined || selectedCus.CUS_CD === null){
		alert("선택된 고객사가 없습니다.");
		return
	}
	var params = {
			cusCd : selectedCus.CUS_CD,
		}
	
	cf_call("/admin/cusMng/cusDelete", params, function(data){
		alert("삭제되었습니다.");
		cusNew();			// 선택기업 초기화, 고객사정보 입력 컨텐츠 초기화
		getList();			// 리스트 새로 그리기
		window.scrollTo(0,0);
	});
}

function validate(){
	if(cf_isEmpty($("#cusNm").val().trim())){
		alert("고객사명을 입력해주세요.");
		$("#cusNm").focus();
		return false;
	}
	if(cf_isEmpty($("#cusCeo").val().trim())){
		alert("대표자명을 입력해주세요.");
		$("#cusCeo").focus();
		return false;
	}
	
	if(cf_isEmpty($("#cusBno").val().trim())){
		alert("사업자번호를 입력해주세요.");
		$("#cusBno").focus();
		return false;
	} else {
		if($("#cusBno").val().trim().replace(/[^0-9]/g, '').length < 10){
			alert("사업자번호를 확인해주세요.");
			$("#cusBno").focus();
			return false;
		}
	}
	
	if(cf_isEmpty($("#cusPno").val().trim())){
		alert("회사번호를 입력해주세요.");
		$("#cusPno").focus();
		return false;
	} else {
		if($("#cusPno").val().trim().replace(/[^0-9]/g, '').length < 9){
			alert("회사번호를 확인해주세요.");
			$("#cusPno").focus();
			return false;
		}
	}
	if(cf_isEmpty($("#cusAdd").val().trim())){
		alert("주소를 입력해주세요.");
		$("#cusAdd").focus();
		return false;
	}
	
	return true;
}

function Numformat(type,value){
	
	if(type === 'bno'){	// 사업자번호
		value = value.replace(/(\d{3})(\d{2})(\d{5})/g, '$1-$2-$3');
	} else {	// 회사번호(연락처)
		if(value.substring(0,2) == '02'){
	    	if(value.length === 9){
	    		value = value.replace(/(\d{2})(\d{3})(\d{4})/g, '$1-$2-$3');
	    	} else if(value.length === 10) {
	    		value = value.replace(/(\d{2})(\d{4})(\d{4})/g, '$1-$2-$3');
	    	}
	    } else if(value.substring(0,3) == '010'){
	    	value = value.replace(/(\d{3})(\d{4})(\d{4})/g, '$1-$2-$3');
	    } else {
	    	if(value.length === 10) {
	    		value = value.replace(/(\d{3})(\d{3})(\d{4})/g, '$1-$2-$3');
	    	} else if(value.length === 11) {
	    		value = value.replace(/(\d{3})(\d{4})(\d{4})/g, '$1-$2-$3');
	    	}
	    }
	}
	
	return value;
}

</script>
</html>