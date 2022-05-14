import { useLayoutEffect , useState } from "react";

const useWindowSize =()=>{
const [width , setWidth] = useState();

useLayoutEffect(()=>{
const resizeHandler=window.addEventListener('resize' , (e)=>{
setWidth(e.target.innerWidth)
})

return window.removeEventListener('resize' ,resizeHandler)

},[])


return width
}

export default useWindowSize;