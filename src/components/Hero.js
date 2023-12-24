import React from 'react'
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/questions");
  }
  return (
    <main className='main'>
      <div className='container start'>
        <div className='video'>
          {/* <video Í>
            <source src="https://40parables-assets.s3.amazonaws.com/bleat-AI-PulseCheck-Intro.mp4" type="video/mp4"  autoplay/>
          </video> */}
          <img alt="video thumbnail" class="thumbnail" src="https://assessment.churchtechtoday.com/static/media/video-thumbnail.e39d4546ab24c71915fc.png" style={{ opacity: "1" }}></img>
          <img alt="play button" class="playbtn" src="https://i.ibb.co/MsKtgjJ/download.png"></img>
        </div>
        <div style={{ backgroundColor: "rgb(51, 51, 51)", height: "10px" }}></div>
        <div className='intro'>
          <h1 style={{ marginBottom: "0px" }}><span style={{ color: "rgb(110, 12, 249)" }}>Is your church embracing impact</span> or AI* hesitant?</h1>
          <ol type="1" class="intro-points-list" style={{ margin: "25px auto 25px 0px" }}>
            <li>Take this 3-minute assessment</li>
            <li>Invite your team to take it too after you do</li>
            <li>View everyone's results on 1 dashboard</li>
            <li>Align on the best next step for your church's approach to AI</li>
          </ol>
          <div class="completion">
            <button style={{ cursor: "pointer" }} onClick={handleClick} class="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root cta css-1ujsas3" tabindex="0" type="button">GET STARTED<span class="MuiTouchRipple-root css-w0pj6f"></span></button><div class="time-estimate"><div class="img-container"><img class="clock-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGGSURBVHgB7VXdbYMwED5A/Ei8sEHpBGWDjpB0AzZoNkg7QbNBOwJMEGUDNiidgD4ikKB36V1lVTbGvLafdLFjf77PZ3xngH84wLPMZ2EYlp7n3WO/QMt5vEFr53mux3F8g60g52hdFEWzxd6JC67ARS/iBPtntEOSJLkyX5BjElDEjqsFiMzOuziODzY+cSRi2pyND7y7qwDtFlaCI5Oj3S+SJXxTBHJ8ujlawyId/s1gKQoSAvMmjCLs48ycUh33pYPXdEctXstn2I6afe21IvCdB4QGNiIIgoq7d1qCXMUFH9bjMvnxwRF4FIVr8qkiLf1g0t0Yyb5/i02NQq+6TJdrj9+1MYk0THgwifR93w7DULLYRSN2FcHxD60IOr9QO03TDizQiOXs/Mi+KtPaTLJ2TTn5DVz7aMszIUpCOpUVRKHUr9LKRtJJhNZERBEodesJ1kIR+nkv1Mio7FP5lzLCEZzAFZr3QmscxWLltT2/wM8v3Tj1+W3RGnp+0zStPhHwJ/AFUmOfRi0p4R0AAAAASUVORK5CYII=" alt="estimated time" /></div><span>3 min</span></div>
          </div>
          <p class="footnote">*Artificial Intelligence</p>
          <p class="disclaimer"><span>If you aren't a Senior/Lead/Executive Pastor,</span> please ask one of them on your team to first take this test - ctt1.bleat.church. That test's result will generate a team link so you and other team members can then take this same test afterward as a team.</p>
        </div>
      </div>
    </main>
  )
}

export default Hero