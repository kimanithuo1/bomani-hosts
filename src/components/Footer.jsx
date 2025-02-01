export default function Footer() {
    return (
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Safety Information
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Cancellation Options
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Bomani.org
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Disaster Relief
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Hosting</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Try Hosting
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Protection for Hosts
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Explore Hosting Resources
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Bomani</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Newsroom
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Investors
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500">
            © 2023 Bomani, Inc. All rights reserved.
          </div>
        </div>
      </footer>
    )
  }
  
  