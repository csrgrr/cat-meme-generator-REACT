
import React, { useState, useEffect, useRef } from "react"

const CatMeme = () => {

  const [image, setImage] = useState(null)
  const canvas = useRef(null)
  const [topText, setTopText] = useState('')
  const [bottomText, setBottomText] = useState('')
  const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffbd00',
    color: '#390099'
  };
  
  const textStyle = {
    fontWeight: 'bolder',
    marginTop: '2%',
    marginBottom: '0px'
    
  };

  const imageStyle = {
    marginLeft: '8%'
  };
  const topStyle = {
    marginTop: '8%',
    backgroundColor: '#ff5400'
  };
  const bottomStyle = {
    marginBottom: '80%',
    marginTop: '7%',
    backgroundColor: '#ff5400'
  };

  useEffect(() => {
    const catImage = new Image();
    catImage.src = "https://thiscatdoesnotexist.com/"
    catImage.onload = () => setImage(catImage)
  }, [])

  useEffect(() => {
    if(image && canvas) {
      const ctx = canvas.current.getContext("2d")
      ctx.fillStyle = "black"
      ctx.fillRect(0, 0, 400, 2080)
      ctx.drawImage(image, (0) / 2, 0)

      ctx.font = "50px Times New Roman"
      ctx.fillStyle = "white"
      ctx.textAlign = "center"

      ctx.fillText(topText, (500 / 2), 50)
      ctx.fillText(bottomText, (500 / 2), 450)

    }
  }, [image, canvas, topText, bottomText])

  return (
    <div style={divStyle}>
      <h1>Random Cat for your memes!</h1>
      <h2>Refresh for another cat.</h2>

      <div style={imageStyle}>
        <canvas 
          ref={canvas}
          width={600}
          height={480}
        />
      </div>

      <div style={divStyle}>
        <p style={textStyle}>TOP TEXT</p>
        <input type="text"
          value={topText}
          onChange={e => setTopText(e.target.value)}
          style={topStyle}
        />
        <br />
        <p style={textStyle}>BOTTOM TEXT</p>
        <input type="text"
          value={bottomText}
          onChange={e => setBottomText(e.target.value)}
          style={bottomStyle}
        />
      </div>

    </div>
  )
}

export default CatMeme