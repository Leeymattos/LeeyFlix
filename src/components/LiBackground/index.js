import React, {useState, useEffect} from 'react'

export default function LiBackground(){
  const [Li, setLi] = useState([])
  useEffect(() => {
    const random = (min, max) => Math.random() * (max - min) + min

    const size = Math.floor(random(10, 120))
    const positionleft = random(1, 30)
    const positionright = random(60, 90)
    const delay = random(0.1, 5)

    const duration = random(12, 24)
    const sizeLi = Li.length
    if (sizeLi < 5) {
      setLi([...Li, (<li className='li-background' key={`${sizeLi}`} style={{
        width: `${size}px`, height: `${size}px`,
        left: `${positionleft}%`, animationDelay: `${delay}s`,
        animationDuration: `${duration}s`, opacity: '0',
        animationTimingFunction: `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`
      }}></li>)])
    }
    if (sizeLi >=5 && sizeLi <11 ) {
      setLi([...Li, (<li className='li-background' key={`${sizeLi}`} style={{
        width: `${size}px`, height: `${size}px`,
        left: `${positionright}%`, animationDelay: `${delay}s`,
        animationDuration: `${duration}s`, opacity: '0',
        animationTimingFunction: `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`
      }}></li>)])
    }
  }, [Li])
  return(
    <ul className='ul-background'>
          {Li}
        </ul>

  )
}