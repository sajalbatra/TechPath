import Link from "next/link";
import { siteData } from "@/lib/data";

export default function Footer() {
  return (
    <footer className=" bg-gray-900  mt-16">
      {/* <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteData.footer.columns.map((column, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href} 
                      target={link.href.startsWith("http") ? "_blank" : "_self"}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div> */}
        <div className="mt-8 py-6 border-t border-gray-800 text-center text-gray-400 text-sm">
          {siteData.footer.copyright}
          <ul className="space-x-2 pt-3 flex justify-center items-center">
                {siteData.footer.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href} 
                      target={link.href.startsWith("http") ? "_blank" : "_self"}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
        </div>
      {/* </div> */}
    </footer>
  );
}
