export default {
    // Vue2中有inserted，没有mounted
    inserted(el) {
        const imgSrc = el.src
        el.src = ''
        //观察者
    const observer = new IntersectionObserver(
        ([{isIntersecting}])=>{
         if(isIntersecting){
            el.src = imgSrc
            observer.unobserve(el)
         }
    })
    observer.observe(el)
    }
}  