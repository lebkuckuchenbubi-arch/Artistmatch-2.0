export type ArtForm = 'Painter' | 'Photographer' | 'Producer' | 'Digital Artist' | 'Sculptor';

export type Artist = {
  id: string;
  name: string;
  artForm: ArtForm;
  genre: string;
  region: string;
  status: string;
  collaborationStatus: 'Open' | 'Selective' | 'Busy';
  paymentPreference: 'Paid' | 'Hybrid' | 'Passion Project';
  bio: string;
  lookingForProjects: boolean;
  lookingForContributors: boolean;
  qualifications: string[];
  contact: string;
  location: {
    latitude: number;
    longitude: number;
  };
  profileImage: string;
  bannerImage: string;
  mapPreviewFields: Array<
    'name' | 'artForm' | 'genre' | 'region' | 'status' | 'collaborationStatus' | 'paymentPreference' | 'portfolio'
  >;
  portfolio: {
    images: string[];
    audio: { title: string; duration: string }[];
  };
};

export type ProjectRequest = {
  id: string;
  artistName: string;
  compensation: string;
  requestedRole: string;
  collaboratorsInvolved: number;
  collaboratorsNeeded: number;
};

export type ChatPreview = {
  id: string;
  artistName: string;
  lastMessage: string;
  timestamp: string;
  unreadCount: number;
  avatar: string;
};
