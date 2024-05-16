import { Award } from '@/component/career/education/Awards';
import { StepProps } from '@/component/career/education/Steps';

interface Education {
  image: string;
  school: string;
  title: string;
  project: {
    title: string;
    subtitle: string;
    description: string;
    awards: Award[];
    steps: StepProps[];
  };
}

export default Education;
