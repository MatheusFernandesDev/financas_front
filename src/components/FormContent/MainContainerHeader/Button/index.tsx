import React, { useState, useEffect } from 'react'

import { Container, ReactTooltipStyled } from './styles'

interface ButtonProps {
  title?: any;
	newFirst?: boolean | false;
	reloadFirst?: boolean | false;
	editFirst?: boolean | false;
	saveFirst?: boolean | false;
	returnFirst?: boolean | false;
  action?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  title,
  newFirst,
  reloadFirst,
  editFirst,
  saveFirst,
  returnFirst,
  action,
  children
}) => {
  const [classe, setClasse] = useState<string>("");

  useEffect(() => { 
    if(saveFirst === true) {
      setClasse("saveFirst")
    } else if(editFirst === true) {
      setClasse("editFirst")
    } else if(newFirst === true) {
      setClasse("newFirst")
    } else if(returnFirst === true) {
      setClasse("returnFirst")
    } else if(reloadFirst === true) {
      setClasse("reloadFirst")
    } else {
      setClasse("")
    }
  }, [saveFirst, editFirst, newFirst, returnFirst, reloadFirst])
  
  return (
    <Container className={classe} onClick={action} >
      { children }
      <span>{title}</span>
    </Container>
  )
}

export default Button;