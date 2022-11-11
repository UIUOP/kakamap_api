/*global kakao*/
import React, { useEffect } from 'react'

const KakaoMap = () => {

    const lat = 37.49904599703376;
    const lon = 127.0328945325635;

    useEffect(() => {

        var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
            mapOption = {
                center: new kakao.maps.LatLng(lat, lon), // 지도의 중심좌표
                level: 3 // 지도의 확대 레벨,


            };

        var map = new kakao.maps.Map(mapContainer, mapOption);

        // 마커가 표시될 위치입니다 
        var markerPosition = new kakao.maps.LatLng(lat, lon);

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            position: markerPosition,
            title: 'kh정보교육원'
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        var iwContent = '<div style="padding:5px;">kh 정보교육원 <br><a href="http://kko.to/iiuG5MlJXN" style="color:blue" target="_blank">큰지도보기</a> <a href="http://kko.to/iiuG5MlJXN" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
            iwPosition = new kakao.maps.LatLng(lat, lon); //인포윈도우 표시 위치입니다

        // 인포윈도우를 생성합니다
        var infowindow = new kakao.maps.InfoWindow({
            position: iwPosition,
            content: iwContent
        });

        // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
        infowindow.open(map, marker);

    }, [lat, lon])

    return (
        <>
            <h1>기술 설명 지도</h1>
            <div
                style={{
                    marginTop: '60px',
                    width: '100%',
                    height: '60vh',
                    //사이즈나 MAP에 대한 사이즈나 위치값은
                    //css로 조정해주면 된다.
                }}

                id='map'
            >
            </div>
        </>
    )
}

export default KakaoMap;