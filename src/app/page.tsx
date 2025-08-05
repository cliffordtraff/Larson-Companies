export default function Home() {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-700 h-full">
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-700 text-white h-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Strategic Capital Deployment
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300 max-w-3xl mx-auto">
              Larson Companies is a private investment firm dedicated to deploying our own capital 
              in strategic opportunities that create long-term value and sustainable growth.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/about"
                className="rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
              >
                Learn More
              </a>
              <a
                href="/contact"
                className="text-base font-semibold leading-6 text-white hover:text-gray-300 transition-colors"
              >
                Contact Us <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
