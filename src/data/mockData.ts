import { Artist, ChatPreview, ProjectRequest } from '../types/models';

export const artists: Artist[] = [
  {
    id: 'a1',
    name: 'Luna Rivera',
    artForm: 'Painter',
    genre: 'Abstract Expression',
    region: 'Los Angeles, CA',
    status: 'Building a large gallery series.',
    collaborationStatus: 'Open',
    paymentPreference: 'Paid',
    bio: 'Painter focused on emotional color stories and textured canvases.',
    lookingForProjects: true,
    lookingForContributors: true,
    qualifications: ['MFA - Fine Arts', '2x residency artist', 'Gallery represented'],
    contact: 'luna@artistmatch.app',
    location: { latitude: 34.0522, longitude: -118.2437 },
    profileImage: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=500&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1200&q=80',
    mapPreviewFields: ['name', 'artForm', 'genre', 'region', 'status', 'collaborationStatus', 'paymentPreference', 'portfolio'],
    portfolio: {
      images: [
        'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=600&q=80'
      ],
      audio: [{ title: 'Studio Notes', duration: '02:18' }]
    }
  },
  {
    id: 'a2',
    name: 'Kai Morgan',
    artForm: 'Producer',
    genre: 'Ambient + Neo-Soul',
    region: 'Seattle, WA',
    status: 'Scoring indie short films.',
    collaborationStatus: 'Selective',
    paymentPreference: 'Hybrid',
    bio: 'Music producer for narrative-driven visual projects and installations.',
    lookingForProjects: true,
    lookingForContributors: false,
    qualifications: ['Sound design lead', 'Film score credits'],
    contact: 'kai@artistmatch.app',
    location: { latitude: 47.6062, longitude: -122.3321 },
    profileImage: 'https://images.unsplash.com/photo-1506863530036-1efeddceb993?auto=format&fit=crop&w=500&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80',
    mapPreviewFields: ['name', 'artForm', 'region', 'status', 'paymentPreference', 'portfolio'],
    portfolio: {
      images: [
        'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=800&q=80'
      ],
      audio: [{ title: 'Late Night Sequence', duration: '03:47' }]
    }
  },
  {
    id: 'a3',
    name: 'Imani Blake',
    artForm: 'Photographer',
    genre: 'Editorial Portrait',
    region: 'Austin, TX',
    status: 'Looking for stylists + make-up artists.',
    collaborationStatus: 'Open',
    paymentPreference: 'Paid',
    bio: 'Editorial portrait photographer with warm cinematic framing.',
    lookingForProjects: false,
    lookingForContributors: true,
    qualifications: ['Published in 6 magazines', 'Creative director'],
    contact: 'imani@artistmatch.app',
    location: { latitude: 30.2672, longitude: -97.7431 },
    profileImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80',
    mapPreviewFields: ['name', 'artForm', 'genre', 'region', 'collaborationStatus', 'portfolio'],
    portfolio: {
      images: [
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80'
      ],
      audio: []
    }
  }
];

export const projectRequests: ProjectRequest[] = [
  {
    id: 'p1',
    artistName: 'Milo Hart',
    compensation: '$800 Flat',
    requestedRole: 'Album Cover Photographer',
    collaboratorsInvolved: 2,
    collaboratorsNeeded: 1
  },
  {
    id: 'p2',
    artistName: 'Ari Monroe',
    compensation: '$55/hr',
    requestedRole: 'Motion Graphics Artist',
    collaboratorsInvolved: 1,
    collaboratorsNeeded: 2
  }
];

export const chatPreviews: ChatPreview[] = [
  {
    id: 'c1',
    artistName: 'Imani Blake',
    lastMessage: 'I can send the moodboard by tonight.',
    timestamp: '5m ago',
    unreadCount: 2,
    avatar: artists[2].profileImage
  },
  {
    id: 'c2',
    artistName: 'Kai Morgan',
    lastMessage: 'Can we lock in studio time for Friday?',
    timestamp: '1h ago',
    unreadCount: 0,
    avatar: artists[1].profileImage
  }
];
