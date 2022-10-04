<template>
  <div id="app">
    <NewhaoTop id="NewhaoTop"/>
    <NewIntroduce  id="NewIntroduce"/>
    <!-- <NewhaoMyphoto  id="NewhaoMyphoto"/> -->
    <NewhaoGuanzhu  id="NewhaoGuanzhu"/>
    <NewhaoStudy id="NewhaoStudy"/>
    <NewhaoTodos id="NewhaoTodos"/>
    <NewhaoLianxi id="NewhaoLianxi"/>
    <NewhaoSheying id="Newhaosheying"/>
    <div class="beian">
        <a href="https://beian.miit.gov.cn/?spm=a2c4g.11174386.n2.3.21c361dbUY0BG9">津ICP备2022002650号</a><br>
        <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=12010402001618"><img src="images/gongan.png"/>津公网安备 12010402001618号</a>
      </div>
  </div>
</template>

<script>
import NewhaoTop from './components/NewhaoTop'
import NewIntroduce from './components/NewIntroduce'
// import NewhaoMyphoto from './components/NewhaoMyphoto'
import NewhaoGuanzhu from './components/NewhaoGuanzhu'
import NewhaoLianxi from './components/NewhaoLianxi'
import NewhaoTodos from './components/NewhaoTodos'
import NewhaoStudy from './components/NewhaoStudy'
import NewhaoSheying from './components/NewhaoSheying'
export default {
  name: 'App',
  components: {
    NewhaoTop,
    NewIntroduce,
    // NewhaoMyphoto,
    NewhaoGuanzhu,
    NewhaoLianxi,
    NewhaoStudy,
    NewhaoSheying,
    NewhaoTodos
}
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  background-color: #1f2126;
  box-sizing: border-box;
}
#app{
width: 80%;
margin: auto;
display: grid;
grid-template-areas: 'a a a'
                     'b b c'
                     'd d c'
                     'd d c'
                     'f f g'
                     'e e e'
                     'bei bei bei'
;
row-gap: 2vh;
/* flex-wrap: wrap; */
font-size:32px;
justify-items: center;
justify-content: space-evenly;
/* justify-content: space-around; */
/* align-items: flex-start; */
}

#NewhaoTop{
  width: 140%;
  height: 80vh;
  grid-column: 1/4;
  grid-area: a;
  margin-top: 1vh;
  background-color: #15171a;
  overflow: hidden;
  animation: kaitou 6s forwards;
}
#NewIntroduce{
  width: 50vw;
  height: 30vh;
  grid-area: b;
  /* margin-top: 1vh; */
  font-size: 1.5vw;
  padding: 1vw;
  border-radius: 15px;
  overflow: hidden;
  background-color: #15171a; 
}
#NewhaoGuanzhu{
  grid-area: d;
  width: 50vw;
  height: 50vh;
  border-radius: 15px;
}
#NewhaoLianxi{
  grid-area: g;
  width: 28vw;
  height: 45vh;
  border-radius: 15px;
}
#NewhaoStudy{
  grid-area: c;
  width: 28vw;
  height: 82vh;
  border-radius: 15px;
}
#Newhaosheying{
  grid-area: e;
  margin-top: 15vh;
  /* width: 125%; */
  width: 125%;
  height: 100vh;
}
#NewhaoTodos{
  grid-area: f;
  width: 50vw;
  height: 45vh;
  border-radius: 15px;
}
.beian {
  grid-area: bei;
  margin: auto;
  text-align: center;
  }
  .beian a {
  text-decoration: none;
  color: white;
  font-size: .5rem;
  }
  .beian p {
    text-decoration: none;
    color: black;
    font-size: .5rem;
    }
    .beian img {
     display: inline-block;
      }
@keyframes kaitou{
  to{
    width: 100%;
    border-radius: 15px;
  }
}
</style>
