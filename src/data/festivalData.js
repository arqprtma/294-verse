export const festivalInfo = {
  title: "294 VERSE",
  date: "29 November 2026",
  location: "Eco Island - Ecovention Ancol, Jakarta Utara",
  tagline: "WHERE HIP-HOP FEET THE BAND SOUNDS"
};

export const campaignData = {
  movement: "Lahir dari kerasnya solidaritas tongkrongan jalanan dan kultur gangster JEGADBWPM yang telah berdiri kokoh selama lebih dari satu dekade, 294 Jakarta kini bertransformasi menjadi kolektif kreatif yang progresif. Kami membuktikan bahwa anak-anak muda dari jalanan mampu mandiri secara ekonomi dan membuka lapangan pekerjaan bagi kawan-kawan komunitas.",
  pordi: "Bekerja sama dengan PB PORDI (Perkumpulan Olahraga Domino Indonesia) di bawah naungan KORMI, 294 Verse menghadirkan pengalaman festival yang eksklusif dan sarat kebersamaan melalui kompetisi domino yang intimate untuk meruntuhkan sekat antara musisi dan penggemar."
};

export const lineupData = [
    { id: 1, name: "The JEBLOGS x Trico x Lealona", image: "/lineup/jebloxtiricolealona.png", rotated: "-rotate-1" },
    { id: 2, name: "The Jansen", image: "/lineup/thejansen.jpeg", rotated: "rotate-2" },
    { id: 3, name: "Weekenders Service Crew (WSC)", image: "/lineup/wsc.jpeg", rotated: "-rotate-2" },
    { id: 4, name: "Westwew", image: "/lineup/westwew.jpeg", rotated: "rotate-1" },
    { id: 5, name: "GHXZY", image: "/lineup/ghxzy.jpeg", rotated: "-rotate-1" },
    { id: 6, name: "Badi303", image: "/lineup/badi303.jpg", rotated: "rotate-2" },

];

// Portofolio slider (3 gambar)
export const previousEvents = [
  {
    id: 1,
    title: "Previous Event Part 1",
    image: "/prev-event.jpg"
  },
  {
    id: 2,
    title: "Previous Event Part 2",
    image: "/prev-event-2.jpg" // Sesuaikan nama file dokumentasi kamu di folder public
  },
  {
    id: 3,
    title: "Previous Event Part 3",
    image: "/prev-event-3.jpg" // Sesuaikan nama file dokumentasi kamu di folder public
  }
];

// Rundown disimpan (Seksi JSX di-hidden/commented out di App.jsx)
export const scheduleData = [
  {
    day: "Rundown Acara (29 November 2026)",
    schedules: [
      { time: "14:00 - 15:00", artist: "Open Gate" },
      { time: "15:00 - 16:30", artist: "HipHop Session I" },
      { time: "16:30 - 18:00", artist: "HipHop Session II" },
      { time: "18:00 - 19:00", artist: "Break & Sunset Chill" },
      { time: "19:10 - 19:30", artist: "Interactive Games / Talkshow"},
      { time: "19:40 - 21:30", artist: "Guest Star HipHop 1" },
      { time: "21:30 - 21:35", artist: "Special Announcement"},
      { time: "21:40 - 23:00", artist: "Guest Star HipHop 2"},
      { time: "23:05 - 23:50", artist: "Guest Star 1"},
      { time: "00:00 - 00:50", artist: "Guest Star 2 (Closing Ceremony)"}
    ]
  }
];

// Update harga & status tiket (Sesuai poin 5)
export const ticketData = [
  {
    id: 1,
    name: "EARLY",
    price: "Rp 60.000",
    status: "SOLD OUT",
  },
  {
    id: 2,
    name: "PRESALE I",
    price: "Rp 80.000",
    status: "AVAILABLE",
    link:"https://artatix.co.id/event/294_verse"
  },
  {
    id: 3,
    name: "PRESALE II",
    price: "COMING SOON",
    status: "COMING SOON",
  },
  {
    id: 4,
    name: "ON THE SPOT",
    price: "COMING SOON",
    status: "COMING SOON",
  }
];

// Data Partner & Sponsor
export const partnerData = {
  venueSponsors: [
    {
      id: 1,
      name: "Taman Impian Jaya Ancol",
      logo: "/sponsor/logo-ancol.png", // Ganti dengan path logo Ancol milikmu
      category: "Official Venue Sponsor",
    },
  ],
  mediaPartners: [
    { id: 1, name: "Media Partner 1", logo: "/mediapartner/agi.png" },
    { id: 2, name: "Media Partner 2", logo: "/mediapartner/bekasigigs.png" },
    { id: 3, name: "Media Partner 3", logo: "/mediapartner/gigs.png" },
    { id: 4, name: "Media Partner 4", logo: "/mediapartner/honesstudio.png" },
    { id: 5, name: "Media Partner 5", logo: "/mediapartner/infogigs.png" },
    { id: 6, name: "Media Partner 6", logo: "/mediapartner/infomustika.png" },
    { id: 7, name: "Media Partner 7", logo: "/mediapartner/konserdaily.png" },
    { id: 8, name: "Media Partner 8", logo: "/mediapartner/konserfyp.png" },
    { id: 9, name: "Media Partner 9", logo: "/mediapartner/konsernews.png" },
    { id: 10, name: "Media Partner 10", logo: "/mediapartner/ruangevent.png" },
    { id: 11, name: "Media Partner 11", logo: "/mediapartner/sanasinikonser.png" },
  ],
  communityPartners: [
    { id: 1, name: "Community 1", logo: "/mediapartner/agi.png" },
    { id: 2, name: "Community 2", logo: "/mediapartner/agi.png" },
    { id: 3, name: "Community 3", logo: "/mediapartner/agi.png" },
    { id: 4, name: "Community 4", logo: "/mediapartner/agi.png" },
  ],
};