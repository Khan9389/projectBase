/* *******************************************

 [1][ prefix ]
	 uifn_ 

 [2][ index ]
	 1. Variables (전역변수)
	 2. Init    (초기설정)
	 3. Utility (유틸리티)
	 4. Custom  (라이브러리 커스텀)
	 5. Content (컨텐츠)

 [3][ update ]
	 2020.12.02  FOOT area - popup, family site, scrollTop
	 2020.12.10  FORM - check-All, input-File-Add, Select Custom

******************************************* */
/* * * * * * * * * * * * * * * * * * * * * * 

(1) Variables (전역변수)

* * * * * * * * * * * * * * * * * * * * * */




/* * * * * * * * * * * * * * * * * * * * * * * 

2. Init    (초기설정)

* * * * * * * * * * * * * * * * * * * * * */
$(document).ready(function(){


	// history back
	$(".back").on("click", function () {
		history.back()
	});

	// main css 호출 제거
	var uifn_DISCR = $('#container').attr('class');
	var uifn_DISCRCLASS = "main";
	if (uifn_DISCR != null && uifn_DISCR.indexOf(uifn_DISCRCLASS) == -1) {
		jQuery("link[rel=stylesheet][href*='css/main.css']").remove();
	};

	// header minify
	$(function(){
		$(window).scroll(function(){
			var headerH =  $('.common_header > .hd_top_banner').outerHeight() + $('.common_header > .area').outerHeight();
			var miniGnbH = $('.common_header > .gnb').outerHeight();
			if ($(window).scrollTop() >= headerH){
				//header minify
				$("header").addClass("minify");
				$("#container").css("padding-top",miniGnbH);
			}
			else {
				//header minify
				$("header").removeClass("minify");
				$("#container").css("padding-top","0px");
			}
		});
	});

	// items like on/off
	$(function(){ 
		$(".itemLike").click(function () {
		  $(this).toggleClass("likeit");
		});
	});


});
/* * * * * * * * * * * * * * * * * * * * * * * 

3. Utility (유틸리티)

* * * * * * * * * * * * * * * * * * * * * */
// FORM
// input-File-Add
$(document).ready(function() {
	if (window.File && window.FileList && window.FileReader) {
		$("#fileAdd").on("change", function(e) {
			var files = e.target.files,
				filesLength = files.length;
				console.log(filesLength);
			var cmtLa = $('.cmt .cmt_thumb .form_field .imgUpload label');
			var cmtIn = $('.cmt .cmt_thumb .form_field .imgUpload input');
			var myrvLa = $('.myReviewWrite .form_field .imgUpload label');
			var myrvIn = $('.myReviewWrite .form_field .imgUpload input');
			for (var i = 0; i < filesLength; i++) {
				var f = files[i]
				var fileReader = new FileReader();
				fileReader.onload = (function(e) {
					var file = e.target;
					console.log(file);
					$("<span class=\"pics\">" +
						"<img class=\"picsThumbs\" src=\"" + e.target.result + "\" title=\"" + file.name + "\"/>" +
						"<br/><span class=\"removes\">Removes image</span>" +
						"</span>").insertAfter("#fileAdd");
					$(".removes").click(function(){
						$(this).parent(".pics").closest(".imgUpload").children("input").val("");
						$(this).parent(".pics").remove();
						cmtLa.css('display', 'block');
						cmtIn.css('display', 'block');
						myrvLa.css('display', 'block');
						myrvIn.css('display', 'block');
						$('#fileAdd').removeAttr("disabled");
					});
				});
			fileReader.readAsDataURL(f);
				var maxFileLength = 10; /* 최대 파일 갯수를 입력해 주세요 */
				var imgFiles=$('.imgUpload .pics');
				var cmtLa = $('.cmt .cmt_thumb .form_field .imgUpload label');
				var cmtIn = $('.cmt .cmt_thumb .form_field .imgUpload input');
				var myrvLa = $('.myReviewWrite .form_field .imgUpload label');
				var myrvIn = $('.myReviewWrite .form_field .imgUpload input');
				if (imgFiles.length >= maxFileLength-1) {
					$('#fileAdd').attr("disabled",true);
					cmtLa.css('display', 'none');
					cmtIn.css('display', 'none');
					myrvLa.css('display', 'none');
					myrvIn.css('display', 'none');
				} else if(imgFiles.length < maxFileLength){
					$('#fileAdd').removeAttr("disabled");
				}
			}
		});
	} else {
		alert("브라우저가 File API를 지원하지 않습니다.")
	}
});
// input-File-Adds
$(document).ready(function() {
	if (window.File && window.FileList && window.FileReader) {
		$("#fileAdds").on("change", function(e) {
			var files = e.target.files,
				filesLength = files.length;
			for (var i = 0; i < filesLength; i++) {
				var f = files[i]
				var fileReader = new FileReader();
				fileReader.onload = (function(e) {
					var file = e.target;
					$("<span class=\"pics\">" +
						"<img class=\"picsThumbs\" src=\"" + e.target.result + "\" title=\"" + file.name + "\"/>" +
						"<br/><span class=\"removes\">Removes image</span>" +
						"</span>").insertAfter("#fileAdds");
					$(".removes").click(function(){
						$(this).parent(".pics").remove();
					});
				});
			fileReader.readAsDataURL(f);
			}
		});
	} else {
		alert("브라우저가 File API를 지원하지 않습니다.")
	}
});

