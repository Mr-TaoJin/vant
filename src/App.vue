<template>
  <div id="app">
    <keep-alive include="home">
      <router-view />
    </keep-alive>
  </div>
</template>

<style>
body {
  font-size: 14px;
  background-color: #f8f8f8;
  -webkit-font-smoothing: antialiased;
}
.main_box {
  padding: 1.22667rem 0 1.33333rem 0;
}
</style>
