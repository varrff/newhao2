<template>
  <div class="top">
    <div class="beijing">
        <img class="beijingImg" v-lazy v-bacImg src="/images/nTop.JPG" alt="" ref="beijingImg">
    </div>
    <div id="biaoti">
        <h1>My photography works
            <span style="font-size:22px">/暂未上线</span>
        </h1>
    </div>
    <div id="list">
        <div v-for="itme in img" :key=itme.id>
            <img v-lazy :src="itme.src">
        </div>
    </div>
    <a href="" id="gengduo">更多地点</a>
  </div>
</template>

<script>
export default {
methods:{

},
data(){
    return{
img:[
{id:1 ,src:"/images/top1.JPG"},
{id:2 ,src:"/images/top2.JPG"},
{id:3 ,src:"/images/top3.JPG"},
{id:4 ,src:"/images/top4.JPG"}
]}
},
mounted(){
}
}
</script>

<style scoped>
.top{
    position: relative;
    overflow: hidden;
}
.beijing{
    background-color: black;
}
.beijingImg{
width: 100%;
opacity: .7;
height: 100vh;
filter: blur(10px);
transition: all 2s;
}
.ov{
    filter: blur(0px);
    transform: scale(1.3);
    opacity: 1;
}
#biaoti h1{
    position: absolute;
    font-family:  Helvetica, sans-serif;
    padding-bottom: 2vh;
    top: 5%;
    left: 50%;
    transform: translate(-50%,0);
    font-size: 2vw;
    font-weight: 100;
    color: aliceblue;
}
#biaoti h1::after{
    content:' ';
    position: absolute;
    bottom: 1%;
    left: 50%;
    transform: translate(-50%,0%);
    width: 30%;
    height: 5%;
    border-bottom: solid .3vh rgb(235, 141, 18);
}
#list{
    position: absolute;
    width: 60%;
    top: 20%;
    left: 50%;
    transform: translate(-50%,0);
    display: grid;
    grid-template-columns:1fr 1fr ;
    row-gap: 4vh;
    column-gap: 0;
    justify-items: center;
}
#list div{
width: 80%;
height: 30vh;
border-radius: 15px;
overflow: hidden;
cursor:pointer;
}
#list div img{
width: 100%;
height: 30vh;
transition: all .5s;
}
#list div img:hover{
    transform: scale(1.2);
}
#list div img:hover .beijing img {
    filter: blur(0px);
    transform: scale(1.3);
    opacity: 1;
}
#gengduo{
    position: absolute;
    bottom: 5%;
    left: 50%;
    text-decoration: none;
    font-size: 1vw;
    /* color: silver; */
    color: rgb(255, 255, 255);
    transform: translate(-50%,0%);
    transition: all 2s;
}
#gengduo::after{
    content:' ';
    position: absolute;
    bottom: -45%;
    left: 50%;
    transform: translate(-50%,0%);
    width: 40%;
    height: 5%;
    border-bottom: solid .3vh rgb(235, 141, 18);
}
#gengduo:hover{
    transform: scale(1.2);
    transform-origin: right;
}
</style>