// check-All
$( document ).ready(function() {
	var $chkAll = $('.check-all');
		$chkAll.change(function () {
			var checked = $(this).prop('checked'); 
			$('input[name="dd"]').prop('checked', checked);
		});
		
	var ddChk = $('input[name="dd"]');
	ddChk.change(function () {
			var ddChkLength = ddChk.length;
			var checkedLength = $('input[name="dd"]:checked').length;
			var selectAll = (ddChkLength == checkedLength);
			$chkAll.prop('checked', selectAll);
		});
});

//Select Custom
$( document ).ready(function() {
	$('select').each(function(){
		var $this = $(this), numberOfOptions = $(this).children('option').length;
	
		$this.addClass('select_hidden'); 
		$this.wrap('<div class="select"></div>');
		$this.after('<div class="select_dress"></div>');

		var $dressSelect = $this.next('div.select_dress');
		$dressSelect.text($this.children('option').eq(0).text());
	
		var $selList = $('<ul />', {
			'class': 'select_options'
		}).insertAfter($dressSelect);
	
		for (var i = 0; i < numberOfOptions; i++) {
			$('<li />', {
				text: $this.children('option').eq(i).text(),
				rel: $this.children('option').eq(i).val(),
				class: $this.children('option').eq(i).attr('disabled')
			}).appendTo($selList);
		}
	
		var $selListItems = $selList.children('li');
	
		$dressSelect.click(function(e) {
			e.stopPropagation();
			$('div.select_dress.active').not(this).each(function(){
				$(this).removeClass('active').next('ul.select_options').hide();
			});
			$(this).toggleClass('active').next('ul.select_options').toggle();
		});
	
		$selListItems.click(function(e) {
			e.stopPropagation();
			
			if($(this).hasClass('disabled')){
				$this.val($(this).attr('rel',false));
			} 
			else{
				$dressSelect.text($(this).text()).removeClass('active');
				$this.val($(this).attr('rel'));
				$selList.hide();
			}
		});
	
		$(document).click(function() {
			$dressSelect.removeClass('active');
			$selList.hide();
		});

	});
});


// Select-Combo-Custom
function sCombo(selector){
	this.$selectBox = null,
	this.$select = null,
	this.$list = null,
	this.$listLi = null;
	sCombo.prototype.init = function(selector){
		this.$selectBox = $(selector);
		this.$select = this.$selectBox.find('.combo .select');
		this.$list = this.$selectBox.find('.combo .list');
		this.$listLi = this.$list.children('li');
	}
	sCombo.prototype.initEvent = function(e){
		var that = this;
		this.$select.on('click', function(e){
			that.listOn();
		});
		this.$listLi.on('click', function(e){
			that.listSelect($(this));
		});
		$(document).on('click', function(e){
			that.listOff($(e.target));
		});
	}
	sCombo.prototype.listOn = function(){
		if(this.$selectBox.hasClass('on')){
			this.$selectBox.removeClass('on');
			this.$list.css('display', 'none');
		} else {
			this.$selectBox.addClass('on');
			this.$list.css('display', 'block');
		}
	}
	sCombo.prototype.listSelect = function($target){
		$target.addClass('selected').siblings('li').removeClass('selected');
		this.$selectBox.removeClass('on');
		this.$select.html($target.html());
		this.$list.css('display', 'none');
		console.log($target.html())
	}
	sCombo.prototype.listOff = function($target){
		if(!$target.is(this.$select) && this.$selectBox.hasClass('on')){
			this.$selectBox.removeClass('on');
			this.$list.css('display', 'none');
		};
	}
	this.init(selector);
	this.initEvent();
};


