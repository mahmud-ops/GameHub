import { Button, Text } from "@chakra-ui/react";
import { useState, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ExpandibleText = ({ children }: Props) => {
  const limit = 300;
  const [isExpanded, setIsExpanded] = useState(false);

  if (typeof children !== "string") return <Text>{children}</Text>;

  const isLong = children.length > limit;
  const text = isExpanded ? children : children.slice(0, limit) + " .... ";

  return (
    <Text>
      {text}
      <br />
      {isLong && (
        
        <Button
          my={3}
          variant={"ghost"}
          colorScheme="yellow"
          size={"xs"}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? " Show less" : "Show more"}
        </Button>
      )}
    </Text>
  );
};

export default ExpandibleText;
