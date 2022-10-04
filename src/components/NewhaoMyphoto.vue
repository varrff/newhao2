<template>
  <div>
    <!-- <h1>我的生活分享</h1> -->
    <!-- <p>摄影对我来说，是疲惫时刻的慰籍，
    也是孤独时让我自己无处可放的思绪专注到某一种情景或物体，分享照片的同时也在分享当时的心情
    </p> -->
    <!-- <button>立即探索</button> -->
    <div id="pho"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#pho{
    width: 100%;
    height: 100%;
    position: relative;
    background-image: url(../../public/images/1.JPG);
    background-size: 100%;
    background-repeat:no-repeat;
    color: black;
    border-radius: 15px;
}
h1{
    position: absolute;
    top: 20%;
    background-image: linear-gradient( 135deg, #79F1A4 10%, #0E5CAD 100%);
    background-clip: text; 
     -webkit-background-clip: text; 
     color: transparent;
}
p{
    font-size: .8vw;
    width: 30%;
    position: absolute;
    top: 35%;
    right: 5%;
}
</style>