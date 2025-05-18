import React,{useState,useEffect} from "react";
import { Card, CardContent } from "./components/ui/card";
import { Line } from "react-chartjs-2";
import EuFlag from './assets/eu.png'
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';
import Navbar from "./components/ui/navbar";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  Tooltip,
  Legend
);

export default function Dashboard() {
    const [chartData, setChartData] = useState(null);
    const currencyList = [
        {name: "USD", imgUrl: "https://res.cloudinary.com/dcril21yl/image/upload/v1686857739/usa_zri7rl.svg", alt:"USA flag", symbol: '$'} ,
        {name: "GBP", imgUrl: "https://res.cloudinary.com/dcril21yl/image/upload/v1684446209/clearer/gbFlag_ae332p.svg", alt:"British flag", symbol: '£'},
        {name: "EUR", imgUrl: EuFlag, alt:"EU flag", symbol: '€'},
        {name: "YEN", imgUrl: "https://res.cloudinary.com/dcril21yl/image/upload/v1684445808/clearer/China_z26vwx.svg", alt:"Chinese flag", symbol: '¥'},
        {name: "CAD", imgUrl: "https://res.cloudinary.com/dcril21yl/image/upload/v1686857737/canada_yfgwhs.svg", alt:"Canada flag", symbol: '$'}
    ];
    const selectedCurrency = [
        {name: "NGN", imgUrl: "https://res.cloudinary.com/dcril21yl/image/upload/v1684425946/clearer/Nigeria_e7h4en.svg", alt:"USA flag", symbol: '₦'}
    ]
  
    useEffect(() => {
      async function fetchData() {
        const res = await fetch("https://mocki.io/v1/3e6585f6-0719-4a59-aaa6-981f9a0f8a58");
        const data = await res.json();
        const labels = data.map(entry => new Date(entry.timestamp).toLocaleDateString());
        const moneyIn = data.map(entry => entry.moneyIn);
        const moneyOut = data.map(entry => entry.moneyOut);
  
        setChartData({
          labels,
          datasets: [
            {
              label: "Money In",
              data: moneyIn,
              fill: true,
              backgroundColor: "rgba(34,197,94,0.1)",
              borderColor: "#22c55e",
              tension: 0.4,
            },
            {
              label: "Money Out",
              data: moneyOut,
              fill: true,
              backgroundColor: "rgba(239,68,68,0.1)",
              borderColor: "#ef4444",
              tension: 0.4,
            }
          ]
        });
      }
      fetchData();
    }, []);
  return (
    <div className="min-h-screen w-full bg-gray-50 py-4 md:py-8">
        <Navbar/>
        <div className=" px-4 md:px-8">
            <section className="relative flex flex-col rg:flex-row mb-4">
                <p className="font-medium text-lg text-black leading-10 mb-2 text-center rg:text-left">Welcome Andy 👋</p>
                <div className="bg-orange-100 mx-auto flex gap-3  py-2 px-3 rounded-lg items-center w-full max-w-xl rg:absolute rg:left-[25%] rg:top-0">
                    <div className="w-6">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#d64933" className="w-6 h-6">
                            <path fill="#d64933" strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                        </svg>
                    </div>
                    <p className="text-black text-sm">Your account has been setup for OTC trade, please <span className="font-semibold">Contact OTC</span> to transact</p>
                </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 mb-6">
                <Card className="">
                    <CardContent className="p-5">
                        <div className="mb-[8%]">
                            <div className="flex justify-between items-center mb-4">
                                <p className="font-semibold flex cursor-pointer">
                                    NGN . 
                                    <span className="text-xs font-normal text-gray-500 my-auto pl-1">Naira</span>
                                    <span className="my-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="grey" class="size-4">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </span>
                                </p>
                                <button className="flex gap-2 font-semibold text-sm leading-5 my-auto"> 
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                    Deposit
                                </button>
                            </div>
                            <p className="text-2xl font-semibold">₦34,645,233</p>
                        </div>
                        <div className="flex gap-2.5 flex-wrap">
                            <div className="px-4 py-2.5 rounded-lg bg-light_grey gap-1 flex items-center pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                                </svg>
                                <p className={`text-center text-sm font-semibold cursor-pointer`}>
                                    Send
                                </p>
                            </div>
                            <div className="px-4 py-2.5 rounded-lg bg-light_grey gap-1 flex items-center cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                                </svg>
                                <p className={`text-center text-sm font-semibold cursor-pointer`}>
                                    Recieve
                                </p>
                            </div>
                            <div className="px-4 py-2.5 rounded-lg bg-light_grey gap-1 flex items-center cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                                </svg>
                                <p className={`text-center text-sm font-semibold cursor-pointer`}>
                                    Swap
                                </p>
                            </div>
                            <div className="w-11 h-11 rounded-full bg-light_grey gap-1 flex items-center cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mx-auto">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                                </svg>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="overflow-hidden hs">
                    <CardContent className="p-5 overflow-x-scroll hs">
                        <div className="flex justify-between mb-5">
                            <p className="font-semibold">Merchants</p>
                            <button className="flex gap-2 font-semibold text-sm leading-5 my-auto"> 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                                Add Merchants
                            </button>
                        </div>
                        <div className="flex gap-2 w-full min-w-[440px] justify-between overflow-x-auto mb-5 hs">
                            {Array(5).fill("AD").map((item, index) => (
                                <div
                                key={index}
                                className=""
                                >
                                    <div className="flex flex-col items-center justify-center bg-gray-200 text-sm w-14 h-14 rounded-full mb-2 mx-auto font-medium">
                                        {item}
                                    </div>
                                    <div className="bg-gray-200 rounded-2xl px-2 w-26">
                                        <p className="text-[14px] font-medium text-[#939393]" title="Adisa Deborah">Adisa Debo...</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="text-right text-light_grey text-sm">See All</p>
                    </CardContent>
                </Card>
            </div>

            <div className="w-full bg-white py-5 rounded-xl mb-6">
                <div className="flex justify-between w-full mb-4 px-5">
                    <h2 className="text-lg font-bold">FX Rates</h2>
                    <p className="text-right text-light_grey text-sm cursor-pointer">See All</p>
                </div>
                <div className="flex overflow-x-auto gap-4 px-5 hs">
                    {currencyList.map((currency, index) => (
                        <Card key={index} className="min-w-max">
                        <CardContent className="p-3 flex rounded-lg bg-[#F5F5F5]">
                            <div className="flex w-[80px]">
                                <img className="rounded-full w-8 h-8 z-0 my-auto object-cover" src={selectedCurrency[0]?.imgUrl}/>
                                <img className="rounded-full w-8 h-8 z-50 -ml-3 my-auto object-cover" src={currency.imgUrl}/>
                            </div>
                            <div className="flex gap-1">
                                <div>
                                    <p className="font-medium text-gray-500 text-sm">{selectedCurrency[0].name}</p>
                                    <p className="text-sm font-bold">{selectedCurrency[0].symbol}1,640</p>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 my-auto">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                                </svg>
                                <div>
                                    <p className="font-medium text-gray-500 text-sm">{currency.name}</p>
                                    <p className="text-sm font-bold"> {currency.symbol}1</p>
                                </div>
                            </div>
                        </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr]">
                <Card className="overflow-hidden p-5 hs">
                    <CardContent className="overflow-x-scroll hs">
                        <div className="flex justify-between w-full mb-4">
                            <h2 className="font-bold text-lg">Recent Transactions</h2>
                            <p className="text-right text-light_grey text-sm cursor-pointer">See All</p>
                        </div>
                    </CardContent>
                    <CardContent className=" overflow-x-scroll hs">
                        <ul className="space-y-2 min-w-xl overflow-x-auto hs">
                            {[
                                { type: "Sent GBP", amount: "₦1,000,000", sign: "-", color: "#ff4d6d", bg: "bg-[#ffeaee]", desc: "Sent to John Doe", createdAt: "Today 13:00" },
                                { type: "Exchanged GBP -> NGN", amount: "", sign: "", color: "#ffc300", bg: "bg-[#fff2e7]", desc: "Sent to John Doe", createdAt: "Today 13:00", amount2: '-₦1,000,000'  },
                                { type: "Receive GBP -> NGN", amount: "+ ₦200,000", sign: "+", color: "#61ac46", bg: "bg-[#e6fdde]", desc: "Sent to John Doe", createdAt: "Today 13:00", amount2: '-£1,000 /'  },
                                { type: "Withdraw GBP", amount: "+ ₦200,000", sign: "+", color: "#b3adad", bg: "bg-[#ededed]", desc: "Sent to John Doe", createdAt: "Today 13:00"  }
                            ].map((tx, idx) => (
                                <li key={idx} className="flex w-full border-b border-light_grey py-2">
                                    <div className="flex gap-4 w-1/3">
                                        <div className={`w-10 h-10 p-3 rounded-lg ${tx.bg}`}>
                                            {
                                                idx === 0 ? (
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke={tx.color} class="size-4 my-auto">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                                                    </svg>
                                                ) : idx === 1 ? (
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke={tx.color} class="size-4 my-auto">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                                                    </svg>
                                                ) : (
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke={tx.color} class="size-4 my-auto">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                                                    </svg>
                                                )
                                            }
                                            
                                        </div>
                                        <p className="text-sm font-semibold my-auto">{tx.type}</p>
                                    </div>
                                    <div className=" w-1/3 my-auto">
                                        <p className="text-[#939393] my-auto ">{tx.desc} <span className="text-light_grey">. {tx.createdAt}</span></p>
                                    </div>
                                    <div className=" w-1/3 my-auto flex gap-4 justify-end">
                                        <p className="font-bold text-right"><span className="text-red-600">{tx.amount2 || ''}</span> {tx.amount}</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 my-auto">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                                        </svg>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>

                <Card className="h-92">
                    <CardContent className="p-5">
                        <div className="flex justify-between w-full mb-4">
                            <h2 className="font-bold text-lg nunito-sans my-auto">Money out/Money in</h2>
                            <button className="px-2 py-1.5 rounded-2xl bg-[#f5f5f5] flex gap-1 cursor-pointer" title="Personal account">
                                <p className="text-xs hidden text-black font-bold reg:block">Date Range </p>
                                <svg className="my-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="grey" class="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </button>
                        </div>
                        <div className="h-64">
                        {chartData ? (
                            <Line data={chartData} options={{
                            responsive: true,
                            plugins: {
                                legend: {
                                position: 'top',
                                },
                            },
                            scales: {
                                y: {
                                beginAtZero: true,
                                ticks: {
                                    callback: function(value) {
                                    return `₦${value.toLocaleString()}`;
                                    }
                                }
                                }
                            }
                            }} />
                        ) : (
                            <div className="text-gray-500 text-sm text-center py-20">Loading chart...</div>
                        )}
                        </div>
                    </CardContent>
                </Card>
            </div>

        </div>
    </div>
  );
}