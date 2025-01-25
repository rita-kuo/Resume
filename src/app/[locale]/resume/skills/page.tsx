import { format } from 'date-fns';
import Image from 'next/image';
import { getData } from '@/service';
import { BasePageProps } from '@/model/page';

interface Skill {
  title: string;
  from: Date;
  to?: Date;
  image: string;
}

const Page = async ({ params: { locale } }: BasePageProps) => {
  const skills = await getData<Skill[]>('skills', locale);
  return (
    <div className="space-y-4 divide-y-2 [&>*]:pt-4">
      {skills?.map((skill) => (
        <div key={skill.title} className="space-y-2">
          <div className="flex flex-col gap-x-4 md:flex-row md:items-end">
            <h2>{skill.title}</h2>
            <span className="text-teal-600">
              {format(skill.from, 'yyyy/MM/dd')}
              {skill.to && ` - ${format(skill.to, 'yyyy/MM/dd')}`}
            </span>
          </div>
          <Image
            src={`/images${skill.image}`}
            alt={skill.title}
            className="h-auto w-full max-w-limit-sm rounded shadow"
            width={1920}
            height={1080}
          />
        </div>
      ))}
    </div>
  );
};

export default Page;
