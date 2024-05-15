interface WorkHistory {
    id: number;
    from: Date;
    to?: Date;
    company: string;
    detail: JobDetail[];
}

interface JobDetail {
    title: string;
    from?: Date;
    to?: Date;
    description: string;
}

export default WorkHistory;
