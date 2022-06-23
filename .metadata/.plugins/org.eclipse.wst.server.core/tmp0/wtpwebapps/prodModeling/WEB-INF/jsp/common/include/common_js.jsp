<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<script>
/* function cf_logout(lang){
	if(!confirm("로그아웃 하시겠습니까?")) return;
	
	location.href = "/" + lang + "/logoutProc";
} */



function cf_excelDn(url, config, params) {

	if (config.fileName === undefined || config.fileName === null || config.fileName.trim() === "") {
		alert("엑셀파일명 'fileName'이 정의되지 않았습니다.");
		return;
	}

	if (config.sheetName === undefined || config.sheetName === null || config.sheetName.trim() === "") {
		alert("엑셀시트명 'sheetName'이 정의되지 않았습니다.");
		return;
	}

	if (config.columnsInfo === undefined || config.columnsInfo === null) {
		alert("엑셀 컬럼정보 'columnsInfo'가 정의되지 않았습니다.");
		return;
	}

	var form = document.createElement("form");
	form.setAttribute("charset", "UTF-8");
	form.setAttribute("method", "Post");
	form.setAttribute("action", url);

	var hiddenField01 = document.createElement("input");
	hiddenField01.setAttribute("type", "hidden");
	hiddenField01.setAttribute("name", "config");
	hiddenField01.setAttribute("value", JSON.stringify(config));
	form.appendChild(hiddenField01);

	var hiddenField02 = document.createElement("input");
	hiddenField02.setAttribute("type", "hidden");
	hiddenField02.setAttribute("name", "params");
	hiddenField02.setAttribute("value", JSON.stringify(params));
	form.appendChild(hiddenField02);

	document.body.appendChild(form);
	form.submit();
	form.remove();
}


function cf_chkFileExistCB(data, STOR_FILE_NM) {
	/* if (!data.isFileExist) {
		alert("파일이 존재하지 않습니다.");
		return;
	} */
	location.href = "/fileDn?p=" + STOR_FILE_NM;
}

function cf_callPage(url, params, pageInfo, callback, isloadingbar) {

	if(pageInfo.pageNo > cv_pageInfo.totalPages){
		pageInfo.pageNo = cv_pageInfo.totalPages;
	}

	params.pageInfo = pageInfo;

	var options = {
		headers: {
			'Content-Type': 'application/json;charset=UTF-8',
			"Access-Control-Allow-Origin": "*",
		}
	}

	if (isloadingbar !== false) {
		cf_loadingbarShow();
	}

	axios.post(url, params, options)
		.then(function(response) {
			cf_loadingbarHide();
			if (rsltFailArr.includes(response.data.rsltStatus)) {
				if (response.data.rsltStatus == "user-error" && !cf_isEmpty(response.data.errMsg)) {
					alert(response.data.errMsg);
				} else {
					alert("처리중 오류가 발생했습니다. \n관리자에게 문의하세요.");
				}
			} else {
				if (callback != null) {
					if (cf_whatIsIt(response.data) === "string" && response.data.indexOf("<!DOCTYPE html>") != -1) {
						alert("처리중 오류가 발생했습니다. \n관리자에게 문의하세요.");
					} else {
						if (response.data.pageInfo !== undefined) {
							try {
								cv_pageInfo.pageNo = response.data.pageInfo.page;
								cv_pageInfo.hasPrePage = response.data.pageInfo.hasPrePage;
								cv_pageInfo.hasNextPage = response.data.pageInfo.hasNextPage;
								cv_pageInfo.totalPages = response.data.pageInfo.totalPages;

								$("#pagination_content").html("");
								
								if(cv_pageInfo.totalPages == 0){
									pagination_content_html += '<li><a href="#kc">1</a></li>';
								} else {
									var pagination_content_html = "";
									var tmpsdrno;
									var tmpsdrlen = response.data.pageInfo.pageSlider.length;
									for (var i = 0; i < tmpsdrlen; i++) {
										tmpsdrno = response.data.pageInfo.pageSlider[i];
										if (cv_pageInfo.pageNo == tmpsdrno) {
											pagination_content_html += '<li class="on" onclick="cf_goPage(\'' + tmpsdrno + '\')"><a href="#kc">' + tmpsdrno + '</a></li>';
										} else {
											pagination_content_html += '<li onclick="cf_goPage(\'' + tmpsdrno + '\')"><a href="#kc">' + tmpsdrno + '</a></li>';
										}
									}
								}

								$("#pagination_content").html(pagination_content_html);
							} catch (error) {
								console.error(error);
								alert("페이징처리중 오류가 발생했습니다.");
							}
						}

						callback(response.data);
					}
				}
			}
		})
		.catch(function(error) {
			cf_loadingbarHide();
			if (error.message == "Network Error") {
				alert("네트워크상태 또는 서버 구동상태를 확인해 주세요.");
			} else {
				alert("처리중 오류가 발생했습니다. \n관리자에게 문의하세요.");
			}
			console.log(error);
		});
}

