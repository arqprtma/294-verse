import { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { 
  Calendar, 
  MapPin, 
  Ticket, 
  Disc, 
  Menu, 
  X,
  Volume2
} from 'lucide-react';
import { festivalInfo, lineUpData, scheduleData, ticketData } from './data/festivalData';

export default function App() {
  const [filterDay, setFilterDay] = useState('All');
  const [activeTabSchedule, setActiveTabSchedule] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Filter Lineup berdasarkan Hari
  const filteredLineup = filterDay === 'All' 
    ? lineUpData 
    : lineUpData.filter(item => item.day === filterDay);

  return (
    <div className="min-h-screen flex flex-col selection:bg-brand-pink selection:text-white">
      <Analytics />
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
            <a href="#lineup" className="hover:text-brand-pink transition-colors">Line Up</a>
            <a href="#schedule" className="hover:text-brand-pink transition-colors">Jadwal</a>
            <a href="#tickets" className="hover:text-brand-pink transition-colors">Tiket</a>
            <a href="#venue" className="hover:text-brand-pink transition-colors">Lokasi</a>
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
            <a href="#lineup" onClick={() => setIsNavOpen(false)}>Line Up</a>
            <a href="#schedule" onClick={() => setIsNavOpen(false)}>Jadwal</a>
            <a href="#tickets" onClick={() => setIsNavOpen(false)}>Tiket</a>
            <a href="#venue" onClick={() => setIsNavOpen(false)}>Lokasi</a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <header className="relative bg-brand-yellow py-20 px-4 border-b-4 border-brand-dark overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          
          <div className="inline-block bg-brand-pink text-white font-bold px-4 py-1 rounded-full border-2 border-brand-dark mb-4 pop-text text-sm md:text-base">
            🔥 FESTIVAL HYBRID HIP-HOP & BAND TERBESAR
          </div>

          <h1 className="text-6xl md:text-8xl font-black italic tracking-tight text-brand-dark uppercase leading-none mb-4">
            294 <span className="text-brand-cyan pop-text">VERSE</span> 2026
          </h1>

          <p className="text-lg md:text-2xl font-bold text-brand-accent max-w-2xl mx-auto mb-8 uppercase">
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

      {/* LINE UP SECTION */}
      <section id="lineup" className="py-16 px-4 max-w-7xl mx-auto w-full">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-6xl font-black uppercase text-brand-dark mb-4">
            LINE UP <span className="text-brand-pink">ARTIS</span>
          </h2>
          <div className="flex justify-center gap-2">
            {['All', 'Day 1', 'Day 2'].map(day => (
              <button
                key={day}
                onClick={() => setFilterDay(day)}
                className={`pop-button px-6 py-2 uppercase font-bold text-sm md:text-base ${
                  filterDay === day 
                    ? 'bg-brand-cyan text-brand-dark' 
                    : 'bg-white text-brand-dark'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Lineup */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLineup.map(artist => (
            <div key={artist.id} className="pop-card bg-white overflow-hidden group">
              <div className="relative h-64 overflow-hidden border-b-2 border-brand-dark">
                <img 
                  src={artist.image} 
                  alt={artist.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 right-3 bg-brand-yellow font-bold text-xs uppercase px-2 py-1 border border-brand-dark">
                  {artist.genre}
                </span>
              </div>
              <div className="p-5 bg-brand-cream">
                <span className="text-xs font-bold uppercase text-brand-pink tracking-wider">{artist.day} • {artist.stage}</span>
                <h3 className="text-2xl font-black uppercase text-brand-dark mt-1">{artist.name}</h3>
              </div>
            </div>
          ))}
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

      {/* TICKETING SECTION */}
      <section id="tickets" className="py-16 px-4 max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-black uppercase text-brand-dark mb-2">
            TIKET <span className="text-brand-pink">FESTIVAL</span>
          </h2>
          <p className="font-bold text-gray-700">Pilih kategori tiket sebelum kehabisan!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <div className="text-3xl font-black text-brand-pink mb-6">{ticket.price}</div>
                
                <ul className="space-y-2 mb-8 font-bold text-sm text-gray-700">
                  {ticket.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-brand-cyan">✔</span> {feat}
                    </li>
                  ))}
                </ul>
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
              Festival musik gabungan Hip-Hop dan Band terbesar tahun ini. Menyajikan pengalaman pertunjukan panggung penuh energi.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-brand-cyan uppercase mb-2">Lokasi Acara</h4>
            <p className="text-sm font-body">{festivalInfo.location}</p>
            <p className="text-sm font-body text-gray-400 mt-1">29 November 2026</p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-brand-pink uppercase mb-2">Ikuti Kami</h4>
            <div className="flex gap-4">
              {/* SVG Instagram */}
              <a href="#" aria-label="Instagram" className="p-2 bg-white text-brand-dark pop-button hover:bg-brand-yellow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              {/* SVG Youtube */}
              <a href="#" aria-label="Youtube" className="p-2 bg-white text-brand-dark pop-button hover:bg-brand-yellow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.56 49.56 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                  <polygon points="10 15 15 12 10 9 10 15"/>
                </svg>
              </a>
              {/* SVG Twitter / X */}
              <a href="#" aria-label="Twitter" className="p-2 bg-white text-brand-dark pop-button hover:bg-brand-yellow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-xs text-gray-500 uppercase font-bold">
          © 2026 294 VERSE FESTIVAL. ALL RIGHTS RESERVED.
        </div>
      </footer>
      <Analytics />
    </div>
  );
}