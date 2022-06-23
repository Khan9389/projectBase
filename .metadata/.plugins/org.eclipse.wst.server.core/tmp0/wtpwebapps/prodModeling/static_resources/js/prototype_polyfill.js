
//숫자 타입에서 쓸 수 있도록 format() 함수 추가
Number.prototype.numformat = function(){
    if(this==0) return 0;
 
    var reg = /(^[+-]?\d+)(\d{3})/;
    var n = (this + '');
 
    while (reg.test(n)) n = n.replace(reg, '$1' + ',' + '$2');
 
    return n;
};
 
// 문자열 타입에서 쓸 수 있도록 format() 함수 추가
String.prototype.numformat = function(){
    var num = parseFloat(this);
    if( isNaN(num) ) return "0";
 
    return num.numformat();
};

/**
 * 문자열이 대상 문자열과 동일한 값인지의 여부를 반환한다.
 * 
 * @param tagetStr -
 *            비교대상 문자열
 * @return 동일값 여부
 */
String.prototype.eq = function(tagetStr) {
	return (tagetStr != null && typeof (tagetStr) != 'undefined' && this == tagetStr);
}

/**
 * 문자열의 byte 길이를 반환한다.
 * 
 * @return 문자열의 byte 길이
 */
String.prototype.getByte = function() {
	var cnt = 0;
	for (var i = 0; i < this.length; i++) {
		if (this.charCodeAt(i) > 127) {
			cnt += 2;
		} else {
			cnt++;
		}
	}
	return cnt;
}

/**
 * 문자열이 지정한 최소길이 이상인지의 여부를 반환한다.
 * 
 * @param minLen -
 *            최소길이
 * @return 최소길이 이상인지의 여부
 */
String.prototype.isMin = function(minLen) {
	return this.length >= minLen;
}

/**
 * 문자열이 지정한 최대길이 이하인지의 여부를 반환한다.
 * 
 * @param maxLen -
 *            최대길이
 * @return 최대길이 이하인지의 여부
 */
String.prototype.isMax = function(maxLen) {
	return this.length <= maxLen;
}

/**
 * 문자열이 지정한 최소바이트수 이상인지의 여부를 반환한다.
 * 
 * @param minByte -
 *            최소바이트수
 * @return 최소바이트수 이상인지의 여부
 */
String.prototype.isMinByte = function(minByte) {
	return this.getByte() >= minByte;
}

/**
 * 문자열이 지정한 최대바이트수 이하인지의 여부를 반환한다.
 * 
 * @param maxByte -
 *            최대바이트수
 * @return 최대바이트수 이하인지의 여부
 */
String.prototype.isMaxByte = function(maxByte) {
	return this.getByte() <= maxByte;
}

/**
 * 문자열이 영문인경우 대문자로 치환한다.
 * 
 * @return 대문자로 치환된 문자열
 */
String.prototype.upper = function() {
	return this.toUpperCase();
}

/**
 * 문자열이 영문인경우 소문자로 치환한다.
 * 
 * @return 소문자로 치환된 문자열
 */
String.prototype.lower = function() {
	return this.toLowerCase();
}

/**
 * 문자열 좌우 공백을 제거한다.
 * 
 * @return 좌우 공백 제거된 문자열
 */
String.prototype.trim = function() {
	return this.replace(/^\s+/g, '').replace(/\s+$/g, '');
}

/**
 * 문자열 좌 공백을 제거한다.
 * 
 * @return 좌 공백 제거된 문자열
 */
String.prototype.ltrim = function() {
	return this.replace(/(^\s*)/, "");
}

/**
 * 문자열 우 공백을 제거한다.
 * 
 * @return 우 공백 제거된 문자열
 */
String.prototype.rtrim = function() {
	return this.replace(/(\s*$)/, "");
}

/**
 * 문자열에서 모든 교체할 문자열을 대체 문자열로 치환한다.
 * 
 * @param pattnStr -
 *            찾을 문자열
 * @param chngStr -
 *            대체 문자열
 * @return 치환된 문자열
 */
