import { Stack, Skeleton } from "@chakra-ui/react";

const SkeletonWeather = () => {
  return (
    <>
      <Stack spacing={6} py={6} px={3}>
        <Skeleton height="100px" rounded={10} />
        <Skeleton height="50px" rounded={10} />
      </Stack>
      <Stack spacing={5} p={5} backgroundColor="gray.200" rounded={10}>
        <Skeleton height="30px" rounded={10} />
        <Skeleton height="30px" rounded={10} />
        <Skeleton height="30px" rounded={10} />
      </Stack>
    </>
  );
};

export default SkeletonWeather;
