/*
 * Common URL Definition
 */
const _PAGE_LOGIN = _frontUrl + "/signin";	// GNB > 로그인
const _PAGE_LOGOUT = _frontUrl + "/logout";	// GNB > 로그아웃

//== 메인 ==/
const _PAGE_MAIN = _frontUrl + "/display/mall/main/form";						// 몰메인
const _PAGE_ALL_BRAND = _frontUrl + "/display/all/brand/form";					// 전체 브랜드
const _PAGE_CATE_MAIN = _frontUrl + "/display/category/main/form";				// 카테고리메인
const _PAGE_BRAND_MAIN = _frontUrl + "/display/brand/main/form";				// 브랜드메인
const _PAGE_CATE_GOODS_LIST = _frontUrl + "/display/category/goods/list/form";	// 카테고리 상품목록
const _PAGE_BEST_MAIN = _frontUrl + "/display/best/main/form";					// 베스트메인
const _PAGE_OUTLET_MAIN = _frontUrl + "/display/outlet/main/form";				// 아울렛메인
const _PAGE_VIEW_NORMAL = _frontUrl + "/display/view/normal/form";				// PC보기
const _PAGE_VIEW_MOBILE = _frontUrl + "/display/view/mobile/form";				// 모바일보기

//== 고객 ==/
const _PAGE_CUSTOMER_JOIN_TYPE = _frontUrl + "/customer/join/type/form";							// 고객 > 회원가입 유형
const _PAGE_CUSTOMER_JOIN = _frontUrl + "/customer/join/form";										// 고객 > 회원가입
const _PAGE_CUSTOMER_SNS_JOIN = _frontUrl + "/customer/sns/join/form";								// 고객 > SNS가입
const _PAGE_CUSTOMER_JOIN_COMPLETE = _frontUrl + "/customer/join/complete/form";					// 고객 > 고객가입 > 완료페이지
const _PAGE_CUSTOMER_ID_FIND = _frontUrl + "/customer/id/pwd/find/form?pageGb=custId";				// 고객 > 아이디 찾기
const _PAGE_CUSTOMER_PWD_FIND = _frontUrl + "/customer/id/pwd/find/form?pageGb=custPwd";			// 고객 > 비밀번호 찾기
const _PAGE_CUSTOMER_PWD_CHANGE_FIND = _frontUrl + "/customer/password/change/form?pageGb=find";	// 고객 > 비밀번호 찾기> 비밀번호 변경 화면
const _PAGE_CUSTOMER_PWD_CHANGE_TEMP = _frontUrl + "/customer/password/change/form?pageGb=temp";	// 고객 > 임시비밀번호 로그인 > 비밀번호 변경 화면
const _PAGE_CUSTOMER_DORMANT = _frontUrl + "/customer/dormant/certify/form";						// 고객 > 휴면회원
const _PAGE_CUSTOMER_DORMANT_COMPLETE = _frontUrl + "/customer/dormant/certify/complete/form";		// 고객 > 휴면회원 > 완료페이지
const _PAGE_CUSTOMER_SECEDE = _frontUrl + "/customer/secede/form";									// 고객 > 회원탈퇴
const _PAGE_CUSTOMER_SECEDE_COMPLETE = _frontUrl + "/customer/secede/complete/form";				// 고객 > 회원탈퇴 > 완료페이지
const _PAGE_CUSTOMER_CERTIFICATION = _frontUrl + "/customer/certification/form"						// 고객 > 본인인증화면
const _PAGE_USE_TERMS = _frontUrl + "/customer/use/terms/form";										// Footer > 이용약관
const _PAGE_PRIVACY_POLICY = _frontUrl + "/customer/privacy/policy/form";							// Footer > 개인정보취급방침
const _PAGE_CUSTOMER_CONSENT_USERINFO = _frontUrl + "/customer/consent/useinfo/form";				// 정보 이용동의 : Yes24 로그인
const _PAGE_USE_TERMS_LAYER = _frontUrl + "/customer/use/terms/layer";								// 회원가입 > 이용약관
const _PAGE_PRIVACY_POLICY_LAYER = _frontUrl + "/customer/privacy/policy/layer";					// 회원가입 > 개인정보취급방침
const _PAGE_SUPPLY_COMPANY_LAYER = _frontUrl + "/customer/supply/company/layer";					// 회원가입 > 개인정보취급방침
const _PAGE_PRIVACY_TRUST_LAYER = _frontUrl + "/customer/privacy/trust/layer";						// 회원가입 > 개인정보취급위탁
const _PAGE_NON_CUSTOMER_ORDER_CONFIRM = _frontUrl + "/customer/noncust/order/confirm/form";		// 고객 > 비회원주문확인

//== 앱 ==/
const _PAGE_APP_SETTING = _frontUrl + "/app/setting/form";											// 앱 > 설정
const _PAGE_APP_NOTICE = _frontUrl + "/app/notice/form";											// 앱 > 알림함

//== 상품상세 ==/
const _PAGE_GOODS_DETAIL = _frontUrl + "/goods/detail/form?goodsCd=";								// 상품 상세
const _PAGE_GOODS_COUPON_LAYER = _frontUrl + "/goods/coupon/layer?goodsCd=";						// 쿠폰레이어
const _PAGE_GOODS_SHOP_BENEFIT_LAYER = _frontUrl + "/goods/shop/benefit/layer/";					// 쇼핑혜택레이어
const _PAGE_CARD_PRMT_LAYER = _frontUrl + "/goods/card/prmt/layer/";								// 카드혜택레이어
const _PAGE_GOODS_SIZEINFO_LAYER = _frontUrl + "/goods/sizeInfo/layer/";							// 사이즈정보레이어
const _PAGE_GOODS_INSTOCK_ALARM_LAYER = _frontUrl + "/goods/instock/alarm/layer/";					// 재입고알림레이어
const _PAGE_GOODS_QNA_LAYER = _frontUrl + "/goods/qna/layer/";										// 상품문의레이어
const _PAGE_GOODS_QNA_CREATE_LAYER = _frontUrl + "/goods/qna/create/layer/";						// 상품문의레이어
const _PAGE_GOODS_DELIVERY_LAYER = _frontUrl + "/goods/delivery/layer/";							// 배송/교환/반품 레이어
const _PAGE_GOODS_REVIEW_LAYER = _frontUrl + "/goods/review/layer/";								// 상품평 레이어
const _PAGE_GOODS_REVIEW_DETAIL_LAYER = _frontUrl + "/goods/review/detail/layer";					// 상품평- 상세(베스트, 포토)
const _PAGE_GOODS_REVIEW_PHTO_LIST_LAYER = _frontUrl + "/goods/review/photo/layer/";				// 상품평- 포토/영상 리뷰 (list)
const _PAGE_GOODS_CPN_DOWNLOAD = "/goods/coupon/download";											// 상품쿠폰다운로드
const _PAGE_GOODS_EP_CPN_DOWNLOAD = "/goods/ep/coupon/download";									// EP쿠폰다운로드
const _PAGE_DEAL_GOODS_DETAIL_LAYER = _frontUrl + "/goods/deal/detail/layer/";						// 딜상품 상세레이어

//== 장바구니 ==/
const _PAGE_CART = _frontUrl + "/cart/list/form";								// 장바구니

//== 주문 ==/

//== 마이페이지 ==/
const _PAGE_MYPAGE = _frontUrl + "/mypage/main/form";								// 마이페이지 > 메인
const _PAGE_MYPAGE_ORDER_LIST = _frontUrl + "/mypage/order/list/form";				// 마이페이지 > 주문확인/배송조회
const _PAGE_MYPAGE_ORDER_DETAIL = _frontUrl + "/mypage/order/detail/form/";			// 마이페이지 > 주문/배송 상세
const _PAGE_MYPAGE_CRE_LIST = _frontUrl + "/mypage/cre/list/form";					// 마이페이지 > 취소/교환/반품 목록
const _PAGE_MYPAGE_RESTOCK = _frontUrl + "/mypage/restock/form";					// 마이페이지 > 재입고 알림 내역
const _PAGE_MYPAGE_COUPON = _frontUrl + "/mypage/coupon/form";						// 마이페이지 > 쿠폰
const _PAGE_MYPAGE_POINT = _frontUrl + "/mypage/point/form";						// 마이페이지 > 포인트
const _PAGE_MYPAGE_GIFTCARD = _frontUrl + "/mypage/gift/card/form";					// 마이페이지 > 상품권
const _PAGE_MYPAGE_REVIEW = _frontUrl + "/mypage/review/form";						// 마이페이지 > 리뷰
const _PAGE_MYPAGE_CREATE_REVIEW = _frontUrl + "/mypage/review/create/form/";		// 마이페이지 > 리뷰 > 리뷰작성
const _PAGE_MYPAGE_REVIEW_DETAIL_LAYER = _frontUrl +"/mypage/review/detail/layer/";	// 마이페이지- 포토/영상 리뷰 (list)
const _PAGE_MYPAGE_DELIVERY_ADDR = _frontUrl + "/mypage/delivery/addr/form";		// 마이페이지 > 배송지 관리
const _PAGE_MYPAGE_WISHLIST = _frontUrl + "/mypage/wish/list/form";					// 마이페이지 > 위시리스트
const _PAGE_MYPAGE_CUSTOMER = _frontUrl + "/mypage/customer/confirm/form";			// 마이페이지 > 내정보 관리 > 회원정보 확인
const _PAGE_MYPAGE_CUSTOMER_MODIFY = _frontUrl + "/mypage/customer/modify/form";	// 마이페이지 > 내정보 관리 > 회원정보 수정
const _PAGE_PASSWORD_MODIFY = _frontUrl + "/mypage/password/modify/form";			// 마이페이지 > 비밀번호 변경
const _PAGE_MYPAGE_SECEDE = _frontUrl + "/mypage/customer/secede/form";				// 마이페이지 > 회원탈퇴
const _PAGE_WISHLIST = _frontUrl + "/mypage/wish/list/form";						// 마이페이지 > 위시리스트
const _PAGE_WISHLIST_PUT = _frontUrl + "/mypage/wish/list/put";						// 위시리스트 담기
const _PAGE_WISHLIST_DEL = _frontUrl + "/mypage/wish/list/delete";					// 위시리스트 삭제

