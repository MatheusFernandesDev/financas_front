import React, { FunctionComponent } from 'react'

import { Container } from './styles'

interface ButtonProps {
  title?: string; 
  action?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  children?: React.ReactNode;
}

const index: FunctionComponent<ButtonProps> = ({ title, action, children }) => {
  return (
    <Container onClick={action} >
      {children}
      <span>{title}</span>
    </Container>
  )
}

export default index;