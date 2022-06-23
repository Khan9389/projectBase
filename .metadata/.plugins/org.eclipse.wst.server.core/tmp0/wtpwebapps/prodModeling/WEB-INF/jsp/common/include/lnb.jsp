<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<style>
.category .on a {color: red !important}
</style>
<div class="lnb">
	<div class="lnb_tit">
		<h3>카테고리</h3>
	</div>
	<div class="lnb_category">
		<ul class="category">
			<li value="cusMng"><a href="/admin/cusMng">고객사 관리</a></li>
			<li value="brnMng"><a href="/admin/brnMng">브랜드 관리</a></li>
			<li value="prdMng"><a href="/admin/prdMng">상품관리</a></li>
		</ul>
	</div>
</div>
<script>
$(function(){
	var link = document.location.href.split("admin/")[1]
	
	$('.category li').each(function (index) {
		if(link == ($(this).attr("value"))){
			console.log(11, $(this).closest('a'))
			$(this).addClass('on');
		}
	});
})
</script>