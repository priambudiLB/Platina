import React from "react";
import nookies from "nookies";
import { verifyIdToken } from "../services/firebase/firebaseAdmin";
import firebaseClient from "../services/firebase/firebaseClient";
import firebase from "firebase/app";
import { Box, Flex, Text, Heading, Button } from "@chakra-ui/core";
function Authenticated({ session }) {
  firebaseClient();
  if (session) {
    return (
      <Flex>
        <Box w={500} p={4} my={12} mx="auto">
          <Heading as="h2" mb={12} textAlign="center">
            PROFILE
          </Heading>
          <Box>
            <Text textAlign="center">{session}</Text>
          </Box>
          <Box my={12} mx="auto" width="500px">
            <Button
              variant="solid"
              marginLeft="38%"
              variantColor="red"
              onClick={async () => {
                await firebase.auth().signOut();
                window.location.href = "/";
              }}
            >
              Sign out
            </Button>
          </Box>
        </Box>
      </Flex>
    );
  } else {
    return (
      <Box>
        <Text>loading</Text>
      </Box>
    );
  }
}

export async function getServerSideProps(context) {
  try {
    const cookies = nookies.get(context);
    const token = await verifyIdToken(cookies.token);
    const { uid, email } = token;
    return {
      props: {
        session: `Email User: ${email}, User ID: ${uid}.`,
      },
    };
  } catch (err) {
    context.res.writeHead(302, { Location: "/login" });
    context.res.end();
    return { props: {} };
  }
}
export default Authenticated;
