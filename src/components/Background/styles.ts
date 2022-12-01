import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
`

const move = keyframes`
  0% { 
    transform: translateY(0%)
    }
  50% { 
    transform: translateY(10%) 
    }
  100% {
    transform: translateY(0%) 
    }
`

const move1 = keyframes`
  0% { 
    transform: translateY(0%) rotate(40deg)
    }
  50% { 
    transform: translateY(20%) rotate(40deg)
    }
  100% {
    transform: translateY(0%) rotate(40deg)
    }
`

const move2 = keyframes`
  0% { 
    transform: translateY(0%) rotate(-18.28deg)
    }
  50% { 
    transform: translateY(20%) rotate(-18.28deg)
    }
  100% {
    transform: translateY(0%) rotate(-18.28deg)
    }
`

const move3 = keyframes`
  0% { 
    transform: translateY(0%)
    }
  50% { 
    transform: translateY(40%)
    }
  100% {
    transform: translateY(0%)
    }
`

const move4 = keyframes`
  0% { 
    transform: translateY(0%) rotate(-22deg)
    }
  50% { 
    transform: translateY(30%) rotate(-22deg)
    }
  100% {
    transform: translateY(0%) rotate(-22deg)
    }
`

const move5 = keyframes`
  0% { 
    transform: translateY(0%)
    }
  50% { 
    transform: translateY(-10%)
    }
  100% {
    transform: translateY(0%)
    }
`

const move6 = keyframes`
  0% { 
    transform: translateY(0%) rotate(22.64deg)
    }
  50% { 
    transform: translateY(20%) rotate(22.64deg)
    }
  100% {
    transform: translateY(0%) rotate(22.64deg)
    }
`

const BaseBlob = styled.div`
  position: absolute;
`

export const Blob = styled(BaseBlob)`
  border-radius: 100%;
  width: 200px;
  height: 200px;
  left: 50%;
  top: -15%;
  background: linear-gradient(61.97deg, #fa828b 28.2%, #fee040 82.03%);
  animation: ${move} 10s linear infinite;
  @media screen and (min-width: 1024px) {
    width: 400px;
    height: 400px;
    left: 65%;
    top: -40%;
  }
`

export const Blob1 = styled(BaseBlob)`
  background: linear-gradient(70.61deg, #fe64ad 20.06%, #fa5b76 73.78%);
  border-radius: 15px;
  height: 85px;
  width: 85px;
  top: 5%;
  left: 15%;
  animation: ${move1} 10s linear infinite;
  @media screen and (min-width: 1024px) {
    height: 170px;
    width: 170px;
    top: 5%;
    left: 30%;
    border-radius: 30px;
  }
`

export const Blob2 = styled(BaseBlob)`
  background: linear-gradient(161.88deg, #fee040 12.33%, #faa56f 86.51%);
  border-radius: 15px;
  width: 75px;
  height: 75px;
  top: 25%;
  left: -10%;
  animation: ${move2} 15s linear infinite;
  @media screen and (min-width: 1024px) {
    width: 150px;
    height: 150px;
    top: 30%;
    left: -5%;
    border-radius: 30px;
  }
`

export const Blob3 = styled(BaseBlob)`
  background: linear-gradient(136.82deg, #5bf6d6 28.61%, #67c8fc 78.18%);
  border-radius: 100%;
  width: 205px;
  height: 205px;
  bottom: -5%;
  left: -20%;
  animation: ${move3} 11s linear infinite;
  @media screen and (min-width: 1024px) {
    width: 410px;
    height: 410px;
    top: 60%;
    left: -3%;
  }
`

export const Blob4 = styled(BaseBlob)`
  background: linear-gradient(89.67deg, #af5efb 6.93%, #ee69ff 97.22%);
  border-radius: 15px;
  width: 100px;
  height: 100px;
  bottom: 20%;
  left: 40%;
  animation: ${move4} 12s linear infinite;
  @media screen and (min-width: 1024px) {
    width: 200px;
    height: 200px;
    top: 70%;
    left: 40%;
    border-radius: 30px;
  }
`

export const Blob5 = styled(BaseBlob)`
  background: linear-gradient(49.32deg, #fc5e81 34.85%, #fe68c2 78.26%);
  border-radius: 100%;
  width: 200px;
  height: 200px;
  bottom: -10%;
  left: 70%;
  animation: ${move5} 10s linear infinite;
  @media screen and (min-width: 1024px) {
    width: 400px;
    height: 400px;
    top: 70%;
    left: 70%;
  }
`

export const Blob6 = styled(BaseBlob)`
  background: linear-gradient(180deg, #5bf6d6 0%, #67c8fc 100%);
  border-radius: 15px;
  width: 95px;
  height: 95px;
  top: 45%;
  right: -10%;
  animation: ${move6} 10s linear infinite;
  @media screen and (min-width: 1024px) {
    width: 190px;
    height: 190px;
    top: 30%;
    right: -5%;
    border-radius: 30px;
  }
`
