type Service = {
  title: string;
  description: string;
  icon: string;
  image: {
    src: string;
    alt: string;
  };
};

export const services: ReadonlyArray<Service> = [
  {
    title: 'Renovering',
    description:
      'Ge ditt hem eller företag nytt liv med våra högkvalitativa renoveringstjänster, anpassade efter dina behov och önskemål.',
    icon: 'bx:bxs-home',
    image: {
      src: 'https://source.unsplash.com/eQ-8iUrb07g',
      alt: 'Renovering'
    }
  },
  {
    title: 'Ombyggnation',
    description:
      'Förändra och förbättra din fastighet med smarta och effektiva ombyggnationer som skapar mervärde och utnyttjar utrymmet optimalt.',
    icon: 'bx:bxs-wrench',
    image: {
      src: 'https://source.unsplash.com/K5sjajgbTFw',
      alt: 'Ombyggnation'
    }
  },
  {
    title: 'Tillbyggnad',
    description:
      'Expandera ditt hem eller företag med snygga och praktiska tillbyggnader som ökar ytan och förhöjer fastighetens värde.',
    icon: 'bx:bxs-building-house',
    image: {
      src: 'https://source.unsplash.com/IHyk0H2Ebt4',
      alt: 'Tillbyggnad'
    }
  },
  {
    title: 'Nyproduktion',
    description:
      'Låt oss förverkliga ditt drömprojekt från grunden med våra nyproduktionstjänster – allt från planering till färdigställande.',
    icon: 'bx:bxs-city',
    image: {
      src: 'https://source.unsplash.com/A3DPhhAL6Zg',
      alt: 'Nyproduktion'
    }
  },
  {
    title: 'Totalentreprenad',
    description:
      'Förenkla ditt byggprojekt med vår totalentreprenad, där vi tar hand om allt från planering och koordinering till utförande och uppföljning.',
    icon: 'bx:bxs-briefcase',
    image: {
      src: 'https://source.unsplash.com/PlBsJ5MybGc',
      alt: 'Totalentreprenad'
    }
  },
  {
    title: 'Bullerväggar',
    description:
      'Effektiva och estetiska bullerväggar som skapar en lugnare miljö. En ny typ av konstruktion gör det möjligt att få en kostnadseffektiv lösning med kort leverans.',
    icon: 'bx:bxs-volume-mute',
    image: {
      src: 'https://source.unsplash.com/XrP_YI5KKIU',
      alt: 'Bullerväggar'
    }
  }
] as const;
