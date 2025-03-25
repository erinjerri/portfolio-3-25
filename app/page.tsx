import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#18181b] text-white">
      {/* Navigation */}
      <header className="border-b border-[#7b7a7a]">
        <div className="flex justify-center items-center bg-[#e4e4e4] py-1">
          <nav className="container flex justify-center space-x-16 text-[#18181b] font-medium">
            <Link href="#work" className="text-[#8ce0f3] hover:opacity-80">
              WORK
            </Link>
            <Link href="#projects" className="hover:text-[#8ce0f3]">
              PROJECTS
            </Link>
            <Link href="#read" className="hover:text-[#8ce0f3]">
              READ
            </Link>
            <Link href="#watch" className="hover:text-[#8ce0f3]">
              WATCH
            </Link>
            <Link href="#buy" className="hover:text-[#8ce0f3]">
              BUY
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Column - Bio */}
            <div className="col-span-2 space-y-6">
              <div>
                <p className="mb-2">Hi, I'm Erin Jerri Pangilinan! 👋 Follow me at all the things @erinjerri.</p>

                <p className="mb-2">
                  I'm a software engineer and writer. 📝🍜 I'm a proud Silicon Valley native born and raised Filipina
                  American. 🌺 Read more about me here (full bio). ↗️
                </p>

                <p className="mb-2">
                  Many folks know me as the lead author and co-editor of the internationally acclaimed book, O'Reilly
                  Media's{" "}
                  <span className="italic">
                    Creating Augmented and Virtual Realities: Theory and Practice for Next-Generation Spatial Computing
                  </span>
                  . It debuted #1 in Game Programming on Amazon, is distributed in over 24+ countries and has been
                  translated into Chinese and Korean. Buy the book here. 📚
                </p>

                <p className="mb-2">
                  I graduated from UC Berkeley and previously was a fast.ai diversity fellow at the University of San
                  Francisco (USF) Deep Learning Program (2017-2018) and Data Ethics Program (2020). 🌐
                </p>

                <p className="mb-4">Currently, I'm working on my next books, apps, and films. 📱📚🎬</p>

                <div className="mb-4">
                  <p className="mb-2">Watch 📺 🎬</p>
                  <p>Check out videos of talks I've given and schedule me to speak in 2025.</p>
                  <Button className="mt-2 bg-[#8ce0f3] text-[#18181b] hover:bg-[#95d5f6]">SUBSCRIBE</Button>
                </div>

                <div>
                  <p className="mb-2">Blog 📱</p>
                  <p className="mb-2">
                    I maintain a <span className="font-semibold">Substack</span> "Creating Your Reality," about
                    technology, productivity, self-development, and the market. Having been exposed early on in Silicon
                    Valley with family members working as entrepreneurs, from industries in biotech, SaaS, and worked
                    early in my career in civic engagement for Congressman Ro Khanna (Silicon Valley Congressional
                    Representative, and his campaign chair, Steve Spinner, founder of Tech For Obama), I have a wide
                    range of exposure to Silicon Valley's self-made tech startup founders. As a community organizer and
                    productivity junkie, I give my unique take on Silicon Valley, emerging tech trends and philosophies
                    adopted by Silicon Valley tech startups.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Images */}
            <div className="col-span-1 space-y-6">
              <div className="mb-6">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Profile photo"
                  width={400}
                  height={300}
                  className="w-full object-cover rounded"
                />
              </div>

              <div>
                <div className="flex justify-center mb-2">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Book covers"
                    width={400}
                    height={200}
                    className="w-full object-contain"
                  />
                </div>
                <p className="text-center mb-1">Read my O'Reilly Media book,</p>
                <p className="text-center italic mb-1">
                  Creating Augmented and Virtual Realities: Theory and Practice for Next-Generation Spatial Computing
                </p>
                <div className="flex justify-center">
                  <Button className="bg-[#8ce0f3] text-[#18181b] hover:bg-[#95d5f6]">BUY NOW</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#7b7a7a] py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-medium mb-4">About</h3>
              <ul className="space-y-2 text-[#979797]">
                <li>
                  <Link href="#" className="hover:text-[#8ce0f3]">
                    Mission
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#8ce0f3]">
                    Bio
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#8ce0f3]">
                    Speaking
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Experience</h3>
              <ul className="space-y-2 text-[#979797]">
                <li>
                  <Link href="#" className="hover:text-[#8ce0f3]">
                    Download
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Read</h3>
              <ul className="space-y-2 text-[#979797]">
                <li>
                  <Link href="#" className="hover:text-[#8ce0f3]">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Watch</h3>
              <ul className="space-y-2 text-[#979797]">
                <li>
                  <Link href="#" className="hover:text-[#8ce0f3]">
                    Video
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Buy</h3>
              <ul className="space-y-2 text-[#979797]">
                <li>
                  <Link href="#" className="hover:text-[#8ce0f3]">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#8ce0f3]">
                    Book
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border-[#7b7a7a] text-white w-64"
              />
              <Button className="bg-[#8ce0f3] text-[#18181b] hover:bg-[#95d5f6]">Subscribe</Button>
            </div>
            <p className="text-sm text-[#979797]">Making my online one code block at a time.</p>
          </div>
        </div>
      </footer>

      {/* Color Reference */}
      <div className="py-4 text-center bg-white text-[#18181b]">
        <p>
          Other Blue <span className="text-[#8ce0f3]">8CE0F3</span>
        </p>
      </div>
    </div>
  )
}