//== 마이페이지 ==/
const _PAGE_NOMEMBER_MAIN = _frontUrl + "/noMember/main/form";						// 비회원 > 메인
const _PAGE_NOMEMBER_ORDER_LIST = _frontUrl + "/noMember/order/list/form";			// 비회원 > 주문확인/배송조회
const _PAGE_NOMEMBER_ORDER_DETAIL = _frontUrl + "/noMember/order/detail/form/";		// 비회원 > 주문/배송 상세
const _PAGE_NOMEMBER_CRE_LIST = _frontUrl + "/noMember/cre/list/form";				// 비회원 > 취소/교환/반품 목록

//== 검색 ==/
const _PAGE_SEARCH_LAYER = _frontUrl + "/display/search/layer";					// 검색레이어
const _PAGE_SEARCH_GOODS = _frontUrl + "/display/search/goods/list/form";			// 검색상품목록
const _PAGE_BRAND_SEARCH_LAYER = _frontUrl + "/display/brand/search/layer";					// 브랜드 검색레이어
const _PAGE_BRAND_SEARCH_GOODS = _frontUrl + "/display/brand/search/goods/list/form";		// 브랜드 검색상품목록

//== 기획전 ==/
const _PAGE_PLANNING_MAIN = _frontUrl + "/planning/main/form"; 							// 기획전 메인
const _PAGE_PLANNING_DETAIL = _frontUrl + "/planning/detail/form";						// 기획전 상세
const _PAGE_PLANNING_CPN_DOWNLOAD = "/planning/coupon/download";						// 상품쿠폰다운로드
const _PAGE_PLANNING_REPLY_DETAIL_LAYER = _frontUrl + "/planning/reply/detail/layer";	// 상품평- 상세(포토)
const _PAGE_PLANNING_REVIEW_DETAIL_LAYER = _frontUrl + "/planning/review/detail/layer";	// 기획전 리뷰 상세

//== 핫딜==/
const _PAGE_SOCIAL_MAIN = _frontUrl + "/social/main/form";						// 소설(핫딜) 메인

//== 이벤트 ==/
const _PAGE_EVENT_MAIN = _frontUrl + "/planning/event/main/form"; 					// 이벤트 메인
const _PAGE_EVENT_POLL = _frontUrl + "/planning/event/poll/form"; 					// 이벤트 > 설문조사
const _PAGE_CUSTOMER_GRADE_BENEFIT = _frontUrl + "/planning/event/custgrade/benefit/form"; // 이벤트 회원등급혜택


//== 고객센터 ==/
const _PAGE_FAQ = _frontUrl + "/callcenter/faq/form";									// 고객센터 > FAQ
const _PAGE_ONETOONE_QNA = _frontUrl + "/callcenter/onetoone/qna/form";					// 고객센터 > 1:1문의
const _PAGE_ONETOONE_QNA_REG = _frontUrl + "/callcenter/onetoone/qna/register/form";	// 고객센터 > 1:1문의등록
const _PAGE_ONETOONE_QNA_DETAIL_LAYER = _frontUrl + "/callcenter/onetoone/photo/detail/layer";	// 고객센터 > 1:1 상세(포토)
const _PAGE_GOODS_QNA = _frontUrl + "/callcenter/goods/qna/form";						// 고객센터 > 상품문의
const _PAGE_NOTICE = _frontUrl + "/callcenter/notice/form";								// 고객센터 > 공지사항

//== 기타 ==/
const _PAGE_LOOKBOOK_MAIN = _frontUrl + "/display/lookbook/main/form";		// 룩북 메인
const _PAGE_LOOKBOOK_DETAIL = _frontUrl + "/display/lookbook/detail/form";		// 룩북 상세


/**********************************************************************************************/
/**
 * @type   : function
 * @access : public
 * @desc   : page 이동
 * <pre>
 *	 cfnGoToPage(PAGE_LOGIN);
 * </pre>
 * @param  : page - page
 * @return : None
 * @author : gagamel
 * @since  : 2020/02/21
 */
var cfnGoToPage = function(page, ithrCd , gnbId) {
	if (!gagajf.isNull(page)) {
		var params = page;
		if (ithrCd) params += "&ithrCd=" + ithrCd;
		if (gnbId) params += "&gnbId=" + gnbId;
		document.location.href = params;
	}
}

/**
 * @type   : function
 * @access : public
 * @desc   : 나이스 휴대폰 인증
 * <pre>
 *		 cfnOpenCellphoneCertify();
 *		 호출된 페이지에서
 *		 PC : fnNiceCallBack(encData) 콜백 함수 생성 후 encData 가지고 호출 처리
 *		 MO : redirectUrl 호출하는 페이지에서 넣어줘야됨
 * </pre>
 * @param  redirectUrl - 모바일에서 사용 페이지이동으로 하기 때문에
 * @since  : 2021/02/09
 * @author : jsshin
 */
var cfnOpenCellphoneCertify = function (redirectUrl, custParams) {
	var actionUrl = _frontUrl + "/customer/nice/cellphone/form";
	var popupWidth = 420;
	var popupHeight = 720;
	var popupX = (window.screen.width / 2) - (popupWidth / 2);
	var popupY = (window.screen.height / 3) - (popupHeight / 3);
	if ('P' === _frontGb) {
		window.open(actionUrl, "popupCellphone", "top=" + popupY + ", left=" + popupX + ", width=" + popupWidth + ", height=" + popupHeight + ", fullscreen=no,menubar=no,status=no,toolbar=no,titlebar=yes,location=no,scrollbar=no");
	} else {
		if (!gagajf.isNull(redirectUrl)) {
			actionUrl = actionUrl + "?redirectUrl=" + redirectUrl;
			if (!gagajf.isNull(custParams)) {
				actionUrl = actionUrl + "&custParams=" + encodeURIComponent(custParams);
			}
			document.location.href = actionUrl;
		}
	}
}

/**
 * @type   : function
 * @access : public
 * @desc   : 나이스 아이핀 인증
 * <pre>
 *		 cfnOpenIpinCertify();
 *		 호출된 페이지에서
 *		 PC : fnNiceCallBack(encData) 콜백 함수 생성 후 encData 가지고 호출 처리
 *		 MO : redirectUrl 호출하는 페이지에서 넣어줘야됨
 * </pre>
 * @since  : 2021/02/09
 * @author : jsshin
 */
var cfnOpenIpinCertify = function (redirectUrl, custParams) {
	var actionUrl = _frontUrl + "/customer/nice/ipin/form";
	var popupWidth = 445;
	var popupHeight = 550;
	var popupX = (window.screen.width / 2) - (popupWidth / 2);
	var popupY = (window.screen.height / 3) - (popupHeight / 3);
	if ('P' === _frontGb) {
		window.open(actionUrl, "popupIpin", "top=" + popupY + ", left=" + popupX + ", width=" + popupWidth + ", height=" + popupHeight + ", fullscreen=no,menubar=no,status=no,toolbar=no,titlebar=yes,location=no,scrollbar=no");
	} else {
		if (!gagajf.isNull(redirectUrl)) {
			actionUrl = actionUrl + "?redirectUrl=" + redirectUrl;
			if (!gagajf.isNull(custParams)) {
				actionUrl = actionUrl + "&custParams=" + custParams;
			}
			document.location.href = actionUrl;
		}
	}
};

/**
 * @type   : function
 * @access : public
 * @desc   : 장바구니 등록  temp.cartGb :C 장바구니, O:바로구매
 * <pre>
 *		cfnAddCart(cartList);
 *		cartList는 Array로 등록해주셔야합니다.
 *		ex) 일반 & deal 상품 장바구니 등록 (일반&딜 상품도 배열에 담아서 전송해주세요.)
 *			let compsList = [];
 *			let temp = new Object;
 *			temp.goodsCd = "14373703";
 *			temp.optCd = "블랙140";
 *			temp.goodsQty = 1;
 *			temp.goodsType = "G056_D";
 *			temp.dealGoodsCd = "STY"
 *			temp.cartGb = "C";
 *			temp.afLinkCd = "afLinkCd";
 *			temp.ithrCd = "G027_ZZZ";
 *			temp.contentsLoc = "G028_YYY";
 *			temp.planDtlSq = "123";
 *			compsList.push(temp);
 *			cfnAddCart(compsList);
 *
 *		ex) 세트상품 장바구니 등록
 *			let cartGoodsList = [];
 *			for(let i = 0 ; i < 세트상품수 ; i++) {
 *				let compsList = [];
 *				let goodsList = {
 *					cartCompsList : new Array()
 *				}
 *
 *				for(let j = 0 ; j < 세트구성품수 ; j++) {
 *					let temp = new Object;
 *					temp.goodsCd = "STYS00000005";
 *					temp.itemCd = "A83F-DP568S";
 *					temp.optCd = "14019445-1";
 *					temp.goodsQty = 3;
 *					temp.goodsType = "G056_S";
 *					temp.cartGb = "C";
 *					temp.afLinkCd = "aaaa";
 *					temp.ithrCd = "12311";
 *					temp.contentsLoc = "afasd";
 *					temp.planDtlSq = "44";
 *					compsList.push(temp);
 *				}
 *
 *				goodsList.cartCompsList = compsList;
 *				cartGoodsList.push(goodsList);
 *			}
 *
 *			cfnAddCart(cartGoodsList);
 *
 * </pre>
 * @since  : 2021/02/24
 * @author : xodud1202
 */
