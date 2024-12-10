import React from 'react'
import { Card } from '@mui/material';
import Avatar from '@mui/material/Avatar';


export default function Avator() {
  return (
    <>
    <div className='w-[100vw] h-[100vh] flex justify-center items-center bg-black  md:max-w-9xl '>
<Card className='w-[300px] flex  flex-col mt-8 gap-10 md:flex  md:flex-row  md:w-[66%]'> 


<div className='md:shrink-0'>
<img className='w-[300px] md:h-full md:w-68'   alt="Remy Sharp" src="/src/assets/1.jpg"  />

</div>

<div className='flex flex-col gap-4 justify-center items-center md:w-48 '>
  <div className='text-xl'>Name:Sowmiya</div>
  <p>AGE:18</p>
  <p>Address:443 KK Nagar</p>
  <p>Chennai</p>
</div>


</Card>
</div>
</>
 
  )
}
