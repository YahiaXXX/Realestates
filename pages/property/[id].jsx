import React from 'react'
import {Box,Flex,Spacer,Text,Avatar} from "@chakra-ui/react"
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import {fetchAPI,baseUrl} from "../../utils/fetchAPI"
import ImageScrollBar from '../../components/ImageScrollBar';

function PropertyDetails({propertyDetails:{price,rentFrequency,rooms,title,baths,area,agency,isVerified,description,type,purpose,furnishingStatus,amenities,photos}}) {
  return (
    <Box maxW="1000px" margin="auto" p="4"  >
        {photos &&  <ImageScrollBar data={photos}  /> }
        <Box w="full" p="6" >
        <Flex paddingTop='2' alignItems='center' justifyContent='space-between'>
            <Flex alignItems='center'>
              <Box paddingRight='3' color='green.400'>{isVerified && <GoVerified />}</Box>
              <Text fontWeight='bold' fontSize='lg'>AED {price}{rentFrequency && `/${rentFrequency}`}</Text>
            </Flex>
            <Box>
              <Avatar size='sm' src={agency?.logo?.url}></Avatar>
            </Box>
          </Flex>
          <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='blue.400'>
            {rooms}
            <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
          </Flex>
          <Box marginTop="2"  >
          <Text fontSize='lg' marginBottom="2" fontWeight="bold">
            {title}
          </Text>
          <Text lineHeight="2" color="gray.600" >
              {description}
          </Text>

          </Box>
          <Flex flexWrap="wrap" textTransform="uppercase" justifyContent="space-between" > 
              <Flex justifyContent="space-between" w="400px" borderBottom="1px" borderColor="gray.100" p="3" >
                 <Text>TYPE:</Text>
                 <Text fontWeight="bold" >
                
                    {type}
                 </Text>

              </Flex>
              <Flex justifyContent="space-between" w="400px" borderBottom="1px" borderColor="gray.100" p="3" >
                 <Text>PURPOSE:</Text>
                 <Text fontWeight="bold" >
                
                    {purpose}
                 </Text>

              </Flex>
              {furnishingStatus && <Flex justifyContent="space-between" w="400px" borderBottom="1px" borderColor="gray.100" p="3" >
                 <Text>FURNISHING STATUS:</Text>
                 <Text fontWeight="bold" >
                
                    {furnishingStatus}
                 </Text>

              </Flex>  }
          </Flex>
          <Box>
            {amenities.length && <Text fontSize="2xl" fontWeight="black" marginTop="5" >Amenities</Text>}
            <Flex flexWrap="wrap" >
                  {amenities.map((item)=>
                  (item.amenities.map((amenity)=>(

                    <Text
                    fontWeight="bold"
                    color="blue.400"
                    fontSize="10"
                    p="2"
                    borderRadius="5"
                    bg="gray.100"
                     m="1"
                    key={amenity.text} >
                        {amenity.text}
                    </Text>
                  )))
                  
                  )}
            </Flex>
          </Box>
          
        </Box>
    </Box>
  )
}

export default PropertyDetails


export async function getServerSideProps({params:{id}}){
 const data = await fetchAPI(`${baseUrl}/properties/detail?externalID=${id}`)
 
 return {
    props:{
        propertyDetails:data
    }
 }

}
