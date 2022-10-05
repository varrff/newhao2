<template>
    <div>
      <!-- <video autoplay muted preloa >
          <source ref="video" src="../assets/TopVideo.mp4"/>
      </video> -->
      <img src="../../public/images/top.png" alt="">
      <h1 id="miaoshuzi" v-show="isMiaoshu"> <i>欢迎描述你所认识的我</i></h1>
      <div id="biaoqian">
        <span v-show="list" v-for="p of biaoqianData" :key="p.id">
          {{p.value}}
        </span>
      </div>
      <button @click="miaoshu" v-show="!shuru">+</button>
      <div id="el-input"><el-input v-if="shuru" @blur="quxiao"  ref='inp' @keyup.enter.native="yanzheng" v-model="miaoshuValue" :placeholder="tixing"></el-input></div>
      <p id="tixing" v-show="!shuru">如果认识我，可以在此添加新的标签></p>
    </div>
  </template>
  <script>
  export default {
  name:'NewhaoTop',
  data(){
    return{
      isMiaoshu:false,
      shuru:false,
      isYanzheng:false,
      miaoshuValue:'',
      tixing:'请先输入我的名字，回车确定',
      biaoqianData:{},
      list:false
    }
  },
  methods:{
      quxiao(){
        this.shuru = false
      },
       miaoshu(){
        this.shuru = true
        this.$nextTick(()=>{
          this.$refs.inp.focus()
        })
       },
       //验证是否正确
       yanzheng(){
        //如果上次验证正确则进入if语句输入标签
        if(this.isYanzheng){
            this.postNewBiaoqian(this.miaoshuValue)
            this.shuru = false
            this.isYanzheng = false
            this.miaoshuValue = ''
            this.status = 0
            this.tixing = '请先输入我的名字，回车确定'
            return
        }
        //验证是否正确并保存结果
        if(this.miaoshuValue == '吴家浩'){
            this.isYanzheng = true
            this.miaoshuValue = ''
            this.tixing = '请输入关于我的标签'
            this.$message({
              type:"success",
              message:"验证成功，接下来请输入想添加的标签，回车确定"
            })
          }else{
            this.$message({
              type:"error",
              message:"验证失败，请输入我正确的名字哦"
            })
            this.miaoshuValue = ''
            this.shuru = false
          }
       },
       //获取标签的数据函数
       getbiaoqiandata(){
      this.$axios({
      method: "get",
      url: "http://114.116.123.160:3000/biaoqian/get", // 接口地址
      data: {}
    })
      .then(response => {   //成功后执行的函数
        this.biaoqianData = response.data
      })
      .catch(error => console.log(error, "error")); // 失败的返回
       },
       //页面生成标签
      gengxinBiaoqian(){
        const biaoqian = document.querySelector('#biaoqian').querySelectorAll('span')
        biaoqian.forEach((value,index)=>{
          this.list = true
          value.style.left = parseFloat(this.biaoqianData[index].x)+'%'
          value.style.top = parseFloat(this.biaoqianData[index].y)+'%'
          value.setAttribute('class','animate__animated animate__zoomIn')
        })
      },
      //提交新的标签
      postNewBiaoqian(value){
        this.$axios({
          method:"post",
          url:`http://114.116.123.160:3000/biaoqian/add?value=${value}`,
          data:{}
        }).then(response => {// 成功的返回      
            if(parseInt(response.data.status)){
              this.$message({
              type:"success",
              message:"添加成功"
            })
            }else{
              this.$message({
              type:"error",
              message:"添加失败，服务器响应失败"
            })}
            this.getbiaoqiandata()
            // //暂时无法解决ajax异步调用后，值还未更新，同步执行的函数就已经执行的问题，只能先用setTimeout
            //优秀解决办法Promise，但我不会555

            setTimeout(()=>{
              this.gengxinBiaoqian()
            },1000)
      })
      .catch(error => {
        console.log(error, "error")// 失败的返回
        this.$message({
              type:"error",
              message:"添加失败，服务器响应失败"
            })
    
    });
      }
  },
  mounted(){
    // document.querySelector('video').addEventListener('ended',()=>{
      setTimeout(()=>{
          this.isMiaoshu = true
          document.querySelector('#miaoshuzi').setAttribute('class','animate__animated animate__zoomIn')
          // document.querySelector('img').setAttribute('display','none')
          this.gengxinBiaoqian()
          },4500)
    //  })
     this.getbiaoqiandata()
  },
  beforeUpdate(){
  }
  }
  </script>
  <style leng="less" scoped>
 @media screen {
  @media(max-width: 1000px){
    div{
      position: relative;
      color: #fff;
  }
  h1{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      width: 70%;
      text-align: center;
      letter-spacing: .1vw;
      color: #fff;
  }
  #kaitouzi{
      background-image: linear-gradient(75deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 33.33%, rgba(255, 255, 255, 0) 66.67%, rgba(255, 255, 255, 0) 100%);
      background-size: 300% 100%;
      background-position-x: 100%;
      background-clip: text; 
      -webkit-background-clip: text; 
      color:transparent;
      animation: 3s kaitouzi ease-in-out forwards;
      animation-delay: 7s;
      font-size: 2vw;
  }
  #miaoshuzi{
     /* font-family: 'alixuanku'; */
     /* font-family: Georgia, 'Times New Roman', Times, serif; */
     font-weight: 200;
     font-size: 3vw;
     background-image: linear-gradient( 135deg, #79F1A4 10%, #0E5CAD 100%);
     background-clip: text; 
     -webkit-background-clip: text; 
     color: transparent;
  }
  video{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      margin: 0 auto;
      width: 100%;
  }
  img {
    position: absolute;
      top: 45%;
      left: 50%;
      transform: translate(-50%,-50%);
      margin: 0 auto;
      width: 95%;
      animation: 2s imgtop ease-in-out forwards;
      animation-delay: 2s;
      opacity: 1;
      /* transform: scale(0); */
  }
  button {
    display: block;
    width: 50px;
    font-weight: 200;
    color: #fff;
    height: 50px;
    position:absolute;
    bottom: 5vh;
    right: 5vw;
    font-size: 5vh;
    background-color: transparent;
    border: none;
    z-index: 2;
    transition:all 1s;
    animation: 5s jiantou-op forwards;
    opacity: 0;
    animation-delay: 4.5s;
    cursor:pointer;
  }
  #tixing{
  font-size: .7vw;
  position:absolute;
  bottom: 5.3vh;
  right: 7vw;
  animation: 5s tixing-op infinite;
  opacity: 0;
  animation-delay: 11s;
}
#el-input{
  position: absolute;
  bottom: 6vh;
  right: 9vh;
  width: 20vh;
  height: 3vh;
}
#biaoqian{
  position: relative;
  width: 100%;
  height: 100%;
  font-size: .3rem;
}
#biaoqian span{
  position: absolute;
  font-size: .3rem;
  transition: all 1s ease-in-out;
}
  }
  @media (min-width:1000px) {
    div{
      position: relative;
      color: #fff;
  }
  h1{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      width: 70%;
      text-align: center;
      letter-spacing: .1vw;
      color: #fff;
  }
  #kaitouzi{
      background-image: linear-gradient(75deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 33.33%, rgba(255, 255, 255, 0) 66.67%, rgba(255, 255, 255, 0) 100%);
      background-size: 300% 100%;
      background-position-x: 100%;
      background-clip: text; 
      -webkit-background-clip: text; 
      color:transparent;
      animation: 3s kaitouzi ease-in-out forwards;
      animation-delay: 7s;
      font-size: 3vw;
  }
  #miaoshuzi{
     /* font-family: 'alixuanku'; */
     /* font-family: Georgia, 'Times New Roman', Times, serif; */
     font-weight: 200;
     font-size: 1.3rem;
     background-image: linear-gradient( 135deg, #79F1A4 10%, #0E5CAD 100%);
     background-clip: text; 
     -webkit-background-clip: text; 
     color: transparent;
  }
  video{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      margin: 0 auto;
      width: 100%;
  }
  img {
    position: absolute;
      top: 45%;
      left: 50%;
      transform: translate(-50%,-50%);
      margin: 0 auto;
      width: 95%;
      animation: 2s imgtop ease-in-out forwards;
      animation-delay: 2s;
      opacity: 1;
      /* transform: scale(0); */
  }
  button {
    display: block;
    width: 50px;
    font-weight: 200;
    color: #fff;
    height: 50px;
    position:absolute;
    bottom: 5vh;
    right: 5vw;
    font-size: 5vh;
    background-color: transparent;
    border: none;
    z-index: 2;
    transition:all 1s;
    animation: 5s jiantou-op forwards;
    opacity: 0;
    animation-delay: 4.5s;
    cursor:pointer;
  }
  #tixing{
  font-size: .7vw;
  position:absolute;
  bottom: 5.3vh;
  right: 7vw;
  animation: 5s tixing-op infinite;
  opacity: 0;
  animation-delay: 11s;
}
#el-input{
  position: absolute;
  bottom: 6vh;
  right: 9vh;
  width: 20vh;
  height: 3vh;
}
#biaoqian{
  position: relative;
  width: 100%;
  height: 100%;
  font-size: 1.2rem;
}
#biaoqian span{
  position: absolute;
  transition: all 1s ease-in-out;
}
  }
  @media (min-width:1400px) {
    div{
      position: relative;
      color: #fff;
  }
  h1{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      width: 70%;
      text-align: center;
      letter-spacing: .1vw;
      color: #fff;
  }
  #kaitouzi{
      background-image: linear-gradient(75deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 33.33%, rgba(255, 255, 255, 0) 66.67%, rgba(255, 255, 255, 0) 100%);
      background-size: 300% 100%;
      background-position-x: 100%;
      background-clip: text; 
      -webkit-background-clip: text; 
      color:transparent;
      animation: 3s kaitouzi ease-in-out forwards;
      animation-delay: 7s;
      font-size: 2vw;
  }
  #miaoshuzi{
     /* font-family: 'alixuanku'; */
     /* font-family: Georgia, 'Times New Roman', Times, serif; */
     font-weight: 200;
     font-size: 2vw;
     background-image: linear-gradient( 135deg, #79F1A4 10%, #0E5CAD 100%);
     background-clip: text; 
     -webkit-background-clip: text; 
     color: transparent;
  }
  video{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      margin: 0 auto;
      width: 100%;
  }
  img {
    position: absolute;
      top: 45%;
      left: 50%;
      transform: translate(-50%,-50%);
      margin: 0 auto;
      width: 95%;
      animation: 2s imgtop ease-in-out forwards;
      animation-delay: 2s;
      opacity: 1;
      /* transform: scale(0); */
  }
  button {
    display: block;
    width: 50px;
    font-weight: 200;
    color: #fff;
    height: 50px;
    position:absolute;
    bottom: 5vh;
    right: 5vw;
    font-size: 5vh;
    background-color: transparent;
    border: none;
    z-index: 2;
    transition:all 1s;
    animation: 5s jiantou-op forwards;
    opacity: 0;
    animation-delay: 4.5s;
    cursor:pointer;
  }
  #tixing{
  font-size: .7vw;
  position:absolute;
  bottom: 5.3vh;
  right: 7vw;
  animation: 5s tixing-op infinite;
  opacity: 0;
  animation-delay: 11s;
}
#el-input{
  position: absolute;
  bottom: 6vh;
  right: 9vh;
  width: 20vh;
  height: 3vh;
}
#biaoqian{
  position: relative;
  width: 100%;
  height: 100%;
  font-size: 1.4rem;
}
#biaoqian span{
  position: absolute;
  transition: all 1s ease-in-out;
}
  }
 }
  @keyframes kaitouzi {
    50%{
      background-position-x: 0%;
    }
    100%{
      background-position-x: 100%;
    }
  }
    @keyframes videoblack{
      to{
          opacity: .5;
      }
    }
    @keyframes jiantou-op{
      to{
        opacity: 1;
      }
    }
    @keyframes tixing-op{
      from{
        right: 8vw;
        opacity: 1;
        transform: translate();
      }
    }
    @keyframes imgtop {
      100%{
        opacity: 0;

      }
    }

    
  </style>