function cfnAddCart(cartList) {
	gagajf.showProgressbar(true);
	let jsonData = JSON.stringify(cartList);
	
	$.ajax( {
		type: "POST",
		url : '/cart/save',
		data : jsonData,
		contentType: 'application/json',
		dataType : 'json',
		error : function(e) {
			mcxDialog.alert("장바구니 등록이 실패했습니다.");
			gagajf.showProgressbar(false);
		},
		success : function(result) {
			if(result.message == "SUCCESS") {
				if(result.cartGb == "C") {
					// 룩북 및 이벤트 페이지에서 여러 타입의 상품이 들어 올 수 있음. 반복문으로 들어오므로 cartList[0].multiGoodsGb == O면 confirm 창 안띄움.
					// 일반적인 장바구니 담기를 위해 공백이나 O가 아닌 값일때 confirm 처리
					if(!(cartList != null && cartList[0].multiGoodsGb != null && cartList[0].multiGoodsGb == "O")) {
						// PC버전에서만 동작해야함(퀵메뉴)
						if (navigator.userAgent.indexOf('Mobile') == -1) {
							mcxDialog.confirm("<div class=" + "dialog-title" + ">" + "상품이 쇼핑백에 추가되었습니다.</div><p>쇼핑백으로 이동하시겠습니까?</p>", {
								cancelBtnText: "계속 쇼핑하기",
								sureBtnText  : "쇼핑백 가기",
								sureBtnClick : function () {
									location.href = '/cart/list/form'; 	//내 쇼핑백 이동url
								}
							});

							fnGetCartGoodsList();
						} else {
							mcxDialog.confirm("<span class='trans'></span><div class="+"dialog-title"+">"+"쇼핑백에 상품을 담았습니다.</div>", {
								sureBtnText: "쇼핑백 가기",
								sureBtnClick: function(){
									location.href='/cart/list/form'; //내 쇼핑백 이동url
								}
							});
							if($('.dialog-content').find('.trans')){
								$('.dialog-content').closest(".dialog-mobile").addClass("trans");
								$('.dialog-mobile').children(".dialog-cancel-button").css("display", "none");
								$(document).find(".dialog-mobile-bg").css("display", "none");
							};

							$("body>.trans").delay(3000).fadeOut();

							if($("header #htopSub .button_wrap .store>span")) {
								// 장바구니 수량 조회
								$.getJSON('/cart/goods/not/soldout/cnt', function (order, status) {
									let cartCnt;
									if (order.cartGoodsList.length > 99) {
										cartCnt = "99+";
									} else {
										cartCnt = order.cartGoodsList.length;
									}

									$("header #htopSub .button_wrap .store>span").text(cartCnt);
									$("#htopMain>.button_wrap>.store>span").text(cartCnt);
								});
							}
						}
						
						// 장바구니 팝업에서
						if (cartList != null && cartList[0].popupYn != null && cartList[0].popupYn == "Y") {
							let data = {shotDelvUseYn: $("input[name=shotDelvUseYn]:checked").val()};
							getCartList(data);
						}
					}

					// 크리테오 광고스크립트?
					if(result.custNo != null && result.custNo > 0) {
						window.criteo_q = window.criteo_q || [];
						let deviceType = /iPad/.test(navigator.userAgent) ? "t" : /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk/.test(navigator.userAgent) ? "m" : "d";
						// 장바구니에 추가 된 각 상품에 대한 새 객체 추가
						window.criteo_q.push(
							{ event: "setAccount", account: 6762}, // 이 라인은 업데이트하면 안됩니다
							{ event: "setEmail", email: criteoEmail }, // 유저가 로그인이 안되 있는 경우 빈 문자열을 전달
							{ event: "setSiteType", type: deviceType},
							{ event: "viewBasket", item: [{id: cartList[0].goodsCd, price:result.price, quantity: cartList[0].goodsQty }]}
						);
					}

					// 페이스북 픽셀 (장바구니 담기)
					fbq('track', 'AddToCart',{
							value: result.price,
							currency: 'KRW',
							contents: [{
									id: cartList[0].goodsCd,
									name: result.goodsNm,
									quantity: cartList[0].goodsQty
								}],
						}
					);
					// 카카오   - NBA 
					kakaoPixel('7438736323272526191').addToCart();
					// 카카오   - NBA키즈 
					kakaoPixel('6687758563655959994').addToCart();
					// Event snippet for 220331_장바구니에 추가 conversion page 
					gtag('event', 'conversion', {'send_to': 'AW-10876548558/9KD1CM6kt64DEM7rq8Io'});
					
					var ENP_VAR = {conversion: {product: []}};
					
					// 주문한 각 제품들을 배열에 저장
					ENP_VAR.conversion.product.push({
						productCode : cartList[0].goodsCd,
						productName : result.goodsNm,
						price : result.listPrice,
						dcPrice : result.price,
						qty : cartList[0].goodsQty
					});
					
					ENP_VAR.conversion.totalPrice = result.price;  // 없는 경우 단일 상품의 정보를 이용해 계산
					ENP_VAR.conversion.totalQty = cartList[0].goodsQty;  // 없는 경우 단일 상품의 정보를 이용해 계산
					
					(function (a, g, e, n, t) {
						a.enp = a.enp || function () {
							(a.enp.q = a.enp.q || []).push(arguments)
						};
						n = g.createElement(e);
						n.async = !0;
						n.defer = !0;
						n.src = "https://cdn.megadata.co.kr/dist/prod/enp_tracker_self_hosted.min.js";
						t = g.getElementsByTagName(e)[0];
						t.parentNode.insertBefore(n, t)
					})(window, document, "script");
					enp('create', 'conversion', 'is24', {device: 'M'}); // W:웹, M: 모바일, B: 반응형
					
				} else if (result.cartGb == "O"){
					// 신규 고객 판매 상품 체크
					if(result.newCustCanYn == "N") {
						gagajf.showProgressbar(false);
						mcxDialog.alert("해당 상품은 신규회원만 구매 가능한 상품입니다.");
						return;
					}

					let orderHtml = "";
					for(let i = 0 ; i < result.cartSqList.length ; i++) {
						orderHtml += '<input type="hidden" name="cartSqArr" value="' + result.cartSqList[i] + '" />';
					}
					$("#directOrderForm").html(orderHtml);
					
					if(result.custNo == 0) {
						var btn = ["비회원 구매", "로그인 후 구매"];
						mcxDialog.confirmC("로그인 후 구매 시 다양한 혜택을 받으실 수 있습니다.", { //내용
							btn: btn,
							btnClick: function(index){
								if (index == 1) { //button1 일때 처리문
									$("#directOrderForm").submit();
								} else {
									location.href="/signin";
								}
							}
						});
					} else {
						$("#directOrderForm").submit();
					}
				} else if (result.cartGb == "G") {
					// 신규 고객 판매 상품 체크
					if(result.newCustCanYn == "N") {
						gagajf.showProgressbar(false);
						mcxDialog.alert("해당 상품은 신규회원만 구매 가능한 상품입니다.");
						return;
					}

					if(result.custNo != null && result.custNo != 0) {
						let orderHtml = "";
						for(let i = 0 ; i < result.cartSqList.length ; i++) {
							orderHtml += '<input type="hidden" name="cartSqArr" value="' + result.cartSqList[i] + '" />';
						}
						$("#directOrderForm").html(orderHtml);
						$("#directOrderForm").submit();
					} else {
						location.href="/signin";
					}
				} else if (result.cartGb == "N") {
					buy_nc_req(result.cartSqList);
				} else {
					mcxDialog.alert("해당 기능을 사용 할 수 없습니다. 새로고침 후 다시 시도해주세요.");
				}
			} else {
				mcxDialog.alert(result.message);
			}
			
			gagajf.showProgressbar(false);
		}
	});
}


/**
 * @type   : function
 * @access : public
 * @desc   :  네이버 로그인
 * <pre>
 *	 cfnLoginNaver();
 *	 호출된 페이지에서
 *	 PC: fnSnsSigninCallback(userInfo) 콜백 함수 생성 후 가지고 호출 처리
 *	 MO : SnsCallBackFormMob.html 해당 페이지 후 처리
 * </pre>
 * @since  : 2021/02/23
 * @author : jsshin
 */
var cfnLoginNaver = function (requestGb, chkRememberMe) {
	let actionUrl = _frontUrl + '/signin/naverlogin?rememberMe=' + chkRememberMe;
	let popupHeight = 800;
	let popupWidth = 600;
	let popupX = (window.screen.width / 2) - (popupWidth / 2);
	let popupY = (window.screen.height / 3) - (popupHeight / 3);
	var frontGb = cfnCheckMobileDevice();
	if ('P' == frontGb) {
		window.open(actionUrl, 'naverLogin', 'top=' + popupY + ',left=' + popupX + ',height=' + popupHeight + ',width=' + popupWidth + ', fullscreen=no,menubar=no,status=no,toolbar=no,titlebar=yes,location=no,scrollbars=yes', '');
	} else {
		document.location.href = actionUrl + '&requestGb=' + requestGb;
	}
};

/**
 * @type   : function
 * @access : public
 * @desc   : 카카오 로그인
 * <pre>
 *	 cfnLoginKakao();
 *	 호출된 페이지에서
 *	 PC: fnSnsSigninCallback(userInfo) 콜백 함수 생성 후 가지고 호출 처리
 *	 MO : SnsCallBackFormMob.html 해당 페이지 후 처리
 * </pre>
 * @since  : 2021/02/23
 * @author : jsshin
 */
var cfnLoginKakao = function (requestGb, chkRememberMe) {
	let actionUrl = _frontUrl + '/signin/kakologin?rememberMe=' + chkRememberMe;
	let popupWidth = 450;
	let popupHeight = 700;
	let popupX = (window.screen.width / 2) - (popupWidth / 2);
	let popupY = (window.screen.height / 3) - (popupHeight / 3);
	if ('P' === _frontGb) {
		window.open(actionUrl, 'kakaoLogin', 'top=' + popupY + ',left=' + popupX + ',height=' + popupHeight + ',width=' + popupWidth + ', fullscreen=no,menubar=no,status=no,toolbar=no,titlebar=yes,location=no,scrollbars=yes', '');
	} else {
		document.location.href = actionUrl + '&requestGb=' + requestGb;
	}
};

/**
 * @type   : function
 * @access : public
 * @desc   : Yes24 로그인
 * <pre>
 *	 cfnLoginYes24();
 *	 호출된 페이지에서
 *	 PC: fnSnsSigninCallback(userInfo) 콜백 함수 생성 후 가지고 호출 처리
 *	 MO : SnsCallBackFormMob.html 해당 페이지 후 처리
 * </pre>
 * @since  : 2021/02/23
 * @author : jsshin
 */
