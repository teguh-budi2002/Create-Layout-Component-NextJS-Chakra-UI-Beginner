import { ArrowDownIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Grid,
  GridItem,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import DrawerComponent from "../components/drawer";
import AccordionComponent from "../components/accordion";
import ModalComponent from "../components/modal";
import { useState } from "react";

export default function Home() {
  let [count, setCount] = useState(0);

  function incrementsClick() {
    setCount((counting) => counting + 20);
  }

  const resetCount = () => {
    setCount(0);
  };
  return (
    <>
      <Box width="100%" height="100%">
        <Grid gridGap={5} templateColumns="repeat(2, 1fr)">
          <Flex
            justifyContent="center"
            alignItems="center"
            backgroundColor="blue.100"
            height="100vh"
          >
            <Box>
              <GridItem>
                <Box>
                  <Button
                    mr={5}
                    variant="solid"
                    colorScheme="facebook"
                    rightIcon={<ArrowDownIcon />}
                    onClick={incrementsClick}
                  >
                    Click For Increase
                  </Button>
                  <Button
                    variant="outline"
                    colorScheme="twitter"
                    onClick={resetCount}
                  >
                    Reset
                  </Button>
                </Box>
                <Flex justifyContent="center" mt={8}>
                  {count === 100 ? (
                    <Alert status="success" variant="left-accent">
                      <AlertIcon />
                      Congratulation, You're Success To Reach 100%
                    </Alert>
                  ) : (
                    <CircularProgress
                      value={count}
                      size="80px"
                      role="progressbar"
                    >
                      <CircularProgressLabel>{count}%</CircularProgressLabel>
                    </CircularProgress>
                  )}
                </Flex>
              </GridItem>
            </Box>
          </Flex>
          <GridItem w="100%">
            <Stack>
              <Box mt="20px">
                <Tabs
                  variant="soft-rounded"
                  isFitted
                  colorScheme="teal"
                  defaultIndex={1}
                  size="md"
                >
                  <TabList>
                    <Tab>DRAWER</Tab>
                    <Tab>ACCORDION</Tab>
                    <Tab>MODAL</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <DrawerComponent />
                    </TabPanel>
                    <TabPanel>
                      <AccordionComponent />
                    </TabPanel>
                    <TabPanel>
                      <ModalComponent />
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Box>
            </Stack>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}
