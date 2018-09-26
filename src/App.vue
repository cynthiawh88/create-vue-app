<template>
  <div id="app">
    <router-view/>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<style lang="scss">
  // reset base style
  html {
    color:#000;
    background:#fff;
    overflow-y:scroll;
    -webkit-text-size-adjust:100%;
    -ms-text-size-adjust:100%
  }
  html * {
    outline:0;
    -webkit-text-size-adjust:none;
    -webkit-tap-highlight-color:rgba(0,0,0,0);
    box-sizing: border-box;
  }
  html,body {
    font-family: "PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
  body {
    width: 10rem;
    margin: 0 auto !important;
  }
  body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td,hr,button,article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section {
    margin:0;
    padding:0;
  }
  input,select,textarea {
    font-size:100%;
    -webkit-appearance: none;
  }
  table {
    border-collapse:collapse;
    border-spacing:0
  }
  fieldset,img {
    border:0
  }
  abbr,acronym {
    border:0;
    font-variant:normal
  }
  del {
    text-decoration:line-through
  }
  address,caption,cite,code,dfn,em,th,var {
    font-style:normal;
    font-weight:500
  }
  ol,ul {
    list-style:none
  }
  caption,th {
    text-align:left
  }
  h1,h2,h3,h4,h5,h6 {
    font-size:100%;
    font-weight:500
  }
  q:before,q:after {
    content:''
  }
  sub,sup {
    font-size:75%;
    line-height:0;
    position:relative;
    vertical-align:baseline
  }
  sup {
    top:-.5em
  }
  sub {
    bottom:-.25em
  }
  a:hover,
  a:visited,
  a:active {
    text-decoration: none
  }
  ins,a {
    text-decoration: none
  }
</style>