String.prototype.replaceAll = function(pattnStr, chngStr) {
	var retsult = "";
	var trimStr = this.replace(/(^\s*)|(\s*$)/g, "");
	
	if (trimStr && pattnStr != chngStr) {
		retsult = trimStr;
		while (retsult.indexOf(pattnStr) > -1) {
			retsult = retsult.replace(pattnStr, chngStr);
		}
	}
	return retsult;
}

/**
 * 문자열을 거꾸로 치환한다.
 * 
 * @return 거꾸로 치환된 문자열
 */
String.prototype.reverse = function() {
	var result = '';
	
	for (var i = this.length - 1; i > -1; i--) {
		result += this.substring(i, i + 1);
	}
	return result;
}

/**
 * 지정한 길이만큼 원본 문자열 왼쪽에 패딩문자열을 채운다.
 * 
 * @param len -
 *            채울 길이
 * @param padStr -
 *            채울 문자열
 * @return 채워진 문자열
 */
String.prototype.lpad = function(len, padStr) {
	var result = '';
	var loop = Number(len) - this.length;
	for (var i = 0; i < loop; i++) {
		result += padStr.toString();
	}
	return result + this;
}

/**
 * 지정한 길이만큼 원본 문자열 오른쪽에 패딩문자열을 채운다.
 * 
 * @param len -
 *            채울 길이
 * @param padStr -
 *            채울 문자열
 * @return 채워진 문자열
 */
String.prototype.rpad = function(len, padStr) {

	var result = '';
	var loop = Number(len) - this.length;
	for (var i = 0; i < loop; i++) {
		result += padStr.toString();
	}
	return this + result;
}

/**
 * 문자열이 공백이나 널인지의 여부를 반환한다.
 * 
 * @return 공백이나 널인지의 여부
 */
String.prototype.isBlank = function() {
	var str = this.trim();
	for (var i = 0; i < str.length; i++) {
		if ((str.charAt(i) != "\t") && (str.charAt(i) != "\n")
				&& (str.charAt(i) != "\r")) {
			return false;
		}
	}
	return true;
}

/**
 * 문자열이 영어만으로 구성되어 있는지의 여부를 반환한다.
 * 
 * @param exceptChar -
 *            추가 허용할 문자
 * @return 영어만으로 구성되어 있는지의 여부
 */
String.prototype.isEng = function(exceptChar) {
	return (/^[a-zA-Z]+$/).test(this.remove(exceptChar)) ? true : false;
}

/**
 * 문자열이 숫자와 영어만으로 구성되어 있는지의 여부를 반환한다.
 * 
 * @param exceptChar -
 *            추가 허용할 문자
 * @return 숫자와 영어만으로 구성되어 있는지의 여부
 */
String.prototype.isEngNum = function(exceptChar) {
	return (/^[0-9a-zA-Z]+$/).test(this.remove(exceptChar)) ? true : false;
}

/**
 * 문자열이 한글만으로 구성되어 있는지의 여부를 반환한다.
 * 
 * @param exceptChar -
 *            추가 허용할 문자
 * @return 한글만으로 구성되어 있는지의 여부
 */
String.prototype.isKor = function(exceptChar) {
	return (/^[가-힣]+$/).test(this.remove(exceptChar)) ? true : false;
}

/**
 * 문자열이 숫자와 한글만으로 구성되어 있는지의 여부를 반환한다.
 * 
 * @param exceptChar -
 *            추가 허용할 문자
 * @return 숫자와 한글만으로 구성되어 있는지의 여부
 */
String.prototype.isKorNum = function(exceptChar) {
	return (/^[0-9가-힣]+$/).test(this.remove(exceptChar)) ? true : false;
}

/**
 * 문자열이 영문과 한글만으로 구성되어 있는지의 여부를 반환한다.
 * 
 * @param exceptChar -
 *            추가 허용할 문자
 * @return 영문과 한글만으로 구성되어 있는지의 여부
 */
