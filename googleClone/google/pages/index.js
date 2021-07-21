import Head from 'next/head'
import Avatar from '../components/Avatar'
import { MicrophoneIcon, SearchIcon, ViewGridIcon, DesktopIcon } from '@heroicons/react/solid'
import Image from "next/image"


export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>



      {/*Header*/}
      <header className='flex w-full p-5 justify-between text-sm text-gray-700'>

        {/*left*/}
        <div className='flex space-x-10 items-center'>
          <p className='link'>About</p>
          <p>Store</p>
        </div>
        
        {/*Right*/}
        <div className='flex space-x-10 items-center'>
          <p>Gmail</p>
          <p>Images</p>

        {/*Icon*/}
        <ViewGridIcon className='h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer'/>


        {/*Avatar*/}
        <Avatar url={"https://avatars.githubusercontent.com/u/20019420?s=400&u=4d61ebc1eb6644b1751e5f875498445d29b37c5b&v=4"}/>
        </div>

    

      </header>

      {/* Body*/}

      <form className='flex flex-col items-center mt-44  '>

        <Image
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        width={300}
        height={100}
        />

        <div className='flex w-full mt-5 hover:shadow-lg focus-widthin:shadow-lg max-w-md rounded-full border border-gray-200 px-3 py-3 items-center sm:max-w-xl lg:max-w-2xl '>
          <SearchIcon className='h-5 mr-3 text-gray-500'/>
          <input type="text" className='flex-grow focus:outline-none'/>
          <MicrophoneIcon className='h-5 mr-3 text-gray-500'/>
        </div>

        <div className='flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4'>
          <button className='btn'>Google Search</button>

          <button className='btn'>Feeling Good</button>
        </div>
      </form>

      {/* footer*/}
    </div>
  )
}
