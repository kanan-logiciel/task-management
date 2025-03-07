const QuickAccessCard = ({
  title,
  link,
  description,
}: {
  title: string;
  link: string;
  description: string;
}) => (
  <a
    href={link}
    className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition"
  >
    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    <p className="text-gray-600 mt-1">{description}</p>
  </a>
);

export default QuickAccessCard;
