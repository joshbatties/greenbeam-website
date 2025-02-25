import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function SocialLinks() {
  return (
    <div className="flex justify-center space-x-4">
      <a
        href="#"
        className="text-[#4fa800] hover:text-[#3f8700] transition-all duration-300 transform hover:scale-110"
        aria-label="Facebook"
      >
        <Facebook size={24} />
      </a>
      <a
        href="#"
        className="text-[#4fa800] hover:text-[#3f8700] transition-all duration-300 transform hover:scale-110"
        aria-label="Twitter"
      >
        <Twitter size={24} />
      </a>
      <a
        href="#"
        className="text-[#4fa800] hover:text-[#3f8700] transition-all duration-300 transform hover:scale-110"
        aria-label="LinkedIn"
      >
        <Linkedin size={24} />
      </a>
      <a
        href="#"
        className="text-[#4fa800] hover:text-[#3f8700] transition-all duration-300 transform hover:scale-110"
        aria-label="Instagram"
      >
        <Instagram size={24} />
      </a>
    </div>
  )
}