/**
 * 엑셀업로드 함수
 * @param url 호출url
 * @param elid 엑셀파일을 첨부하는 태그의 id
 * @param callback
 * @returns
 */
function cf_excelUp(url, elid, callback) {

	cf_loadingbarShow();

	var formData = new FormData();
	formData.append("excelFile", $("#" + elid)[0].files[0]);

	var options = {
		headers: {
			'Content-Type': 'multipart/form-data'
		}
	};

	axios.post(url, formData, options)
		.then(function(response) {
			cf_loadingbarHide();
			if (rsltFailArr.includes(response.data.rsltStatus)) {
				if (response.data.rsltStatus == "user-error" && !cf_isEmpty(response.data.errMsg)) {
					alert(response.data.errMsg);
				} else {
					alert("처리중 오류가 발생했습니다. \n관리자에게 문의하세요.");
				}
			} else {
				if (callback != null) {
					if (cf_whatIsIt(response.data) === "string" && response.data.indexOf("<!DOCTYPE html>") != -1) {
						alert("처리중 오류가 발생했습니다. \n관리자에게 문의하세요.");
					} else {
						callback(response.data);
					}
				}
			}
		})
		.catch(function(error) {
			cf_loadingbarHide();
			if (error.message == "Network Error") {
				alert("네트워크상태 또는 서버 구동상태를 확인해 주세요.");
			} else {
				alert("처리중 오류가 발생했습니다. \n관리자에게 문의하세요.");
			}
			console.log(error);
		});

}

/**
 * 파일 업로드 함수
 * 
 * @param filesArr
 * @param param
 * @param callback
 * @returns
 */
function cf_callWithFiles(url, fileList, params, callback) {
	
	cf_loadingbarShow();

	var formData = new FormData();
	for (var i = 0; i < fileList.length; i++) {
		formData.append("fileList", fileList[i]);
	}
	formData.append("params", JSON.stringify(params));

	var options = {
		headers: {
			'Content-Type': 'multipart/form-data'
		}
	};

	axios.post(url, formData, options)
		.then(function(response) {
			cf_loadingbarHide();
			if (rsltFailArr.includes(response.data.rsltStatus)) {
				if (response.data.rsltStatus == "user-error" && !cf_isEmpty(response.data.errMsg)) {
					alert(response.data.errMsg);
				} else {
					alert("처리중 오류가 발생했습니다. \n관리자에게 문의하세요.");
				}
			} else {
				if (callback != null) {
					if (cf_whatIsIt(response.data) === "string" && response.data.indexOf("<!DOCTYPE html>") != -1) {
						alert("처리중 오류가 발생했습니다. \n관리자에게 문의하세요.");
					} else {
						callback(response.data);
					}
				}
			}
		})
		.catch(function(error) {
			cf_loadingbarHide();
			if (error.message == "Network Error") {
				alert("네트워크상태 또는 서버 구동상태를 확인해 주세요.");
			} else {
				alert("처리중 오류가 발생했습니다. \n관리자에게 문의하세요.");
			}
			console.log(error);
		});
}

var cv_pageInfo = {
		func: function() { },
		pageNo: 1,
		hasPrePage: false,
		hasNextPage: false,
		totalPages: 1,
}

function cf_goPage(pageNo) {
	cv_pageInfo.pageNo = pageNo;
	cv_pageInfo.func();
}