// selectBrand on/off
$( document ).ready( function() {
	$("#selectBrand .brandbox input").on("click", function() {
		$("#selectBrand .brandbox input").removeClass("on");
		$(this).addClass("on");
	});
});


// dropDownMenu
$(document).on('click','.tgl_dropdown',function(e){
	$(this).next('.dropdown_menu').slideToggle(300);
	$(this).toggleClass('on');
	return false;
});


/* alert */
$(function(){
	$('.alertCls').click(function(){
    setTimeout(function(){
     $('.alert').css('animation', 'none');
		$('.alert').css('display', 'none');
    }, 300);
    // uifn_currCallback();
  });
});



/* * * * * * * * * * * * * * * * * * * * * * * 

4. Custom  (라이브러리 커스텀)

* * * * * * * * * * * * * * * * * * * * * */

$( document ).ready(function() {
//datepicker 
$.datepicker.regional['kr'] = {
	dateFormat: 'yy-mm-dd' // 날짜 포맷 설정
};

$.datepicker.setDefaults($.datepicker.regional['kr']);
});



/* * * * * * * * * * * * * * * * * * * * * * * 

5. Content (컨텐츠)

* * * * * * * * * * * * * * * * * * * * * */
$(document).ready(function() {$(".modal .text_wrap style").remove();$(".modal .text_wrap").removeAttr("style");});// rmv = rmv.replace(/<style>(.*?)<(\/?)style>/gi,"");
$(document).ready( function() {

	$(function(){
		if($(".content").hasClass("dp_hotdeal") || $(".content").hasClass("dp_Bulletship")){
			$('.container').closest('div').addClass('omitt');
		}
	});

	//LNB_상품리스트 카테고리
	$(document).on('click','.lnb .lnb_category ul li a',function(e){
		$(this).toggleClass('on');
		$(this).parent('li').siblings('li').children('a').removeClass('on');
		$(this).parent('li').siblings('li').removeClass('on');
		$(this).parent('li').siblings('li').find('a').removeClass('on');

		$(this).parent('li').toggleClass('on');
		$(this).parent('li').siblings('li').find('.sub_cate').hide();
		$(this).parent('li').children(".sub_cate").toggle();
	});

	/* 고객센터_accordion */
	/* 210428_수정 : 아코디언 */
	$(document).on('click','.cs .foldGroup .fold_head',function(){
		$(this).toggleClass('on');
		$(this).siblings('.fold_cont').slideToggle(100);
		$(this).parents('li').siblings('li').find('.fold_head').removeClass('on');
		$(this).parents('li').siblings('li').find('.fold_cont').slideUp(100);
	});
	/* //210428_수정 : 아코디언 */

	/* 주문결제_accordion */
	/* 210428_수정 : 아코디언 */
	$(document).on('click','.od .foldGroup .fold_head .fold_tit',function(e){	
		$(this).parents('.fold_head').toggleClass('on');
		$(this).parents('.foldGroup li').find('.fold_cont').slideToggle(100);
		$(this).parents('li').siblings('li').find('.fold_head').removeClass('on');
		$(this).parents('li').siblings('li').find('.fold_cont').slideUp(100);
		return false;
	}).on('click','.od .foldGroup .fold_paymethod .fold_head .fold_tit',function(e){
		$("#rdi-paymethod-quick").trigger("click");
		return false;
	});
	/* //210428_수정 : 아코디언 */
	
	/* 아이디/비밀번호 찾기_accordion:open */
	$(document).on('click','.mb .foldGroup.checkcase .fold_head',function(e){	
		$(this).parents('.foldGroup li').find('.fold_cont').slideDown(100);
		$(this).addClass('on');
		$('.foldGroup.checkcase .fold_head').not(this).removeClass('on').next('.fold_cont').slideUp(100);
		return false;
	});

	/* 아이디/비밀번호 찾기_accordion:close */
	$(document).on('click','.mb .foldGroup.checkcase .fold_head.on',function(e){
		$(this).removeClass('on');
		$(this).next('.fold_cont').slideUp(100);
		return false;
	});

	/* 아이디/비밀번호 찾기_taps */
	$(document).on('click','.registration_nav ul li',function(e){
		$('.foldGroup.checkcase .fold_head').removeClass('on').next('.fold_cont').hide();
		$(this).addClass('active').siblings().removeClass('active');
		$('.registration_tap .form_group').hide();		
		$('.registration_tap .form_group').eq($(this).index()).show();
		return false;
	});

	/* 전시 팝업 샘플팝업1 */
	$(document).on('click','#coupon_pop',function(e){
		$("#coupon_modal_01").modal("show");
		return false;
	});
	
	/* 전시 팝업 샘플팝업2 */
	$(document).on('click','#coupon_pop2',function(e){	
		$("#coupon_modal_02").modal("show");
		return false;
	});

	/* 같은 데이터 노출시 동일 영역끼리 병합 */
	$(".merge_row").each(function() {
		var txtcont = $(this).text();
		var rows = $(this).parents("table").find(".merge_row:contains('" + txtcont + "')");
		if (rows.length > 1) {
			rows.eq(0).attr("rowspan", rows.length);
			rows.not(":eq(0)").remove();
		}
		rows.eq(0).parent('tr').attr('class', 'bundle_row');
	});

	/* 드래그 스크롤 */
	var x,left,down;
	$(".bullet_sticky_nav ul").mousedown(function(e){
		e.preventDefault();
		down = true;
		x = e.pageX;
		left = $(this).scrollLeft();
	});

	$("body").mousemove(function(e){
		if(down){
			var newX = e.pageX;
			$(".bullet_sticky_nav ul").scrollLeft(left - newX + x);
		}
	});

	$("body").mouseup(function(e){down = false;});
	/* //드래그 스크롤 */


	/* 상품리스트 sticky_nav_header */
	$(function(){
		/* 210512_수정 : 스크롤시 해당 상품영역 sticky_nav 구분자 active 클래스추가 수정 */
		/* 스크롤시 효과 */
		$(window).scroll(function(){

			var windScroll = $(window).scrollTop();
			var miniGnbH = $('.common_header .gnb').outerHeight();
			var stickyTopNavH = $('.common_header .gnb').outerHeight();
			var navOffsetTop = $('.sticky_nav_list').size() ? $('.sticky_nav_list').offset().top : 0;
			var navOffsetBottom = navOffsetTop + $('.list_content').outerHeight();
			var arr = [];

			if (windScroll > navOffsetTop){
				$('.sticky_nav_list').css('padding-top',stickyTopNavH);
				$(".sticky_nav").addClass("sticky");
			} else {
				$('.sticky_nav_list').css('padding-top','0px');
				$(".sticky_nav").removeClass("sticky");
			}
			
			if(windScroll > navOffsetBottom) {
				$('.sticky_nav_list').css('padding-top','0px');
				$(".sticky_nav").removeClass("sticky");
			}

			$('.sticky_nav li').find('a').removeClass('active');

			var $menu     = $('.sticky_nav li a'),
				$contents = $(".list_content > div.dp_item_list"); //210517_ 수정 : 전시 브랜드별 상품리스트 특정 class .dp_item_list 추가. 

			$.each($contents, function(idx, item){
				var $target   = $(".list_content > div.dp_item_list").eq(idx), //210517_ 수정 : 전시 브랜드별 상품리스트 특정 class .dp_item_list 추가. 
					i         = $target.index(),
					targetHeader = $(".sticky_nav").outerHeight() + 30,
					targetTop = $target.offset().top - targetHeader;
				if (targetTop < windScroll) {
					$menu.removeClass('active');
					$menu.eq(idx).addClass('active');
				}
			})

		});

		/* 상품리스트 sticky_nav_link */
		$(".sticky_nav li a").on("click", function(){
			var hookHeader = $(".sticky_nav").outerHeight();
			var hookHref = $(this).attr("href");
			var hookPot = $(hookHref);
			var hookPos = hookPot.offset().top - hookHeader;
			$("html, body").animate({scrollTop: hookPos}, 300);
		});
	});


	
	//210428_카테고리 재클릭 시 사라짐
	//상품 리스트_필터
	var listFilNum = 0;
	$('.filter_list ul li').click(function(){ 
		//$(".filter_list ul li").removeClass('on');
		$(".dp_list .sort, .sch_result .sort").removeClass('on');
		if($(this).hasClass("on")){
			$(this).removeClass('on');
			$("."+$(this).data('id')).removeClass('on');
			listFilNum = 0;
			$('.container .dp_list .fillter, .container .sch_result .fillter').hide();
		} else {
			$(".filter_list ul li").removeClass('on');
			$(this).addClass('on');
			$("."+$(this).data('id')).addClass('on');
			listFilNum = 1;
			$('.container .dp_list .fillter, .container .sch_result .fillter').show();
		}
		
		$('.sort ul li').removeClass('on');
		$('.sort ul li div').hide();
		// $('.container .dp_list .fillter, .container .sch_result .fillter').show();
	});

	// 카테고리
	$('.tap_close').click(function(){ 
		$(this).parent().removeClass('on');
		$('.filter_content .sort ul li div').hide();
		$('.filter_content .sort ul li, .container .filter_list ul li').removeClass('on');
		$('.container .dp_list .sort, .container .sch_result .sort').removeClass('on');
		$('.fillter').hide();
	});
});


