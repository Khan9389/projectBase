<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<div class="board-paging">
    <ul>
        <li class="pg begin" onclick="cf_beginPage()"><a href="#none">맨처음</a></li>
        <li class="pg prev" onclick="cf_prevPage()"><a href="#none">이전</a></li>
        <div class="num" id="pagination_content">
            <li class="on"><a href="#none">1</a></li>
            <li><a href="#none">2</a></li>
        </div>
        <li class="pg next" onclick="cf_nextPage()"><a href="#none">다음</a></li>
        <li class="pg end" onclick="cf_endPage()"><a href="#none">맨끝</a></li>
    </ul>
</div>

<style>
/* 페이징 관련 css */
a { text-decoration:none } 
.board-paging {width:100%; margin-top:50px;}
.board-paging ul {text-align:center; font-size:0;}
.board-paging ul .num{display: inline-block;}
.board-paging ul .num li:first-child{margin-left: 7px;}
.board-paging ul li {display:inline-block; vertical-align:middle; margin-left:7px; min-width:30px; height:30px; box-sizing:border-box; border:1px solid #d9d9d9; border-radius:3px; position:relative;}
.board-paging ul li:nth-child(1) {margin-left:0;}
.board-paging ul li a {display:block; width:100%; height:100%; font-size:14px; line-height:28px;}
.board-paging ul li.pg {width:30px;}
.board-paging ul li.pg a {font-size:0;}
.board-paging ul li.pg:before,
.board-paging ul li.pg:after {content:""; width:0; height:0; position:absolute; top:50%; -webkit-transform:translateY(-50%); -moz-transform:translateY(-50%); transform:translateY(-50%);}
.board-paging ul li.pg.begin:before,
.board-paging ul li.pg.begin:after,
.board-paging ul li.pg.prev:before {border-right:5px solid #666; border-top:4px solid transparent; border-bottom:4px solid transparent;}
.board-paging ul li.pg.end:before,
.board-paging ul li.pg.end:after,
.board-paging ul li.pg.next:before {border-left:5px solid #666; border-top:4px solid transparent; border-bottom:4px solid transparent;}
.board-paging ul li.pg.begin:before {left:8px;}
.board-paging ul li.pg.begin:after {left:14px;}
.board-paging ul li.pg.prev:before {left:50%; -webkit-transform:translate(-50%,-50%); -moz-transform:translate(-50%,-50%); transform:translate(-50%,-50%);}
.board-paging ul li.pg.end:before {left:9px;}
.board-paging ul li.pg.end:after {left:15px;}
.board-paging ul li.pg.next:before {left:50%; -webkit-transform:translate(-50%,-50%); -moz-transform:translate(-50%,-50%); transform:translate(-50%,-50%);}
.board-paging ul li.on {background:#222;}
.board-paging ul li.on a {color:#fff;}
</style>