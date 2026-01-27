import {
  Box,
  Card,
  CardBody,
  Heading,
  Text,
  Center,
} from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <Center minH="100vh">
      <Card
        mx={2}
        maxW="420px"
        w="full"
        boxShadow="xl"
        borderRadius="xl"
        transform="translateY(-10px)"
      >
        <CardBody textAlign="center">
          <Heading size="lg" mb={3}>
            Oops 😬
          </Heading>

          <Text color="white.600">
            {isRouteErrorResponse(error)
              ? "This page does not exist."
              : "An unexpected error occurred."}
          </Text>
        </CardBody>
      </Card>
    </Center>
  );
};

export default ErrorPage;
