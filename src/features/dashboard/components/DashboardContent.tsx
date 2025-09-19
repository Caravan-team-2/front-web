import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"


 const BienvenueComponent = () => {
    return (
            <h1 className="bg-[#F5F9FF] text-[#0D41A7] inline-block px-6 py-3 rounded-lg text-2xl font-bold">BIENVENUE !</h1>
    );
};






export const DashboardContent = () => {
    return (
        <>
            <div className="ml-5 mx-8">
            <BienvenueComponent />
            <section className="w-full">
            <KanbanComponent />
            </section>
            <section className="w-full">
            <StatistiqueComponent />
            </section>
            <section className="w-full">
            <div className="flex justify-between mt-10 ml-5">
            {[
                {
                    title: "Total Constats",
                    value: "135,780.47",
                    percentage: 1.3,
                    color: "blue",
                    subtitle: "1.3% vs last year",
                    icon: "up"
                },
                {
                    title: "Constats validés",
                    value: "135,780.47",
                    percentage: 1.3,
                    color: "green",
                    subtitle: "1.3% vs last year",
                    icon: "up"
                },
                {
                    title: "en attente",
                    value: "135,780.47",
                    percentage: 1.3,
                    color: "purple",
                    subtitle: "1.3% vs last year",
                    icon: "up"
                },
                {
                    title: "avec anomalies",
                    value: "135,780.47",
                    percentage: 1.3,
                    color: "yellow",
                    subtitle: "1.3% vs last year",
                    icon: "down"
                },
                {
                    title: "En cours de traitement",
                    value: "45,320.12",
                    percentage: 2.1,
                    color: "blue",
                    subtitle: "2.1% vs last year",
                    icon: "up"
                },
            ].map((stat, idx) => (
                <StatCard
                    key={stat.title}
                    title={stat.title}
                    value={stat.value}
                    percentage={stat.percentage}
                    color={stat.color as "blue" | "green" | "purple" | "yellow"}
                    subtitle={stat.subtitle}
                />
            ))}
            </div>
            </section>
            <section className="w-full mt-16 ">
            <ClientStatusTable />
            </section>
            </div>

        </>
    );
};

const KanbanComponent = () => {
    return (
        <>
            <div className="w-full flex justify-between">
                <h1 className="p-5 font-semibold text-xl">Résumé</h1>
                <Select>
                  <SelectTrigger className="w-[px] border-0 shadow-none focus:ring-0 focus:border-0 pr-6 text-md text-[#9EA3A7]  ">
                    <SelectValue placeholder="Ce mois" className="opacity-45 text-[#9EA3A7]" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mois">Ce mois</SelectItem>
                    <SelectItem value="annee">Cette année</SelectItem>
                    <SelectItem value="total">Total</SelectItem>
                  </SelectContent>
                </Select>
                
            </div>
        </>
    );
};


const StatistiqueComponent = ({ prix = 218456.67, pourcentage = 1.3 }: { prix?: number; pourcentage?: number }) => {
    return (
        <>
            <div className="w-full flex justify-between ml-5">
            <aside className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">total assurés</h3>
                <h3 className="text-md ">{prix+'+'}<span className="text-sm ">{pourcentage+'%'}</span></h3>
            </aside>
            <ProgressBar green={80} purple={10} yellow={10} />
            </div>
        </>
    );
};


type ProgressBarProps = {
    green: number;   
    purple: number;  
    yellow: number;  
};

const ProgressBar = ({ green, purple, yellow }: ProgressBarProps) => {
    const total = green + purple + yellow;
    const normGreen = total > 100 ? (green / total) * 100 : green;
    const normPurple = total > 100 ? (purple / total) * 100 : purple;
    const normYellow = total > 100 ? (yellow / total) * 100 : yellow;

    return (
        <div className="w-full flex items-center gap-1 mt-4 max-w-[400px] mr-10">
            <div
                className="h-3 rounded-l-full"
                style={{
                    width: `${normGreen}%`,
                    backgroundColor: '#26A939', 
                    borderRadius: '9999px',
                }}
            />  
            <div
                className="h-3"
                style={{
                    width: `${normPurple}%`,
                    backgroundColor: '#5C48DB', 
                    borderTopLeftRadius: normGreen === 0 ? '9999px' : 0,
                    borderBottomLeftRadius: normGreen === 0 ? '9999px' : 0,
                    borderTopRightRadius: normYellow === 0 ? '9999px' : 0,
                    borderBottomRightRadius: normYellow === 0 ? '9999px' : 0,
                    borderRadius: '9999px',
                }}
            />
            <div
                className="h-3 rounded-r-full"
                style={{
                    width: `${normYellow}%`,
                    backgroundColor: '#F5B317', 
                    borderRadius: '9999px',
                }}
            />
        </div>
    );
};

