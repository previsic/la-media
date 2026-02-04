"use client";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-black py-8 px-6 md:px-16 lg:px-24 border-t border-[#151515]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[#666] text-sm">
          © {year} LA-MEDIA d.o.o.
        </p>
        <div className="flex gap-6">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#666] text-sm hover:text-white transition-colors">
            Instagram
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#666] text-sm hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#666] text-sm hover:text-white transition-colors">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}
