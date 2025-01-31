type props = {
  value?: number;
};

function StatsRange({ value }: props) {
  return (
    <div className="block w-full h-3 rounded-lg bg-zinc-200">
      <div className="bg-moderate-cyan h-3 rounded-lg " style={{ width: `${value}%` }}></div>
    </div>
  );
}

export default StatsRange;