import { ArrowUpRight, ArrowDownRight } from "lucide-react";

type StatCardProps = {
    title: string;
    value: number | string;
    percentage: number;
    subtitle?: string;
    color: "blue" | "green" | "purple" | "yellow";
};

const colorMap = {
    blue: {
        title: "text-[#1A3DBE]",
        icon: "text-[#1A3DBE]",
    },
    green: {
        title: "text-[#26A939]",
        icon: "text-[#26A939]",
    },
    purple: {
        title: "text-[#5C48DB]",
        icon: "text-[#5C48DB]",
    },
    yellow: {
        title: "text-[#F5B317]",
        icon: "text-[#F5B317]",
    },
};

const StatCard = ({
    title,
    value,
    percentage,
    subtitle = "vs last year",
    color,
}: StatCardProps) => {
    const isPositive = percentage >= 0;
    const Icon = isPositive ? ArrowUpRight : ArrowDownRight;
    const iconColor = colorMap[color].icon;

    return (
        <div className="flex flex-col gap-1 min-w-[200px]">
            <span className={`font-semibold text-sm ${colorMap[color].title}`}>
                {title}
            </span>
            <span className="font-bold text-2xl text-gray-900">{value}</span>
            <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                <Icon
                    size={14}
                    className={iconColor}
                    aria-label={isPositive ? "Up" : "Down"}
                />
                <span className={iconColor}>
                    {Math.abs(percentage).toFixed(1)}%
                </span>
                <span className="ml-1">{subtitle}</span>
            </div>
        </div>
    );
};



const statusMap = {
    valid: {
        label: "Validé",
        color: "text-blue-600",
        bg: "bg-blue-50",
        dot: "bg-blue-500"
    },
    pending: {
        label: "Attente",
        color: "text-red-600",
        bg: "bg-red-50",
        dot: "bg-red-500"
    }
};

const tableData = [
    { client: "Alex Thompson", constat: "broken mirror", status: "valid" },
    { client: "Sofia Martelli", constat: "broken mirror", status: "pending" },
    { client: "Lucas Meyer", constat: "broken mirror", status: "valid" },
    { client: "Émilie Dubois", constat: "broken mirror", status: "pending" },
    { client: "Mateo García", constat: "broken mirror", status: "valid" },
    { client: "Sofia Martelli", constat: "broken mirror", status: "valid" }
];

const StatusBadge = ({ status }: { status: "valid" | "pending" }) => {
    const { label, color, bg, dot } = statusMap[status];
    return (
        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${color} ${bg}`}>
            <span className={`w-2 h-2 rounded-full ${dot}`}></span>
            {label}
        </span>
    );
};

const ClientStatusTable = () => (
    <div className="rounded-lg shadow-md bg-white p-0">
        <table className="min-w-full bg-white">
            <thead>
                <tr className="bg-blue-50">
                    <th className="text-center px-4 py-2 font-medium text-blue-900 text-sm">Client</th>
                    <th className="text-center px-4 py-2 font-medium text-blue-900 text-sm">Constat</th>
                    <th className="text-center px-4 py-2 font-medium text-blue-900 text-sm">Statut</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((row, idx) => (
                    <tr
                        key={idx}
                        className={`bg-white ${idx !== tableData.length - 1 ? "shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)]" : ""}`}
                    >
                        <td className="text-center px-4 py-4 align-middle text-gray-900 text-sm">{row.client}</td>
                        <td className="text-center px-4 py-4 align-middle text-gray-900 text-sm">{row.constat}</td>
                        <td className="text-center px-4 py-4 align-middle">
                            <StatusBadge status={row.status as "valid" | "pending"} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default ClientStatusTable;
