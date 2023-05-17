import { authModalState } from "@/atoms/authModalAtom";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useSetRecoilState } from "recoil";

export default function Login() {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = () => {
    console.log("first");
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        required
        name="email"
        placeholder="email"
        type="email"
        mb={2}
        onChange={handleChange}
        fontSize={"10pt"}
        bgColor={"gray.50"}
        _placeholder={{ color: "gray.500" }}
        _hover={{
          bgColor: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        _focus={{
          outline: "none",
          bgColor: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
      />
      <Input
        required
        name="password"
        placeholder="password"
        type="password"
        mb={2}
        onChange={handleChange}
        fontSize={"10pt"}
        bgColor={"gray.50"}
        _placeholder={{ color: "gray.500" }}
        _hover={{
          bgColor: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        _focus={{
          outline: "none",
          bgColor: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
      />
      <Input
        required
        name="confirmPassword"
        placeholder="confirm password"
        type="password"
        mb={2}
        onChange={handleChange}
        fontSize={"10pt"}
        bgColor={"gray.50"}
        _placeholder={{ color: "gray.500" }}
        _hover={{
          bgColor: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        _focus={{
          outline: "none",
          bgColor: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
      />
      <Button type="submit" w={"100%"} h={"36px"} marginY={2}>
        Sign Up
      </Button>
      <Flex fontSize={"9pt"} justify={"center"} align={"center"}>
        <Text mr={2}>Already a redditor?</Text>
        <Button
          variant={"unstyled"}
          color={"blue.500"}
          fontWeight={700}
          h={"fit-content"}
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              window: "login",
            }))
          }
        >
          LOG IN
        </Button>
      </Flex>
    </form>
  );
}
