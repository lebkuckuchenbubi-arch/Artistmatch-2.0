export type Artist = {
  id: string;
  name: string;
  artForm: string;
  genre: string;
  region: string;
  status: string;
  collaborationStatus: string;
  paymentPreference: string;
  shortPortfolio: string[];
  contact: string;
  coordinates: { latitude: number; longitude: number };
  markerColor: string;
  bio: string;
  qualifications: string;
  lookingForProjects: boolean;
  lookingForContributors: boolean;
};

export const artists: Artist[] = [
  {
    id: 'a1',
    name: 'Sienna Vale',
    artForm: 'Vocal Artist',
    genre: 'Neo Soul',
    region: 'Brooklyn, NY',
    status: 'Studio sessions this week',
    collaborationStatus: 'Open for featured vocals',
    paymentPreference: 'Paid + royalty split',
    shortPortfolio: ['Velvet Session', 'Night Glass', 'City Prayer'],
    contact: '@siennavale',
    coordinates: { latitude: 40.6782, longitude: -73.9442 },
    markerColor: '#ef9f58',
    bio: 'Warm textured vocal artist blending neo soul and electronic atmospheres.',
    qualifications: 'Berklee vocal production certification',
    lookingForProjects: true,
    lookingForContributors: true,
  },
  {
    id: 'a2',
    name: 'Kairo Mendez',
    artForm: 'Photographer',
    genre: 'Cinematic Portraits',
    region: 'Queens, NY',
    status: 'Booking spring campaign shoots',
    collaborationStatus: 'Seeking stylists & set designers',
    paymentPreference: 'Project-based rates',
    shortPortfolio: ['Oxblood Dreams', 'Street Gold', 'Shadow Bloom'],
    contact: '@kairomendez',
    coordinates: { latitude: 40.7282, longitude: -73.7949 },
    markerColor: '#c95a42',
    bio: 'Editorial portrait photographer specializing in dramatic low-light tones.',
    qualifications: '6 years agency + independent campaign work',
    lookingForProjects: true,
    lookingForContributors: true,
  },
  {
    id: 'a3',
    name: 'Mila Rhee',
    artForm: 'Sound Designer',
    genre: 'Ambient + Foley',
    region: 'Jersey City, NJ',
    status: 'Open for game audio projects',
    collaborationStatus: 'Available for scoring and foley',
    paymentPreference: 'Milestone contracts',
    shortPortfolio: ['Rain Alley', 'Liminal Hall', 'Echo Vessel'],
    contact: '@milarhee',
    coordinates: { latitude: 40.7178, longitude: -74.0431 },
    markerColor: '#f0a14a',
    bio: 'Sound artist crafting immersive atmospheres for film and interactive media.',
    qualifications: 'Certified Pro Tools Specialist',
    lookingForProjects: true,
    lookingForContributors: false,
  },
];

export const projectRequests = [
  {
    id: 'p1',
    artistName: 'Kairo Mendez',
    compensation: '$850',
    role: 'Lighting Assistant',
    involved: 2,
    needed: 1,
  },
  {
    id: 'p2',
    artistName: 'Sienna Vale',
    compensation: '$1,200 + split',
    role: 'Mix Engineer',
    involved: 3,
    needed: 1,
  },
];

export const chats = [
  { id: 'c1', name: 'Mila Rhee', message: 'I can share stems tonight.', time: '8:42 PM' },
  { id: 'c2', name: 'Noa Finch', message: 'Can we review moodboard edits?', time: '7:10 PM' },
];

export const discoveryItems = [
  { id: 'd1', artistId: 'a1', title: 'Studio silhouette series', tone: '#3b1e1a', height: 190 },
  { id: 'd2', artistId: 'a2', title: 'Portrait set in amber haze', tone: '#572722', height: 260 },
  { id: 'd3', artistId: 'a3', title: 'Analog synth storyboard', tone: '#2f1c1a', height: 220 },
  { id: 'd4', artistId: 'a1', title: 'Live session stills', tone: '#70342a', height: 240 },
  { id: 'd5', artistId: 'a2', title: 'Backstage texture pack', tone: '#43241f', height: 180 },
];
