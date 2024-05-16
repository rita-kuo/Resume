import React from 'react';
import JobHeader from '@/component/career/history/JobHeader';
import WorkHistory from '@/model/workHistory';
import JobContent from '@/component/career/history/JobContent';

const JobCollapse: React.FC<{ history: WorkHistory }> = (props) => {
  return (
    <div>
      <JobHeader history={props.history} />
      <JobContent history={props.history} />
    </div>
  );
};

export default JobCollapse;