var cfnLoginYes24 = function (requestGb, chkRememberMe) {
	let actionUrl = _frontUrl + '/signin/yes24login?rememberMe=' + chkRememberMe;
	let popupWidth = 987;
	let popupHeight = 862;
	let popupX = (window.screen.width / 2) - (popupWidth / 2);
	let popupY = (window.screen.height / 3) - (popupHeight / 3);
	if ('P' === _frontGb) {
		window.open(actionUrl, 'yes24Login', 'top=' + popupY + ',left=' + popupX + ',height=' + popupHeight + ',width=' + popupWidth + ', fullscreen=no,menubar=no,status=no,toolbar=no,titlebar=yes,location=no,scrollbars=yes', '');
	} else {
		document.location.href = actionUrl + '&requestGb=' + requestGb;
	}
};

/**
 * @type   : function
 * @access : public
 * @desc   : 상품상세로 이동
 * <pre>
 *		cfnGoToGoodsDetail('A83U-TS058S');
 * </pre>
 * @param  : goodsCd - 상품코드코드. 필수
 * @param  : ithrCd - 유입경로. 필수
 * @param  : contentsLoc - 컨텐츠위치.
 * @since  : 2021/03/02
 * @author : eskim
 */
var cfnGoToGoodsDetail = function (goodsCd, colorCd, ithrCd, contentsLoc, planDtlSq, rccode, keyword, searchId ) {
	var params = goodsCd;
	if (typeof (colorCd) != 'undefined') params += "&colorCd=" + colorCd;
	if (typeof (ithrCd) != 'undefined') params += "&ithrCd=" + ithrCd;
	if (typeof (contentsLoc) != 'undefined' && contentsLoc != "") params += "&contentsLoc=" + contentsLoc;
	if (typeof (planDtlSq) != 'undefined') params += "&planDtlSq=" + planDtlSq;
	if (typeof (rccode) != 'undefined') params += "&rccode="+ rccode;	// 추천솔루션 제공 상품클릭시
	if (typeof (keyword) != 'undefined') params += "&keyword="+ keyword;	// 검색엔진 연관검색어 제공 상품클릭시
	if (typeof (searchId) != 'undefined') params += "&searchId="+ searchId;	// 검색엔진 연관검색어 제공 상품클릭시
	cfnGoToPage(_PAGE_GOODS_DETAIL + params);
}


/**
 * @type   : function
 * @access : public
 * @desc   : 공통 레이어 띄우기
 * <pre>
 *	 cfnOpenLayer(_PAGE_CARD_LAYER, 'layer_card_benefit');
 * </pre>
 * @param  : page - page. 필수
 * @param  : tgt - 레이어가 표시될 위치(예, div 태크의 ID). 필수
 * @param  : oParam - Parameter Object. 옵션
 * @param  : callbackFnc - 콜백함수. 옵션
 */
function cfnOpenLayer(page, tgt, oParam, callbackFnc) {
	if (!oParam) oParam = new Object();

	$.post(page
		, oParam
		, function (result) {
			$('#' + tgt).html(result);
			$('#' + tgt).modal("show");
			//$('#' + tgt).show();
			//layerPop_resize(tgt);
			if (callbackFnc && $.isFunction(callbackFnc))
				callbackFnc();
		}
		, "html");
	return false;
}

/**
 * @type   : function
 * @access : public
 * @desc   : 공통 레이어 위치 조정
 * <pre>
 *	 layerPop_resize('layer_card_benefit');
 * </pre>
 * @param  : tgt - 레이어가 표시될 위치(예, div 태크의 ID). 필수
 */
function layerPop_resize(tgt) {
	var thisH = $("#" + tgt).find(".modal").outerHeight();
	var thisT = ($(window).height() / 2) - (thisH / 2);
	$("#" + tgt).find(".modal").css('top', thisT + 'px');
}

/**
 * @type   : function
 * @access : public
 * @desc   : 공통 레이어 닫기(레이어 숨기기)
 * <pre>
 *	 cfCloseLayer("layer_card_benefit");
 * </pre>
 * @param  : tgt - 숨길 레이어 ID(예, div 태크의 ID). 필수
 */
function cfCloseLayer(tgt) {
	if (_frontGb == "P"){
		$('#' + tgt).hide();
		$('#' + tgt).remove();
	}else{
		$('#' + tgt).hide();
	}
	return false;
}

/**
* @type   : function
* @access : public
* @desc   : 카드혜택보기
* <pre>
*		cfCardInfo();
* </pre>
*/
function cfCardInfo() {
	var str = '<div class="modal fade pd_pop bnf_card_pop" id="layer_card_benefit" tabindex="-1" role="dialog" aria-labelledby="bnfCardLabel" aria-hidden="true"></div>';
	if ("P" != _frontGb){
		str = '<div class="modal pop_full fade pd_pop bnf_card_pop" id="layer_card_benefit" tabindex="-1" role="dialog" aria-labelledby="exampleFullLabel" aria-hidden="true">';
	}
	
	if ($('#layer_card_benefit').length == 0) {
		$('body').append(str);
	}

	cfnOpenLayer(_PAGE_CARD_PRMT_LAYER, 'layer_card_benefit');
}

/**
* @type   : function
* @access : public
* @desc   : 상품쿠폰목록보기
* <pre>
*		cfGoodsCouponInfo(goodsCd);
* </pre>
*/
function cfGoodsCouponInfo(goodsCd, goodsType) {
	
	if (!cfCheckLogin()) {
		cfnGoToPage(_PAGE_LOGIN);
		return false;
	}
	var aria = "saleCouponLabel";
	if ("P" != _frontGb){
		aria = "modalScrollLabel";
	}
	var str = '<div class="modal fade pd_pop salecoupon_pop" id="layer_goods_coupon" tabindex="-1" role="dialog" aria-labelledby="'+aria+'" aria-hidden="true"></div>';

	if ($('#layer_goods_coupon').length == 0) {
		$('body').append(str);
	}
	var params = goodsCd;
	if (typeof (goodsType) != 'undefined') params += "&goodsType=" + goodsType;
	cfnOpenLayer(_PAGE_GOODS_COUPON_LAYER + params, 'layer_goods_coupon');
}

/**
* @type   : function
* @access : public
* @desc   : 상품쇼핑혜택목록보기
* <pre>
*		cfGoodsShopBenefitInfo(goodsCd);
* </pre>
*/
function cfGoodsShopBenefitInfo(goodsCd) {
	var str = '<div class="modal fade pd_pop bnf_shopping_pop" id="layer_shopping_benefit" tabindex="-1" role="dialog" aria-labelledby="bnfShoppingLabel" aria-hidden="true"></div>';
	if ("P" != _frontGb){
		str = '<div class="modal pop_full fade pd_pop bnf_shopping_pop" id="layer_shopping_benefit" tabindex="-1" role="dialog" aria-labelledby="exampleFullLabel" aria-hidden="true"></div>';
	}

	if ($('#layer_shopping_benefit').length == 0) {
		$('body').append(str);
	}

	cfnOpenLayer(_PAGE_GOODS_SHOP_BENEFIT_LAYER+goodsCd, 'layer_shopping_benefit');
}

/**
* @type   : function
* @access : public
* @desc   : 상품사이즈정보보기
* <pre>
*		cfGoodsSizeInfo(goodsCd);
* </pre>
*/
function cfGoodsSizeInfo(goodsCd, colorCd) {
	var str = '<div class="modal fade pd_pop info_size_pop" id="layer_size_info" tabindex="-1" role="dialog" aria-labelledby="infoSizeLabel" aria-hidden="true"></div>';
	if ("P" != _frontGb){
		str = '<div class="modal pop_full fade pd_pop info_size_pop" id="layer_size_info" tabindex="-1" role="dialog" aria-labelledby="exampleFullLabel" aria-hidden="true"></div>';
	}
	
	if ($('#layer_size_info').length == 0) {
		$('body').append(str);
	}

	cfnOpenLayer(_PAGE_GOODS_SIZEINFO_LAYER+goodsCd +'/'+colorCd, 'layer_size_info');
}

/**
* @type   : function
* @access : public
* @desc   : 상품재입고알림보기
* <pre>
*		cfGoodsInstockAlarmInfo(goodsCd);
* </pre>
*/
function cfGoodsInstockAlarmInfo(goodsCd, colorCd) {

	if (!cfCheckLogin()) {
		cfnGoToPage(_PAGE_LOGIN);
		return false;
	}
	
	var str = '<div class="modal fade pd_pop push_restock_pop" id="layer_instock_alarm" tabindex="-1" role="dialog" aria-labelledby="pushRestockLabel" aria-hidden="true"></div>';
	if ("P" != _frontGb){
		str = '<div class="modal pop_full fade pd_pop push_restock_pop" id="layer_instock_alarm" tabindex="-1" role="dialog" aria-labelledby="exampleFullLabel" aria-hidden="true"></div>';
	}
	if ($('#layer_instock_alarm').length == 0) {
		$('body').append(str);
	}

	cfnOpenLayer(_PAGE_GOODS_INSTOCK_ALARM_LAYER+goodsCd+'/'+colorCd, 'layer_instock_alarm');
}


/**
* @type   : function
* @access : public
* @desc   : 댓글 이미지 팝업
* <pre>
*		cfPlanReplyDetail(planSq, planEntrySq, planEntryAtSq, attachSq);
* </pre>
*/
function cfPlanReplyDetail(planSq, planEntrySq, planEntryAtSq, attachSq) {
	var str = '<div class="modal pop_full photo_comment_popup" id="photo_full_popup" tabindex="-1" role="dialog" aria-labelledby="comment_popup" aria-hidden="true"></div>';

	if ($('#photo_full_popup').length == 0) {
		$('body').append(str);
	}
	
	var params = '?planSq=' + planSq;
	params += '&planEntrySq=' + planEntrySq;
	if (typeof (planEntryAtSq) != 'undefined') params += "&planEntryAtSq=" + planEntryAtSq;
	if (typeof (attachSq) != 'undefined') params += "&attachSq=" + attachSq;
	
	cfnOpenLayer(_PAGE_PLANNING_REPLY_DETAIL_LAYER+params, 'photo_full_popup');
}

