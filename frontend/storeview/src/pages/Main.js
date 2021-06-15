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
		<NavbarTop/>
		<SearchInput/>
		<MapContainer/>
		</div>
		)
}

export default Main;