export const Hero = () => {
  return (
    <section className="flex flex-col relative min-h-[717px] w-full text-[#010101] font-bold text-center">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/4dd7709355144ddb9dd788327b04a8c8/754f9c2cbb3a045d511275f1cb29702aa26abd4cffacb81a49336adfa8e6fc82?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/4dd7709355144ddb9dd788327b04a8c8/754f9c2cbb3a045d511275f1cb29702aa26abd4cffacb81a49336adfa8e6fc82?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/4dd7709355144ddb9dd788327b04a8c8/754f9c2cbb3a045d511275f1cb29702aa26abd4cffacb81a49336adfa8e6fc82?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/4dd7709355144ddb9dd788327b04a8c8/754f9c2cbb3a045d511275f1cb29702aa26abd4cffacb81a49336adfa8e6fc82?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/4dd7709355144ddb9dd788327b04a8c8/754f9c2cbb3a045d511275f1cb29702aa26abd4cffacb81a49336adfa8e6fc82?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/4dd7709355144ddb9dd788327b04a8c8/754f9c2cbb3a045d511275f1cb29702aa26abd4cffacb81a49336adfa8e6fc82?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/4dd7709355144ddb9dd788327b04a8c8/754f9c2cbb3a045d511275f1cb29702aa26abd4cffacb81a49336adfa8e6fc82?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/4dd7709355144ddb9dd788327b04a8c8/754f9c2cbb3a045d511275f1cb29702aa26abd4cffacb81a49336adfa8e6fc82?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0"
        alt="Hero Background"
      />
      <div className="relative bg-[rgba(0,0,0,0.72)] flex w-full flex-col items-center justify-center px-20 py-[91px] max-md:max-w-full max-md:px-5">
        <div className="flex w-[884px] max-w-full flex-col items-center">
          <h1 className="text-[#010100] text-[62px] max-md:max-w-full max-md:text-[40px]">
            SAJOVIC SOCIEDADE DE ADVOGADOS
          </h1>
          <h2 className="text-[44px] self-stretch mt-[66px] max-md:max-w-full max-md:mt-10">
            ADVOCACIA CRIMINAL ESPECIALIZADA
            <br />
          </h2>
          <p className="text-[32px] mt-[91px] max-md:max-w-full max-md:mt-10">
            ATENDIMENTO 24 HORAS PARA FLAGRANTES E DELEGACIAS
            <br />
            <br />
          </p>
          <p className="text-[32px] mt-[29px]">BAURU E TODA REGIÃO</p>
          <div className="flex w-[624px] max-w-full items-stretch gap-[40px_75px] flex-wrap mt-[79px] max-md:mt-10">
            <button className="shadow-[6px_6px_4px_rgba(0,0,0,0.25)] flex gap-[17px] overflow-hidden text-2xl whitespace-nowrap px-[26px] py-4 rounded-2xl max-md:px-5 hover:bg-primary/10 transition-colors">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/4dd7709355144ddb9dd788327b04a8c8/9d4f2297a6736e4b241d593a36f2b08593a9a97aad949943939a89267a98760d?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/4dd7709355144ddb9dd788327b04a8c8/9d4f2297a6736e4b241d593a36f2b08593a9a97aad949943939a89267a98760d?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/4dd7709355144ddb9dd788327b04a8c8/9d4f2297a6736e4b241d593a36f2b08593a9a97aad949943939a89267a98760d?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/4dd7709355144ddb9dd788327b04a8c8/9d4f2297a6736e4b241d593a36f2b08593a9a97aad949943939a89267a98760d?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/4dd7709355144ddb9dd788327b04a8c8/9d4f2297a6736e4b241d593a36f2b08593a9a97aad949943939a89267a98760d?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/4dd7709355144ddb9dd788327b04a8c8/9d4f2297a6736e4b241d593a36f2b08593a9a97aad949943939a89267a98760d?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/4dd7709355144ddb9dd788327b04a8c8/9d4f2297a6736e4b241d593a36f2b08593a9a97aad949943939a89267a98760d?placeholderIfabsent=true&width=2000 2000w"
                className="aspect-[1] object-contain w-7 shrink-0"
                alt="Contact Icon"
              />
              <span>Contato</span>
            </button>
            <div className="text-[32px] grow shrink w-[311px] basis-auto my-auto">
              Telefone (14) 99750-1026
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
