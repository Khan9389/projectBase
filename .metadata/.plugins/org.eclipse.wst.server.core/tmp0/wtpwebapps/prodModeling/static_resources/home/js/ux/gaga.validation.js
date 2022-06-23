/*
 * Form Validation Java Script written by gagamel
 *
 * Copyright (c) 2017 gagamel
 * Dual licensed under GPL (GPL-LICENSE.txt) licenses.
 *
 * $Date: 2017-09-20 $
 * $Modify: 2019-03-07 $
 *
 * Using)
 * 		1. Add "data-valid-type" and "data-valid-name" attribute to Elements of form
 * 			ex) <input type="text" name="userNm" data-valid-type="alphaNumeric" data-valid-name="User Name"/>
 *
 * 		2. data-valid-type
 * 			numeric, alphaNumeric, email, cellPhone, ipAddress
 *
 * 		3. When submit a form, call "validation()" function.
 * 			ex)
 * 				if (!$('#aForm').validation())
 * 					return;
 */
(function($) {
	/**
	 * Spring Security를 사용하는 경우 Default로 CSRF(Cross Site Request Forgery)가 활성화 되어 있다.
	 * 이 때문에 $.ajax 함수를 호출 시 404 에러가 발생한다. 이는 다음과 같이 해결한다.
	 *
	 * 		1. SecurityConfig에 csrf().disable() 설정. <= CSRF(Cross Site Request Forgery) 해제
	 * 		또는
	 * 		2. Thymeleaf에서는 csrf 토큰이 hidden input에 자동으로 추가되어 있음으로 아래와 같이 ajax 호출 시 토큰을 Header에 설정한다.
	 */
	/*var token = $("meta[name='_csrf']").attr("content");
	var header = $("meta[name='_csrf_header']").attr("content");
	$.ajaxSend(function(e, xhr, options) {
		xhr.setRequestHeader(header, token);
	});*/
});

