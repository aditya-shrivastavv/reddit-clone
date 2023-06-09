import { Flex } from "@chakra-ui/react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const PageContent = ({ children }: Props) => {
  return (
    <Flex justify={"center"} p={"16px 0px"} border={"1px solid red"}>
      <Flex
        w={"95%"}
        justify={"center"}
        maxW={"860px"}
        border={"1px solid green"}
      >
        {/* LHS */}
        <Flex
          direction={"column"}
          width={{ base: "100%", md: "65%" }}
          mr={{ base: 0, md: 6 }}
          border={"1px solid blue"}
        >
          {children && children[0 as keyof typeof children]}
        </Flex>

        {/* RHS */}
        <Flex
          direction={"column"}
          display={{ base: "none", md: "flex" }}
          flexGrow={1}
          border={"1px solid orange"}
        >
          {children && children[1 as keyof typeof children]}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PageContent;