/**
* @type   : function
* @access : public
* @desc   : 댓글 이미지 팝업(모바일)
* <pre>
*		cfMoPlanReplyDetail(planSq, planEntrySq, planEntryAtSq, attachSq);
* </pre>
*/
function cfMoPlanReplyDetail(planSq, planEntrySq, planEntryAtSq, attachSq) {
	var str = '<div class="modal fade thumb_img_pop" id="thumbImgPop" tabindex="-1" role="dialog" aria-labelledby="thumbImgLabel" aria-hidden="true"></div>';

	if ($('#thumbImgPop').length == 0) {
		$('body').append(str);
	}
	
	var params = '?planSq=' + planSq;
	params += '&planEntrySq=' + planEntrySq;
	if (typeof (planEntryAtSq) != 'undefined') params += "&planEntryAtSq=" + planEntryAtSq;
	if (typeof (attachSq) != 'undefined') params += "&attachSq=" + attachSq;
	
	cfnOpenLayer(_PAGE_PLANNING_REPLY_DETAIL_LAYER+params, 'thumbImgPop');
}

/**
* @type   : function
* @access : public
* @desc   : 댓글 이미지 팝업(웹) - 1:1 문의
* <pre>
*		cfOneToPhotoDetail(counselSq, attachSq);
* </pre>
*/
function cfOneToPhotoDetail(counselSq, rnum) {
	var str = '<div class="modal fade thumb_img_pop" id="thumbImgPop" tabindex="-1" role="dialog" aria-labelledby="thumbImgLabel" aria-hidden="true"></div>';

	if ($('#thumbImgPop').length == 0) {
		$('body').append(str);
	}
	
	var params = '?counselSq=' + counselSq;
	if (typeof (rnum) != 'undefined') params += "&rnum=" + rnum;
	
	cfnOpenLayer(_PAGE_ONETOONE_QNA_DETAIL_LAYER + params, 'thumbImgPop');
}

/**
 * @type   : function
 * @access : public
 * @desc   : 공통 full 레이어 띄우기
 * <pre>
 *	 cfnOpenFullLayer(_PAGE_CARD_LAYER, 'layer_card_benefit');
 * </pre>
 * @param  : page - page. 필수
 * @param  : tgt - 레이어가 표시될 위치(예, div 태크의 ID). 필수
 * @param  : oParam - Parameter Object. 옵션
 * @param  : callbackFnc - 콜백함수. 옵션
 */
function cfnOpenFullLayer(page, tgt, oParam, callbackFnc) {
	if (!oParam) oParam = new Object();

	$.post(page
		, oParam
		, function (result) {
			$('body').addClass('lock');
			$('#' + tgt).html(result);
			$('#' + tgt).show();
			if (callbackFnc && $.isFunction(callbackFnc))
				callbackFnc();
		}
		, "html");

	return false;
}

/**
 * @type   : function
 * @access : public
 * @desc   : 공통 full 레이어 닫기(레이어 숨기기)
 * <pre>
 *	 cfCloseFullLayer("layer_card_benefit");
 * </pre>
 * @param  : tgt - 숨길 레이어 ID(예, div 태크의 ID). 필수
 */
function cfCloseFullLayer(tgt) {
	//if (_frontGb == "M"){
	//	btnClose(tgt);
	//}else{
		$('#' + tgt).hide();
		$('#' + tgt).remove();
		$('body').removeClass('lock');
	//}
	return false;
}

/**
* @type   : function
* @access : public
* @desc   : 상품문의 full 팝업
* <pre>
*		cfGoodsQng();
* </pre>
*/
function cfGoodsQng(goodsCd) {
	var Param = new Object();
	var str = '<div class="pd_pop full_pop pd_qnalist_pop" id="layer_goods_qna"></div>';
	if ("P" != _frontGb){
		str = '<div class="modal pop_full fade pd_pop pd_qnalist_pop" id="layer_goods_qna" tabindex="-1" role="dialog" aria-labelledby="exampleFullLabel" aria-hidden="true"></div>';
	}

	if ($('#layer_goods_qna').length == 0) {
		$('body').append(str);
	}

	if ("P" == _frontGb){
		cfnOpenFullLayer(_PAGE_GOODS_QNA_LAYER + goodsCd, 'layer_goods_qna', null, fnQnaLayerCollBack );
	}else{
		cfnOpenLayer(_PAGE_GOODS_QNA_LAYER + goodsCd, 'layer_goods_qna');
	}
}

/**
* @type   : function
* @access : public
* @desc   : 상품문의 등록 팝업
* <pre>
*		cfGoodsQngReg();
* </pre>
*/
function cfGoodsQngCreate(goodsCd) {
	
	if (!cfCheckLogin()) {
		cfnGoToPage(_PAGE_LOGIN);
		return false;
	}
	
	var Param = new Object();
	var str = '<div class="modal fade pd_pop pd_qnawrite_pop" id="layer_goods_qna_reg" tabindex="-1" role="dialog" aria-labelledby="pdQnaWriteLabel" aria-hidden="true"></div>';
	if ("P" != _frontGb){
		str = '<div class="modal pop_full fade pd_pop pd_qnawrite_pop" id="layer_goods_qna_reg" tabindex="-1" role="dialog" aria-labelledby="exampleFullLabel" aria-hidden="true"></div>';
	}
	
	if ($('#layer_goods_qna_reg').length == 0) {
		$('body').append(str);
	}

	cfnOpenLayer(_PAGE_GOODS_QNA_CREATE_LAYER + goodsCd, 'layer_goods_qna_reg');
}

/**
* @type   : function
* @access : public
* @desc   : 상품배송 full 팝업
* <pre>
*		cfGoodsDelivery();
* </pre>
*/
function cfGoodsDelivery(goodsCd) {
	var Param = new Object();
	var str = '<div class="pd_pop full_pop pd_delivery_pop" id="layer_goods_delivery"></div>';
	if ("P" != _frontGb){
		str = '<div class="modal pop_full fade pd_pop pd_delivery_pop" id="layer_goods_delivery" tabindex="-1" role="dialog" aria-labelledby="exampleFullLabel" aria-hidden="true"></div>';
	}

	if ($('#layer_goods_delivery').length == 0) {
		$('body').append(str);
	}

	if ("P" == _frontGb){
		cfnOpenFullLayer(_PAGE_GOODS_DELIVERY_LAYER + goodsCd, 'layer_goods_delivery',null , fnGoodsDeliveryCollBack);
	}else{
		cfnOpenLayer(_PAGE_GOODS_DELIVERY_LAYER + goodsCd, 'layer_goods_delivery');
	}
	
	
}

/**
* @type   : function
* @access : public
* @desc   : 상품 상품평 full 팝업
* <pre>
*		cfGoodsReview();
* </pre>
*/
function cfGoodsReview(goodsCd) {
	var Param = new Object();
	var str = '<div class="pd_pop full_pop pd_review_pop" id="layer_goods_review"></div>';
	if ("P" != _frontGb){
		str = '<div class="modal pop_full fade pd_pop pd_review_pop"  data-id="layer_infinite"  id="layer_goods_review" tabindex="-1" role="dialog" aria-labelledby="exampleFullLabel" aria-hidden="true"></div>';
	}
	if ($('#layer_goods_review').length == 0) {
		$('body').append(str);
	}
	
	if ("P" == _frontGb){
		cfnOpenFullLayer(_PAGE_GOODS_REVIEW_LAYER + goodsCd, 'layer_goods_review',null , fnReviewLayerCollBack);
	}else{
		cfnOpenLayer(_PAGE_GOODS_REVIEW_LAYER + goodsCd, 'layer_goods_review');
	}
}


/**
* @type   : function
* @access : public
* @desc   : 상품평- 베스트 리뷰 보기
* <pre>
*		cfGoodsReviewDetail(goodsCd, bestYn, photoYn, reviewSq, attachSq);
* </pre>
*/
function cfGoodsReviewDetail(goodsCd, bestYn, photoYn, reviewSq, attachSq) {
	var str = '<div class="modal fade pd_pop pd_photoreviewdetail_pop" id="layer_review_best" tabindex="-1" role="dialog" aria-labelledby="pdBestReviewLabel" aria-hidden="true"></div>';
	if ("P" != _frontGb){
		str = '<div class="modal pop_full fade photo_comment_popup pd_pop pd_photoreviewdetail_pop" id="layer_review_best" tabindex="-1" role="dialog" aria-labelledby="exampleFullLabel" aria-hidden="true"></div>';
	}

	if ($('#layer_review_best').length == 0) {
		$('body').append(str);
	}else{
		$("#layer_review_best").modal("show");
	}
	
	var params = '?goodsCd=' + goodsCd;
	params += '&reviewSq=' + reviewSq;
	params += '&bestYn=' + bestYn;
	params += '&photoYn=' + photoYn;
	if (typeof (attachSq) != 'undefined') params += "&attachSq=" + attachSq;

	cfnOpenLayer(_PAGE_GOODS_REVIEW_DETAIL_LAYER+params, 'layer_review_best',  null, fnReviewDetailLayerCollBack);
}

/**
* @type   : function
* @access : public
* @desc   : 상품평- 포토/영상 리뷰 리스트 보기
* <pre>
*		cfGoodsPhotoReview(goodsCd);
* </pre>
*/
function cfGoodsReviewPhoto(goodsCd) {
	var str = '<div class="modal fade pd_pop pd_photoreviewlist_pop" id="layer_review_photo" tabindex="-1" role="dialog" aria-labelledby="pdPhotoReviewListLabel" aria-hidden="true"></div>';
	if ("P" != _frontGb){
		str = '<div class="modal pop_full fade pd_pop pd_photoreviewlist_pop" id="layer_review_photo" tabindex="-1" role="dialog" aria-labelledby="exampleFullLabel" aria-hidden="true"></div>';
	}
	
	if ($('#layer_review_photo').length == 0) {
		$('body').append(str);
	}

	cfnOpenLayer(_PAGE_GOODS_REVIEW_PHTO_LIST_LAYER+goodsCd, 'layer_review_photo');
}


/**
 * @type   : function
 * @access : public
 * @desc   : Yes24 정보이용동의 화면
 * @param  : custNm - 고객명
 * <pre>
 *		cfnConsentUseInfo(custNm);
 * </pre>
 */
