interface HomeCardProps {
  image: string;
  title: string;
  description: string;
  code?: string;
  primaryColor?: string;
  secondaryColor?: string;
}

export const HomeCard = ({
  code,
  description,
  image,
  title,
  primaryColor,
  secondaryColor,
}: HomeCardProps) => {
  console.log();
  return (
    <div className="border rounded-md shadow-sm items-start w-full  h-[300px] flex flex-col lg:flex-row lg:items-center gap-4 p-5 ">
      <div className="  w-full relative h-[250px] py-2  ">
        <img
          src={image}
          className="absolute object-contain  lg:w-full h-full min-h-[40px]"
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-2xl text-[#2ac965]">{title}</p>
        <p className="font-normal text-lg text-[#787878] md:max-w-[80%] lg:max-w-full ">
          {description}
        </p>
        {code !== "" && (
          <p className="font-semibold text-xl text-[#3c3f52]">{code}</p>
        )}
      </div>
    </div>
  );
};
