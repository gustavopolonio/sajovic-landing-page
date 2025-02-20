interface ServiceCardProps {
  icon: string
  title: string
}

export const ServiceCard = ({ icon, title }: ServiceCardProps) => {
  return (
    <div className="shadow-[2px_2px_4px_rgba(0,0,0,0.25)] flex gap-4 grow flex-col items-center text-black font-bold text-center leading-7 p-4 rounded-xl border-[rgba(224,224,224,1)] border-solid border-2 max-lg:p-3">
      <img
        loading="lazy"
        src={icon}
        className="aspect-[1] object-contain w-12 max-md:w-9"
        alt={title}
      />
      <div className="text-xl leading-6 h-[72px] flex items-center uppercase max-lg:text-base max-md:text-sm">
        {title}
      </div>
    </div>
  )
}
