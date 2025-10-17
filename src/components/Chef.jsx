import { TiHeartFullOutline } from "react-icons/ti";

const Chef = ({chef}) => {
  const {name, image, experience,bio, recipes, specialty} = chef;
  return (
    <div className='shadow-sm px-8 py-5 bg-[#FFFFFF] text-center border border-[#FFE5D0] hover:shadow-[rgb(255,76,41)] '>
      <h1 className="font-semibold text-xl text-[#06D6A0]">{name}</h1>
      <p className="text-sm font-light">{specialty}</p>
      <div className='my-3 flex justify-center'>
        <img className='rounded-full text-center w-30 h-30 object-cover ' src={image} alt="" />
      </div>
      <div className='flex justify-between'> 
        <p>{experience}</p>
        <p className="flex items-center gap-2"> <TiHeartFullOutline className="text-xl text-red-600" />  {recipes}</p>
      </div>
      <p className="text-sm font-light mt-4 text-[#2B2B2B]">{bio}</p>
    </div>
  );
};

export default Chef;