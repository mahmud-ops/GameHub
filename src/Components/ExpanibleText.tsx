import { Text } from "@chakra-ui/react"
import type { ReactNode } from "react"

interface Props {
    children: ReactNode
}

const ExpandibleText = ({children}: Props) => {
  return (
    <Text>
        {children}
    </Text>
  )
}

export default ExpandibleText