import JobHeader from "@/component/career/history/JobHeader";

const workHistory = [
  {
    from: new Date("2019-01-01"),
    to: new Date("2020-01-01"),
    company: "Company A",
  },
  {
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
        <div className="left-2.25 md:left-2.75 absolute bottom-0 top-0 -z-10 mb-1 border-l-2 border-blue-300" />
        <div className="space-y-2">
          {data.map((history, index) => (
            <div key={`job-${index}`}>
              <JobHeader history={history} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
