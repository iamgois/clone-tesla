import react from 'react'

import { Container } from './styles'

interface Props{
    children: any
}

const ModelsWrapper: React.FC <Props> = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default ModelsWrapper