import React, { useState } from "react";
import Link from "next/link";
import firebaseClient from "../services/firebase/firebaseClient";
import firebase from "firebase/app";
import "firebase/auth";
import { Box, Flex, Input, FormControl, FormLabel, FormHelperText, FormErrorMessage, Stack, Button, Heading, useToast } from "@chakra-ui/core";

export default function Register({ props }) {
  firebaseClient();
  const toast = useToast();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Flex>
      <Box w={500} p={4} my={12} mx="auto">
        <Heading textAlign="center" as="h2">
          Register
        </Heading>
        <FormControl>
          <FormLabel htmlFor="username">Username</FormLabel>
          <Input onChange={(e) => setUsername(e.target.value)} type="text" id="username" value={username} aria-describedby="username-helper-text" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input onChange={(e) => setEmail(e.target.value)} type="email" id="emailAddress" value={email} aria-describedby="email-helper-text" />
          <FormHelperText id="email-helper-text">We&apos;ll never share your email.</FormHelperText>
        </FormControl>

        <FormControl isRequired>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input onChange={(e) => setPassword(e.target.value)} type="password" id="password" value={password} aria-describedby="password-helper-text" />
        </FormControl>

        <Stack justify="center" mt={6} isInline spacing={10}>
          <Button
            minWidth="40%"
            variant="solid"
            isDisabled={email === "" || password === ""}
            onClick={async () => {
              await firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(function (firebaseUser) {
                  window.location.href = "/";
                })
                .catch(function (error) {
                  const message = error.message;
                  toast({
                    title: "An error occurred.",
                    description: message,
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                  });
                });
            }}
          >
            Create account
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
}
