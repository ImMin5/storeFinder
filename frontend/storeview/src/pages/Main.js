import React from 'react';
import NavbarTop from '../components/NavbarTop';
import MapContainer from '../components/MapContainer';
import SearchInput from '../components/SearchInput';
//import { RenderAfterNavermapsLoaded, NaverMap } from 'react-naver-maps'; // 패키지 불러오기


function Main(){
	const mainStyle ={
		margin : "0 auto",
	}
	return(
		<div style={mainStyle} >
		<NavbarTop type="client" menu1="로그인" menu2="소개"/>
		<SearchInput/>
		<MapContainer/>
		</div>
		)
}

export default Main;