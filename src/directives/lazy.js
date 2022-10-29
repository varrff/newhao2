export default {
    // Vue2中有inserted，没有mounted
    inserted(el) {
        const imgSrc = el.src
        el.src = ''
        //实现图片看到时加载
        //观察者
    const observer = new IntersectionObserver(
        ([{isIntersecting}])=>{
         if(isIntersecting){
            el.src = imgSrc
            observer.unobserve(el)
         }
    })
    observer.observe(el)

    //想实现摄影部分延时加载的效果
    //主要是由于摄影模块图片量过大，突然的瞬时加载使得服务器无法快速反映导致卡顿
    // setTimeout(() => {
    //     el.src = imgSrc
    // }, 3000);
    // $nexttick(){
    //     el.src = imgSrc
    // }
    }
}  