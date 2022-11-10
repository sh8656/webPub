/* header */
window.addEventListener("wheel", go);
function go(){
    if(scrollY > 5){
        $("header").addClass("on");
    }else{
        $("header").removeClass("on");
    }
}

// 	9aa9d394bec36c020e56a3cd35f7231d  카카오맵 자바스크립트키

/* 카카오맵 */
var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(34.788681113215226, 126.38466191529369), // 지도의 중심좌표
        level: 1 // 지도의 확대 레벨
    };

// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption); 