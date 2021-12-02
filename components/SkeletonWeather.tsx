import { Flex, Stack, Skeleton, Box, Heading, Text } from "@chakra-ui/react";

const SkeletonWeather = () => {
  return (
    <>
      <Stack spacing={6} p={5}>
        <Skeleton height="100px" rounded={10} />
        <Skeleton height="50px" rounded={10} />
      </Stack>
      <Stack spacing={5} p={5} backgroundColor="gray.200" rounded={10}>
        <Text color="gray.600" fontSize="xl" fontWeight="medium">
          <Skeleton height="30px" rounded={10} />
        </Text>
        <Text color="gray.600" fontSize="md" fontWeight="medium">
          <Skeleton height="30px" rounded={10} />
        </Text>
        <Text color="gray.600" fontSize="md" fontWeight="medium">
          <Skeleton height="30px" rounded={10} />
        </Text>
      </Stack>
    </>
  );
};

export default SkeletonWeather;
