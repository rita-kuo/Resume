"use client";

import JobCollapse from "@/component/career/history/JobCollapse";
import { WorkHistoryProvider } from "@/component/career/history/WorkHistoryContext";
import WorkHistory from "@/model/workHistory";

const workHistory: WorkHistory[] = [
  {
    id: 1,
    from: new Date("2019-01-01"),
    to: new Date("2020-01-01"),
    company: "Company A",
    detail: [
      {
        title: "Software Engineer",
        description: "Developed a web application.\n- Frontend\n- Backend",
      },
      {
        title: "Software Engineer",
        description: "Developed a web application.\n- Frontend\n- Backend",
      },
    ],
  },
  {
    id: 2,
    from: new Date("2020-01-01"),
    company: "Company B",
    detail: [],
  },
];

export default function Home() {
  const data = workHistory.sort((prev, curr) =>
    prev.from > curr.from ? -1 : 1,
  );

  return (
    <>
      <h2 className="border-b-2 border-blue-300 pb-4 text-center">
        Work History
      </h2>
      <div className="relative pt-4">
        <div className="absolute bottom-0 left-2.25 top-0 -z-10 border-l-2 border-blue-300 md:left-2.75" />
        <WorkHistoryProvider histories={data}>
          <div className="space-y-2 md:space-y-4">
            {data.map((history, index) => (
              <JobCollapse key={`job-${history.id}`} history={history} />
            ))}
          </div>
        </WorkHistoryProvider>
      </div>
    </>
  );
}