function cfnConsentUseInfo(custNm) {
	let str;
	if (_frontGb === 'P') {
		str = '<div class="modal fade mbAgree_pop" id="layer_consent_useinfo" tabIndex="-1" role="dialog" aria-labelledby="mbAgreeLabel" aria-hidden="true"></div>';
	} else {
		str = '<div class="modal pop_full mbAgree_pop" id="layer_consent_useinfo" tabindex="-1" role="dialog" aria-labelledby="mbAgreeLabel" aria-hidden="true"></div>'
	}
	let params = {}
	params.custNm = custNm;
	if ($('#layer_consent_useinfo').length == 0) {
		$('body').append(str);
	}

	cfnOpenLayer(_PAGE_CUSTOMER_CONSENT_USERINFO, 'layer_consent_useinfo',params);
}


/**
 * @type   : function
 * @access : public
 * @desc   : 패스워드 변경 팝업
 * <pre>
 *		cfnPasswordModify();
 * </pre>
 */
function cfnPasswordModify() {
	let str;
	if (_frontGb === 'P') {
		str = '<div class="modal fade pswordModify_pop" id="pswordModifyPop" tabindex="-1" role="dialog" aria-labelledby="pswordModifyLabel" aria-hidden="true"></div>';
	} else {
		str = '<div class="modal pop_full password_change_pop" id="pswordModifyPop" tabIndex="-1" role="dialog" aria-labelledby="pswordModifyPop" aria-hidden="true"></div>';
	}

	if ($('#pswordModifyPop').length == 0) {
		$('body').append(str);
	}

	cfnOpenLayer(_PAGE_PASSWORD_MODIFY, 'pswordModifyPop');
}

/**
 * @type   : function
 * @access : public
 * @desc   : 이용약관 레이어
 * <pre>
 *		cfnUseTermsLayer();
 * </pre>
 */
function cfnUseTermsLayer() {
	let str;
	if (_frontGb === 'P') {
		str = '<div class="modal fade policiesTerms_pop" id="policiesTermsPop" tabindex="-1" role="dialog" aria-labelledby="policiesTermsLabel" aria-hidden="true"></div>';
	}  else {
		str = '<div class="modal pop_full fade" id="policiesTermsPop" tabindex="-1" role="dialog" aria-labelledby="policiesTermsLabel" aria-hidden="true"></div>';
	}

	if ($('#policiesTermsPop').length == 0) {
		$('body').append(str);
	}
	cfnOpenLayer(_PAGE_USE_TERMS_LAYER, 'policiesTermsPop');
}

/**
 * @type   : function
 * @access : public
 * @desc   : 개인정보취급방침
 * <pre>
 *		cfnPrivacyPolicyLayer();
 * </pre>
 */
function cfnPrivacyPolicyLayer(mallGb) {
	let str;
	if (_frontGb === 'P') {
		str = '<div class="modal fade policiesPrivacy_pop" id="policies_privacypop" tabindex="-1" role="dialog" aria-labelledby="policiesPrivacyLabel" aria-hidden="true"></div>';
	} else {
		str = '<div class="modal pop_full fade" id="policies_privacypop" tabindex="-1" role="dialog" aria-labelledby="policiesPrivacyLabel" aria-hidden="true"></div>'
	}
	if ($('#policies_privacypop').length == 0) {
		$('body').append(str);
	} else {
		$("#policies_privacypop").modal("show");
	}
	let params = {}
	params.mallGb = mallGb;
	cfnOpenLayer(_PAGE_PRIVACY_POLICY_LAYER, 'policies_privacypop', params);
}

/**
 * @type   : function
 * @access : public
 * @desc   : 업체리스트
 * <pre>
 *		cfnSupplyComanyLayer();
 * </pre>
 */
function cfnSupplyComanyLayer(mallGb) {
	let str;
	if (_frontGb === 'P') {
		str ='<div class="modal fade pd_pop psptn_pop" id="partnersPop" tabIndex="-1" role="dialog" aria-labelledby="psptnLabel" aria-hidden="true"></div>'
	} else {
		str = '<div class="modal pop_full fade" id="partnersPop" role="dialog" aria-labelledby="partnersPopFullLabel" aria-hidden="true"></div>';
	}
	if($('#partnersPop').length == 0) {
		$('body').append(str);
	}
	let params = {}
	params.mallGb = mallGb;
	cfnOpenLayer(_PAGE_SUPPLY_COMPANY_LAYER,'partnersPop');
}


/**
 * @type   : function
 * @access : public
 * @desc   : 개인정보취급위탁 레이어
 * <pre>
 *		cfnPrivacyConsignmentLayer();
 * </pre>
 */
function cfnPrivacyTrustLayer() {
	let str;
	if (_frontGb === 'P') {
		str = '<div class="modal fade trustPrivacy_pop" id="trustPrivacyPop" tabindex="-1" role="dialog" aria-labelledby="trustPrivacyLabel" aria-hidden="true"></div>';
	} else {
		str = '<div class="modal pop_full fade" id="trustPrivacyPop" tabindex="-1" role="dialog" aria-labelledby="trustPrivacyLabel" aria-hidden="true"></div>';
	}

	if ($('#trustPrivacy_pop').length == 0) {
		$('body').append(str);
	}
	cfnOpenLayer(_PAGE_PRIVACY_TRUST_LAYER, 'trustPrivacyPop');
}

/**
 * @type   : function
 * @access : public
 * @desc   : 로그인 확인
 * <pre>
 *		cfCheckLogin();
 * </pre>
 */
function cfCheckLogin() {
	var result = '';
	$.ajax({
		type: 'get'
		, async: false
		, url: '/common/login/check'
		, success: function (data) {
			result = data;
		}
	});

	return result;
}

/**
 * @type   : function
 * @access : public
 * @desc   : 위시리스트 담기/삭제
 * <pre>
 *	 cfnPutWishList(OBJ);
 * </pre>
 */
function cfnPutWishList(a) {

	if (!cfCheckLogin()) {
		cfnGoToPage(_PAGE_LOGIN);
		return false;
	}

	var goodsCd = $(a).attr("goodsCd");
	var goodsNm = $(a).attr("goodsNm");
	var ithrCd = $(a).attr("ithrCd");
	var contentsLoc = $(a).attr("contentsLoc");
	var planDtlSq = $(a).attr("planDtlSq");
	var flag = 'REG';
	if ($(a).hasClass('active')) {
		flag = 'DEL'
	}

	if (gagajf.isNull(goodsCd)) return;

	var data = [];

	var params = new Object();
	params.goodsCd = goodsCd;

	if (!gagajf.isNull(goodsNm)) {
		params.goodsNm = goodsNm;
	}
	
	if (!gagajf.isNull(ithrCd)) {
		params.ithrCd = ithrCd;
	}
	if (!gagajf.isNull(contentsLoc)) {
		params.contentsLoc = contentsLoc;
	}
	if (!gagajf.isNull(planDtlSq)) {
		params.planDtlSq = planDtlSq;
	}
	data.push(params);

	var jsonData = JSON.stringify(data);

	if (flag == 'REG') {
		gagajf.ajaxJsonSubmit(_PAGE_WISHLIST_PUT, jsonData, function (result) {
			var Msg = '';
			if (result.status == "200") {
				$(a).addClass('active');
				if (_frontGb == "M") {
					Msg = '위시리스트에 담겼습니다.';

				} else {

				//	mcxDialog.confirm("위시리스트로 이동하시겠습니까?", {
				//		cancelBtnText: "아니요",	//취소 또는 닫기 버튼명
				//		sureBtnText: "예",		//처리문 버튼명
				//		sureBtnClick: function () {
				//			cfnGoToPage(_PAGE_WISHLIST);
				//		}
				//	});
				}
				
				// 페이스북 픽셀 (위시리스트 담기)
				fbq('track', 'AddToWishlist',{
					contents: [{
						id: goodsCd,
						name: goodsNm
					}]
				});
				
				if ("P" == _frontGb){
					fnGetWishList();	
				}
			} else if (result.status == "중복") {
				Msg = '이미 등록 되어있습니다.';
			} else {
				//Msg = '오류로 인해 처리되지 않았습니다.';
			}

			// 메시지 처리
			//if (!gagajf.isNull(Msg)) {
			//	if (_frontGb == "M") {
			//		mcxDialog.toast(Msg);
			//	} else {
			//		mcxDialog.alertC(Msg);
			//	}
			//}
		});
	} else {
		gagajf.ajaxJsonSubmit(_PAGE_WISHLIST_DEL, jsonData, function (result) {
			var Msg = '';
			if (result.status == "200") {
				Msg = '삭제 되었습니다.';
				$(a).removeClass('active');
				if ("P" == _frontGb){
					fnGetWishList();	
				}
			} else {
				Msg = '오류로 인해 처리되지 않았습니다.';
			}

			// 메시지 처리
			//if (!gagajf.isNull(Msg)) {
			//	if (_frontGb == "M") {
			//		mcxDialog.toast(Msg);
			//	} else {
			//		mcxDialog.alertC(Msg);
			//	}
			//}
		});
	}
	return false;
}

/**
 * @type   : function
 * @access : public
 * @desc   : 카테고리메인 페이지로 이동
 * <pre>
 *		cfnGoToCategoryMain('G032_10', 1100);
 * </pre>
 * @param  : cateGb - 카테고리구분. 필수
 * @param  : cate1No - 카테고리1번호. 필수
 * @since  : 2021/03/22
 * @author : gagamel
 */
var cfnGoToCategoryMain = function(cateGb, cate1No, brandGroupNo, gnbId) {
	var params = '?cateGb=' + cateGb + '&cate1No=' + cate1No;
	if (typeof (brandGroupNo) != 'undefined') params += '&brandGroupNo=' + brandGroupNo;
	if (typeof (gnbId) != 'undefined') params += '&gnbId=' + gnbId;
	cfnGoToPage(_PAGE_CATE_MAIN + params);
}

/**
 * @type   : function
 * @access : public
 * @desc   : 아울렛메인 페이지로 이동
 * <pre>
 *		cfnGoToOutletMain('G032_103', 1713);
 * </pre>
 * @param  : cateGb - 카테고리구분. 필수
 * @param  : cate1No - 카테고리1번호. 옵션
 * @since  : 2021/04/20
 * @author : bin2107
 */
