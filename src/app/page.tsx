"use client";

import JobCollapse from "@/component/career/history/JobCollapse";
import { WorkHistoryProvider } from "@/component/career/history/WorkHistoryContext";

const workHistory = [
  {
    id: 1,
    from: new Date("2019-01-01"),
    to: new Date("2020-01-01"),
    company: "Company A",
  },
  {
    id: 2,
    from: new Date("2020-01-01"),
    company: "Company B",
  },
];

export default function Home() {
  const data = workHistory.sort((prev, curr) =>
    prev.from > curr.from ? -1 : 1,
  );

  return (
    <div className="px-4">
      <h2 className="border-b-2 border-blue-300 p-3 text-center text-sky-900">
        Work History
      </h2>
      <div className="relative pt-4">
        <div className="absolute bottom-0 left-2.25 top-0 -z-10 mb-1 border-l-2 border-blue-300 md:left-2.75" />
        <WorkHistoryProvider histories={data}>
          <div className="space-y-2">
            {data.map((history, index) => (
              <JobCollapse key={`job-${history.id}`} history={history} />
            ))}
          </div>
        </WorkHistoryProvider>
      </div>
    </div>
  );
}
