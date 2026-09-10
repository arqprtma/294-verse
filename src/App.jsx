import { useState } from "react";
import { inject } from "@vercel/analytics";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Calendar,
  MapPin,
  Ticket,
  Menu,
  X,
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
  lineupData,
  partnerData,
} from "./data/festivalData";

inject();

export default function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Motion Parallax Hooks
  const { scrollY } = useScroll();
  const heroMascotY = useTransform(scrollY, [0, 500], [0, -120]);
  const heroMascotRotate = useTransform(scrollY, [0, 500], [0, 15]);
  const stickerY = useTransform(scrollY, [0, 800], [0, -60]);

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
    <div className="min-h-screen flex flex-col selection:bg-brand-pink selection:text-white bg-brand-cream overflow-x-hidden">
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

          {/* Desktop Menu */}
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
            <a href="#schedule" onClick={() => setIsNavOpen(false)}>
              Jadwal
            </a>
            <a href="#history" onClick={() => setIsNavOpen(false)}>
              Galeri
            </a>
            <a href="#tickets" onClick={() => setIsNavOpen(false)}>
              Tiket
            </a>
          </div>
        )}
      </nav>

      {/* HERO SECTION WITH PARALLAX */}
      <header className="relative bg-brand-yellow py-12 md:py-20 px-4 border-b-4 border-brand-dark overflow-hidden">
        {/* Parallax Background Blur */}
        <div className="absolute -right-10 -bottom-10 w-96 h-96 bg-brand-pink/30 rounded-full blur-3xl pointer-events-none" />

        {/* Floating Mascot (Parallax Motion) */}
        <motion.img
          style={{ y: heroMascotY, rotate: heroMascotRotate }}
          src="/chara_1_black.png"
          alt="Parallax Mascot"
          className="hidden lg:block absolute top-10 right-12 w-36 h-auto pointer-events-none z-20 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]"
        />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
          {/* KOLOM KIRI: TEKS & CALL TO ACTION */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
            <motion.div
              style={{ y: stickerY }}
              className="inline-block bg-brand-pink text-white font-bold px-4 py-1.5 rounded-full border-2 border-brand-dark mb-6 pop-text text-xs md:text-sm uppercase tracking-wider"
            >
              🔥 #TWOCOLLAB #ONEBIGMOVEMENT
            </motion.div>

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

          {/* KOLOM KANAN: BANNER POSTER HERO */}
          <div className="lg:col-span-5 w-full max-w-md lg:max-w-none mx-auto">
            <div className="relative group">
              <div className="pop-card bg-white p-3 border-4 border-brand-dark relative z-10 transition-transform duration-300 group-hover:-translate-y-2">
                <div className="overflow-hidden border-2 border-brand-dark">
                  <img
                    src="/banner.png"
                    alt="Banner 294 Verse Festival 2026"
                    className="w-full h-auto object-cover block"
                  />
                </div>
              </div>

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
        className="py-20 px-4 max-w-7xl mx-auto w-full border-b-4 border-brand-dark"
      >
        <div className="text-center mb-14">
          <div className="inline-block bg-brand-yellow text-brand-dark font-black px-4 py-1.5 border-2 border-brand-dark mb-3 uppercase text-xs md:text-sm tracking-wider -rotate-1">
            ⚡ PHASE 1 ANNOUNCEMENT
          </div>
          <h2 className="text-5xl md:text-7xl font-black uppercase text-brand-dark mb-3 tracking-tight">
            LINE UP <span className="text-brand-pink pop-text">ARTIS</span>
          </h2>
          <p className="font-bold text-gray-700 uppercase tracking-wide text-sm md:text-base">
            Official Performers 294 Verse 2026
          </p>
        </div>

        {/* Flex Cards Lineup (Centered for last row) */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {lineupData.map((artist) => (
            <div
              key={artist.id}
              /* 1. Tambahkan h-[340px] md:h-[380px] agar tinggi SEMUA kartu terkunci sama */
              className={`w-full sm:w-[calc(33.333%-11px)] lg:w-[calc(25%-18px)] h-[380px] sm:h-[340px] md:h-[380px] pop-card bg-white border-4 border-brand-dark p-3 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-2 hover:bg-brand-yellow/10 group ${artist.rotated}`}
            >
              {/* 2. Gunakan flex-1 agar kontainer gambar otomatis mengisi sisa ruang secara fleksibel */}
              <div className="relative flex-1 border-2 border-brand-dark overflow-hidden bg-gray-100 mb-3">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* 3. Kotak Nama Artis tetap presisi di bawah */}
              <div className="bg-brand-dark text-white p-2 text-center border-2 border-brand-dark mt-auto flex items-center justify-center min-h-[48px]">
                <h3 className="font-black text-xs md:text-sm uppercase tracking-wider leading-snug break-words">
                  {artist.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SCHEDULE SECTION (PARALLAX DOTTED BACKGROUND) */}
      <section
        id="schedule"
        className="py-20 px-4 bg-brand-cyan border-y-4 border-brand-dark relative overflow-hidden bg-fixed"
        style={{
          backgroundImage: "radial-gradient(#000 12%, transparent 12%)",
          backgroundSize: "24px 24px",
        }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black uppercase text-brand-dark mb-10 tracking-tight">
            JADWAL <span className="text-white pop-text">TAMPIL</span>
          </h2>

          <div className="pop-card bg-white p-8 md:p-14 border-4 border-brand-dark flex flex-col items-center justify-center relative">
            <div className="absolute -top-5 -right-3 md:-right-5 bg-brand-pink text-white font-black px-4 py-2 border-3 border-brand-dark text-xs md:text-sm uppercase tracking-wider rotate-6 pop-text shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              ⚡ COMING SOON ⚡
            </div>

            <div className="mb-6 relative">
              <img
                src="/chara_1_black.png"
                alt="Teaser Schedule Mascot"
                className="w-full h-44 object-contain p-2 hover:scale-110 transition-transform duration-300"
              />
            </div>

            <h3 className="text-2xl md:text-4xl font-black uppercase text-brand-dark mb-3 tracking-tight">
              Lagi dibuat nih sama tim!
            </h3>

            <p className="font-bold text-gray-700 text-sm md:text-lg max-w-lg leading-relaxed mb-6">
              Rundown lengkap bakal segera dirilis. Pantau terus update
              terbarunya di website atau Instagram resmi kami, ya!
            </p>

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

        <div className="relative max-w-4xl mx-auto">
          <div className="pop-card bg-white p-2 border-4 border-brand-dark overflow-hidden">
            <img
              src={previousEvents[currentSlide].image}
              alt={previousEvents[currentSlide].title}
              className="w-full h-auto object-cover transition-all duration-300"
            />
          </div>

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

      {/* PARTNERS & SPONSORS SECTION */}
      <section
        id="partners"
        className="py-16 px-4 max-w-7xl mx-auto w-full border-b-4 border-brand-dark"
      >
        <div className="text-center mb-12">
          <span className="bg-brand-pink text-white font-black px-4 py-1 text-sm border-2 border-brand-dark uppercase tracking-wider">
            OUR SUPPORTERS
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase text-brand-dark mt-2">
            SPONSORS &{" "}
            <span className="text-brand-cyan pop-text">PARTNERS</span>
          </h2>
        </div>

        <div className="space-y-12">
          {/* 1. OFFICIAL VENUE SPONSOR */}
          <div className="text-center">
            <h3 className="text-lg md:text-xl font-black uppercase tracking-wider text-brand-dark mb-4 inline-block bg-brand-yellow px-4 py-1 border-2 border-brand-dark -rotate-1">
              📍 Official Venue Sponsor
            </h3>
            <div className="flex justify-center items-center mt-2">
              {partnerData.venueSponsors.map((venue) => (
                <div
                  key={venue.id}
                  className="pop-card bg-white p-6 border-4 border-brand-dark flex flex-col items-center justify-center max-w-md w-full hover:-translate-y-1 transition-transform"
                >
                  <img
                    src={venue.logo}
                    alt={venue.name}
                    className="h-20 md:h-28 w-auto object-contain mb-3"
                  />
                  <span className="font-black text-sm md:text-base uppercase text-brand-dark">
                    {venue.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* MEDIA PARTNERS */}
          <div className="text-center">
            <h3 className="text-lg md:text-xl font-black uppercase tracking-wider text-brand-dark mb-6 inline-block bg-brand-cyan text-brand-dark px-4 py-1 border-2 border-brand-dark rotate-1">
              📺 Official Media Partners
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
              {partnerData.mediaPartners.map((media) => (
                <div
                  key={media.id}
                  className="pop-card bg-white border-4 border-brand-dark h-32 md:h-36 p-5 flex items-center justify-center hover:-translate-y-1 transition-transform"
                >
                  <img
                    src={media.logo}
                    alt={media.name}
                    className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* COMMUNITY PARTNERS */}
          {/* COMMUNITY PARTNERS */}
          <div className="text-center mt-12">
            <h3 className="text-lg md:text-xl font-black uppercase tracking-wider text-brand-dark mb-6 inline-block bg-brand-pink text-white px-4 py-1 border-2 border-brand-dark -rotate-1">
              🤝 Community Partners
            </h3>

            {/* CARD TEASER / COMING SOON */}
            <div className="pop-card bg-brand-yellow p-8 border-4 border-brand-dark max-w-xl mx-auto flex flex-col items-center justify-center relative">
              <div className="bg-brand-pink text-white font-black px-3 py-1 border-2 border-brand-dark text-xs uppercase tracking-wider rotate-3 mb-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                ⚡ COMING SOON ⚡
              </div>

              <h4 className="text-2xl md:text-3xl font-black uppercase text-brand-dark mb-2">
                Segera Diumumkan!
              </h4>

              <p className="font-bold text-brand-dark text-sm md:text-base max-w-md">
                Pendaftaran dan daftar kolaborasi komunitas akan segera dibuka.
                Stay tuned!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="venue"
        className="mt-auto bg-brand-dark text-white border-t-4 border-brand-dark pt-12 pb-6 px-4"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <a href="#" className="flex items-center">
              <img
                src="/logo.png"
                alt="Logo 294 Verse"
                className="h-16 md:h-20 w-auto object-contain py-1"
              />
            </a>
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
