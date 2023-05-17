import { Flex } from "@chakra-ui/react";
import LogSignButtons from "./LogSignButtons";

export default function NavMenu() {
  return (
    <>
      {/* <AuthModal /> */}
      <Flex justify={"center"} align={"center"}>
        <LogSignButtons />
      </Flex>
    </>
  );
}