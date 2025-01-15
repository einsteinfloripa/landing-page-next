export const AboutHeroSection = () => {
  return (
    <div className="w-full h-screen sm:px-auto px-5 items-center justify-center flex">
      <section className="relative w-full max-w-wrapper md:mx-10 xl:mx-48 flex justify-between flex-col lg:flex-row gap-10">
        <div className="relative flex w-fit flex-col md:gap-3 mb-10">
          <h1 className="title-4xl max-w-72">Nossa história</h1>

          <p className="lg:w-[614px]">
            O Einstein Floripa nasceu do sonho de três jovens universitários que queriam transformar
            a educação brasileira, proporcionando acesso à educação superior de qualidade para
            alunos de baixa renda. Hoje, somos uma comunidade vibrante de voluntários e apoiadores
            dedicados a criar oportunidades e a transformar vidas por meio de um cursinho
            pré-vestibular social, voluntário e gratuito. Conheça mais sobre nossa trajetória,
            nossos valores e nosso impacto.
          </p>
        </div>
      </section>
    </div>
  );
};
