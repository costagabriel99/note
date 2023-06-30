import { useState } from 'react'
import styled from 'styled-components'

import { Icons } from '../cards/Card'

const ColorContainer = styled.div`
  display: block;
  width: 575px;
  height: 46px;
  border-radius: 9px;
  border: 1px solid ${(props) => props.theme.inputBorder};
  background: ${(props) => props.theme.white};
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25);
  bottom: -50px;
  position: absolute;
`
const ChooseColor = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  padding: 5px;
`

const Color = styled.div`
  width: 35px;
  height: 36px;
  border-radius: 35px;
  content: '';
  cursor: pointer;
  background-color: ${(props) => {
    if (props.$BGcolor === 'lightBlue') return props.theme.lightBlue
    else if (props.$BGcolor === 'brightGreen') return props.theme.brightGreen
    else if (props.$BGcolor === 'yellow') return props.theme.yellow
    else if (props.$BGcolor === 'salmon') return props.theme.salmon
    else if (props.$BGcolor === 'rose') return props.theme.rose
    else if (props.$BGcolor === 'blue') return props.theme.blue
    else if (props.$BGcolor === 'pink') return props.theme.pink
    else if (props.$BGcolor === 'lightGreen') return props.theme.lightGreen
    else if (props.$BGcolor === 'lightOrange') return props.theme.lightOrange
    else if (props.$BGcolor === 'lightGrey') return props.theme.lightGrey
    else if (props.$BGcolor === 'darkGrey') return props.theme.darkGrey
    else if (props.$BGcolor === 'brown') return props.theme.brown
    else return props.theme.white
  }};
`
const SetColors = styled.div`
  position: relative;
`

export default function Options({ colors = [] }) {
  const [show, setShow] = useState(false)

  const handleClickColor = () => {
    setShow(!show)
    console.log('ChangeColor', show)
  }
  const handleClick = (onClick) => {
    setShow(false)
    onClick()
  }

  return (
    <SetColors>
      <Icons src="/color.svg" alt="changeColorbg" onClick={handleClickColor} $isChange={show} />
      {show ? (
        <ColorContainer>
          <ChooseColor>
            {colors.map((color, pos) => (
              <Color
                key={`Options-color-${pos}`}
                onClick={() => handleClick(color.onClick)}
                $BGcolor={color.optionColor}
              />
            ))}
          </ChooseColor>
        </ColorContainer>
      ) : (
        ''
      )}
    </SetColors>
  )
}
