(function() {
  console.log("%c잠깐만요!", "color: blue;font-size: 34pt; font-weight: bold;")
  console.log("%c이 화면은 개발자를 위한 화면이에요!", "font-family: NanumSquare;font-size: 18pt; font-weight: bold;")
  console.log("%c누군가가 특정 코드 복사/붙여넣기를 요구했다면 해킹시도일 수도 있으니 조심하세요!", "font-family: NanumSquare;font-size: 18pt; font-weight: bold;")
  console.log("%c이를 무시하고 계속 진행할 경우 타인에게 당신의 Discord&Mora 접근 권한을 넘겨주게 될 수 있어요!", "color:red;font-family: NanumSquare;font-size: 18pt; font-weight: RED;")
  // var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  // if(isMobile == true && window.location.pathname !== '/privacy' && window.location.pathname !== '/seeyoulater' && window.location.pathname !== '/thankyou') {
  //   if(confirm("모바일기기는 아직 지원하지 않아요! 그래도 계속 보실건가요?") == false) {
  //     window.location.href = "/seeyoulater"
  //   }
  // }
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  if(localStorage.theme == null) document.documentElement.classList.add('dark');
  var w = window;
  if (w.ChannelIO) {
    return (window.console.error || window.console.log || function(){})('ChannelIO script included twice.');
  }
  var ch = function() {
    ch.c(arguments);
  };
  ch.q = [];
  ch.c = function(args) {
    ch.q.push(args);
  };
  w.ChannelIO = ch;
  function l() {
    if (w.ChannelIOInitialized) {
      return;
    }
    w.ChannelIOInitialized = true;
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
    s.charset = 'UTF-8';
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);
  }
  if (document.readyState === 'complete') {
    l();
  } else if (window.attachEvent) {
    window.attachEvent('onload', l);
  } else {
    window.addEventListener('DOMContentLoaded', l, false);
    window.addEventListener('load', l, false);
  }
})();
ChannelIO('boot', {
  "pluginKey": ""
});
const Toast = Swal.mixin({
toast: true,
position: 'top-end',
showConfirmButton: false,
timer: 3000,
timerProgressBar: true,
didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
}
})
function CopyInviteLink() {
if(navigator.clipboard) {
  navigator.clipboard.writeText(document.getElementById("bot-invite").href);
  document.getElementById("copyinvitebtn").textContent = "복사 됨";

  Toast.fire({
    icon: 'success',
    title: '복사되었습니다.'
  })
} else{
  Toast.fire({
    icon: 'error',
    title: '오류가 발생하였습니다.'
  })
}
}
function CopyServerInviteLink(link) {
if(!link) return;
if(navigator.clipboard) {
  navigator.clipboard.writeText(`https://mora-bot.kr/i/${link}`);

  Toast.fire({
    icon: 'success',
    title: '복사되었습니다.'
  })
} else{
  Toast.fire({
    icon: 'error',
    title: '오류가 발생하였습니다.'
  })
}
}
