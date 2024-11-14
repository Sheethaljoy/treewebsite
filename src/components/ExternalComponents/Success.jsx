const Success = () => {
  return (
    <div className="bg-gray-900 text-white rounded-lg p-8 w-full max-w-md mx-auto mt-20 shadow-lg">
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
      <h2 className="text-2xl font-bold mb-4 text-center">SUCCESS</h2>
      <p className="text-center mb-4">
        Thank you for your request. We are working hard to find the best service
        and deals for you.
      </p>
      <p className="text-center mb-6">
        Shortly you will find a confirmation in your email.
      </p>
      <a href="/" className="block bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full text-center mx-auto w-fit focus:outline-none focus:shadow-outline">
        Back to Home
      </a>
    </div>
  );
};

export default Success;
