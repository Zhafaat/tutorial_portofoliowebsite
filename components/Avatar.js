import Image from 'next/image'

const Avatar = () => {
  return (
    <div className=' hidden xl:flex xl:max-w-none'>
      <Image src={'/avatar.png'} width={700} height={641} alt='' className=' traslate-z-0 w-full h-full' />
    </div>
  );
}; 

export default Avatar;
