import { useState } from "react";
import dashboard from '../../assets/dashboard.png';
import wallet from '../../assets/wallet.png';
import merchants from '../../assets/shop.png';
import transactions from '../../assets/transaction.png';
import beneficiaries from '../../assets/beneficiary.png';

const Navbar = () => {
    const [showDropDown, setShowDropDown] = useState(false);
    const [selectedTab, setSelectedTab] = useState('dashboard');
    const toggleShowDropdown = () => {
        setShowDropDown((prevVal)=>!prevVal);
    }
    return ( 
        <>
            <nav className="hidden rg:flex w-full mb-6 px-4 md:px-8">
                <div className="border-b border-light_grey h-12 w-[150px]">
                    <img className="w-full h-12" src="https://res.cloudinary.com/dcril21yl/image/upload/v1695308452/ClearerPay_Logo-removebg-preview_23028_2_ojuqya.png" />
                </div>
                
                <ul className="w-3/4 flex reg:pl-5 border-b h-12 border-light_grey phone:gap-4 phone:border-b-0">
                  <li
                    className={`${
                      selectedTab === "dashboard"
                        ? "text-primary font-bold border-b-2 phone:text-dark"
                        : "text-dark"
                    } text-sm p-3 flex gap-2 text-center cursor-pointer phone:p-2.5 phone:rounded-rg`}
                    onClick={() => setSelectedTab("dashboard")}
                  >
                    {selectedTab === "dashboard" && (<img className="w-4 h-4 my-auto" src={dashboard} />)}
                    Dashboard
                  </li>
                  <li
                    className={`${
                      selectedTab === "wallet"
                        ? "text-primary font-bold border-b-2 phone:text-dark"
                        : "text-dark"
                    } text-sm p-3 flex gap-2 text-center cursor-pointer phone:p-2.5 phone:rounded-rg`}
                    onClick={() => setSelectedTab("wallet")}
                  >
                    {selectedTab === "wallet" && (<img className="w-4 h-4 my-auto" src={wallet} />)}
                    Wallet
                  </li>
                  <li
                    className={`${
                      selectedTab === "merchants"
                        ? "text-primary font-bold border-b-2 phone:text-dark"
                        : "text-dark"
                    } text-sm p-3 flex gap-2 text-center cursor-pointer phone:p-2.5 phone:rounded-rg`}
                    onClick={() => setSelectedTab("merchants")}
                  >
                    {selectedTab === "merchants" && (<img className="w-4 h-4 my-auto" src={merchants} />)}
                    Merchants
                  </li>
                  <li
                    className={`${
                      selectedTab === "transactions"
                        ? "text-primary font-bold border-b-2 phone:text-dark"
                        : "text-dark"
                    } text-sm p-3 flex gap-2 text-center cursor-pointer phone:p-2.5 phone:rounded-rg`}
                    onClick={() => setSelectedTab("transactions")}
                  >
                    {selectedTab === "transactions" && (<img className="w-4 h-4 my-auto" src={transactions} />)}
                    Transactions
                  </li>
                  <li
                    className={`${
                      selectedTab === "beneficiaries"
                        ? "text-primary font-bold border-b-2 phone:text-dark"
                        : "text-dark"
                    } text-sm p-3 flex gap-2 text-center cursor-pointer phone:p-2.5 phone:rounded-rg`}
                    onClick={() => setSelectedTab("beneficiaries")}
                  >
                    {selectedTab === "beneficiaries" && (<img className="w-4 h-4 my-auto" src={beneficiaries} />)}
                    Beneficiaries
                  </li>
                </ul>
                <div className="flex reg:w-1/3 max-w-[250px] border-b border-light_grey items-center gap-4 h-12">
                  <button className="px-2 py-1.5 reg:w-[160px] rounded-2xl bg-[#4d4d4d] flex justify-between cursor-pointer" title="Personal account">
                    <svg className="my-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                    <p className="text-xs hidden text-white reg:block">Personal account</p>
                    <svg className="my-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                  <a className="flex gap-1 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
        
                    <p className="text-xs">Settings</p>
                  </a>
                </div>
            </nav>
            <nav class="w-full px-4 py-[15px] block duration-200 rg:hidden z-10">
                <section class="w-full flex justify-between">
                    <a href="/" class="outline-none border-none my-auto">
                        <img src="https://res.cloudinary.com/dcril21yl/image/upload/v1695308452/ClearerPay_Logo-removebg-preview_23028_2_ojuqya.png" alt="logo" class="cursor-pointer object-cover h-10"/>
                    </a>
                    <div class="transition-all ease-in my-auto flex gap-5">
                      <div className="flex reg:w-1/3 max-w-[250px] items-center gap-4 h-12">
                        <button className="px-2 py-1.5 reg:w-[160px] rounded-2xl bg-[#4d4d4d] flex justify-between cursor-pointer" title="Personal account">
                          <svg className="my-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-4">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                          </svg>
                          <svg className="my-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-4">
                              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                          </svg>
                        </button>
                        <a className="flex gap-1 cursor-pointer" title="settings">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          </svg>
                        </a>
                      </div>
                      <div className="my-auto" onClick={()=>toggleShowDropdown()}>
                        {
                            !showDropDown ? (
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 12.5C21 12.6989 20.921 12.8897 20.7803 13.0303C20.6397 13.171 20.4489 13.25 20.25 13.25H3.75C3.55109 13.25 3.36032 13.171 3.21967 13.0303C3.07902 12.8897 3 12.6989 3 12.5C3 12.3011 3.07902 12.1103 3.21967 11.9697C3.36032 11.829 3.55109 11.75 3.75 11.75H20.25C20.4489 11.75 20.6397 11.829 20.7803 11.9697C20.921 12.1103 21 12.3011 21 12.5ZM3.75 7.25H20.25C20.4489 7.25 20.6397 7.17098 20.7803 7.03033C20.921 6.88968 21 6.69891 21 6.5C21 6.30109 20.921 6.11032 20.7803 5.96967C20.6397 5.82902 20.4489 5.75 20.25 5.75H3.75C3.55109 5.75 3.36032 5.82902 3.21967 5.96967C3.07902 6.11032 3 6.30109 3 6.5C3 6.69891 3.07902 6.88968 3.21967 7.03033C3.36032 7.17098 3.55109 7.25 3.75 7.25ZM20.25 17.75H3.75C3.55109 17.75 3.36032 17.829 3.21967 17.9697C3.07902 18.1103 3 18.3011 3 18.5C3 18.6989 3.07902 18.8897 3.21967 19.0303C3.36032 19.171 3.55109 19.25 3.75 19.25H20.25C20.4489 19.25 20.6397 19.171 20.7803 19.0303C20.921 18.8897 21 18.6989 21 18.5C21 18.3011 20.921 18.1103 20.7803 17.9697C20.6397 17.829 20.4489 17.75 20.25 17.75Z" fill="#000000"/>
                                </svg>
                            ) : (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.281 18.2194C19.3507 18.289 19.406 18.3718 19.4437 18.4628C19.4814 18.5539 19.5008 18.6514 19.5008 18.75C19.5008 18.8485 19.4814 18.9461 19.4437 19.0372C19.406 19.1282 19.3507 19.2109 19.281 19.2806C19.2114 19.3503 19.1286 19.4056 19.0376 19.4433C18.9465 19.481 18.849 19.5004 18.7504 19.5004C18.6519 19.5004 18.5543 19.481 18.4632 19.4433C18.3722 19.4056 18.2895 19.3503 18.2198 19.2806L12.0004 13.0603L5.78104 19.2806C5.64031 19.4213 5.44944 19.5004 5.25042 19.5004C5.05139 19.5004 4.86052 19.4213 4.71979 19.2806C4.57906 19.1399 4.5 18.949 4.5 18.75C4.5 18.551 4.57906 18.3601 4.71979 18.2194L10.9401 12L4.71979 5.78061C4.57906 5.63988 4.5 5.44901 4.5 5.24999C4.5 5.05097 4.57906 4.8601 4.71979 4.71936C4.86052 4.57863 5.05139 4.49957 5.25042 4.49957C5.44944 4.49957 5.64031 4.57863 5.78104 4.71936L12.0004 10.9397L18.2198 4.71936C18.3605 4.57863 18.5514 4.49957 18.7504 4.49957C18.9494 4.49957 19.1403 4.57863 19.281 4.71936C19.4218 4.8601 19.5008 5.05097 19.5008 5.24999C19.5008 5.44901 19.4218 5.63988 19.281 5.78061L13.0607 12L19.281 18.2194Z" fill="#000000"/>
                                </svg>
                            )
                        }
                      </div>
                    </div>
                </section>
                {showDropDown && (
                  <ul 
                      class="list-none w-full flex flex-col gap-8 absolute px-10 pt-8 pb-10 bg-[#78B60F] top-[80px] left-0 z-[999] text-center rounded-b-lg"
                  >
                      <li class="font-bold cursor-pointer my-auto text-lg text-white border-b border-white pb-3" onClick={toggleShowDropdown}>Dashboard </li>
                      <li class="font-bold cursor-pointer my-auto text-lg text-white border-b border-white pb-3" onClick={toggleShowDropdown}>Wallet </li>
                      <li class="font-bold cursor-pointer my-auto text-lg text-white border-b border-white pb-3" onClick={toggleShowDropdown}>Merchants</li>
                      <li class="font-bold cursor-pointer my-auto text-lg text-white border-b border-white pb-3" onClick={toggleShowDropdown}>Transactions</li>
                      <li class="font-bold cursor-pointer my-auto text-lg text-white border-b border-white pb-3" onClick={toggleShowDropdown}>Beneficiaries</li>
                  </ul>
                )}
            </nav>
        </>
     );
}
 
export default Navbar;