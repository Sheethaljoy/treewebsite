

const Success = () => {
  return (
    <div className="bg-black text-white rounded-md p-8">
      <div className="flex justify-center mb-6">
        <svg
          className="w-16 h-16 text-green-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14 2 4" />
        </svg>
      </div>
      <h2 className="text-2xl font-bold mb-4">SUCCESS</h2>
      <p className="mb-4">
        Thank you for your request. We are working hard to find the best service
        and deals for you.
      </p>
      <p className="mb-6">
        Shortly you will find a confirmation in your email.
      </p>
      <a href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
        Back to Home
      </a>
    </div>
  );
};

export default Success;
