import React from "react";

const Header = () => {
    return (
        <header id="header2">
            <div className="wrap">
                <div className="inner">
                    <div className="slimgnb">
                        <ul className="slimgnb_1depth">
                                
                            <li id="_helpMenuWrap" className="help">
                                <a href="#">
                                    고객센터 <i className="arrow">하위메뉴 열기</i>
                                </a>
                                <div className="ly_type_low">
                                    <a href="#">
                                        고객센터 <i className="arrow">하위메뉴 닫기</i>
                                    </a>
                                    <ul className="menu">
                                        <li><a href="#" >자주 묻는 질문</a></li>
                                        <li><a href="#" >공지사항</a></li>
                                        <li><a href="#" >제안·신고하기</a></li>
                                        <li><a href="#" >환불문의</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="#">입점문의</a></li>
                            <li><a href="#">광고문의</a></li>
                        </ul>
                    </div>
                
                    <div className="logo_img">
                        <a href="#"></a>
                    </div>
                
                    <div id="srchbar2" className="srchbar">
                        <form name="search_form" method="GET" action="www.tmon.co.kr/search/">
                            <fieldset>
                                <legend>상품 검색</legend>
                                <label >							
                                    <input type="text" id="top_srch" className="srch" name="keyword" title="검색어 입력" autoComplete="off" maxLength="100" />
                                    						
                                </label>
                                <button type="submit" className="btn_search" ><i>검색</i></button>
                            </fieldset>
                        </form>
                    </div>			
                
                    <ul className="my_menu">				
                        <li className="my " id="_myMenuWrap">
                            <a href="#">
                                <span>마이티몬</span><i></i>
                            </a>					
                        </li>
                        
                        <li className="coupon"><a href="#">
                            <span>쿠폰</span><i></i>
                            <span className="cnt">
                                0
                            </span>
                        </a></li>
                        
                        <li className="cart"><a href="#">
                            <span>장바구니</span><i></i>
                            <span className="cnt">0</span>
                        </a></li>
                        <li className="keyword">
                            <a href="#">
                                <span>알림</span><i></i>
                            </a>
                        </li>
                    </ul>
                </div>
                
                <nav id="gnb2" className="gnb">
                    <div className="inner">
                        <ul className="menu" role="tablist">
                            <li id="category_map_btn" className="category category_type2 open" role="tab" aria-controls="tab-all" aria-expanded="false">										
                                <button id="_btnShowCategoryMap" type="button" className="button_map">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon_map_all" width="15" height="12">
                                        <path ></path>
                                    </svg>
                                    <span className="blind">전체</span>
                                </button>
                            </li>							
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;