var gagajf = {
	/**
	 * @type   : function
	 * @access : public
	 * @desc   : 값이 null 이거나 white space 문자로만 이루어진 경우 true를 리턴한다.
	 * <pre>
	 *     gagajf.isNull("  ");
	 * </pre>
	 * 위와같이 사용했을 경우 true를 리턴한다.
	 * @param  : value - 필수 입력 값
	 * @return : boolean. null(혹은 white space) 여부
	 * @author : gagamel
	 */
	isNull : function(value) {
		if (value == null || (typeof(value) == "string" && value.trim() == ""))
			return true;

		return false;
	},

	/**
	 * @type   : function
	 * @access : public
	 * @desc   : 값이 null str로 true를 리턴한다.
	 * <pre>
	 *     gagajf.convNull(item.value, '');
	 * </pre>
	 * 위와같이 사용했을 경우 item.value 가 null일경우 ''을 리턴한다.
	 * @param  : value - 필수 입력 값
	 * @param  : str - 필수 입력 값
	 * @return : value or str
	 * @author : gagamel
	 */
	convNull : function(value, str) {
		if (value == null)
			return str;

		return value;
	},

	/**
	 * 유효한 이벤트 키코드인지 체크
	 * @return : 유효한 이벤트 키코드이면 키코드 값, 아니면 -1
	 * @since  : 2017/09/20
	 * @author : gagamel
	 */
	getKeyCode : function() {
		// 이벤트 객체와 문자 코드를 호환 가능한 방식으로 얻는다.
		var e = event || window.event; // 키 이벤트 객체
		var keyCode = e.charCode || e.keyCode; // 어떤 키가 눌러졌는가?
//		console.log('keyCode: ' + keyCode);

		// Ctrl 키나 Alt 키, ASCII 제어문자, 화살표 등 skip
		if (e.ctrlKey || e.altkey || keyCode < 47) {
			return -1;
		}

		return keyCode;
	},

	/**
	 * 값이 정규표현식에 부합하는지는 체크한다.
	 * @param  : el - 엘리먼트
	 * @param  : regexp - 정규표현식
	 * @param  : type - 엘리먼트 type
	 * @return : 부합하는 경우 true, 그 외 false
	 * @since  : 2017/09/21
	 * @author : gagamel
	 */
	testRegexp : function(el, regexp, type) {
		var val = $(el).val();

		if (type == 'integer' || type == 'real') {
			// 콤마(,) 제거
			val = val.removeComma();
		}

		if (!regexp.test(val)) {
			mcxDialog.alertC($(el).data('validName') + '의 형식이 잘못되었습니다.', {
				sureBtnText: "확인",
				sureBtnClick: function() {
					$(el).select();
					$(el).focus();
				}
			});
			return false;
		}

		return true;
	},

	/**
	 * alert 메시지
	 * @param  : el - 엘리먼트
	 *           mgsType - 메시지유형(input, select)
	 * @since  : 2017/09/21
	 * @author : gagamel
	 */
	alertMessage : function(el, mgsType) {
		var validNm = $(el).data('validName');

		if (mgsType == 'input') {
			mcxDialog.alertC(validNm + '을(를) 입력해 주세요.', {
				sureBtnText: "확인",
				sureBtnClick: function() {
					$(el).focus();
				}
			});
		} else if (mgsType == 'select') {
			mcxDialog.alertC(validNm + '을(를) 선택해 주세요.', {
				sureBtnText: "확인",
				sureBtnClick: function() {
					$(el).focus();
				}
			});
		}
	},

	/**
	 * 체크박스와 라디오버튼을 선택한 것이 있는지 체크한다.
	 * @param  : el - 엘리먼트
	 *           mgsType - 메시지유형(input, select)
	 * @since  : 2017/09/21
	 * @author : gagamel
	 */
	isCheckedCheckbox : function(el) {
		$(el).each(function(idx) {
			if ($(el).eq(idx).is(':checked')) {
				return true;
			} else {
				return false;
			}
		});
	},

	/**
	 * 비밀번호 체크
	 * 		1.영문대문자, 영문소문자, 특수문자, 숫자로만 구성
	 * 		2.이 중에 3가지 이상으로 구성 시 8자 이상, 2가지 이상으로 구성 시 10자 이상
	 * @param  : el - 엘리먼트
	 * @since  : 2017/09/21
	 * @author : gagamel
	 */
	checkPassword : function(el) {
		var passwd = $(el).val();
		var cnt = 0;
		if (/[a-z]{1,}/.test(passwd)) cnt++;
		if (/[A-Z]{1,}/.test(passwd)) cnt++;
		if (/[0-9]{1,}/.test(passwd)) cnt++;
		if (/[\~,\!,\@,\#,\$,\%,\^,\&,\*,\(,\),\_,\?,\{,\},\[,\]]{1,}/.test(passwd)) cnt++;

		if (cnt >= 3) {
			if (passwd.length < 8) {
				mcxDialog.alertC('3가지 이상으로 구성 시 8 자리 이상으로 입력해 주세요.', {
					sureBtnText: "확인",
					sureBtnClick: function() {
						$(el).select();
						$(el).focus();
					}
				});
				return false;
			}
		} else if (cnt >= 2) {
			if (passwd.length < 10) {
				mcxDialog.alertC('2가지 이상으로 구성 시 10 자리 이상으로 입력해 주세요.', {
					sureBtnText: "확인",
					sureBtnClick: function() {
						$(el).select();
						$(el).focus();
					}
				});
				return false;
			}
		} else {
			mcxDialog.alertC('대/소문자, 특수문자, 숫자로 구성해 주세요.', {
				sureBtnText: "확인",
				sureBtnClick: function() {
					$(el).select();
					$(el).focus();
				}
			});
			return false;
		}

		return true;
	},

	/**
	 * 필수입력항목 엘리먼트를 체크해서 alert를 표시한다.
	 */
	checkRequired : function(oForm) {
		var isInvalid = true;

		$(oForm).find(':input').each(function(idx, el) {
			if ($(el).attr('required') != 'required')
				return true;

			var type = $(el).attr('type');
			if (!type) type = 'select';
//			var msg = $(el).data('validName');

			switch (type) {
				case 'text':
				case 'password':
				case 'textarea':
//				case 'select-one':
					var value = $(el).val();
					if (!gagajf.isNull(value))
						return true;

					gagajf.alertMessage($(el), 'input');
					isInvalid = false;
					return false;
				case 'select':
					var value = $(el).val();
					if (!gagajf.isNull(value))
						return true;

					gagajf.alertMessage($(el), 'select');
					isInvalid = false;
					return false;
				case 'checkbox':
				case 'radio':
					if (gagajf.isCheckedCheckbox($(el)))
						return true;

					gagajf.alertMessage($(el), 'select');
					isInvalid = false;
					return false;
				case 'file':
					var value = $(el).val();
					if (!gagajf.isNull(value))
						return true;

					gagajf.alertMessage($(el), 'select');
					isInvalid = false;
					return false;
			}
		});

		return isInvalid;
	},

	/**
	 * 값이 형식에 맞는지 패턴을 체크한다.
	 */
	checkPattern : function(oForm) {
		var isInvalid = true;

		$(oForm).find('input').each(function(idx, el) {
			if (gagajf.isNull($(el).val()))
				return true;

			var validType = $(el).data('validType');

			// data-valid-type이 지정되지 않은 엘리먼트는 skip
			if (!validType) return true;

			// 값이 없으면 skip
			if (gagajf.isNull($(el).val())) return true;

			switch (validType) {
				case 'numeric': // 숫자
					if (gagajf.testRegexp($(el), /^[0-9]+$/))
						return true;

					isInvalid = false;
					return false;
				case 'integer': // 정수
					if (gagajf.testRegexp($(el), /(^-?[0-9]+\d*$)|(^-$)/, 'integer'))
						return true;

					isInvalid = false;
					return false;
				case 'real': // 실수
					if (gagajf.testRegexp($(el), /^-?(([0-9]+\.?)|(\.?))\d*$/, 'real'))
						return true;

					isInvalid = false;
					return false;
				case 'alphaNumeric': // 알파벳+숫자
					if (gagajf.testRegexp($(el), /^[a-zA-Z0-9]+$/))
						return true;

					isInvalid = false;
					return false;
				case 'email': // 이메일
					if (gagajf.testRegexp($(el), /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/))
						return true;
					isInvalid = false;
					return false;
				case 'password': // 이메일
					if (gagajf.checkPassword($(el)))
						return true;
					isInvalid = false;
					return false;
				case 'cellPhone': // 휴대전화번호
					if (gagajf.testRegexp($(el), /^(01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4})$/))
						return true;

					isInvalid = false;
					return false;
				case 'phone': // 일반전화번호
					if (gagajf.testRegexp($(el), /^\d{2,3}-\d{3,4}-\d{4}$/))
						return true;

					isInvalid = false;
					return false;
				case 'ipAddress': // IP주소
					if (gagajf.testRegexp($(el), /^(([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3}))$/))
						return true;

					isInvalid = false;
					return false;
			}
		});

		return isInvalid;
	},

	checkValue : function(oForm){
		var isInvalid = true;

		$(oForm).find('input').each(function(idx, el) {

			var validType = $(el).data('validType');

			// data-valid-type이 지정되지 않은 엘리먼트는 skip
			if (!validType) return true;

			// 값이 없으면 skip
			if (gagajf.isNull($(el).val())) return true;

			switch (validType) {
				case 'numeric': // 숫자
					//최대값
					if ($(el).attr("max")) {
						if ($(el).val() > $(el).attr("max")) {
							mcxDialog.alertC($(el).data('validName') + '은(는) 최대 ' + $(el).attr("max") + '보다 작아야 합니다.', {
								sureBtnText: "확인",
								sureBtnClick: function() {
									$(el).focus();
								}
							});
							isInvalid = false;
						}
					}
					//최소값
					if ($(el).attr("min")) {
						if ($(el).val() < $(el).attr("min")) {
							mcxDialog.alertC($(el).data('validName') + '은(는) 최소 ' + $(el).attr("min") + '보다 커야 합니다.', {
								sureBtnText: "확인",
								sureBtnClick: function() {
									$(el).focus();
								}
							});
							isInvalid = false;
						}
					}

				case 'integer': // 정수
					//최대값
					if ($(el).attr("max")) {
						if ($(el).val() > $(el).attr("max")) {
							mcxDialog.alertC($(el).data('validName') + '은(는) 최대 ' + $(el).attr("max") + '보다 작아야 합니다.', {
								sureBtnText: "확인",
								sureBtnClick: function() {
									$(el).focus();
								}
							});
							isInvalid = false;
						}
					}
					//최소값
					if ($(el).attr("min")) {
						if ($(el).val() < $(el).attr("min")) {
							mcxDialog.alertC($(el).data('validName') + '은(는) 최소 ' + $(el).attr("min") + '보다 커야 합니다.', {
								sureBtnText: "확인",
								sureBtnClick: function() {
									$(el).focus();
								}
							});
							isInvalid = false;
						}
					}

				case 'real': // 실수
					//최대값
					if ($(el).attr("max")) {
						if ($(el).val() > $(el).attr("max")) {
							mcxDialog.alertC($(el).data('validName') + '은(는) 최대 ' + $(el).attr("max") + '보다 작아야 합니다.', {
								sureBtnText: "확인",
								sureBtnClick: function() {
									$(el).focus();
								}
							});
							isInvalid = false;
						}
					}
					//최소값
					if ($(el).attr("min")) {
						if ($(el).val() < $(el).attr("min")) {
							mcxDialog.alertC($(el).data('validName') + '은(는) 최소 ' + $(el).attr("min") + '보다 커야 합니다.', {
								sureBtnText: "확인",
								sureBtnClick: function() {
									$(el).focus();
								}
							});
							isInvalid = false;
						}
					}
			}
		});
		
		return isInvalid;
	},

	/**
	 * form을 validation 한다.
	 * 예)
	 * 		if (gagajf.validation('#registerForm');
	 */
	validation : function(formId) {
		var $form = $(formId);

		if (!this.checkRequired($form))
			return false;

		if (!this.checkPattern($form))
			return false;

		if(!this.checkValue($form))
			return false;

		return true;
	},

	/**
	 * formId의 input의 data-valid-type이 integer, real인 경우에 값에 comma(,)를 자동으로 붙여 표시한다.
	 * 사용) gagajf.addCommaAtNumberFormattedInput('#registerForm');
	 */
	addCommaAtNumberFormattedInput : function(formId) {
		$(formId).find('input').each(function(idx, el) {
			if ($(el).data('validType') == 'integer' || $(el).data('validType') == 'real') {
				$(el).val($(el).val().removeComma().addComma());
			}
		});
	},

	/**
	 * formId의 input의 data-valid-type이 integer, real, numeric 인 경우에 값에 comma(,)를 자동으로 제거한다.
	 * 사용) gagajf.removeCommaAtNumberFormattedInput('#registerForm');
	 */
	removeCommaAtNumberFormattedInput : function(formId) {
		$(formId).find('input').each(function(idx, el) {
			if ($(el).data('validType') == 'integer' || $(el).data('validType') == 'real' || $(el).data('validType') == 'numeric') {
				$(el).val($(el).val().removeComma());
			}
		});
	},
	
	/**
	 * formId의 input의 값에 ?가 여러 개인 경우 ? 한 개로 대체한다.
	 * 사용) gagajf.replaceOneQuestionMark('#registerForm');
	 */
	replaceOneQuestionMark : function(formId) {
		$(formId).find('input[type=text]').each(function(idx, el) {
			$(el).val($(el).val().replace(/\?+/gi, "?"));
		});
		
		$(formId).find('textarea').each(function(idx, el) {
			$(el).val($(el).val().replace(/\?+/gi, "?"));
		});
	},

	/**
	 * Progress bar
	 */
	showProgressbar : function(isLoading) {
		if (isLoading) {
			// Button disabled & progressBar creation
			//$('.btn').each(function(idx) { $(this).attr('disabled', true); });
			//var load_AjaxSubmit = '<div id="load_AjaxSubmit" style="'
			//	+ 'background: url(/ux/plugins/gaga/loader.gif); border-style: none; background-repeat: no-repeat; '
			//	+ 'position: absolute; top: 45%; left: 50%; width: auto; '
			//	+ 'z-index: 101; padding: 16px; margin: 5px;'
			//	+ '"></div>';
			//$('#content').append(load_AjaxSubmit);

			$('body').append('<div id="load"></div>');
		} else {
			// Button activated & progressBar remove
			//$('.btn').each(function(idx) { $(this).attr('disabled', false); });
			//$('#load_AjaxSubmit').remove();

			$('#load').remove();
		}
	},

	/**
	 * form의 데이터를 json으로 변환 후 ajax 방식으로 submit 한다.
	 * 모든 form의 ajax 처리는 이것으로 진행한다.
	 * <pre>
	 *     ajaxFormSubmit('/rest/commoncode/create', '#registerForm', jfRegisterSaveCallback, true);
	 * </pre>
	 * @param actionUrl - Request URL
	 * @param formId - form ID
	 * @param callbackFn - Callback function
	 * @param progressbar - progressbar
	 * @author gagamel
	 * @since 2019. 4. 8
	 */
	ajaxFormSubmit : function(actionUrl, formId, callbackFn, progressbar) {
		// comma(,) 제거
		gagajf.removeCommaAtNumberFormattedInput(formId);
		
		// 물음표(?) 여러 개를 1개로 대체
//		gagajf.replaceOneQuestionMark(formId);

		var jsonData = JSON.stringify($(formId).serializeObject());
		
		$.ajax({
			type : 'POST',
			url : actionUrl,
			data : jsonData,
			dataType : 'json',
			jsonp : false, // 물음표(?) 여러 개가 jQuery~로 변경되는 현상 방지
			beforeSend : function(xhr, settings) {
				// AJAX call
				xhr.setRequestHeader("AJAX", "true");

				// dataType: "json"일 때
				xhr.setRequestHeader('Accept', 'application/json');
				xhr.setRequestHeader('Content-Type', 'application/json');

				// Button disabled & progressBar creation
				if (progressbar) gagajf.showProgressbar(true);
			},
			complete : function(xhr) {
				// Button abled & progressBar remove
				if (progressbar) gagajf.showProgressbar(false);

				// 세션이 없다. 로그인 페이지로 이동
				if (xhr.status == 901) {
					mcxDialog.alertC('세션이 없습니다. 로그인 페이지로 이동합니다.', {
						sureBtnText: "확인",
						sureBtnClick: function() {
							document.location.href = "/error/noSession";
						}
					});
				}
			},
			success : function(result) {
				if (typeof(result.status) == 'undefined' || result.status == 200) { // 성공
					if (!gagajf.isNull(result.message)) {
						mcxDialog.alertC(result.message.replaceAll("&lt;", "<").replaceAll("&gt;", ">"), {
							sureBtnText: "확인",
							sureBtnClick: function() {
								if (typeof(callbackFn) == "function") {
									callbackFn.call(this, result);
								}
							}
						});
					} else {
						if (typeof(callbackFn) == "function") {
							callbackFn.call(this, result);
						}
					}
				} else { // 실패
					if (!gagajf.isNull(result.error.message)) {
						mcxDialog.alert(result.error.message.replaceAll("&lt;", "<").replaceAll("&gt;", ">"));
					}

					return;
				}
			},
			error : function(result) {
				console.log(result);
				mcxDialog.alert('오류로 인해 처리되지 않았습니다.');
			}
		});
	},

	/**
	 * json 데이터를 가지고 ajax 방식으로 submit 한다.
	 * 모든 ajax 처리는 이것으로 진행한다.
	 * <pre>
	 *     gagajf.removeCommaAtNumberFormattedInput('#registerForm'); // comma(,) 제거
	 *     var jsonData = JSON.stringify($('#registerForm').serializeObject());
	 *     gagajf.ajaxJsonSubmit('/rest/commoncode/create', jsonData, jfRegisterSaveCallback);
	 * </pre>
	 * @param actionUrl - Request URL
	 * @param jsonData - Data of json format
	 * @param callbackFn - Callback function
	 * @param progressbar - progressbar
	 * @author gagamel
	 * @since 2019. 4. 8
	 */
	ajaxJsonSubmit : function(actionUrl, jsonData, callbackFn, progressbar) {
		$.ajax({
			type : 'POST',
			url : actionUrl,
			data : jsonData,
			dataType : 'json',
			jsonp : false, // 물음표(?) 여러 개가 jQuery~로 변경되는 현상 방지
			beforeSend : function(xhr, settings) {
				// AJAX call
				xhr.setRequestHeader("AJAX", "true");

				// dataType: "json"일 때
				xhr.setRequestHeader('Accept', 'application/json');
				xhr.setRequestHeader('Content-Type', 'application/json');

				// Button disabled & progressBar creation
				if (progressbar) gagajf.showProgressbar(true);
			},
			complete : function(xhr) {
				// Button abled & progressBar remove
				if (progressbar) gagajf.showProgressbar(false);

				// 세션이 없다. 로그인 페이지로 이동
				if (xhr.status == 901) {
					mcxDialog.alertC('세션이 없습니다. 로그인 페이지로 이동합니다.', {
						sureBtnText: "확인",
						sureBtnClick: function() {
							document.location.href = "/error/noSession";
						}
					});
				}
			},
			success : function(result) {
				if (typeof(result.status) == 'undefined' || result.status == 200) { // 성공
					if (!gagajf.isNull(result.message)) {
						mcxDialog.alertC(result.message.replaceAll("&lt;", "<").replaceAll("&gt;", ">"), {
							sureBtnText: "확인",
							sureBtnClick: function() {
								if (typeof(callbackFn) == "function") {
									callbackFn.call(this, result);
								}
							}
						});
					} else {
						if (typeof(callbackFn) == "function") {
							callbackFn.call(this, result);
						}
					}
				} else { // 실패
					console.log(result.error);
					if (!gagajf.isNull(result.error.message)) {
						mcxDialog.alert(result.error.message.replaceAll("&lt;", "<").replaceAll("&gt;", ">"));
					}

					return;
				}
			},
			error : function(result) {
				console.log(result);
				mcxDialog.alert('오류로 인해 처리되지 않았습니다.');
			}
		});
	},

	/**
	 * ajax 방식으로 파일을 업로드 한다.
	 * <pre>
	 *     gagajf.ajaxFileUpload('/common/file/upload?subDir=notice', this.files[0], jfCallback);
	 * </pre>
	 * @param actionUrl - Request URL
	 * @param file - A file to upload
	 * @param callbackFn - Callback function
	 * @param policy - Upload policy
	 * @author gagamel
	 * @since 2019. 7. 9
	 */
	ajaxFileUpload : function(actionUrl, file, callbackFn, policy) {
		var formData = new FormData();
		formData.append("file", file);

		if (typeof policy != 'undefined') {
			formData.append("policy", policy);
		}

		// 파일 사이즈 체크
		if (!gagajf.checkFileSize(file)) {
			return;
		}
		
		$.ajax({
			type : 'POST',
			url : actionUrl,
			data : formData,
			dataType: 'json',
			processData : false, // true: data의 파일 형태가 query String으로 전송. false : non-processed data
			contentType : false, // multipart/form-data 형태로 전송되기 위한 옵션 값
			beforeSend : function(xhr, settings) {
				// AJAX call
				xhr.setRequestHeader("AJAX", "true");

				// Button disabled & progressBar creation
				gagajf.showProgressbar(true);
			},
			complete : function(xhr) {
				// Button abled & progressBar remove
				gagajf.showProgressbar(false);

				// 세션이 없다. 로그인 페이지로 이동
				if (xhr.status == 901) {
					mcxDialog.alertC('세션이 없습니다. 로그인 페이지로 이동합니다.', {
						sureBtnText: "확인",
						sureBtnClick: function() {
							document.location.href = "/error/noSession";
						}
					});
				}
			},
			success : function(result) {
				if (typeof(result.status) == 'undefined' || result.status == 200) { // 성공
					if (!gagajf.isNull(result.message)) {
						mcxDialog.alertC(result.message, {
							sureBtnText: "확인",
							sureBtnClick: function() {
								if (typeof(callbackFn) == "function") {
									callbackFn.call(this, result);
								}
							}
						});
					} else {
						if (typeof(callbackFn) == "function") {
							callbackFn.call(this, result);
						}
					}
				} else { // 실패
					if (!gagajf.isNull(result.error.message)) {
						mcxDialog.alert(result.error.message);
					}

					return;
				}
			},
			error: function(result) {
				console.log(result);
				mcxDialog.alert('오류로 인해 처리되지 않았습니다.');
			}
		});
	},

	/**
	 * 대용량 json 데이터를 가지고 ajax 방식으로 submit 한다.
	 * <pre>
	 *     gagajf.removeCommaAtNumberFormattedInput('#registerForm'); // comma(,) 제거
	 *     gagajf.replaceOneQuestionMark('#registerForm'); // 물음표(?) 여러 개를 1개로 대체
	 *     var jsonData = JSON.stringify($('#registerForm').serializeObject());
	 *     gagajf.ajaxJsonBatchSubmit('/rest/commoncode/create', jsonData, 1, 3, jfRegisterSaveCallback);
	 * </pre>
	 * @param actionUrl - Request URL
	 * @param jsonData - Data of json format
	 * @param callIdx - 호출인덱스(실제 호출한 횟수)
	 * @param callCnt - 호출해야할횟수(몇 번 호출해야 하는지)
	 * @param callbackFn - Callback function
	 * @author gagamel
	 * @since 2019. 4. 8
	 */
	ajaxJsonBatchSubmit : function(actionUrl, jsonData, callIdx, callCnt, callbackFn) {
		$.ajax({
			type : 'POST',
			url : actionUrl,
			data : jsonData,
			dataType : 'json',
			beforeSend : function(xhr, settings) {
				// AJAX call
				xhr.setRequestHeader("AJAX", "true");

				// dataType: "json"일 때
				xhr.setRequestHeader('Accept', 'application/json');
				xhr.setRequestHeader('Content-Type', 'application/json');

				// Button disabled & progressBar creation
				if (callIdx == 1) { // 첫번째 호출이면
					gagajf.showProgressbar(true);
				}
			},
			complete : function(xhr) {
				// Button abled & progressBar remove
				if (callIdx == callCnt) { // 마지막 호출이면
					gagajf.showProgressbar(false);
				}

				// 세션이 없다. 로그인 페이지로 이동
				if (xhr.status == 901) {
					mcxDialog.alertC('세션이 없습니다. 로그인 페이지로 이동합니다.', {
						sureBtnText: "확인",
						sureBtnClick: function() {
							document.location.href = "/error/noSession";
						}
					});
				}
			},
			success : function(result) {
				if (callIdx == callCnt) { // 마지막 호출이면
					mcxDialog.alertC('성공적으로 처리되었습니다.', {
						sureBtnText: "확인",
						sureBtnClick: function() {
							if (typeof(callbackFn) == "function") {
								callbackFn.call(this, result);
							}
						}
					});
				} else {
					if (typeof(callbackFn) == "function") {
						callbackFn.call(this, result);
					}
				}
			},
			error : function(result) {
				console.log(result);
				mcxDialog.alert('오류로 인해 처리되지 않았습니다.');
			}
		});
	},

	/**
	 * JQuery를 이용한 비동기 submit 처리
	 * 파라미터의 명칭은 쿼리문과 동일하게 작성해야 한다.
	 * <pre>
	 *     var params = new Object();
	 *     params.cdGb = "G900";
	 *     params.cd = "0202";
	 *
	 *     gagajf.ajaxSubmit("/rest/commoncode/create", "json", jfCallback, params);
	 *
	 *     or
	 *
	 *     gagajf.ajaxSubmit("/rest/commoncode/create", "json", jfCallback);
	 * </pre>
	 * @param  : actionUrl - action url. 필수
	 *           type - 처리결과 형식(text, html, xml, json). 필수
	 *           callback - type이 text, xml, json 일 때는 콜백함수명
	 *                      type이 html일 때는 target명. 필수
	 *           params - 파라미터 오브젝트. 옵션
	 * @author gagamel
	 * @since 2019. 4. 8
	 */
	ajaxSubmit : function(actionUrl, type, callback, params) {
		$.ajaxSetup({
			beforeSend: function(xhr, settings) {
				// AJAX call
				xhr.setRequestHeader("AJAX", "true");

				// type: "json"일 때
				if (type == "json") {
					xhr.setRequestHeader('Accept', 'application/json');
					xhr.setRequestHeader('Content-Type', 'application/json');
				}
			},
			complete: function(xhr) {
				// 세션이 없다. 로그인 페이지로 이동
				if (xhr.status == 901) {
					mcxDialog.alertC('세션이 없습니다. 로그인 페이지로 이동합니다.', {
						sureBtnText: "확인",
						sureBtnClick: function() {
							document.location.href = "/error/noSession";
						}
					});
				}
			}
		});

		if (!params) params = new Object();

		var paramData = $.param(params);

		// dataType: "json"일 때
		if (type == "json") {
			paramData = JSON.stringify(params);
		}

		$.post(actionUrl
			, paramData
			, function(result) {
				if (type == "html") {
					if (!gagajf.isNull(callback))
						$(document.getElementById(callback)).html(result);
				} else {
					// Callback 함수 호출
					if (typeof(callback) == "function")
						callback.call(this, result);
				}
			}
			, type);
	},

	/**
	 * @type   : function
	 * @access : public
	 * @desc   : 기간의 시작일자와 종료일자를 설정한다.
	 * <pre>
	 *     gagajf.setDate($('#sellStdt'), $('#sellEddt'), 't');
	 * </pre>
	 * @param  : fromObj - 시작일자 오브젝트
	 * @param  : toObj - 종료일자 오브젝트
	 * @param  : type - 유형(오늘: t, 어제: y, 최근한주: 7d, 이번주: tw, 지난주: pw, 최근한달: 1m, 이번달: tm, 지난달: pm, 최근3개월: 3m
	 * @since  : 2019/08/09
	 * @author : gagamel
	 */
	setDate : function(tgtId, fromObj, toObj, type) {
		var date = new Date();

		if (type == '') { // 기간 X
			$(tgtId +' #' + fromObj).val('');
			$(tgtId +' #' + toObj).val('');
		} else if (type == 't') { // 오늘
			$(tgtId +' #' + fromObj).val(date.format("YYYY-MM-DD"));
			$(tgtId +' #' + toObj).val(date.format("YYYY-MM-DD"));
		} else if (type == 'y') { // 어제
			$(tgtId +' #' + fromObj).val(date.before(0, 0, 1).format("YYYY-MM-DD"));
			$(tgtId +' #' + toObj).val(date.before(0, 0, 1).format("YYYY-MM-DD"));
		} else if (type == '7d') { // 최근한주
			$(tgtId +' #' + fromObj).val(date.before(0, 0, 6).format("YYYY-MM-DD"));
			$(tgtId +' #' + toObj).val(date.format("YYYY-MM-DD"));
		} else if (type == 'tw') { // 이번주
			var wdays = date.getDate() - date.getDay();
			$(tgtId +' #' + fromObj).val((date.format('YYYY-MM-') + '01').toDate('YYYY-MM-DD').after(0, 0, wdays).format("YYYY-MM-DD"));
			$(tgtId +' #' + toObj).val((date.format('YYYY-MM-') + '01').toDate('YYYY-MM-DD').after(0, 0, wdays + 6).format("YYYY-MM-DD"));
		} else if (type == 'pw') { // 지난주
			var wdays = date.getDate() - date.getDay();
			$(tgtId +' #' + fromObj).val((date.format('YYYY-MM-') + '01').toDate('YYYY-MM-DD').after(0, 0, wdays - 7).format("YYYY-MM-DD"));
			$(tgtId +' #' + toObj).val((date.format('YYYY-MM-') + '01').toDate('YYYY-MM-DD').after(0, 0, wdays - 1).format("YYYY-MM-DD"));
		} else if (type == '1m') { // 최근한달
			$(tgtId +' #' + fromObj).val(date.before(0, 1, 0).after(0, 0, 1).format("YYYY-MM-DD"));
			$(tgtId +' #' + toObj).val(date.format("YYYY-MM-DD"));
		} else if (type == 'tm') { // 이번달
			$(tgtId +' #' + fromObj).val(date.format("YYYY-MM-") + '01');
			$(tgtId +' #' + toObj).val((date.format('YYYY-MM-') + '01').toDate('YYYY-MM-DD').after(0, 1, 0).before(0, 0, 1).format("YYYY-MM-DD"));
		} else if (type == 'pm') { // 지난달
			$(tgtId +' #' + fromObj).val(date.before(0, 1, 0).format("YYYY-MM-")  + '01');
			$(tgtId +' #' + toObj).val((date.format('YYYY-MM-') + '01').toDate('YYYY-MM-DD').before(0, 0, 1).format("YYYY-MM-DD"));
		} else if (type == '3m') { // 최근3개월
			$(tgtId +' #' + fromObj).val(date.before(0, 3, 0).after(0, 0, 1).format("YYYY-MM-DD"));
			$(tgtId +' #' + toObj).val(date.format("YYYY-MM-DD"));
		}
	},

	/**
	 * @type   : function
	 * @access : public
	 * @desc   : Set Cookie
	 * <pre>
	 *     gagajf.setCookie("COOKIE_TODAY_PROD", "HUE00C105GE", 1);
	 * </pre>
	 * @param  : name - 쿠키명
	 * @param  : value - 쿠키 값
	 * @param  : expiredays - 만료기간
	 * @return : None
	 * @since  : 2019/07/01
	 * @author : gagamel
	 */
	setCookie : function(name, value, expiredays) {
		var todayDate = new Date();
		todayDate.setDate(todayDate.getDate() + expiredays);
		document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";";
	},

	/**
	 * @type   : function
	 * @access : public
	 * @desc   : Get Cookie
	 * <pre>
	 *     gagajf.getCookie("COOKIE_TODAY_PROD");
	 * </pre>
	 * @param  : name - 쿠키명
	 * @return : None
	 * @since  : 2019/07/01
	 * @author : gagamel
	 */
	getCookie : function(name) {
		var nameOfCookie = name + "=";
		var x = 0;
		while (x <= document.cookie.length) {
			var y = (x+nameOfCookie.length);
			if (document.cookie.substring(x, y) == nameOfCookie) {
				if ((endOfCookie=document.cookie.indexOf(";", y)) == -1) endOfCookie = document.cookie.length;
				return unescape(document.cookie.substring(y, endOfCookie));
			}
			x = document.cookie.indexOf(" ", x) + 1;
			if (x == 0) break;
		}

		return "";
	},
	
	/**
	 * 데이터를 배열로 변환
	 * 예)
	 * 		convertToArray({cd: "KNE", cdNm: "KNE"});
	 * @param  : data - 데이터
	 * @param  : isCodeDisplay - 코드표시여부(true/false). default false
	 * @author : gagamel
	 * @since  : 2019. 6. 7
	 */
	convertToArray : function(data, isCodeDisplay) {
		if (data.length == 0)
			return [];

		if (typeof(isCodeDisplay) == 'undefined')
			isCodeDisplay = false;

		var arrValue = {};

		$.each(data, function(idx, item) {
			arrValue[item.cd] = (isCodeDisplay ? '[' + item.cd + '] ' : '') + item.cdNm;
		});

		return arrValue;
	},
	
	/**
	 * 파일의 사이즈를 체크한다.
	 * 예)
	 * 		gagajf.checkFileSize(file);
	 * @param  : file - 선택된 파일
	 * @author : gagamel
	 * @since  : 2021. 7. 16
	 */
	checkFileSize : function(file) {
		var fileSize = file.size;
		var maxSize = 1024 * 1024 * 10; // 10MByte
		
		if (fileSize > maxSize) {
			mcxDialog.alert('파일 용량이 10MB를 초과했습니다.');
			return false;
		}

		return true;
	},
	
	/**
	 * 전화번호 유효성 체크한다.
	 * 예)
	 * 		gagajf.checkPhnno(phnno);
	 * @param param - 휴대폰번호
	 * @returns {boolean}
	 * @author card007
	 * @since 2021. 11. 08
	 */
	checkPhnno : function(param) {
		if (this.isNull(param)) {
			return false;
		}
		
		let phnno = param.replace(/[^0-9]/g, "").replace(/(^02|^050[0-9]|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,"$1-$2-$3").replace("--", "-");
		let regExp = /^(050[0-9]|01[016789]|02|0[3-9][0-9])-?[0-9]{3,4}-?[0-9]{4}$/;
		
		if (regExp.test(phnno)) {
			return true;
		} else {
			return false;
		}
	}
};

/**
 * @type   : function
 * @access : document
 * @desc   : <input> 태그에 대한 키눌림에 대해 validation을 체크한다.
 *           data-valid-type="numeric" : 숫자. 속성 지정시 숫자만 입력 가능
 *           data-valid-type="integer" : 정수. 속성 지정시 숫자와 +, - 만 입력 가능
 *           data-valid-type="real" : 실수. 속성 지정시 숫자와 +, -, . 만 입력 가능
 *           data-valid-type="alphaNumeric" : 알파벳과 숫자. 속성 지정 시 영문과 숫자만 형식에 맞게 입력 가능
 *           data-valid-type="date" : 숫자와 / 만 입력 가능
 *           data-valid-type="korean" : 한글. 속성 지정 시 한글만 형식에 맞게 입력 가능
 *           data-valid-type="email" : 이메일
 *           data-valid-type="password" : 비밀번호
 *           data-valid-type="cellPhone" : 휴대전화번호
 *           data-valid-type="phone" : 일반전화번호
 *           data-valid-type="ipAddress" : IP주소
 *           data-valid-type="bizRegNo" : 사업자등록번호
 * <pre>
 *     <input type="text" data-valid-type="numeric" />
 *     <input type="text" data-valid-type="integer" />
 *     <input type="text" data-valid-type="real" />
 *     <input type="text" data-valid-type="alphaNumeric" />
 *     <input type="text" data-valid-type="date" />
 *     <input type="text" data-valid-type="korean" />
 *     <input type="text" data-valid-type="email" />
 *     <input type="text" data-valid-type="password" />
 *     <input type="text" data-valid-type="cellPhone" />
 *     <input type="text" data-valid-type="phone" />
 *     <input type="text" data-valid-type="ipAddress" />
 *     <input type="text" data-valid-type="bizRegNo" />
 * </pre>
 * @author : gagamel
 * @since  : 2017/09/20
 */
$(document).on("keyup", "[data-valid-type=numeric]", function() { $(this).val($(this).val().replace(/[^0-9]/gi,"")); });
$(document).on("keydown", "[data-valid-type=numeric]", function() {
	var value = $(this).val();

	var keyCode = gagajf.getKeyCode();
	if (keyCode == -1)
		return true;

	if (!((keyCode >= 48 && keyCode <= 57 && !event.shiftKey) // 0 ~ 9
		|| (keyCode >= 96 && keyCode <= 105) // 0 ~ 9 (Num Lock)
		)) {
		$(this).val(value);
		event.returnValue = false;
	}
});
$(document).on("blur", "[data-valid-type=integer]", function() { $(this).val($(this).val().removeComma().addComma()); });
$(document).on("click", "[data-valid-type=integer]", function() { $(this).val($(this).val().removeComma()); });
$(document).on("keyup", "[data-valid-type=integer]", function() { $(this).val($(this).val().replace(/[^0-9-\+]/gi,"")); });
$(document).on("keydown", "[data-valid-type=integer]", function() {
	var value = $(this).val();

	var keyCode = gagajf.getKeyCode();
	if (keyCode == -1)
		return true;

	if (!((keyCode >= 48 && keyCode <= 57 && !event.shiftKey) // 0 ~ 9
		|| (keyCode >= 96 && keyCode <= 105) // 0 ~ 9 (Num Lock)
		|| (keyCode == 187 && event.shiftKey) // Shift 하고 +
		|| (keyCode == 107) // + (Num Lock)
		|| (keyCode == 189 && !event.shiftKey) // Shift 없이 -
		|| (keyCode == 109) // - (Num Lock)
		)) {
		$(this).val(value);
		event.returnValue = false;
	}
});
$(document).on("blur", "[data-valid-type=real]", function() { $(this).val($(this).val().removeComma().addComma()); });
$(document).on("click", "[data-valid-type=real]", function() { $(this).val($(this).val().removeComma()); });
$(document).on("keyup", "[data-valid-type=real]", function() { $(this).val($(this).val().replace(/[^0-9-\+\.]/gi,"")); });
$(document).on("keydown", "[data-valid-type=real]", function() {
	var value = $(this).val();

	var keyCode = gagajf.getKeyCode();
	if (keyCode == -1)
		return true;

	if (!((keyCode >= 48 && keyCode <= 57 && !event.shiftKey) // 0 ~ 9
		|| (keyCode >= 96 && keyCode <= 105) // 0 ~ 9 (Num Lock)
		|| (keyCode == 187 && event.shiftKey) // Shift 하고 +
		|| (keyCode == 107) // + (Num Lock)
		|| (keyCode == 189 && !event.shiftKey) // Shift 없이 -
		|| (keyCode == 109) // - (Num Lock)
		|| (keyCode == 190 && !event.shiftKey) // .
		)) {
		$(this).val(value);
		event.returnValue = false;
	}
});
$(document).on("keyup", "[data-valid-type=alphaNumeric]", function() { $(this).val($(this).val().replace(/[^a-zA-Z0-9]/gi, "")); });
$(document).on("keyup", "[data-valid-type=date]", function() { $(this).val($(this).val().replace(/[^0-9\/]/gi,"")); });
$(document).on("keyup", "[data-valid-type=calendar]", function() { $(this).val($(this).val().replace(/[^0-9\/]/gi,"")); });
$(document).on("blur", "[data-valid-type=calendar]", function() {
	var val = $(this).val();
	if(val==''){
		return;
	}
	val = val.replace(/-/gi, "");
	var temp = val.substring(0, 4)+" ";
	if(Number(val.substring(4, 6))>12){
		temp += "12";
	}else if(Number(val.substring(4, 6))==0){
		temp += "1";
	}else{
		temp += Number(val.substring(4, 6));
	}
	temp += " ";
	if(Number(val.substring(6, 8))>31){
		temp += "31";
	}else if(Number(val.substring(6, 8))==0){
		temp += "1";
	}else{
		temp += Number(val.substring(6, 8));
	}
	
	var date = new Date(temp);
	var yyyy = date.getFullYear().toString();
	var mm = (date.getMonth() + 1).toString();
	var dd = date.getDate().toString();
	$(this).val(yyyy + '-' + (mm[1] ? mm : '0'+mm[0])+ '-'  + (dd[1] ? dd : '0'+dd[0]));
});
$(document).on("keyup", "[data-valid-type=korean]", function() { $(this).val($(this).val().replace(/[^가-힣]/gi, "")); });
$(document).on("keyup", "[data-valid-type=email]", function() { $(this).val($(this).val().replace(/[^a-zA-Z0-9\@\+\_\.\@\-]/gi, "")); });
$(document).on("keyup", "[data-valid-type=password]", function() { $(this).val($(this).val().replace(/[^a-zA-Z0-9\~\!\@\#\$\%\^\&\*\?\(\)\_\+\{\}\[\]]/gi, "")); });
$(document).on("keyup", "[data-valid-type=cellPhone]", function() { $(this).val($(this).val().replace(/[^\d-]/gi, "")); });
$(document).on("keydown", "[data-valid-type=cellPhone]", function() {
	var value = $(this).val();

	var keyCode = gagajf.getKeyCode();
	if (keyCode == -1)
		return true;

	if (!((keyCode >= 48 && keyCode <= 57 && !event.shiftKey) // 0 ~ 9
		|| (keyCode >= 96 && keyCode <= 105) // 0 ~ 9 (Num Lock)
		|| (keyCode == 189 && !event.shiftKey) // Shift 없이 -
		|| (keyCode == 109) // - (Num Lock)
		)) {
		$(this).val(value);
		event.returnValue = false;
	}
});
$(document).on("keyup keydown paste change", "[data-valid-type=cellPhone]", function() {
	$(this).val($(this).val().replace(/[^0-9]/g, "").replace(/(^02|^050[0-9]{1}|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,"$1-$2-$3").replace("--", "-"));
});
$(document).on("keyup", "[data-valid-type=phone]", function() { $(this).val($(this).val().replace(/[^\d-]/gi, "")); });
$(document).on("keydown", "[data-valid-type=phone]", function() {
	var value = $(this).val();

	var keyCode = gagajf.getKeyCode();
	if (keyCode == -1)
		return true;

	if (!((keyCode >= 48 && keyCode <= 57 && !event.shiftKey) // 0 ~ 9
		|| (keyCode >= 96 && keyCode <= 105) // 0 ~ 9 (Num Lock)
		|| (keyCode == 189 && !event.shiftKey) // Shift 없이 -
		|| (keyCode == 109) // - (Num Lock)
		)) {
		$(this).val(value);
		event.returnValue = false;
	}
});
$(document).on("keyup", "[data-valid-type=ipAddress]", function() { $(this).val($(this).val().replace(/[^\d\.]/gi, "")); });
$(document).on("keydown", "[data-valid-type=ipAddress]", function() {
	var value = $(this).val();

	var keyCode = gagajf.getKeyCode();
	if (keyCode == -1)
		return true;

	if (!((keyCode >= 48 && keyCode <= 57 && !event.shiftKey) // 0 ~ 9
		|| (keyCode >= 96 && keyCode <= 105) // 0 ~ 9 (Num Lock)
		|| (keyCode == 190 && !event.shiftKey) // .
		)) {
		$(this).val(value);
		event.returnValue = false;
	}
});
$(document).on("keyup", "[data-valid-type=bizRegNo]", function() { $(this).val($(this).val().replace(/[^0-9\-]/gi,"")); });
