// import React from 'react'
import PCss from "../Styles/product.module.css";
// const ProductCard = (items) => {
//   return (
//     <div>
//       <img src={items.imageOfCards} alt='pho'/>

//     </div>
//   )
// }

// export default ProductCard
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  HStack,
  Button,
} from "@chakra-ui/react";

export default function ProductCard(items) {
  const { imageOfCards, ptitle, ptitle2 } = items;
  const handleClick=()=>{
    alert("item added to cart")
  }
  const handleClick1=()=>{
    alert("item added to ShortList")
  }
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${imageOfCards})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            height={230}
            width={282}
            objectFit={"cover"}
            src={imageOfCards}
          />
        </Box>
        <Stack
          className={PCss.upperone}
          pt={10}
          align={"center"}
          height={"200px"}
        >
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            {ptitle}
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            Nice Chair, pink
          </Heading>

          <Text fontWeight={100} fontSize={"10px"}>
            {ptitle2}
          </Text>
          <Text textDecoration={"line-through"} color={"gray.600"}>
            $199
          </Text>
        </Stack>

        <HStack className={PCss.lowerone} align={"center"}>
          <Button border={"1px solid"} variant={"unstyled"}>
            4-5y
          </Button>
          <Button border={"1px solid"} variant={"unstyled"}>
            5-6y
          </Button>
          <Button border={"1px solid"} variant={"unstyled"}>
            6-7y
          </Button>
          <Button border={"1px solid"} variant={"unstyled"}>
            more
          </Button>
        </HStack>
        <HStack justifyContent={"space-evenly"} mt={"5px"}>
          <Button onClick={handleClick}>Add To Cart</Button>
          <Button onClick={handleClick1}>ShortList</Button>
        </HStack>
      </Box>
    </Center>
  );
}
