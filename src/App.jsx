import { useState } from "react";
import { inject } from "@vercel/analytics";
import {
  Calendar,
  MapPin,
  Ticket,
  Disc,
  Menu,
  X,
  Volume2,
  Trophy,
  Flame,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  festivalInfo,
  ticketData,
  previousEvents,
  campaignData,
} from "./data/festivalData";

inject();

export default function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slider handler untuk Previous Events
  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === previousEvents.length - 1 ? 0 : prev + 1,
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? previousEvents.length - 1 : prev - 1,
    );
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-brand-pink selection:text-white bg-brand-cream">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-brand-yellow border-b-4 border-brand-dark px-4 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
         <a href="#" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="Logo 294 Verse" 
              className="h-16 md:h-20 w-auto object-contain py-1" 
            />
          </a>

          {/* Desktop Menu (Menu Jadwal di-hide sementara) */}
          <div className="hidden md:flex items-center gap-6 font-bold uppercase text-sm tracking-wide">
            <a
              href="#about"
              className="hover:text-brand-pink transition-colors"
            >
              Tentang Kami
            </a>
            <a
              href="#lineup"
              className="hover:text-brand-pink transition-colors"
            >
              Line Up
            </a>
            <a
              href="#schedule"
              className="hover:text-brand-pink transition-colors"
            >
              Jadwal
            </a>
            <a
              href="#history"
              className="hover:text-brand-pink transition-colors"
            >
              Galeri
            </a>
            <a
              href="#tickets"
              className="hover:text-brand-pink transition-colors"
            >
              Tiket
            </a>
            <a
              href="#tickets"
              className="pop-button bg-brand-cyan px-4 py-2 text-brand-dark uppercase"
            >
              Beli Tiket
            </a>
          </div>

          <button
            className="md:hidden p-2 pop-button bg-brand-pink text-white"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            {isNavOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isNavOpen && (
          <div className="md:hidden mt-3 p-4 bg-brand-cream border-2 border-brand-dark flex flex-col gap-3 font-bold uppercase">
            <a href="#about" onClick={() => setIsNavOpen(false)}>
              Tentang Kami
            </a>
            <a href="#lineup" onClick={() => setIsNavOpen(false)}>
              Line Up
            </a>
            <a href="#history" onClick={() => setIsNavOpen(false)}>
              Galeri
            </a>
            <a href="#schedule" onClick={() => setIsNavOpen(false)}>
              Jadwal
            </a>
            <a href="#tickets" onClick={() => setIsNavOpen(false)}>
              Tiket
            </a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <header className="relative bg-brand-yellow py-12 md:py-20 px-4 border-b-4 border-brand-dark overflow-hidden">
        {/* Ornamen Grafis Latar Belakang */}
        <div className="absolute -right-10 -bottom-10 w-96 h-96 bg-brand-pink/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
          {/* KOLOM KIRI: TEKS & CALL TO ACTION (7 Kolom) */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="inline-block bg-brand-pink text-white font-bold px-4 py-1.5 rounded-full border-2 border-brand-dark mb-6 pop-text text-xs md:text-sm uppercase tracking-wider">
              🔥 #TWOCOLLAB #ONEBIGMOVEMENT
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black italic tracking-tight text-brand-dark uppercase leading-[0.9] mb-4">
              294 <span className="text-brand-cyan pop-text">VERSE</span>
            </h1>

            <p className="text-base sm:text-xl md:text-2xl font-bold text-brand-dark max-w-xl mb-8 uppercase leading-snug">
              {festivalInfo.tagline}
            </p>

            {/* Info Tanggal & Lokasi */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 text-xs sm:text-sm md:text-base font-bold mb-8">
              <div className="flex items-center gap-2 bg-brand-cream px-4 py-2.5 border-2 border-brand-dark pop-card">
                <Calendar className="text-brand-pink flex-shrink-0" size={20} />
                <span>{festivalInfo.date}</span>
              </div>
              <div className="flex items-center gap-2 bg-brand-cream px-4 py-2.5 border-2 border-brand-dark pop-card">
                <MapPin className="text-brand-cyan flex-shrink-0" size={20} />
                <span>{festivalInfo.location}</span>
              </div>
            </div>

            {/* Tombol Tiket */}
            <a
              href="#tickets"
              className="inline-block pop-button bg-brand-pink text-white text-lg md:text-xl px-8 py-4 uppercase font-black tracking-wider hover:bg-brand-cyan hover:text-brand-dark transition-colors"
            >
              Dapatkan Tiket Sekarang!
            </a>
          </div>

          {/* KOLOM KANAN: BANNER POSTER HERO (5 Kolom) */}
          <div className="lg:col-span-5 w-full max-w-md lg:max-w-none mx-auto">
            <div className="relative group">
              {/* Card Container Banner */}
              <div className="pop-card bg-white p-3 border-4 border-brand-dark relative z-10 transition-transform duration-300 group-hover:-translate-y-2">
                <div className="overflow-hidden border-2 border-brand-dark">
                  <img
                    src="/banner.png"
                    alt="Banner 294 Verse Festival 2026"
                    className="w-full h-auto object-cover block"
                  />
                </div>
              </div>

              {/* Tag/Badge Tambahan di Atas Banner */}
              <div className="absolute -top-4 -right-4 z-20 bg-brand-cyan text-brand-dark font-black px-4 py-2 text-xs border-2 border-brand-dark uppercase rotate-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                Official Poster ⚡
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* CAMPAIGN EVENT SECTION */}
      <section
        id="about"
        className="py-16 px-4 max-w-7xl mx-auto w-full border-b-4 border-brand-dark"
      >
        <div className="text-center mb-12">
          <span className="bg-brand-cyan text-brand-dark font-black px-4 py-1 text-sm border-2 border-brand-dark uppercase">
            CAMPAIGN EVENT
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase text-brand-dark mt-2">
            #TWOCOLLAB <span className="text-brand-pink">#ONEBIGMOVEMENT</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="pop-card bg-white p-8 border-4 border-brand-dark">
            <div className="flex items-center gap-3 mb-4">
              <Flame className="text-brand-pink" size={36} />
              <h3 className="text-2xl font-black uppercase">
                Transformasi & Gerakan
              </h3>
            </div>
            <p className="text-gray-800 leading-relaxed font-medium">
              {campaignData.movement}
            </p>
          </div>

          <div className="pop-card bg-brand-yellow p-8 border-4 border-brand-dark">
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="text-brand-dark" size={36} />
              <h3 className="text-2xl font-black uppercase">
                Kolaborasi Eksklusif PB PORDI
              </h3>
            </div>
            <p className="text-brand-dark leading-relaxed font-medium mb-4">
              {campaignData.pordi}
            </p>
            <div className="space-y-2 font-bold text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-brand-pink" />
                <span>Nafas baru membawa domino ke Generasi Z dan Alpha</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-brand-pink" />
                <span>
                  Platform kolaborasi, kompetisi, dan komunitas dalam satu wadah
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LINE UP SECTION */}
      <section
        id="lineup"
        className="py-16 px-4 max-w-7xl mx-auto w-full border-b-4 border-brand-dark"
      >
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-6xl font-black uppercase text-brand-dark mb-4">
            LINE UP <span className="text-brand-pink">ARTIS</span>
          </h2>
          <p className="font-bold text-gray-700 uppercase tracking-wide">
            Official Line Up 294 Verse
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="pop-card bg-white p-2 border-4 border-brand-dark">
            <img
              src="/line-up.png"
              alt="Official Line Up 294 Verse 2026"
              className="w-full h-auto object-cover block"
            />
          </div>
        </div>
      </section>

      {/* SCHEDULE SECTION (DI-HIDDEN SEMENTARA KARENA DALAM REVISI) */}

      {/* SCHEDULE SECTION (STAY TUNED) */}
      <section
        id="schedule"
        className="py-20 px-4 bg-brand-cyan border-y-4 border-brand-dark relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black uppercase text-brand-dark mb-10 tracking-tight">
            JADWAL <span className="text-white pop-text">TAMPIL</span>
          </h2>

          {/* Card Wrapper dengan Sticker & Mascot */}
          <div className="pop-card bg-white p-8 md:p-14 border-4 border-brand-dark flex flex-col items-center justify-center relative">
            {/* Floating Sticker / Badge */}
            <div className="absolute -top-5 -right-3 md:-right-5 bg-brand-pink text-white font-black px-4 py-2 border-3 border-brand-dark text-xs md:text-sm uppercase tracking-wider rotate-6 pop-text shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              ⚡ COMING SOON ⚡
            </div>

            {/* Ilustrasi Character Asset */}
            <div className="mb-6 relative">
                <img
                  src="/chara_1_black.png"
                  alt="Teaser Schedule Mascot"
                  className="w-full h-46 object-contain p-2 hover:scale-110 transition-transform duration-300"
                />
            </div>

            <h3 className="text-2xl md:text-4xl font-black uppercase text-brand-dark mb-3 tracking-tight">
              Lagi dibuat nih sama tim!
            </h3>

            <p className="font-bold text-gray-700 text-sm md:text-lg max-w-lg leading-relaxed mb-6">
              Rundown lengkap bakal segera dirilis. Pantau terus update
              terbarunya di website atau Instagram resmi kami, ya!
            </p>

            {/* Micro Call-to-Action / Social Link */}
            <a
              href="https://instagram.com/294.jakarta"
              target="_blank"
              rel="noreferrer"
              className="pop-button bg-brand-yellow text-brand-dark px-6 py-3 font-black text-xs md:text-sm uppercase border-2 border-brand-dark hover:bg-brand-pink hover:text-white transition-colors"
            >
              Cek Instagram Kami ↗
            </a>
          </div>
        </div>
      </section>

      {/* PREVIOUS EVENT (SLIDER BANNER) */}
      <section
        id="history"
        className="py-16 px-4 max-w-5xl mx-auto w-full border-b-4 border-brand-dark"
      >
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-6xl font-black uppercase text-brand-dark mb-2">
            PREVIOUS <span className="text-brand-pink">EVENT</span> 294 JAKARTA
          </h2>
          <p className="font-bold text-gray-700">
            Dokumentasi portofolio event yang telah kami selenggarakan
          </p>
        </div>

        {/* Banner Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="pop-card bg-white p-2 border-4 border-brand-dark overflow-hidden">
            <img
              src={previousEvents[currentSlide].image}
              alt={previousEvents[currentSlide].title}
              className="w-full h-auto object-cover transition-all duration-300"
            />
          </div>

          {/* Tombol Navigasi Slider */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 pop-button bg-brand-yellow p-3 border-2 border-brand-dark text-brand-dark hover:bg-brand-pink hover:text-white"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 pop-button bg-brand-yellow p-3 border-2 border-brand-dark text-brand-dark hover:bg-brand-pink hover:text-white"
            aria-label="Next Slide"
          >
            <ChevronRight size={28} />
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {previousEvents.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-3 w-8 border-2 border-brand-dark transition-colors ${
                  currentSlide === idx ? "bg-brand-pink" : "bg-white"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* TICKETING SECTION */}
      <section id="tickets" className="py-16 px-4 max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-black uppercase text-brand-dark mb-2">
            TIKET <span className="text-brand-pink">FESTIVAL</span>
          </h2>
          <p className="font-bold text-gray-700">
            Pilih kategori tiket sebelum kehabisan!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {ticketData.map((ticket) => {
            const isSoldOut = ticket.status === "SOLD OUT";
            const isComingSoon = ticket.status === "COMING SOON";

            return (
              <div
                key={ticket.id}
                className={`pop-card p-6 flex flex-col justify-between border-4 border-brand-dark ${
                  isSoldOut ? "bg-gray-200 opacity-80" : "bg-white"
                }`}
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <Ticket size={32} className="text-brand-dark" />
                    <span
                      className={`text-xs font-black px-2 py-1 border border-brand-dark uppercase ${
                        isSoldOut
                          ? "bg-red-500 text-white"
                          : isComingSoon
                            ? "bg-brand-cyan text-brand-dark"
                            : "bg-brand-yellow text-brand-dark"
                      }`}
                    >
                      {ticket.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-black uppercase text-brand-dark mb-2">
                    {ticket.name}
                  </h3>
                  <div className="text-2xl font-black text-brand-pink mb-6">
                    {ticket.price}
                  </div>
                </div>

                <a
                  disabled={isSoldOut || isComingSoon}
                  className={`w-full py-3 pop-button font-black uppercase text-sm text-center ${
                    isSoldOut
                      ? "bg-gray-400 cursor-not-allowed"
                      : isComingSoon
                        ? "bg-brand-cyan cursor-not-allowed text-brand-dark"
                        : "bg-brand-yellow hover:bg-brand-pink hover:text-white"
                  }`}
                  href={ticket.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {isSoldOut
                    ? "Habis Terjual"
                    : isComingSoon
                      ? "Segera Hadir"
                      : "Beli Tiket"}
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="venue"
        className="mt-auto bg-brand-dark text-white border-t-4 border-brand-dark pt-12 pb-6 px-4"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-black italic text-brand-yellow mb-2">
              294.VERSE
            </h3>
            <p className="text-sm text-gray-400 font-body">
              Festival musik gabungan Hip-Hop dan Band terbesar persembahan 294
              Jakarta x PB PORDI (Perkumpulan Olahraga Domino Indonesia)[cite:
              1].
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-brand-cyan uppercase mb-2">
              Lokasi Acara
            </h4>
            <p className="text-sm font-body">{festivalInfo.location}</p>
            <p className="text-sm font-body text-gray-400 mt-1">
              {festivalInfo.date}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-brand-pink uppercase mb-2">
              Ikuti Kami
            </h4>
            <div className="flex flex-wrap gap-3">
              {/* Instagram */}
              <a
                href="https://instagram.com/294.jakarta"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="p-2.5 bg-white text-brand-dark pop-button hover:bg-brand-pink hover:text-white transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              {/* TikTok */}
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="p-2.5 bg-white text-brand-dark pop-button hover:bg-brand-pink hover:text-white transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-2.81V7.6a6.34 6.34 0 0 0-5.38 6.22 6.34 6.34 0 1 0 11.23-4.14 8.27 8.27 0 0 0 4.26 1.15v-4.14a4.85 4.85 0 0 1-2.28-.68z" />
                </svg>
              </a>
              {/* WhatsApp */}
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="p-2.5 bg-white text-brand-dark pop-button hover:bg-brand-pink hover:text-white transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="p-2.5 bg-white text-brand-dark pop-button hover:bg-brand-pink hover:text-white transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              {/* Twitter / X */}
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="p-2.5 bg-white text-brand-dark pop-button hover:bg-brand-pink hover:text-white transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* Threads */}
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                aria-label="Threads"
                className="p-2.5 bg-white text-brand-dark pop-button hover:bg-brand-pink hover:text-white transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.186 24c-3.125 0-5.757-1.04-7.83-3.118C2.28 18.805 1.25 16.17 1.25 13.048c0-3.123 1.03-5.758 3.106-7.832C6.43 3.14 9.06 2.11 12.186 2.11c3.123 0 5.755 1.03 7.828 3.106 2.076 2.074 3.106 4.709 3.106 7.832 0 3.122-1.03 5.757-3.106 7.834C17.94 22.96 15.31 24 12.186 24zm-.006-2.502c2.43 0 4.47-.81 6.098-2.43 1.628-1.62 2.443-3.65 2.443-6.02 0-2.372-.815-4.402-2.443-6.022-1.628-1.62-3.668-2.43-6.098-2.43-2.432 0-4.472.81-6.1 2.43-1.628 1.62-2.44 3.65-2.44 6.022 0 2.37.812 4.4 2.44 6.02 1.628 1.62 3.668 2.43 6.1 2.43z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-xs text-gray-500 uppercase font-bold">
          © 2026 294 VERSE FESTIVAL. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </div>
  );
}
