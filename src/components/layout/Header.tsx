import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-white w-full text-base text-black font-normal">
      <div className="flex w-full items-stretch gap-[40px_100px] flex-wrap px-20 py-[18px] max-md:max-w-full max-md:px-5">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/4dd7709355144ddb9dd788327b04a8c8/0437ebb16da2528ab8db98370c62dfe0e7bf8b4929e59e5bfe2c582f2581d165?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/4dd7709355144ddb9dd788327b04a8c8/0437ebb16da2528ab8db98370c62dfe0e7bf8b4929e59e5bfe2c582f2581d165?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/4dd7709355144ddb9dd788327b04a8c8/0437ebb16da2528ab8db98370c62dfe0e7bf8b4929e59e5bfe2c582f2581d165?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/4dd7709355144ddb9dd788327b04a8c8/0437ebb16da2528ab8db98370c62dfe0e7bf8b4929e59e5bfe2c582f2581d165?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/4dd7709355144ddb9dd788327b04a8c8/0437ebb16da2528ab8db98370c62dfe0e7bf8b4929e59e5bfe2c582f2581d165?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/4dd7709355144ddb9dd788327b04a8c8/0437ebb16da2528ab8db98370c62dfe0e7bf8b4929e59e5bfe2c582f2581d165?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/4dd7709355144ddb9dd788327b04a8c8/0437ebb16da2528ab8db98370c62dfe0e7bf8b4929e59e5bfe2c582f2581d165?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/4dd7709355144ddb9dd788327b04a8c8/0437ebb16da2528ab8db98370c62dfe0e7bf8b4929e59e5bfe2c582f2581d165?placeholderIfAbsent=true"
          className="aspect-[5.18] object-contain w-[249px] shrink-0 max-w-full"
          alt="Sajovic Law Firm Logo"
        />
        <nav className="flex items-stretch gap-5 flex-1 my-auto">
          <Link to="#services" className="hover:text-primary transition-colors">
            Serviços
          </Link>
          <Link to="#about" className="hover:text-primary transition-colors">
            Sobre
          </Link>
          <Link to="#faq" className="hover:text-primary transition-colors">
            FAQ
          </Link>
          <Link to="#contact" className="hover:text-primary transition-colors">
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
};
