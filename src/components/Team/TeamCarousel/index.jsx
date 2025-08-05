import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import TeamMemberCard from './TeamMemberCard';
import styles from './index.module.scss';
import AlexImg from '@images/lawyers/Alex_Guerrero.webp';
import ArielleImg from '@images/lawyers/Arielle_Farias.webp';
import AryaImg from '@images/lawyers/Arya_Tahmassebi.webp';
import GiancarloImg from '@images/lawyers/Giancarlo_Mendez.webp';
import JenniferImg from '@images/lawyers/Jennifer_Russell.webp';
import MichaelImg from '@images/lawyers/Michael_Sanchez.webp';

const teamMembers = [
  {
    name: 'Giancarlo Mendez, Esq.',
    title: 'Co-Founder & Senior Partner',
    description:
      'A strategic trial advocate known for securing major recoveries for injured rideshare passengers and drivers.',
    image: GiancarloImg
  },
  {
    name: 'Michael Sanchez, Esq.',
    title: 'Co-Founder & Managing Partner',
    description:
      'Dedicated to protecting injury victims across California, Michael brings deep experience in Uber accident litigation.',
    image: MichaelImg
  },
  {
    name: 'Alex Guerrero, Esq.',
    title: 'Partner & Senior Trial Attorney',
    description: 'Alex handles large and complex rideshare claims with precision and proven results.',
    image: AlexImg
  },
  {
    name: 'Arya Tahmassebi, Esq.',
    title: 'Partner',
    description: 'Arya aggressively represents Uber accident victims with focus and unwavering dedication.',
    image: AryaImg
  },
  {
    name: 'Jennifer Russell, Esq.',
    title: 'Senior Trial Attorney',
    description: 'Known for her compassionate, client-first approach and courtroom strength.',
    image: JenniferImg
  },
  {
    name: 'Arielle Farias, Esq.',
    title: 'Attorney',
    description:
      'Fluent in Spanish and trusted in the community, Arielle brings clarity and care to every case.',
    image: ArielleImg
  }
];

const TeamCarousel = () => {
  return (
    <div className={styles.carouselContainer}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 }
        }}
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <TeamMemberCard {...member} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TeamCarousel;
