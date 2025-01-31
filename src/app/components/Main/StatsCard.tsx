

type props = {
    amount?: string;
    text?: string;
}

function StatsCard({ amount, text } : props) {
    return (
        <div className="text-center md:text-start">
            <div className="text-[2.1875rem] font-bold font-commissioner text-gray-950">{amount}</div>
            <div className="text-[1.125rem] text-zinc-500">{text}</div>
        </div>
    );
}


export default StatsCard;