var cfnGoToOutletMain = function(cateGb , gnbId) {
	var params = '?cateGb=' + cateGb;
	if (typeof (gnbId) != 'undefined') params += '&gnbId=' + gnbId;
	cfnGoToPage(_PAGE_OUTLET_MAIN + params);
}

/**
 * @type   : function
 * @access : public
 * @desc   : 품목메인 페이지로 이동
 * <pre>
 *		cfnGoToGoodsList(0, 'G032_10', 1100);
 * </pre>
 * @param  : brandGroupNo - 브랜드그룹번호(BYITEM 기준이면 0. 이외는 브랜드그룹번호). 필수
 * @param  : cateGb - 카테고리구분. 필수
 * @param  : cate1No - 카테고리1번호. 필수
 * @param  : cate2No - 카테고리2번호. 옵션
 * @param  : cate3No - 카테고리3번호. 옵션
 * @param  : cate4No - 카테고리4번호. 옵션
 * @param  : cate5No - 카테고리5번호. 옵션
 * @param  : formalGb - 정상이월구분. 옵션
 * @since  : 2021/03/22
 * @author : gagamel
 */
var cfnGoToGoodsList = function(brandGroupNo, cateGb, cate1No, cate2No, cate3No, cate4No, cate5No, formalGb, gnbId) {
	var params = '?brandGroupNo=' + brandGroupNo + '&cateGb=' + cateGb;
	if (typeof (cate1No) != 'undefined') params += '&cate1No=' + cate1No;
	if (typeof (cate2No) != 'undefined') params += '&cate2No=' + cate2No;
	if (typeof (cate3No) != 'undefined') params += '&cate3No=' + cate3No;
	if (typeof (cate4No) != 'undefined') params += '&cate4No=' + cate4No;
	if (typeof (cate5No) != 'undefined') params += '&cate5No=' + cate5No;
	if (typeof (formalGb) != 'undefined') params += '&formalGb=' + formalGb;
	if (typeof (gnbId) != 'undefined') params += '&gnbId=' + gnbId;
	cfnGoToPage(_PAGE_CATE_GOODS_LIST + params);
}

/**
 * @type   : function
 * @access : public
 * @desc   : 브랜드메인 페이지로 이동
 * <pre>
 *		cfnGoToBrandMain(24555);
 * </pre>
 * @param  : brandGroupNo - 브랜드그룹번호. 필수
 * @since  : 2021/03/16
 * @author : gagamel
 */
var cfnGoToBrandMain = function(brandGroupNo, gnbId) {
	var params = '?brandGroupNo=' + brandGroupNo;
	if (typeof (gnbId) != 'undefined') params += '&gnbId=' + gnbId;
	cfnGoToPage(_PAGE_BRAND_MAIN + params);
}



/**
 * @type   : function
 * @access : public
 * @desc   : 기확전상세로 이동
 * <pre>
 *        cfnGoToPlanDetail(251);
 * </pre>
 * @param  : planSq - 기획전 번호. 필수
 * @since  : 2021/03/29
 * @author : sowon
 */
var cfnGoToPlanDetail = function (planSq , brandGroupNo) {
	var params = '?planSq='+planSq;
	if (typeof (brandGroupNo) != 'undefined') params += '&brandGroupNo=' + brandGroupNo;
    cfnGoToPage(_PAGE_PLANNING_DETAIL + params);
}

/**
 * @type   : function
 * @access : public
 * @desc   : 폴상세로 이동
 * <pre>
 *        cfnGoToPollDetail(251);
 * </pre>
 * @param  : planSq - 기획전 번호. 필수
 * @since  : 2021/03/29
 * @author : sowon
 */
var cfnGoToPollDetail = function (planSq) {
	var params = '?planSq='+planSq;
    cfnGoToPage(_PAGE_EVENT_POLL + params);
}

/**
 * @type   : function
 * @access : public
 * @desc   : 룩북리스트로 이동
 * <pre>
 *        cfnGoToLookbookList();
 * </pre>cfnOpenGoodsPopup
 * @param  : brandGroupNo - 브랜드그룹번호 , lookbookGb - 룩북(L) or 브랜드룩북(BL)
 * @since  : 2021/04/06
 * @author : bin2107
 */
var cfnGoToLookbookList = function (lookbookGb, brandGroupNo) {
	var params = '?lookbookGb='+lookbookGb;
	if (typeof (brandGroupNo) != 'undefined') params += '&brandGroupNo=' + brandGroupNo;

	cfnGoToPage(_PAGE_LOOKBOOK_MAIN + params);
}

/**
 * @type   : function
 * @access : public
 * @desc   : 룩북상세로 이동
 * <pre>
 *        cfnGoToLookbookDetail(22);
 * </pre>
 * @param  : lookbookSq - 룩북 번호. 필수
 * @since  : 2021/04/06
 * @author : bin2107
 */
var cfnGoToLookbookDetail = function (lookbookGb, lookbookSq, brandGroupNo) {
	var params = '?lookbookGb='+lookbookGb+'&lookbookSq=' + lookbookSq;
	if(lookbookGb=='BL'){
		if (typeof (brandGroupNo) != 'undefined') params += '&brandCd=' + brandGroupNo + '&brandGroupNo=' + brandGroupNo;
	}else {
		if (typeof (brandGroupNo) != 'undefined') params += '&brandCd=' + brandGroupNo;
	}

	cfnGoToPage(_PAGE_LOOKBOOK_DETAIL + params);
}

/**
 * @type   : function
 * @access : public
 * @desc   : 마이페이지 리뷰메인화면
 * <pre>
 *        cfnGoToMypageReview();
 * </pre>
 * @param  : 
 * @since  : 2021/03/29
 * @author : sowon
 */
var cfnGoToMypageReview = function (ordNo,ordDtlNo,goodsCd) {

	reviewStat = 'c';
	
	if(ordNo == null || ordDtlNo == null || goodsCd == null){
		cfnGoToPage(_PAGE_MYPAGE_REVIEW);
	}else{
		cfnGoToPage(_PAGE_MYPAGE_CREATE_REVIEW + ordNo +'/'+ordDtlNo+'/'+goodsCd+'/'+reviewStat);
	}

}

/**
* @type   : function
* @access : public
* @desc   : 상품평- 베스트 리뷰 보기
* <pre>
*		cfMypageReviewDetail(goodsCd, photoYn, reviewSq, rvAtcSq);
* </pre>
*/
function cfMypageReviewDetail(goodsCd, photoYn, reviewSq, rvAtcSq) {
	var str = '<div class="modal fade pd_pop pd_photoreviewdetail_pop" id="layer_review_best" tabindex="-1" role="dialog" aria-labelledby="pdBestReviewLabel" aria-hidden="true"></div>';
	if ("P" != _frontGb){
		str = '<div class="modal pop_full fade photo_comment_popup pd_pop pd_photoreviewdetail_pop" id="layer_review_best" tabindex="-1" role="dialog" aria-labelledby="exampleFullLabel" aria-hidden="true"></div>';
	}
	if ($('#layer_review_best').length == 0) {
		$('body').append(str);
	}
	
	var params = '?goodsCd=' + goodsCd;
	params += '&reviewSq=' + reviewSq;
	params += '&photoYn=' + photoYn;
	if (typeof (rvAtcSq) != 'undefined') params += "&attachSq=" + rvAtcSq;
	
	cfnOpenLayer(_PAGE_MYPAGE_REVIEW_DETAIL_LAYER+params, 'layer_review_best');
}

/**
 * @type   : function
 * @access : public
 * @desc   : 클립보드 복사
 * <pre>
 *        copyToClipboard();
 * </pre>
 * @param  : 
 * @since  : 2021/03/29
 * @author : eskim
 */
function copyToClipboard() {
	var t = document.createElement("textarea");
	document.body.appendChild(t);
	t.value = window.location.href.replaceAll('#enp_mbris','') + '&share=Y';
	t.select();
	document.execCommand('copy');
	document.body.removeChild(t);
	mcxDialog.alert("URL이 복사 되었습니다.");
}

/**
 * @type   : function
 * @access : public
 * @desc   : 검색 full 팝업
 * <pre>
 *		cfnSearchLayer();
 * </pre>
 */
function cfnSearchLayer(brandGroupNo) {
	var Param = new Object();
	var str = '<div class="common_search active" id="layer_search"></div>';
	if ("P" != _frontGb){
		// str = '<div class="modal pop_full schPop sch" id="schPop" tabindex="-1" role="dialog" aria-labelledby="schPopLabel" aria-hidden="true"></div>';
		str = '<div class="modal pop_full schPop sch" id="layer_search"></div>';
	}

	if ($('#layer_search').length == 0) {
		$('body').append(str);
	}

	var params = "";
	if (typeof (brandGroupNo) != 'undefined') params += "?brandGroupNo=" + brandGroupNo;

	if ("P" == _frontGb) {
		cfnOpenFullLayer(_PAGE_SEARCH_LAYER + params, 'layer_search');
	} else {
		cfnOpenLayer(_PAGE_SEARCH_LAYER + params, 'layer_search');
	}
}

/**
 * @type   : function
 * @access : public
 * @desc   : SNS 공유 기능
 * <pre>
 *        copyToClipboard(sns, url, txt, media, description);
 * </pre>
 * @param  : 
 * @since  : 2021/03/29
 * @author : eskim
 */
function sendSns(sns, url, txt, media, description)
{
	var o;
	var _txt = encodeURIComponent(txt);
	var _br  = encodeURIComponent('\r\n');
	var _media = encodeURIComponent(media);
	var _description = encodeURIComponent(description);
	
	// _url = location.protocol + _url.replaceAll('#enp_mbris','') + '&share=Y'

	_url = location.protocol + encodeURIComponent(url);

	switch(sns)
	{
		case 'facebook':
			var faceUrl = 'http://www.facebook.com/sharer/sharer.php?u=';

			if (_isApp != null && _isApp == 'true') {
				location.href = 'public://?link=' + faceUrl + _url;
			} else {
				window.open(faceUrl + _url, "_blank", 'width=600,height=400,resizable=yes,scrollbars=yes');
			}
			break;
		case 'twitter':
			var twitUrl = 'http://twitter.com/intent/tweet?text=';

			if (_isApp != null && _isApp == 'true') {
				location.href = 'public://?link=' + twitUrl + _txt;
			} else {
				window.open(twitUrl + _txt + '&url=' + _url, "_blank", 'width=600,height=400,resizable=yes,scrollbars=yes');
			}
			break;
		default:
			mcxDialog.alert('지원하지 않는 SNS입니다.');
			return false;
	}
}

