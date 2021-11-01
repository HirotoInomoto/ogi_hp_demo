let imageWidth = document.querySelector('.map__image').clientWidth;
let imageHeight = document.querySelector('.map__image').clientHeight;



document.querySelector('.map__frame input').addEventListener('input',() => {
    let ratio = document.querySelector('.map__frame input').value;
    // document.querySelector('.map__image').style.transform = "scale(" + ratio + ", " + ratio + ")";
    document.querySelector('.map').style.transform = "scale(" + ratio + ", " + ratio + ")";
    let marginRatio = (ratio - 1) / 0.02;
    document.querySelector('.map').style.margin = marginRatio + "%";
    // console.log(document.querySelector('.map__image'));
    // console.log(ratio);
})

var userAgent = (function () {
  var ua = navigator.userAgent;
  if (ua.indexOf("iPhone") > 0 || ua.indexOf("iPod") > 0 || ua.indexOf("Android") > 0 && ua.indexOf("Mobile") > 0) {
    return "sp";
  } else if (ua.indexOf("iPad") > 0 || ua.indexOf("Android") > 0) {
    return "sp";
  } else {
    return "pc";
  }
})();

console.log(userAgent)

function popupActivate(elem){
  elem.style.display = "flex";
}

function popupDeactivate(elem){
  elem.style.display = "none";
}

if(userAgent == "pc"){
  $(function() {
    $(".mark").css({
        "height": imageWidth / 50 + "px",
        "width": imageWidth / 50 + "px",
    });
  });
  $(function(){
    $('#map__image').hover(function(){	//色領域にマウスカーソルがホバーしているとき開始
      function MouseMoveFunc(e){	//マウスカーソルが移動するたびに実行する関数
  
        // マウスカーソルの座標を取得
        var mouse_x = e.clientX + 5;	//マウスカーソルのX座標 5px右へ調整
        var mouse_y = $(window).scrollTop() + e.clientY + 5;	//マウスカーソルのY座標 現在のスクロール位置＋5px下へ調整
  
        // 吹き出しの位置座標を取得したマウスカーソルの座標に変換
        $("#popup").css({
          "position": "absolute",
                "left": mouse_x,
          "top": mouse_y
        });
      }
  
      if(document.addEventListener){
        document.addEventListener("mousemove" , MouseMoveFunc);
      }else if(document.attachEvent){
        document.attachEvent("onmousemove" , MouseMoveFunc);
      }
    });
  });
}else{
  $(function() {
    $(".mark").css({
        "height": imageWidth / 28 + "px",
        "width": imageWidth / 28 + "px",
    });
  });
  window.addEventListener("DOMContentLoaded", () => {
    document.querySelector('.map__wrapper').style.height = imageHeight + "px";
    document.querySelector('.map__wrapper').style.width = imageWidth + "px";
  })
}

/**
* タッチ操作での拡大縮小禁止
*/
function no_scaling() {
  document.addEventListener("touchmove", mobile_no_scroll, { passive: false });
}

/**
* タッチ操作での拡大縮小禁止解除
*/
function return_scaling() {
  document.removeEventListener('touchmove', mobile_no_scroll, { passive: false });
}

/**
* 拡大縮小禁止
*/
function mobile_no_scroll(event) {
  // ２本指での操作の場合
  if (event.touches.length >= 2) {
      // デフォルトの動作をさせない
      event.preventDefault();
  }
}