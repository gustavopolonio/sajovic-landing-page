export const Office = () => {
  const images = [
    "https://cdn.builder.io/api/v1/image/assets/4dd7709355144ddb9dd788327b04a8c8/d4a4d7fdd1fbd1dd02400f2121d3bd3ac3bebe67c35b8d189130f441db3fe989",
    "https://cdn.builder.io/api/v1/image/assets/4dd7709355144ddb9dd788327b04a8c8/e8d9d00a8f553a9c2e7fb22e4310fe3ed19448812acb779ef615b7a0246a737d",
    "https://cdn.builder.io/api/v1/image/assets/4dd7709355144ddb9dd788327b04a8c8/5f3972bd0b48e6d68a69e40f876fa10b6b51bae40807d507c357868bdb922d0c",
  ];

  return (
    <section className="py-16">
      <h2 className="text-black text-[40px] font-bold text-center mb-10">
        Nosso Escritório
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[1080px] mx-auto px-4">
        {images.map((image, index) => (
          <img
            key={index}
            loading="lazy"
            srcSet={`${image}?placeholderIfAbsent=true&width=100 100w, ${image}?placeholderIfAbsent=true&width=200 200w, ${image}?placeholderIfAbsent=true&width=400 400w, ${image}?placeholderIfAbsent=true&width=800 800w`}
            className="aspect-[1.33] object-contain w-full rounded-xl"
            alt={`Office Image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
