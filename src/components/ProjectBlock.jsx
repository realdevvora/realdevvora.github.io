export default function ProjectBlock(props) {
  const { title, details, image, github, actual } = props;

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between bg-white p-6 shadow-md rounded-md">
      <div className="mb-4 sm:mb-0 sm:mr-4 flex-shrink-0">
        <a href={actual} target="_blank" rel="noopener noreferrer">
          <img src={image} alt="project image" className="max-w-60 h-auto transition-opacity duration-500 hover:opacity-50 rounded-full border-4 border-blue-900 mb-10" />
        </a>
      </div>
      <div className="flex-grow">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{details}</p>
        <div className="mt-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
