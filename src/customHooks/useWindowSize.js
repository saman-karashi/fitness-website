import { useLayoutEffect , useState } from "react";

const useWindowSize =()=>{
const [width , setWidth] = useState();

useLayoutEffect(()=>{
setWidth(window.innerWidth)

},[])


return width
}

export default useWindowSize;