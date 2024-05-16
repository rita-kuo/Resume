import { IoRibbon } from 'react-icons/io5';
import React from 'react';

export interface Award {
  color: string;
  title: string;
}

const Awards: React.FC<{ awards: Award[] }> = (props) => {
  return (
    <div className="flex flex-wrap justify-between gap-2 rounded border border-dashed border-teal-600 bg-teal-50 px-4 py-2">
      {props.awards.map((award) => (
        <div
          key={award.title}
          className="flex w-max max-w-full items-start gap-2 whitespace-pre-wrap"
        >
          <IoRibbon className={`h-6 min-w-5 ${award.color}`} />
          <span className="font-bold text-teal-600">{award.title}</span>
        </div>
      ))}
    </div>
  );
};

export default Awards;
