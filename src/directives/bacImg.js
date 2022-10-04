export default {
    inserted(el){
        // const css = 'ov'
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