import  {useRef,useState} from 'react';

function StopWatch() {


  const timerRef = useRef(null);
  const [seconds,setSeconds] = useState(0);


function start(){
if(!timerRef.current){
      timerRef.current = setInterval(()=>{
      setSeconds(prev => prev +1)
    },1000);
    
}  
  }
  function stop(){
clearInterval(timerRef.current);
    timerRef.current = null;
  }

function restart(){
  clearInterval(timerRef.current);
    timerRef.current = null;
    setSeconds(0);

}

  return (
    <div align='center'>
      <font face='Comic Sans MS' color='hotPink' size='20'>Stop Watch:-</font>

      <h1>{seconds}</h1> <br /><br />
      <button onClick={start}>Start</button> &nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={stop}>Stop</button>  &nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={restart}>Resart</button>  &nbsp;&nbsp;&nbsp;&nbsp;

    </div>
  )
}
export default StopWatch