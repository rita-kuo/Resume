import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export interface StepProps {
  title: string;
  skill?: string[];
  image: string[];
}

const Step: React.FC<StepProps> = (props) => {
  return (
    <>
      <span className="-ml-2.25 mt-4 space-y-2 first:-mt-1 md:mt-0">
        <h4 className="flex items-center gap-2 text-teal-600">
          <div className="h-4 w-4 rounded-full border-4 border-teal-500 bg-white" />
          {props.title}
        </h4>
        {props.skill && (
          <ul className="ml-10 list-disc space-y-1 md:ml-6 md:list-none">
            {props.skill.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        )}
      </span>
      <div className="ml-4 space-y-2 md:col-span-3 md:col-start-2 md:ml-0">
        {props.image.map((src) => (
          <Image
            key={src}
            src={`/images${src}`}
            alt="project-1"
            className="rounded"
            style={{ imageOrientation: 'none' }}
            width={1920}
            height={1080}
          />
        ))}
      </div>
    </>
  );
};

const Steps: React.FC<{ steps: StepProps[] }> = (props) => {
  const t = useTranslations('Education');
  return (
    <div className="space-y-2">
      <h3>{t('workflow')}</h3>
      <div className="ml-2 grid gap-2 border-l-2 border-sky-300 md:ml-4 md:grid-cols-3 md:gap-y-4">
        {props.steps.map((step) => (
          <Step key={step.title} {...step} />
        ))}
      </div>
    </div>
  );
};

export default Steps;
