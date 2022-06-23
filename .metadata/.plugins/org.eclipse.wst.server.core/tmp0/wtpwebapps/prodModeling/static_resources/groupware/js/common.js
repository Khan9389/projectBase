$(document).ready(function(){
	// 파일업로드
	$("#file").on('change',function(){
		var fileName = $("#file").val();
		$(".upload-name").val(fileName.substr(12,fileName.length));
		console.log("들어옴")
	});	
	
	// 파일업로드 2번째	
	$("#file_al").on('change',function(){
		var fileNames = $("#file_al").val();
		$(".upload-name-tw").val(fileNames.substr(12,fileNames.length));
		console.log(fileNames, "fileName");
	});	
	
	// 파일업로드
});
