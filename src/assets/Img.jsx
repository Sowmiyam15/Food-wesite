import { Card } from '@mui/material'
import React from 'react'

export default function Img() {
  return (
    <div className='!h-[100vh] !w-[100vw] !flex justify-center !items-center !bg-white !sm:flex  '>


<Card className=' !w-[600px] !flex !bg-violet-100 !sm:max-h-80 '>


 
 <div className='flex  '>

<div className=''>
<img className='!w-[300px] '  alt="Remy Sharp" src="/src/assets/1.jpg"  />
</div>

<div className='p-5  flex flex-col gap-4 justify-center sm!:text-3xl'>
<p className=''>Name:Sowmiya</p>
<p className=''>Age:18</p>
<p>223, kk nagar</p>
<p className=''>City:chennai</p>
</div>

</div>
    </Card>
    </div>

  )
}
