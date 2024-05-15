import JobCollapse from "@/component/career/history/JobCollapse";
import {WorkHistoryProvider} from "@/component/career/history/WorkHistoryContext";
import WorkHistory from "@/model/workHistory";
import {getData} from "@/service";
import {BasePageProps} from "@/model/page";

const Page = async ({params: {locale}}: BasePageProps) => {
    const data = (await getData<WorkHistory[]>('work-history', locale))
        ?.sort((prev, curr) =>
            prev.from < curr.from ? -1 : 1,
        ) ?? [];

    return (
        <>
            <div className="relative pt-4">
                <div className="absolute bottom-0 left-2.25 top-0 -z-10 border-l-2 border-blue-300 md:left-2.75"/>
                <WorkHistoryProvider histories={data}>
                    <div className="space-y-2 md:space-y-4">
                        {data.map((history, index) => (
                            <JobCollapse key={`job-${history.id}`} history={history}/>
                        ))}
                    </div>
                </WorkHistoryProvider>
            </div>
        </>
    );
}

export default Page;