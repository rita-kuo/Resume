import Image from 'next/image';
import React from 'react';
import Steps from '@/component/career/education/Steps';
import Awards from '@/component/career/education/Awards';
import { getData } from '@/service';
import Education from '@/model/education';
import Cover from '@/component/career/education/Cover';
import { BasePageProps } from '@/model/page';

const Page = async ({ params: { locale } }: BasePageProps) => {
  const education = await getData<Education>('education', locale);

  return (
    <div className="space-y-4">
      {education && (
        <>
          <div className="mx-auto flex w-max max-w-full items-center gap-4">
            <Image src={education.image} alt="ntpu" width={100} height={100} />
            <div>
              <span className="text-teal-600">{education.school}</span>
              <h3 className="">{education.title}</h3>
            </div>
          </div>
          <div className="space-y-1">
            <span className="text-teal-600">{education.project.subtitle}</span>
            <h2>{education.project.title}</h2>
            <p className="text-sm">{education.project.description}</p>
          </div>
          <Cover education={education} />
          <Awards awards={education.project.awards} />
          <Steps steps={education.project.steps} />
        </>
      )}
    </div>
  );
};

export default Page;