String.prototype.isEngKor = function(exceptChar) {
	return (/^[a-zA-Z가-힣]+$/).test(this.remove(exceptChar)) ? true : false;
}

/**
 * 이메일 주소의 유효성 여부를 반환한다.
 * 
 * @return 유효성 여부
 */
String.prototype.isEmail = function() {
	return (/\w+([-+.]\w+)*@\w+([-.]\w+)*\.[a-zA-Z]{2,4}$/).test(this.trim());
}

/**
 * 전화번호의 유효성 여부를 반환한다.
 * 
 * @param dlm -
 *            구분자(default : '-')
 * @return 유효성 여부
 */
String.prototype.isPhone = function(dlm) {
	var arg = dlm != null && typeof (dlm) != 'undefined' && dlm.neq('') ? dlm : '-';
	return eval("(/(02|0[3-9]{1}[0-9]{1})" + arg + "[1-9]{1}[0-9]{2,3}" + arg + "[0-9]{4}$/).test(this)");
}

/**
 * 휴대폰번호 유효성 여부를 반환한다.
 * 
 * @param dlm -
 *            구분자(default : '-')
 * @return 유효성 여부
 */
String.prototype.isMobile = function(dlm) {
	var arg = dlm != null && typeof (dlm) != 'undefined' && dlm.neq('') ? dlm : '-';
	return eval("(/01[016789]" + arg + "[1-9]{1}[0-9]{2,3}" + arg + "[0-9]{4}$/).test(this)");
}

/**
 * 날짜의 유효성 여부를 반환한다.
 * 
 * @return 유효성 여부
 */
String.prototype.isDate = function() {
	var result = false;
	if (this.length == 8 && this.isNum()) {
		var y = Number(this.substring(0, 4));
		var m = Number(this.substring(4, 6));
		var d = Number(this.substring(6, 8));
		var inDate = new Date(y, m - 1, d);
		result = (Number(inDate.getFullYear()) == y && Number(inDate.getMonth() + 1) == m && Number(inDate.getDate()) == d);
	}
	return result;
}

/**
 * 파일의 확장자를 구하여 반환한다.
 * 
 * @return 확장자
 */
String.prototype.ext = function() {
	return (this.indexOf(".") < 0) ? "" : this.substring(this.lastIndexOf(".") + 1, this.length);
}

/**
 * 해당 클래스명이 있는지 확인
 */
HTMLElement.prototype.hasClass = function(cls) {
	var i;
	var classes = this.className.replaceAll('\t',' ').split(" ");
	for(i = 0; i < classes.length; i++) {
		if(classes[i] == cls) {
			return true;
		}
	}
	return false;
};

/**
 * 해당클래스명을 추가
 */
HTMLElement.prototype.addClass = function(add) {
	if (!this.hasClass(add)){
		this.className = (this.className + " " + add).trim();
	}
};

/**
 * 해당클래스명을 삭제
 */
HTMLElement.prototype.removeClass = function(remove) {
	var newClassName = "";
	var i;
	var classes = this.className.replace(/\s{2,}/g, ' ').split(" ");
	for(i = 0; i < classes.length; i++) {
		if(classes[i] !== remove) {
			newClassName += classes[i] + " ";
		}
	}
	this.className = newClassName.trim();
};

HTMLElement.prototype.remove = function(){
	if(this.parentNode !== null){
		this.parentNode.removeChild(this);
	}
}

Array.prototype.removeElement = function(idx){
	this.splice(idx,1);
}

Array.prototype.addElement = function(idx, el){
	this.splice(idx,0,el);
}

Array.prototype.addArray = function(idx, arry){
	for(var i=0; i<arry.length; i++){
		this.splice(idx+i,0,arry[i]);
	}
}

Array.prototype.setOrderNumbering = function(key){
	for(var i=0; i<this.length; i++){
		eval("this[i]." + key + "= (i + 1 + '')");
	}
}

