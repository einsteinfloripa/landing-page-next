export const SomosEinsteinStripe = () => {
  return (
    <div className="w-full px-auto">
      <div className="w-full bg-app-blue-100 py-4">
        <div className="flex whitespace-nowrap gap-4 overflow-hidden text-app-neutral-10 title-3xl items-center justify-center">
          {Array(15)
            .fill("Somos Einstein")
            .map((text, index) => (
              <span key={index}>{text}</span>
            ))}
        </div>
      </div>
    </div>
  );
};
