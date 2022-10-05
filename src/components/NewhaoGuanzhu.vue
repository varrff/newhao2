<template>
  <div>
   <h1> 
    你的下一个关注,<br/>
    何必是大佬</h1>
    <el-button type="primary" @click="live" class="but" round>立即关注</el-button>
      <img :src="img" alt="">
    <ul>
      <li><span class="iconfont icon-J" @click ="toJ"></span></li>
      <li><span class="iconfont icon-shejiaotubiao-12" @click ="toD"></span></li>
      <li><span class="iconfont icon-bilibili" @click ="toB"></span></li>
    </ul>
  </div>
</template>

<script>
export default {
data(){
  return{
    isP:true,
    img:'/images/op1.PNG',
    web:'https://okjk.co/8TJEj1'
  }
},
methods:{
  toJ(){
    this.web = 'https://okjk.co/8TJEj1'
    this.img = "/images/op1.PNG"
  },
  toD(){
    this.web = 'https://www.douban.com/people/190819556/?_i=3324722LkWkaot'
    this.img = "/images/op2.PNG"
  },
  toB(){
    this.web =  "https://b23.tv/nrOeYcs"
    this.img = "/images/op3.PNG"
  },
  live(){
    window.open(this.web,"_blank")
  }
}
}
</script>

<style scoped>
@media screen {
  /* 适配手机 */
  @media (max-width:450px){
    div{
position:relative;
background-color: #fff;
color: black;
}
h1{
  /* position:absolute; */
  /* width: 10rem; */
  /* right:0%;
  top:15%; */
  font-size: 2rem;
  text-align: center;
}
img{
  /* position: absolute;
  left: 10%;
  top: 5%; */
  /* margin-left: 10%; */
  margin: auto;
  width: 100%;
}

.but{
  position: absolute;
  right:37%;
  bottom:5%;
}
ul{
  list-style: none;
  display: flex;
  position: absolute;
  left: 25%;
  bottom: 15%;
}
ul li {
  cursor:pointer;
}
.iconfont{
  margin-left: 1.3vw;
}
.icon-J{
  font-size: 4vh;
  color: #e6dc29;
}
.icon-shejiaotubiao-12{
  position: relative;
  top: -10%;
  font-size: 6vh;
  color:rgb(27, 184, 79)
}
.icon-bilibili{
  font-size: 4vh;
  color:#ffb3bf;
}
  }
  /* 适配平板 */
  @media (min-width:450px){
    div{
position:relative;
background-color: #fff;
color: black;
}
h1{
  position:absolute;
  /* width: 2rem; */
  right:8%;
  top:15%;
  font-size: 2rem;
}
img{
  /* position: absolute;
  left: 10%;
  top: 5%; */
  margin-left: 10%;
  width: 50%;
}

.but{
  position: absolute;
  right:18%;
  top:50%;
}
ul{
  list-style: none;
  display: flex;
  position: absolute;
  left: 17%;
  top: 80%;
}
ul li {
  cursor:pointer;
}
.iconfont{
  margin-left: 1.3vw;
}
.icon-J{
  font-size: 4vh;
  color: #e6dc29;
}
.icon-shejiaotubiao-12{
  position: relative;
  top: -10%;
  font-size: 5vh;
  color:rgb(27, 184, 79)
}
.icon-bilibili{
  font-size: 4vh;
  color:#ffb3bf;
}
  }
    /* 适配大屏幕 */
    @media (min-width: 1000px){
    div{
position:relative;
background-color: #fff;
color: black;
}
h1{
  position:absolute;
  width: 20vw;
  right:0%;
  top:15%;
  font-size: 1.8vw;
}
img{
  position: absolute;
  left: -5%;
  /* top: 5%; */
  width: 50%;
}

.but{
  position: absolute;
  right:17%;
  top:45%;
}
ul{
  list-style: none;
  display: flex;
  position: absolute;
  left:13%;
  top: 75%;
}
ul li {
  cursor:pointer;
}
.iconfont{
  margin-left: 1.3vw;
}
.icon-J{
  font-size: 4vh;
  color: #e6dc29;
}
.icon-shejiaotubiao-12{
  position: relative;
  top: -12%;
  font-size: 6vh;
  /* color:rgb(27, 184, 79) */
}
.icon-bilibili{
  font-size: 4vh;
  color:#ffb3bf;
}
  }
  @media (min-width:1400px){
    div{
position:relative;
background-color: #fff;
color: black;
}
h1{
  position:absolute;
  width: 20vw;
  right:0%;
  top:15%;
  font-size: 2vw;
}
img{
  /* position: absolute;
  left: 10%;
  top: 5%; */
  margin-left: 10%;
  width: 45%;
}

.but{
  position: absolute;
  right:25%;
  top:50%;
  font-size: 2rem;
}
ul{
  list-style: none;
  display: flex;
  position: absolute;
  left: 57%;
  top: 80%;
}
ul li {
  cursor:pointer;
}
.iconfont{
  margin-left: 1.3vw;
}
.icon-J{
  font-size: 4vh;
  color: #e6dc29;
}
.icon-shejiaotubiao-12{
  position: relative;
  top: -20%;
  font-size: 6vh;
  color:rgb(27, 184, 79)
}
.icon-bilibili{
  font-size: 4vh;
  color:#ffb3bf;
}
  }
}
</style>