/**
 * ie에서 배열의 includes 함수가 지원이 안되는 관계로 재정의
 * 
 * var arr = ['a', 'b', 'c']; arr.includes('a', -100); // true arr.includes('b',
 * -100); // true arr.includes('c', -100); // true arr.includes('a', -2); //
 * false
 */
Array.prototype.includes = function(searchElement, fromIndex) {
	if (this == null) {
		throw new TypeError('"this" is null or not defined');
	}
	
	// 1. Let O be ? ToObject(this value).
	var o = Object(this);
	
	// 2. Let len be ? ToLength(? Get(O, "length")).
	var len = o.length >>> 0;
	
	// 3. If len is 0, return false.
	if (len === 0) {
		return false;
	}

	// 4. Let n be ? ToInteger(fromIndex).
	// (If fromIndex is undefined, this step produces the value 0.)
	var n = fromIndex | 0;
	
	// 5. If n ≥ 0, then
	// a. Let k be n.
	// 6. Else n < 0,
	// a. Let k be len + n.
	// b. If k < 0, let k be 0.
	var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
	
	function sameValueZero(x, y) {
		return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
	}
	
	// 7. Repeat, while k < len
	while (k < len) {
		// a. Let elementK be the result of ? Get(O, ! ToString(k)).
		// b. If SameValueZero(searchElement, elementK) is true, return true.
		if (sameValueZero(o[k], searchElement)) {
			return true;
		}
		// c. Increase k by 1.
		k++;
	}

	// 8. Return false
	return false;
}

/**
 * var _today = new Date(); // 예제 기준 시간 : 2000-01-01 13:12:12
 * console.log(_today.format('yyyy-MM-dd'));  => 2000-01-01
 * console.log(_today.format('HH:mm:ss'));  => 13:12:12
 * console.log(_today.format('yyyy-MM-dd(KS) HH:mm:ss'));  => 2000-01-01(토) 13:12:12
 * console.log(_today.format('yyyy-MM-dd a/p hh:mm:ss'));  => 2000-01-01 오후 01:12:12
 */
Date.prototype.format = function (f) {
    if (!this.valueOf()) return " ";

    var weekKorName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
    var weekKorShortName = ["일", "월", "화", "수", "목", "금", "토"];
    var weekEngName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var weekEngShortName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var d = this;

    return f.replace(/(yyyy|yy|MM|dd|KS|KL|ES|EL|HH|hh|mm|ss|a\/p)/gi, function ($1) {
        switch ($1) {
            case "yyyy": return d.getFullYear(); // 년 (4자리)
            case "yy": return (d.getFullYear() % 1000).zf(2); // 년 (2자리)
            case "MM": return (d.getMonth() + 1).zf(2); // 월 (2자리)
            case "dd": return d.getDate().zf(2); // 일 (2자리)
            case "KS": return weekKorShortName[d.getDay()]; // 요일 (짧은 한글)
            case "KL": return weekKorName[d.getDay()]; // 요일 (긴 한글)
            case "ES": return weekEngShortName[d.getDay()]; // 요일 (짧은 영어)
            case "EL": return weekEngName[d.getDay()]; // 요일 (긴 영어)
            case "HH": return d.getHours().zf(2); // 시간 (24시간 기준, 2자리)
            case "hh": return ((h = d.getHours() % 12) ? h : 12).zf(2); // 시간 (12시간 기준, 2자리)
            case "mm": return d.getMinutes().zf(2); // 분 (2자리)
            case "ss": return d.getSeconds().zf(2); // 초 (2자리)
            case "a/p": return d.getHours() < 12 ? "오전" : "오후"; // 오전/오후 구분
            default: return $1;
        }
    });
}

String.prototype.string = function(len){var s = '', i = 0; while (i++ < len) { s += this; } return s;};
String.prototype.zf = function(len){return "0".string(len - this.length) + this;};
Number.prototype.zf = function(len){return this.toString().zf(len);};