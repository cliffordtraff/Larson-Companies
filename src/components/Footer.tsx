import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-bold mb-2">Larson Companies</h3>
            <p className="text-gray-600 text-sm">
              A private investment firm focused on strategic capital deployment
              and long-term value creation.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">Contact Info</h4>
            <div className="text-sm text-gray-600 space-y-1">
              <p>Email: info@larson-companies.com</p>
              <p>Phone: (555) 123-4567</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-4 pt-4 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Larson Companies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}