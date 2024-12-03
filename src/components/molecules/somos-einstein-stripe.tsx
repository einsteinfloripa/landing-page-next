export const SomosEinsteinStipe = () => {
  return (
    <div className="w-full px-auto">
        <div className="w-full bg-app-blue-100 overflow-hidden py-4 max-w-wrapper">
        <div className="flex whitespace-nowrap gap-4 text-app-neutral-10 title-3xl">
            {Array(10)
            .fill("Somos Einstein")
            .map((text, index) => (
                <span key={index}>{text}</span>
            ))}
        </div>
        </div>
    </div>
  );
};