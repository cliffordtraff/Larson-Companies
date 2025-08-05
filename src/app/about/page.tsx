export default function About() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            About Larson Companies
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
            A private investment firm committed to strategic capital deployment and long-term value creation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600">
              Larson Companies was founded in Minnesota in 1971. We focus on long term capital appreciation through equity investments.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Integrity</h4>
                  <p className="text-gray-600 text-sm">Operating with transparency and ethical standards in all our dealings.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Discipline</h4>
                  <p className="text-gray-600 text-sm">Maintaining a structured approach to investment analysis and decision-making.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Long-term Focus</h4>
                  <p className="text-gray-600 text-sm">Building lasting value through patient capital and strategic thinking.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-900 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Investment Philosophy</h2>
          <p className="text-gray-300 text-lg max-w-4xl mx-auto mb-8">
            &ldquo;We invest our own capital because we believe alignment of interests is fundamental to successful investing. 
            When our personal wealth is on the line, every decision receives the attention and analysis it deserves.&rdquo;
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div>
              <h3 className="text-xl font-semibold mb-3">Strategic Selection</h3>
              <p className="text-gray-400 text-sm">
                We carefully select investments that align with our expertise and offer clear paths to value creation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Active Involvement</h3>
              <p className="text-gray-400 text-sm">
                We take an active role in our investments, contributing knowledge and strategic guidance.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Patient Capital</h3>
              <p className="text-gray-400 text-sm">
                Our investment horizon allows for the time needed to build sustainable, long-term value.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Learn More?</h2>
          <p className="text-gray-600 text-lg mb-8">
            Interested in understanding our approach to private investment?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}