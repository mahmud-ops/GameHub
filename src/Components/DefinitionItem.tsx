import { Box, Heading } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Props {
    term: string
    children: ReactNode | ReactNode[]
}

const DefinitionItem = ({term, children}:Props) => {
  return (
    <Box my={3}>
      <Heading color={'gray.500'} size={'lg'} as={'dt'}>{term}</Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default DefinitionItem;