var kakaoInitCnt = 0; //카카오 초기화 카운트, 재실행 방지를 위해 사용함
function cfnSendToKakao(linkUrl, linkNm, linkImg) {
	linkUrl = location.protocol + linkUrl.replaceAll('#enp_mbris','') + '&share=Y';
	
	// Kakao Key
	if ( kakaoInitCnt == 0 ) {
		Kakao.init(_kakaoDomainKey);
		kakaoInitCnt++;
	}
	
	// 2021.08.25 sns 공유 이미지 수정
	linkImg = "https:" + linkImg;
	
	Kakao.Link.sendDefault({
	  objectType	: 'feed',
	  content		: {
	    title		: "[STYLE24]\n" + linkNm,
	    imageUrl	: linkImg,
	    link		: {
	      webUrl		: linkUrl,
	      mobileWebUrl	: linkUrl
	    }
	  },
	  buttons: [
	    {
	      title		: 'style24.com',
	      link		: {
	        webUrl			: linkUrl,
	        mobileWebUrl	: linkUrl,
	      }
	    }
	  ]
	})
}

function cfnSendToKakaoMob(linkUrl, linkNm, linkImg) {
	linkUrl = location.protocol + linkUrl.replaceAll('#enp_mbris','') + '&share=Y';
	
	// Kakao Key
	if ( kakaoInitCnt == 0 ) {
		Kakao.init(_kakaoDomainKey);
		kakaoInitCnt++;
	}
	
	linkImg = "https:" + linkImg; 
	
	Kakao.Link.sendDefault({
		objectType	: 'feed',
		content		: {
			title	: "[STYLE24]\n" + linkNm,
			/* description: '설명', */
			imageUrl: linkImg,
			link: {
				mobileWebUrl: linkUrl,
				webUrl: linkUrl
			}
		},
		buttons: [
			{
				title: 'style24.com',
				link: {
					mobileWebUrl: linkUrl,
					webUrl: linkUrl
				}
			}
		]
	});
}

/**
 * @type   : function
 * @access : public
 * @desc   : 위시리스트 담기/삭제 (모바일)
 * <pre>
 *	 cfnMoPutWishList(OBJ);
 * </pre>
 */
function cfnMoPutWishList(a) {

	if (!cfCheckLogin()) {
		cfnGoToPage(_PAGE_LOGIN);
		return false;
	}

	var goodsCd = $(a).attr("goodsCd");
	var ithrCd = $(a).attr("ithrCd");
	var contentsLoc = $(a).attr("contentsLoc");
	var planDtlSq = $(a).attr("planDtlSq");
	var flag = 'REG';
	if ($(a).hasClass('likeit')) {
		flag = 'DEL'
	}

	if (gagajf.isNull(goodsCd)) return;

	var data = [];

	var params = new Object();
	params.goodsCd = goodsCd;

	if (!gagajf.isNull(ithrCd)) {
		params.ithrCd = ithrCd;
	}
	if (!gagajf.isNull(contentsLoc)) {
		params.contentsLoc = contentsLoc;
	}
	if (!gagajf.isNull(planDtlSq)) {
		params.planDtlSq = planDtlSq;
	}
	data.push(params);

	var jsonData = JSON.stringify(data);

	if (flag == 'REG') {
		gagajf.ajaxJsonSubmit(_PAGE_WISHLIST_PUT, jsonData, function (result) {
			var Msg = '';
			if (result.status == "200") {
				$(a).addClass('likeit');
				if (_frontGb == "M") {
					Msg = '위시리스트에 담겼습니다.';

				} else {

				//	mcxDialog.confirm("위시리스트로 이동하시겠습니까?", {
				//		cancelBtnText: "아니요",	//취소 또는 닫기 버튼명
				//		sureBtnText: "예",		//처리문 버튼명
				//		sureBtnClick: function () {
				//			cfnGoToPage(_PAGE_WISHLIST);
				//		}
				//	});
				}
				if ("P" == _frontGb){
					fnGetWishList();	
				}
			} else if (result.status == "중복") {
				Msg = '이미 등록 되어있습니다.';
			} else {
				//Msg = '오류로 인해 처리되지 않았습니다.';
			}

			// 메시지 처리
			//if (!gagajf.isNull(Msg)) {
			//	if (_frontGb == "M") {
			//		mcxDialog.toast(Msg);
			//	} else {
			//		mcxDialog.alertC(Msg);
			//	}
			//}
		});
	} else {
		gagajf.ajaxJsonSubmit(_PAGE_WISHLIST_DEL, jsonData, function (result) {
			var Msg = '';
			if (result.status == "200") {
				Msg = '삭제 되었습니다.';
				$(a).removeClass('likeit');
				if ("P" == _frontGb){
					fnGetWishList();	
				}
			} else {
				Msg = '오류로 인해 처리되지 않았습니다.';
			}

			// 메시지 처리
			//if (!gagajf.isNull(Msg)) {
			//	if (_frontGb == "M") {
			//		mcxDialog.toast(Msg);
			//	} else {
			//		mcxDialog.alertC(Msg);
			//	}
			//}
		});
	}
	return false;
}

/**
 * @type   : function
 * @access : public
 * @desc   : 검색결과 화면으로 이동
 * <pre>
 *        cfnGoToSearchGoodsListForm(keyword,brandGroupNo);
 * </pre>
 * @param  : keyword - 검색키워드. 필수
 * @since  : 2021/06/03
 * @author : bin2107
 */
var cfnGoToSearchGoodsListForm = function (keyword, brandGroupNo) {
	var params = '?keyword='+keyword;
	if (typeof (brandGroupNo) != 'undefined') params += '&brandGroupNo=' + brandGroupNo;

	cfnGoToPage(_PAGE_SEARCH_GOODS + params);
}


/**
* @type   : function
* @access : public
* @desc   : 기획전 리뷰상세 보기
* <pre>
*		cfPlanningReviewDetail(goodsCd, bestYn, photoYn, reviewSq, attachSq);
* </pre>
*/
function cfPlanningReviewDetail(goodsCd, bestYn, photoYn, reviewSq, attachSq) {
	var str = '<div class="modal fade pd_pop pd_photoreviewdetail_pop" id="layer_review_best" tabindex="-1" role="dialog" aria-labelledby="pdBestReviewLabel" aria-hidden="true"></div>';
	if ("P" != _frontGb){
		str = '<div class="modal pop_full fade photo_comment_popup pd_pop pd_photoreviewdetail_pop" id="layer_review_best" tabindex="-1" role="dialog" aria-labelledby="exampleFullLabel" aria-hidden="true"></div>';
	}

	if ($('#layer_review_best').length == 0) {
		$('body').append(str);
	}else{
		$("#layer_review_best").modal("show");
	}
	
	var params = '?goodsCd=' + goodsCd;
	params += '&reviewSq=' + reviewSq;
	params += '&bestYn=' + bestYn;
	params += '&photoYn=' + photoYn;
	if (typeof (attachSq) != 'undefined') params += "&attachSq=" + attachSq;

	cfnOpenLayer(_PAGE_PLANNING_REVIEW_DETAIL_LAYER+params, 'layer_review_best',  null, fnReviewDetailLayerCollBack);
}

/**
 * @type   : function
 * @access : public
 * @desc   : 브랜드 검색 full 팝업
 * <pre>
 *		cfnBrandSearchLayer();
 * </pre>
 */
function cfnBrandSearchLayer(brandGroupNo) {
	var Param = new Object();
	var str = '<div class="common_search schBrand active" id="brand_layer_search"></div>';
	if ("P" != _frontGb){
		// str = '<div class="modal pop_full schPop sch" id="schPop" tabindex="-1" role="dialog" aria-labelledby="schPopLabel" aria-hidden="true"></div>';
		str = '<div class="modal pop_full schPop sch" id="brand_layer_search"></div>';
	}

	if ($('#brand_layer_search').length == 0) {
		$('body').append(str);
	}

	var params = "?brandGroupNo=" + brandGroupNo;

	if ("P" == _frontGb) {
		cfnOpenFullLayer(_PAGE_BRAND_SEARCH_LAYER + params, 'brand_layer_search');
	} else {
		cfnOpenLayer(_PAGE_BRAND_SEARCH_LAYER + params, 'brand_layer_search');
	}
}

/**
 * @type   : function
 * @access : public
 * @desc   : 브랜드메인 검색결과 화면으로 이동
 * <pre>
 *        cfnGoToBrnadSearchGoodsListForm(keyword,brandGroupNo);
 * </pre>
 * @param  : keyword - 검색키워드. 필수
 * @since  : 2021/07/12
 * @author : bin2107
 */
var cfnGoToBrnadSearchGoodsListForm = function (keyword, brandGroupNo) {
	var params = '?keyword='+keyword+'&brandGroupNo=' + brandGroupNo;

	cfnGoToPage(_PAGE_BRAND_SEARCH_GOODS + params);
}

/* 210427_수정 : err 이미지 스크립트 */
function noneImg(noneSrc) {
	$(noneSrc).parents('.itemPic').css({'background':'url(' + _uximgUrl + '/images/pc/thumb/bg_item_none.png)'});
	$(noneSrc).css({'opacity':'0'});
	//$(noneSrc).attr("src", no_src);
}

/**
 * @type   : function
 * @access : public
 * @desc   : 디바이스 종류 조회
 * <pre>
 *        cfnCheckMobileDevice();
 * </pre>
 * @since  : 2022/01/12
 * @author : sshong
 */
function cfnCheckMobileDevice() {
    var mobileKeyWords = new Array('Android', 'iPhone', 'iPod', 'BlackBerry', 'Windows CE', 'SAMSUNG', 'LG', 'MOT', 'SonyEricsson');
    var device = "P"; 
    for (var info in mobileKeyWords) {  
        if (navigator.userAgent.match(mobileKeyWords[info])) {
        	device = "M"; 
			return device;
        }  
    }
	return device; 
}
