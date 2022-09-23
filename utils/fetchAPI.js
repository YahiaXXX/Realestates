import axios from "axios"


export const baseUrl = "https://bayut.p.rapidapi.com"

export const fetchAPI=async(url)=>{
  const {data} = await axios.get(url,{
    headers: {
        'X-RapidAPI-Key': '740d0203ccmsh7bde8da3cf8114bp1c5329jsnd5cff3e3e798',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
      }

  })
  return data;
   }