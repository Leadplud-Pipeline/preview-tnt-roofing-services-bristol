export interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  width: number;
  height: number;
  loading: "eager" | "lazy";
  fetchPriority?: "high";
}

export const galleryImages: GalleryImage[] = [
  {
    src: 'https://tnt-roofing.co.uk/wp-content/uploads/2024/04/roofing-installations-480x320.jpg',
    alt: 'Work completed by TnT Roofing Services Bristol in Bristol',
    title: 'Roofers Project 1',
    width: 800,
    height: 600,
    loading: "eager",
  },
  {
    src: 'https://tnt-roofing.co.uk/wp-content/uploads/2024/04/Best-Local-Roofer-480x320.jpg',
    alt: 'Work completed by TnT Roofing Services Bristol in Bristol',
    title: 'Roofers Project 2',
    width: 800,
    height: 600,
    loading: "lazy",
  },
  {
    src: 'https://tnt-roofing.co.uk/wp-content/uploads/2024/04/Roof-Repairs-Near-Me-480x320.jpg',
    alt: 'Work completed by TnT Roofing Services Bristol in Bristol',
    title: 'Roofers Project 3',
    width: 800,
    height: 600,
    loading: "lazy",
  },
  {
    src: 'https://tnt-roofing.co.uk/wp-content/uploads/2024/04/How-to-Repair-a-Roof-1024x683.jpg',
    alt: 'Work completed by TnT Roofing Services Bristol in Bristol',
    title: 'Roofers Project 4',
    width: 800,
    height: 600,
    loading: "lazy",
  },
  {
    src: 'https://tnt-roofing.co.uk/wp-content/uploads/2024/04/tiled-roofing-leadwork-400x400.jpg',
    alt: 'Work completed by TnT Roofing Services Bristol in Bristol',
    title: 'Roofers Project 5',
    width: 800,
    height: 600,
    loading: "lazy",
  },
  {
    src: 'https://tnt-roofing.co.uk/wp-content/uploads/2024/04/Slate-Roofing-Experts-400x400.jpg',
    alt: 'Work completed by TnT Roofing Services Bristol in Bristol',
    title: 'Roofers Project 6',
    width: 800,
    height: 600,
    loading: "lazy",
  },
  {
    src: 'https://tnt-roofing.co.uk/wp-content/uploads/2024/04/chimney-repointing-400x400.jpg',
    alt: 'Work completed by TnT Roofing Services Bristol in Bristol',
    title: 'Roofers Project 7',
    width: 800,
    height: 600,
    loading: "lazy",
  },
  {
    src: 'https://tnt-roofing.co.uk/wp-content/uploads/2024/04/leadwork-roofing-400x400.jpg',
    alt: 'Work completed by TnT Roofing Services Bristol in Bristol',
    title: 'Roofers Project 8',
    width: 800,
    height: 600,
    loading: "lazy",
  }
];

export const homepageGalleryImages = galleryImages.slice(0, 4);
