<template>
  <div class="top">
    <h1>My-todos</h1>
    <p>人生的结局并不是等想好该怎么写就会怎么样结束，更可能是哪天突然就戛然而止，所以想做的事情现在就应该去做，或者说现在就去为之奋斗，</p>
        <ul class="list">
           <li><div class="listdiv">个人主页</div><el-progress class="progress1" :percentage="70"></el-progress></li>
           <li><div class="listdiv">尝试做一个网页游戏</div><el-progress class="progress1" :percentage="0"></el-progress></li>
           <li><div class="listdiv">学习NLP，做一个聊天机器人</div><el-progress class="progress1" :percentage="0"></el-progress></li>
        </ul>
  </div>
</template>

<script>
export default {
  methods: {
      format(percentage) {
        return percentage === 100 ? '完成' : `${percentage}%`;
      }
    }
}
</script>

<style scoped>
@media screen {
  @media (max-width: 450px){
    .top{
    color: black;
    text-align: center;
    background-image: linear-gradient(to top, #d299c2 0%, #fef9d7 100%);
    opacity: .9;
    padding: 2%;
}
h1{
    font-family: 'alifont';
    /* margin-top: 1vh; */
    font-size: 1.4rem;
}
p{
  width: 80%;
  margin: auto;
  margin-top: 2%;
  font-size: 1.3vh;
}
.list {
  width: 70%;
  margin: auto;
  margin-top: 3%;
  list-style: none;
}
.list li{
  width: 70%;
  /* height: 5%; */
  margin: auto;
  /* margin-top: 1%; */
}
.listdiv{
  font-size: 1.3vh;
}
  }
  @media(min-width: 450px){
    .top{
    color: black;
    text-align: center;
    background-image: linear-gradient(to top, #d299c2 0%, #fef9d7 100%);
    opacity: .9;
    padding: 2%;
}
h1{
    font-family: 'alifont';
    /* margin-top: 1vh; */
    font-size: 1.4rem;
}
p{
  width: 80%;
  margin: auto;
  margin-top: 2%;
  font-size: .9rem;
}
.list {
  width: 70%;
  margin: auto;
  margin-top: 3%;
  list-style: none;
}
.list li{
  width: 70%;
  /* height: 5%; */
  margin: auto;
  /* margin-top: 1%; */
}
.listdiv{
  font-size: 1.3vh;
}
  }
  @media(min-width: 1400px){
    .top{
    color: black;
    text-align: center;
    background-image: linear-gradient(to top, #d299c2 0%, #fef9d7 100%);
    opacity: .9;
    padding: 2%;
}
h1{
    font-family: 'alifont';
    /* margin-top: 1vh; */
    font-size: 2vw;
}
p{
  width: 80%;
  margin: auto;
  margin-top: 2%;
  font-size: 1vw;
}
.list {
  width: 70%;
  margin: auto;
  margin-top: 3%;
  list-style: none;
}
.list li{
  width: 70%;
  /* height: 5%; */
  margin: auto;
  margin-top: 1%;
}
.listdiv{
  font-size: 1.3vh;
}

  }
}
</style>