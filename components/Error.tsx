import { Alert, AlertIcon } from "@chakra-ui/react";

const Error = () => {
  return (
    <>
      <Alert status="error" my={5} p={5} rounded={10}>
        <AlertIcon />
        Not Found !
      </Alert>
    </>
  );
};

export default Error;
