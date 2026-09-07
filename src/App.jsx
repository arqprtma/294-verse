import { useState } from 'react';
import { inject } from '@vercel/analytics';
import { 
  Calendar, 
  MapPin, 
  Ticket, 
  Disc, 
  Menu, 
  X,
  Volume2,
  Users,
  Trophy,
  Flame,
  CheckCircle2
} from 'lucide-react';
import { festivalInfo, lineUpData, scheduleData, ticketData, previousEvents, campaignData } from './data/festivalData';

// Inisialisasi Vercel Analytics agar aman untuk Vite (mencegah error build)
inject();

export default function App() {
  const [filterDay, setFilterDay] = useState('All');
  const [activeTabSchedule, setActiveTabSchedule] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Filter Lineup berdasarkan Kategori
  const filteredLineup = filterDay === 'All' 
    ? lineUpData 
    : lineUpData.filter(item => item.day === filterDay);

  return (
    <div className="min-h-screen flex flex-col selection:bg-brand-pink selection:text-white bg-brand-cream">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-brand-yellow border-b-4 border-brand-dark px-4 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-2 text-2xl font-black italic tracking-tighter text-brand-dark uppercase">
            <Disc className="animate-spin text-brand-pink" size={32} />
            <span>294<span className="text-brand-pink">.VERSE</span></span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 font-bold uppercase text-sm tracking-wide">
            <a href="#about" className="hover:text-brand-pink transition-colors">Tentang Kami</a>
            <a href="#lineup" className="hover:text-brand-pink transition-colors">Line Up</a>
            <a href="#schedule" className="hover:text-brand-pink transition-colors">Jadwal</a>
            <a href="#history" className="hover:text-brand-pink transition-colors">Galeri</a>
            <a href="#tickets" className="hover:text-brand-pink transition-colors">Tiket</a>
            <a href="#tickets" className="pop-button bg-brand-cyan px-4 py-2 text-brand-dark uppercase">Beli Tiket</a>
          </div>

          {/* Mobile Menu Button */}
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
            <a href="#about" onClick={() => setIsNavOpen(false)}>Tentang Kami</a>
            <a href="#lineup" onClick={() => setIsNavOpen(false)}>Line Up</a>
            <a href="#schedule" onClick={() => setIsNavOpen(false)}>Jadwal</a>
            <a href="#history" onClick={() => setIsNavOpen(false)}>Galeri</a>
            <a href="#tickets" onClick={() => setIsNavOpen(false)}>Tiket</a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <header className="relative bg-brand-yellow py-20 px-4 border-b-4 border-brand-dark overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          
          <div className="inline-block bg-brand-pink text-white font-bold px-4 py-1 rounded-full border-2 border-brand-dark mb-4 pop-text text-sm md:text-base uppercase">
            🔥 #TWOCOLLAB #ONEBIGMOVEMENT
          </div>

          <h1 className="text-6xl md:text-8xl font-black italic tracking-tight text-brand-dark uppercase leading-none mb-4">
            294 <span className="text-brand-cyan pop-text">VERSE</span>
          </h1>

          <p className="text-lg md:text-2xl font-bold text-brand-dark max-w-2xl mx-auto mb-8 uppercase">
            {festivalInfo.tagline}
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-lg font-bold mb-10">
            <div className="flex items-center gap-2 bg-brand-cream px-4 py-2 border-2 border-brand-dark pop-card">
              <Calendar className="text-brand-pink" />
              <span>{festivalInfo.date}</span>
            </div>
            <div className="flex items-center gap-2 bg-brand-cream px-4 py-2 border-2 border-brand-dark pop-card">
              <MapPin className="text-brand-cyan" />
              <span>{festivalInfo.location}</span>
            </div>
          </div>

          <a 
            href="#tickets" 
            className="inline-block pop-button bg-brand-pink text-white text-xl px-8 py-4 uppercase font-black tracking-wider hover:bg-brand-cyan hover:text-brand-dark"
          >
            Dapatkan Tiket Sekarang!
          </a>
        </div>
      </header>

      {/* CAMPAIGN EVENT SECTION */}
      <section id="about" className="py-16 px-4 max-w-7xl mx-auto w-full border-b-4 border-brand-dark">
        <div className="text-center mb-12">
          <span className="bg-brand-cyan text-brand-dark font-black px-4 py-1 text-sm border-2 border-brand-dark uppercase">
            CAMPAIGN EVENT
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase text-brand-dark mt-2">
            #TWOCOLLAB <span className="text-brand-pink">#ONEBIGMOVEMENT</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Card Movement */}
          <div className="pop-card bg-white p-8 border-4 border-brand-dark">
            <div className="flex items-center gap-3 mb-4">
              <Flame className="text-brand-pink" size={36} />
              <h3 className="text-2xl font-black uppercase">Transformasi & Gerakan</h3>
            </div>
            <p className="text-gray-800 leading-relaxed font-medium">
              {campaignData.movement}
            </p>
          </div>

          {/* Card PB PORDI */}
          <div className="pop-card bg-brand-yellow p-8 border-4 border-brand-dark">
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="text-brand-dark" size={36} />
              <h3 className="text-2xl font-black uppercase">Kolaborasi Eksklusif PB PORDI</h3>
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
                <span>Platform kolaborasi, kompetisi, dan komunitas dalam satu wadah</span>
              </div>
            </div>
          </div>
        </div>
      </section>

   {/* LINE UP SECTION */}
      <section id="lineup" className="py-16 px-4 max-w-7xl mx-auto w-full">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-6xl font-black uppercase text-brand-dark mb-4">
            LINE UP <span className="text-brand-pink">ARTIS</span>
          </h2>
          <p className="font-bold text-gray-700 uppercase tracking-wide">
            Official Line Up 294 Verse
          </p>
        </div>

        {/* Gambar Line Up */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="pop-card bg-white p-2 border-4 border-brand-dark">
            <img 
              src="/line-up-1.jpg" 
              alt="Line Up 294 Verse 2026 - Part 1" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="pop-card bg-white p-2 border-4 border-brand-dark">
            <img 
              src="/line-up-2.jpg" 
              alt="Line Up 294 Verse 2026 - Part 2" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* SCHEDULE SECTION */}
      <section id="schedule" className="py-16 px-4 bg-brand-cyan border-y-4 border-brand-dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black uppercase text-center text-brand-dark mb-8">
            JADWAL <span className="text-white pop-text">TAMPIL</span>
          </h2>

          {/* Tab Button Hari */}
          <div className="flex justify-center mb-8 gap-4">
            {scheduleData.map((data, index) => (
              <button
                key={index}
                onClick={() => setActiveTabSchedule(index)}
                className={`pop-button px-6 py-3 font-black uppercase text-sm md:text-base ${
                  activeTabSchedule === index 
                    ? 'bg-brand-yellow text-brand-dark' 
                    : 'bg-white text-brand-dark'
                }`}
              >
                {data.day}
              </button>
            ))}
          </div>

          {/* List Schedule */}
          <div className="space-y-4">
            {scheduleData[activeTabSchedule].schedules.map((item, idx) => (
              <div key={idx} className="pop-card bg-white p-4 md:p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                <div className="flex items-center gap-3">
                  <Volume2 className="text-brand-pink" />
                  <div>
                    <h4 className="text-xl font-black uppercase text-brand-dark">{item.artist}</h4>
                    <p className="text-xs font-bold text-gray-600 uppercase">{item.stage}</p>
                  </div>
                </div>
                <div className="bg-brand-yellow px-3 py-1 border border-brand-dark font-mono font-bold text-sm">
                  {item.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREVIOUS EVENT & ACTIVITY SECTION */}
      <section id="history" className="py-16 px-4 max-w-7xl mx-auto w-full border-b-4 border-brand-dark">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-black uppercase text-brand-dark mb-2">
            REKAM <span className="text-brand-pink">JEJAK</span> 294 JAKARTA
          </h2>
          <p className="font-bold text-gray-700">Aktivitas dan event yang telah kami selenggarakan sebelumnya</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {previousEvents.map((item) => (
            <div key={item.id} className="pop-card bg-white p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-brand-cyan" size={28} />
                <h3 className="text-2xl font-black uppercase">{item.title}</h3>
              </div>
              <p className="text-gray-700 font-medium mb-6">{item.description}</p>
              <div className="grid grid-cols-2 gap-3">
                {item.images.map((imgUrl, i) => (
                  <div key={i} className="h-40 border-2 border-brand-dark overflow-hidden">
                    <img src={imgUrl} alt={`Previous Event ${i}`} className="w-full h-full object-cover hover:scale-105 transition-transform" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TICKETING SECTION */}
      <section id="tickets" className="py-16 px-4 max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-black uppercase text-brand-dark mb-2">
            TIKET <span className="text-brand-pink">FESTIVAL</span>
          </h2>
          <p className="font-bold text-gray-700">Pilih kategori tiket sebelum kehabisan!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {ticketData.map((ticket) => (
            <div 
              key={ticket.id} 
              className={`pop-card p-6 flex flex-col justify-between ${
                ticket.status === 'SOLD OUT' ? 'bg-gray-200 opacity-80' : 'bg-white'
              }`}
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <Ticket size={32} className="text-brand-dark" />
                  <span className={`text-xs font-black px-2 py-1 border border-brand-dark uppercase ${
                    ticket.status === 'SOLD OUT' ? 'bg-red-500 text-white' : 'bg-brand-yellow text-brand-dark'
                  }`}>
                    {ticket.status}
                  </span>
                </div>
                <h3 className="text-xl font-black uppercase text-brand-dark mb-2">{ticket.name}</h3>
                <div className="text-2xl font-black text-brand-pink mb-6">{ticket.price}</div>
              </div>

              <button 
                disabled={ticket.status === 'SOLD OUT'}
                className={`w-full py-3 pop-button font-black uppercase text-sm ${
                  ticket.status === 'SOLD OUT'
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-brand-yellow hover:bg-brand-pink hover:text-white'
                }`}
              >
                {ticket.status === 'SOLD OUT' ? 'Habis Terjual' : 'Beli Tiket'}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer id="venue" className="mt-auto bg-brand-dark text-white border-t-4 border-brand-dark pt-12 pb-6 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-black italic text-brand-yellow mb-2">294.VERSE</h3>
            <p className="text-sm text-gray-400 font-body">
              Festival musik gabungan Hip-Hop dan Band terbesar persembahan 294 Jakarta x PB PORDI (Perkumpulan
Olahraga Domino Indonesia).
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-brand-cyan uppercase mb-2">Lokasi Acara</h4>
            <p className="text-sm font-body">{festivalInfo.location}</p>
            <p className="text-sm font-body text-gray-400 mt-1">{festivalInfo.date}</p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-brand-pink uppercase mb-2">Ikuti Kami</h4>
            <div className="flex gap-4">
              <a href="https://instagram.com/294.jakarta" target="_blank" rel="noreferrer" aria-label="Instagram" className="p-2 bg-white text-brand-dark pop-button hover:bg-brand-yellow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
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