function cf_prevPage() {
	if(cv_pageInfo.totalPages == 0 || cv_pageInfo.totalPages == 1){
		return;
	}
	if (!cv_pageInfo.hasPrePage) {
		//		alert("이전페이지가 존재하지 않습니다.");
		return;
	}
	cv_pageInfo.pageNo -= 1;
	cv_pageInfo.func();
}

function cf_nextPage() {
	if(cv_pageInfo.totalPages == 0 || cv_pageInfo.totalPages == 1){
		return;
	}
	if (!cv_pageInfo.hasNextPage) {
		//		alert("다음페이지가 존재하지 않습니다.");
		return;
	}
	cv_pageInfo.pageNo += 1;
	cv_pageInfo.func();
}

function cf_beginPage() {
	if(cv_pageInfo.totalPages == 0 || cv_pageInfo.totalPages == 1){
		return;
	}
	cv_pageInfo.pageNo = 1;
	cv_pageInfo.func();
}

function cf_endPage() {
	if(cv_pageInfo.totalPages == 0 || cv_pageInfo.totalPages == 1){
		return;
	}
	cv_pageInfo.pageNo = cv_pageInfo.totalPages;
	cv_pageInfo.func();
}

/**
 * 동영상 플레이어 소스 셋팅
 * 
 * @param type 동영상 종류 (VIDEO_TYP)
 * @param param 동영상 주소 (VIDEO_LINK / VIDEO_FILE)
 * @param title 동영상 제목 (SUBJECT)
 * @param poster 썸네일 (MAIN_IMAGE_FILE)
 * @returns
 */
/* function cf_videoSource(type, param, title, poster) {
	if(cf_isEmpty(type) || cf_isEmpty(param)) {
		return;
	}
	
	if(cf_isEmpty(title)) {
		title = "";
	}
	
	if(cf_isEmpty(poster)) {
		poster = "";
	} else {
		poster = "/fileDn?p=" + poster;
	}
	
	var player_source = [];
	if(type === "Y") {
		player_source = [
			{
		   		src: "https://www.youtube.com/watch?v=" + param,
		   		provider: "youtube"
		   	}
		];
	} else if(type === "F") {
		player_source = [
			{
				src: "/videoStream?p=" + param,
			    type: "video/mp4"
		  	}
		];
	} else {
		player_source = [
			{
				src: param,
			    type: "video/mp4"
		  	}
		];
	}
	
	return {
		type: "video",
		title: title,
		sources: player_source,
		poster: poster,
	};
} */

function telePhoneCheck(obj) {
	obj.value = obj.value.replace(/[^0-9]/g, "").replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})/,"$1-$2-$3").replace("--", "-");
}
function rrnCheck(obj){
	obj.value = obj.value.replace(/[^0-9]/g, "").replace(/([0-9]{6})([0-9]{7}$)/,"$1-$2").substr(0,14);;
}
function limitByte(){
    //글자 byte 수 제한
    $('.limitByte').blur(function(){

        var thisObject = $(this);
        var limit = thisObject.attr("limitByte"); //제한byte를 가져온다.
        var str = thisObject.val();
        var strLength = 0;
        var strTitle = "";
        var strPiece = "";
        var check = false;
                
        for (i = 0; i < str.length; i++){
            var code = str.charCodeAt(i);
            var ch = str.substr(i,1).toUpperCase();
            //체크 하는 문자를 저장
            strPiece = str.substr(i,1)
            
            code = parseInt(code);
            
            if ((ch < "0" || ch > "9") && (ch < "A" || ch > "Z") && ((code > 255) || (code < 0))){
                strLength = strLength + 3; //UTF-8 3byte 로 계산
            }else{
                strLength = strLength + 1;
            }
            
            if(strLength>limit){ //제한 길이 확인
                check = true;
                break;
            }else{
                strTitle = strTitle+strPiece; //제한길이 보다 작으면 자른 문자를 붙여준다.
            }
        }
        
        if(check){
            alert("최대 " + limit + "byte 까지 입력가능 합니다");
        }
        
        thisObject.val(strTitle);
    });
}


</script>