<template>
  <div id="app">
    <keep-alive include="home,game,center">
      <router-view />
    </keep-alive>
  </div>
</template>

<style>
body {
  font-size: 14px;
  /* background-color: #999; */
  background-color: #f5f5f5;
  -webkit-font-smoothing: antialiased;
}
div{
  box-sizing: border-box;
}
.main_box {
  box-sizing: border-box;
  /* padding: 1.22667rem 0 1.33333rem 0; */
  padding: 0 0 1.33333rem 0;
}
.fl { float: left; }
.fr { float: right; }
.clearfloat:after,.clearfix:before{content:"";display:block;clear: both;}
.tl { text-align: left; }
.tc { text-align: center; }
.tr { text-align: right; }
.vm { vertical-align: middle; }
.vtb { vertical-align: text-bottom; }
.vt { vertical-align: top; }
.oh { overflow: hidden; }
.pa { position: absolute; }
.pr { position: relative; }
.fb { font-weight: bold; }
.translate { transform: translate(-50%, -50%); -webkit-transform: translate(-50%, -50%); top: 50%; left: 50%;}
.translateX { transform: translateX(-50%); -webkit-transform: translateX(-50%); left: 50%;}
.translateY { transform: translateY(-50%); -webkit-transform: translateY(-50%); top: 50%;}
/*包含以下四种的链接*/
a {
  text-decoration: none;
  color:#000;
}
.router-link-active {
    text-decoration: none;
}
</style>
