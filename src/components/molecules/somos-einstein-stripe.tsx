type BlueStripeProps = {
  text: string;
};

export const BlueStripe: React.FC<BlueStripeProps> = ({ text }) => {
  return (
    <div className="w-full px-auto">
      <div className="w-full bg-app-blue-100 py-4">
        <div className="flex whitespace-nowrap gap-4 overflow-hidden text-app-neutral-10 title-3xl items-center justify-center">
          {Array(15)
            .fill(text)
            .map((t, index) => (
              <span key={index}>{t}</span>
            ))}
        </div>
      </div>
    </div>
  );
};
