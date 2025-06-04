import { Coffee } from "lucide-react";

function BuyMeCoffeeBtn() {
  return (
    <a
      href="https://buymeacoffee.com/chiragrathod" // Replace with your actual link
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-yellow-400 text-black font-semibold px-5 py-3 rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition-transform"
    >
      <Coffee size={20} />
      Buy Me a Coffee
    </a>
  );
}

export default BuyMeCoffeeBtn;
