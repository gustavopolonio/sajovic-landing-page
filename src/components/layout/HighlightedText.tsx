interface HighlightedText {
  text: string
  size?: 'sm' | 'md' | 'lg'
  uppercase?: boolean
}

export const HighlightedText = ({
  text,
  size = 'lg',
  uppercase = false,
}: HighlightedText) => {
  const fontSizes = {
    sm: 'text-[16px]',
    md: 'text-[22px]',
    lg: 'text-[32px]',
  }

  const lineHeights = {
    sm: 'leading-5',
    md: 'leading-7',
    lg: 'leading-10',
  }

  return (
    <div
      className={`flex justify-center text-white bg-[rgba(27,27,27,1)] shadow-[0px_6px_4px_rgba(0,0,0,0.25)] w-full overflow-hidden font-bold text-center px-[70px] py-4 ${uppercase ? 'uppercase' : ''} max-md:py-3 max-md:px-4`}
    >
      <span
        className={`block w-[1080px] ${fontSizes[size]} ${lineHeights[size]} max-lg:text-[25.6px] max-lg:leading-[32px] max-md:text-xl`}
      >
        {text}
      </span>
    </div>
  )
}