/* * * * * * * * * * * * * * * * * * * * * * * 

6. Content (상품상세)

* * * * * * * * * * * * * * * * * * * * * */
$(document).ready( function() {

	// 210611_ 개발 사용 불가, 스크립트 제거
	//팝업 - 상품썸네일 크게보기
	$(document).on('click','.pd_detail .area_pic .thumb_list_wrap ul li a',function(e){
		$('body').addClass('lock');
		//var thumbIndex = $(this).index() + 1;
		var thumbIndex = $(this).parent().attr('id').replace("navLocate", "");
		var thumbImglength = $('.pd_detail .area_pic .thumb_list_wrap ul li').length;
		var popThumbImgHtml = "";
		$("#pdItemThumbPop").show(); 	
		var scrollThumbPop = $('#popThumb'+thumbIndex).offset().top;
		var currentTop = $(window).scrollTop();
		$('#pdItemThumbPop').animate({scrollTop : scrollThumbPop - currentTop}, 1000);
		return false;
	}).on('click','#btn_close_itemThumbPop, .pd_itemthumb_pop .scaleview img',function(e){
		$("#pdItemThumbPop").scrollTop(0);
		$("#pdItemThumbPop").hide(); 
		$('body').removeClass('lock');
		return false;
	});			                

	// 상품 대표설명 > 좌측 상품썸네일 navi, 우측 상품정보 고정 
	$(window).scroll(function(){
		var scrollTop= $(window).scrollTop();
		var headerH =  $('.common_header > .hd_top_banner').outerHeight() + $('.common_header > .area').outerHeight();
		var miniGnbH = $('.common_header > .gnb').outerHeight();
		var firstFixed =  headerH + miniGnbH;
		var thumbListWrap_h = $('.pd_detail .thumb_list_wrap').outerHeight();
		var descWrap_h = $('.pd_detail .desc_wrap').outerHeight();
		var secondFixed_left =  firstFixed + $('.pd_detail').outerHeight() - $('.pd_detail .thumb_nav_wrap').outerHeight();
		var secondFixed_right =  firstFixed + $('.pd_detail .desc_wrap').outerHeight() - $(window).outerHeight();
		var secondFixed_right2 =  firstFixed + $('.pd_detail').outerHeight() - $(window).outerHeight();

		var pdDetail_t = firstFixed + $('.pd_detail').outerHeight() + 100;
		var pdDDetail_t = firstFixed + $('.pd_deal_detail').outerHeight() + 100; // 0126
		var pdDescWrap_t = pdDetail_t + $('.pd_desc_wrap').outerHeight();
		var pdDDescWrap_t = pdDDetail_t + $('.pd_desc_wrap').outerHeight() + 500; // 0126
		var optionFixed_right =  pdDetail_t + $('.pd_desc_wrap').outerHeight() - $('.area_option .opt_wrap').outerHeight();

		var optionFree = scrollTop - pdDDescWrap_t; // 0126

		/* 좌측 상품썸네일 navi 고정 */
		if (scrollTop > firstFixed){  
			$('.pd_detail .area_pic .thumb_nav_wrap').removeClass('fixbottom').addClass('fixtop');
		}
		else if (scrollTop < firstFixed){
			$('.pd_detail .area_pic .thumb_nav_wrap').removeClass('fixtop');
		}
		if (scrollTop > secondFixed_left){
			$('.pd_detail .area_pic .thumb_nav_wrap').removeClass('fixtop').addClass('fixbottom');
		} 
		
		/* 우측 상품정보 고정 */
		if (thumbListWrap_h > descWrap_h && scrollTop > secondFixed_right) {
			$('.pd_detail .area_desc .desc_wrap').removeClass('absbottom').addClass('fixbottom');
		}
		else if (thumbListWrap_h > descWrap_h && scrollTop < secondFixed_right) {
			$('.pd_detail .area_desc .desc_wrap').removeClass('fixbottom');
		}
		if (thumbListWrap_h > descWrap_h && scrollTop > secondFixed_right2) {
			$('.pd_detail .area_desc .desc_wrap').removeClass('fixbottom').addClass('absbottom');
		}
		// 220124 추가
		else if(thumbListWrap_h < descWrap_h && scrollTop < secondFixed_right2) {
			$('.pd_detail .area_desc .desc_wrap').removeClass('fixbottom').removeClass('absbottom');
		}

		/* 딜 - 상세정보 탭 고정 */
		if (scrollTop > pdDetail_t && scrollTop < pdDescWrap_t){
			$('.tab_detail_nav').addClass('fix');
		} else {
			$('.tab_detail_nav').removeClass('fix');
		}

		/* 딜 - 우측옵션 고정 */ /* 0126 */
		if (scrollTop > pdDetail_t){
			$('.area_option .opt_wrap').removeClass('absbottom').removeClass('fixbottom').addClass('fixtop');
			if (scrollTop > pdDDescWrap_t || optionFree == optionFixed_right){
				$('.area_option .opt_wrap').removeClass('fixtop').addClass('fixbottom');
			}
		} else if (scrollTop < pdDetail_t) {
			$('.area_option .opt_wrap').removeClass('fixtop').removeClass('fixbottom');
		}
		// 0126제거
		// if (scrollTop > optionFixed_right){
		// 	$('.area_option .opt_wrap').removeClass('fixtop').addClass('absbottom');
		// }

	});

	//슬라이드 - 상품 대표설명 > 좌측 상품썸네일 navi
	var thumbNavSwiper = new Swiper('.pd_detail .area_pic .thumb_nav_wrap .swiper-container', {
		direction: 'vertical',
		allowTouchMove: false,
		slidesPerView: 6,
		slidesPerGroup : 1,
		spaceBetween: 10,
		navigation: {
			nextEl: '.area_pic .thumb_nav_wrap .swiper-button-next',
			prevEl: '.area_pic .thumb_nav_wrap .swiper-button-prev',
		},
	});

	//상품 대표설명 > 상품썸네일 1개일때
	var thumblist = $('.pd_detail .area_pic .thumb_list_wrap li');    
	var thumblistLength = thumblist.length;
	if (thumblistLength == 1) {
		thumblist.parents('.area_pic').addClass('onlyitem');
	} else {
		thumblist.parents('.area_pic').removeClass('onlyitem');
	}

	//상품 대표설명 > 좌측 상품썸네일 6개 이하일때
	var thumbnavSlide = $('.pd_detail .area_pic .thumb_nav_wrap .swiper-container .swiper-slide');    
	var thumbnavLength = thumbnavSlide.length;
	if (thumbnavLength < 7) {
		thumbnavSlide.parents('.thumbnav').addClass('disabled');
	} else {
		thumbnavSlide.parents('.thumbnav').removeClass('disabled');
	}

	//상품 대표설명 > 좌측 상품썸네일 navi 선택시 해당 대표 썸네일 위치로 이동
	$(document).on('click','.pd_detail .area_pic .thumbnav .swiper-slide a',function(e){
		e.preventDefault();
		var miniGnbH = $('.common_header > .gnb').outerHeight();
		var targetThumb = $($(this).attr('href'));
		var topThumb = targetThumb.offset().top - miniGnbH;
		$(this).parents('.thumbnav').find('.swiper-slide').removeClass('on');
		$(this).parent('.swiper-slide').addClass('on');
		targetThumb.siblings('li').removeClass('on');
		targetThumb.addClass('on');
		$('html,body').animate({scrollTop : topThumb}, 100);
		return false;
	});


	/* 상품상세 > 상품문의 _accordion */
	$(document).on('click','.pd_qnalist .foldGroup .fold_head',function(e){
		if($(this).parent().hasClass('secret_qna')){
			//210420_수정 : dialog alert 변경.
			mcxDialog.alert("비밀글은 열람하실 수 없습니다.", {
				sureBtnText: "확인",
			});
		}else {
			$('.fold_head').removeClass('on');
            $('.fold_cont').slideUp(100);
            if(!$(this).parents('.foldGroup li').find('.fold_cont').is(":visible")){
                $(this).parents('.foldGroup li').find('.fold_cont').slideDown(100);
                $(this).toggleClass('on');
            }
		}
	});

});
