// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Endre Sebestyén';
export const SITE_DESCRIPTION = 'Computational biologist and bioinformatics consultant with 20+ years of experience turning genomic and transcriptomic data into actionable discoveries.';

export const CONTACT = {
  organization: 'Endre Sebestyén',
  addressLines: [],
  emails: [
    'endre.sebestyen@runbox.com',
  ],
};

export type SocialIcon = 'website' | 'scholar' | 'email' | 'github' | 'linkedin' | 'twitter';

export const SOCIAL_LINKS: ReadonlyArray<{
  label: string;
  href: string;
  icon: SocialIcon;
}> = [
  {
    label: 'Email',
    href: 'mailto:endre.sebestyen@runbox.com',
    icon: 'email',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/endre-sebestyen/',
    icon: 'linkedin',
  },
  {
    label: 'Google Scholar',
    href: 'https://scholar.google.com/citations?user=EFq-0McAAAAJ',
    icon: 'scholar',
  },
];

export const FOOTER_CREDIT = {};
