<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<div class="lnb">
	<div class="lnb_tit">
		<h3>카테고리</h3>
	</div>
	<div class="lnb_category">
		<ul class="category" id="ulAllCate">
			<li class="on">
				<a href="javascript:void(0);" onclick="">여성</a>
				<div class="sub_cate" style="display: block;">
					<ul>
						<li><a href="javascript:void(0);" class="FT" onclick="goList('F', 'T')">상의</a></li>
						<li><a href="javascript:void(0);" class="FP" onclick="goList('F', 'P')">하의</a></li>
						<li><a href="javascript:void(0);" class="FC" onclick="goList('F', 'C')">외투</a></li>
						<li><a href="javascript:void(0);" class="FD" onclick="goList('F', 'D')">원피스</a></li>
					</ul>
				</div>
			</li>
			
			<li>
				<a href="javascript:void(0);" onclick="">남성</a>
				<div class="sub_cate" style="display: block;">
					<ul>
						<li><a href="javascript:void(0);" class="MT" onclick="goList('M', 'T')">상의</a></li>
						<li><a href="javascript:void(0);" class="MP" onclick="goList('M', 'P')">하의</a></li>
						<li><a href="javascript:void(0);" class="MC" onclick="goList('M', 'C')">외투</a></li>
						<li><a href="javascript:void(0);" class="MD" onclick="goList('M', 'D')">원피스</a></li>
					</ul>
				</div>
			</li>
		</ul>
	</div>
</div>
