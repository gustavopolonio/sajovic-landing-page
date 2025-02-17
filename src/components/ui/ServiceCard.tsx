interface ServiceCardProps {
  icon: string;
  title: string;
}

export const ServiceCard = ({ icon, title }: ServiceCardProps) => {
  return (
    <div className="shadow-[2px_2px_4px_rgba(0,0,0,0.25)] flex grow flex-col overflow-hidden items-center text-xl text-black font-bold text-center leading-7 px-16 py-5 rounded-xl border-[rgba(224,224,224,1)] border-solid border-2 max-md:mt-6 max-md:px-5">
      <img
        loading="lazy"
        src={icon}
        className="aspect-[1] object-contain w-12"
        alt={title}
      />
      <div className="w-[290px] mt-5">
        {title}
        <br />
      </div>
    </div>
  );
};
