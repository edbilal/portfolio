import React , { useState , useEffect , memo } from 'react' ;
import set_scroll_snapping , { dis_fun } from '../../lib/scroll-snap' ;
import './load.css'
import ico_1 from './ellipse.png' ;
import ico_2 from './vector.png' ;

export function Loading(){
  return(
    <div className='_loading' >
      <img src={ico_1} />
      <img src={ico_2} />
    </div>
  )
}


function Loads(props){
  const [ is_visible , set_is_visible ] = useState(false) ;

  useEffect(()=>{
    setTimeout(()=>{
      set_is_visible(true) ;
    },5000)
  },[])
  
  useEffect(() => {
    if( is_visible ){
      set_scroll_snapping( document.body.parentNode , document.querySelectorAll('#center') )
    }
    return () => {
      dis_fun(document.body.parentNode)
    }
  })
  
  return is_visible ? props.children : (
    <div className='_load' style={{ height : '100' + props.h }} >
      <Loading />
    </div>
  )
}


export default memo(Loads)
