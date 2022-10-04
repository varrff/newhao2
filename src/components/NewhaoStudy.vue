<template>
  <div>
    <h1>我的学习日志</h1>
    <span style="font-size:22px">/暂未上线</span>
    <p>从未找到过如此热爱的东西——编程，也许是能把自己脑海里的奇思妙想通过编程实现，
        很庆幸处在前端如此繁盛的时代，也希望为推动中国数字化贡献出自己的一份贡献
    </p>
    <ul>
        <li><a href="">
            <button data-text="Awesome" class="button">
    <span class="actual-text">&nbsp;html&nbsp;</span>
    <span class="hover-text" aria-hidden="true">&nbsp;html&nbsp;</span>
            </button>
        </a></li>

        <li><a href=""><button data-text="Awesome" class="button">
    <span class="actual-text">&nbsp;CSS&nbsp;</span>
    <span class="hover-text" aria-hidden="true">&nbsp;CSS&nbsp;</span>
</button>
</a></li>
        <li><a href=""><button data-text="Awesome" class="button">
    <span class="actual-text">&nbsp;JAVASCRIPT&nbsp;</span>
    <span class="hover-text" aria-hidden="true">&nbsp;JAVASCRIPT&nbsp;</span>
</button></a></li>
<li><a href=""><button data-text="Awesome" class="button">
    <span class="actual-text">&nbsp;AXIOS&nbsp;</span>
    <span class="hover-text" aria-hidden="true">&nbsp;AXIOS&nbsp;</span>
</button></a></li>
<li><a href=""><button data-text="Awesome" class="button">
    <span class="actual-text">&nbsp;VUE&nbsp;</span>
    <span class="hover-text" aria-hidden="true">&nbsp;VUE&nbsp;</span>
</button></a></li>
    </ul>
  </div>
</template>

<script>
export default {
name:'NewhaoStudy'
}
</script>

<style scoped>
div{
    color: #fff;
    text-align: center;
    /* background-image: linear-gradient( 135deg, #FFCF71 10%, #2376DD 100%); */
    background: rgba(8, 8, 8, 0.6);
    /* background: rgba(19, 17, 17, 0.6); */
}
ul{
    margin: 5%;
    margin-top: 15%;
    display: flex;
    flex-direction: column;
    list-style: none;
}
ul li{
    width: 15%;
    font-size: 1vw;
    margin-left: 5%;
    margin-top: 2%;
    
}
li:hover p{
cursor:pointer;
font-size: 4rem;
}
h1{
    margin-top: 5%;
    font-size: 2.2vw;
    background-image: linear-gradient( 135deg, #79F1A4 10%, #0E5CAD 100%);
     background-clip: text; 
     -webkit-background-clip: text; 
     color: transparent;
}
p{
    font-size: 1vw;
    width: 85%;
    margin: auto;
    margin-top: 3%;
}
/* From uiverse.io by @satyamchaudharydev */
/* === removing default button style ===*/
.button {
  margin: 0;
  background: transparent;
  padding: 0;
  border: none;
}

/* button styling */
.button {
  --border-right: 6px;
  --text-stroke-color: rgba(255,255,255,0.6);
  --animation-color: #37FF8B;
  --fs-size: 1.7em;
  letter-spacing: 3px;
  text-decoration: none;
  font-size: var(--fs-size);
  font-family: "Arial";
  position: relative;
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 1px var(--text-stroke-color);
  cursor:pointer;
}
/* this is the text, when you hover on button */
.hover-text {
  position: absolute;
  box-sizing: border-box;
  content: attr(data-text);
  color: var(--animation-color);
  width: 0%;
  inset: 0;
  border-right: var(--border-right) solid var(--animation-color);
  overflow: hidden;
  transition: 0.5s;
  -webkit-text-stroke: 1px var(--animation-color);
}
/* hover */
.button:hover .hover-text {
  width: 100%;
  filter: drop-shadow(0 0 23px var(--animation-color))
}
</style>