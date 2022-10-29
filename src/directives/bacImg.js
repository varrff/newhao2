//这是实现摄影模块的背景图片被看见时触发放大效果
export default {
    inserted(el){
        const observer = new IntersectionObserver(
            ([{isIntersecting}])=>{
                if(isIntersecting){
                  setTimeout(()=>{
                    el.classList.add('ov')
                  },1000)
                }else{
                    el.classList.remove('ov')
                }
        })
        observer.observe(el)
    }
}