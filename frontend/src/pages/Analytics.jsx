import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
 } from "recharts";
 
 const data = [
  { month: "Jan", papers: 12 },
  { month: "Feb", papers: 18 },
  { month: "Mar", papers: 25 },
  { month: "Apr", papers: 32 },
  { month: "May", papers: 46 },
  { month: "Jun", papers: 61 },
 ];
 
 export default function Analytics() {
 
  return (
 
   <div>
 
    <div className="page-header">
 
     <div>
 
      <h1>
       Research Analytics
      </h1>
 
      <p>
       Research trends and knowledge growth.
      </p>
 
     </div>
 
    </div>
 
    <div className="stats-grid">
 
     <div className="glass-card metric-card">
 
      <span>
       Documents
      </span>
 
      <h2>
       142
      </h2>
 
     </div>
 
     <div className="glass-card metric-card">
 
      <span>
       Citations
      </span>
 
      <h2>
       8,942
      </h2>
 
     </div>
 
     <div className="glass-card metric-card">
 
      <span>
       Concepts
      </span>
 
      <h2>
       387
      </h2>
 
     </div>
 
     <div className="glass-card metric-card">
 
      <span>
       AI Insights
      </span>
 
      <h2>
       74
      </h2>
 
     </div>
 
    </div>
 
    <div className="glass-card chart-card">
 
     <h3>
      Knowledge Growth
     </h3>
 
     <ResponsiveContainer
      width="100%"
      height={350}
     >
 
      <AreaChart data={data}>
 
       <defs>
 
        <linearGradient
         id="growth"
         x1="0"
         y1="0"
         x2="0"
         y2="1"
        >
 
         <stop
          offset="0%"
          stopColor="#60a5fa"
          stopOpacity={0.8}
         />
 
         <stop
          offset="100%"
          stopColor="#60a5fa"
          stopOpacity={0}
         />
 
        </linearGradient>
 
       </defs>
 
       <CartesianGrid strokeDasharray="3 3" />
 
       <XAxis dataKey="month" />
 
       <YAxis />
 
       <Tooltip />
 
       <Area
        type="monotone"
        dataKey="papers"
        stroke="#60a5fa"
        fill="url(#growth)"
       />
 
      </AreaChart>
 
     </ResponsiveContainer>
 
    </div>
 
   </div>
 
  );
 
 }