//  접속한 브라우저의 정보
const ver = navigator.userAgent;
console.log(ver);

const isIe = /trident/i.test(ver);
console.log(isIe);

if (isIe) {
  alert('익스플로러 브리우저로 접속하셨습니다. 이 웹페이지는 익스플로러 브라우저를 지원하지 않습니다. 다른 브라우저로 접속 해 주세요');
};