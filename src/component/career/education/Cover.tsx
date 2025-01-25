'use client';

import React, { useRef } from 'react';
import Education from '@/model/education';
import Image from 'next/image';
import { motion, useScroll } from 'framer-motion';

const Cover: React.FC<{ education: Education }> = (props) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['center 55%', 'start 20%'],
  });

  return (
    <div
      ref={ref}
      className="relative aspect-video w-full overflow-hidden rounded-lg"
    >
      <Image
        src="/images/project-before.png"
        alt="before"
        fill
        className="-z-10"
      />
      <span className="rounded-br-lg bg-teal-700 p-2 text-white">Before</span>
      <motion.div
        className='absolute left-0 top-0 h-full w-full origin-left overflow-hidden bg-[url("/images/project-after.png")] bg-cover bg-center'
        style={{ scaleX: scrollYProgress }}
      >
        <span className="absolute bottom-0 right-0 rounded-tl-lg bg-teal-700 p-2 text-white">
          After
        </span>
      </motion.div>
    </div>
  );
};

export default Cover;
