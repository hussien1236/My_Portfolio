import { Github, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="h-40 max-sm:h-25 mt-10 w-full bg-[#161513] border-t-2 border-purple-600 rounded-t-lg flex flex-col justify-between items-center py-4 absolute right-0">
      <div className="w-full flex justify-between items-center px-12 flex-1 max-sm:justify-center flex-row">
        {/* Navigation Left */}
        <nav className="flex space-x-6 text-gray-300 text-lg max-sm:hidden">
          <a href="#home" className="hover:text-purple-400 transition">Home</a>
          <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
          <a href="#about" className="hover:text-purple-400 transition">About</a>
          <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
        </nav>
        {/* Social Right */}
        <div className="flex space-x-6">
          <a href="https://github.com/hussien1236" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 text-2xl transition">
            <Github size={28} />
          </a>
          <a href="https://www.linkedin.com/in/hussein-hamdan-6277a8271/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 text-2xl transition">
            <Linkedin size={28} />
          </a>
        </div>
      </div>
      <div className="w-full text-center text-gray-500 text-sm mt-2">
        © 2024 Hussein Hamdan. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer