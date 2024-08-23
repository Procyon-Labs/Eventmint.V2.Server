"use client";
import Input from "@/component/Input/Input";
import SearchTickets from "@/component/searchTickets";
import TicketResult from "@/component/ticketResult";
import React, { useState } from "react";
import { ticketDummy } from "@/component/ticketResult/ticketDataResult";
import Pagination from "@mui/material/Pagination";
import { useSelector } from "react-redux";

export default function Page() {
  const events = useSelector((state: any) => state.event.events);

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(6);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  const ticketSli = events.slice(firstPostIndex, lastPostIndex);

  console.log(events, "events");

  if (events.length === 0) {
    return <div>No events created yet.</div>;
  }

  const handlePageChange = (event: any, value: any) => {
    setCurrentPage(value);
  };

  return (
    <div className="border rounded-[24px] bg-[rgba(25,29,35,0.5)] flex flex-col items-start gap-8 flex-[1_0_0%]">
      <div className="px-[32px] w-full border-b border-[#4B5768]">
        <SearchTickets />
      </div>
      <div className="flex px-8 items-center content-center gap-6 self-stretch flex-wrap">
        {ticketSli.map((item: any, index: any) => (
          <TicketResult
            key={index}
            image={item.image}
            name={item.name}
            category={item.category}
            location={item.location}
            quantity={item.quantity}
            price={item.price}
            date={item.date}
            link={item.blink}
          />
        ))}
      </div>
      <div className="flex px-6 py-8 justify-end items-center gap-8 self-stretch">
        <Pagination
          count={Math.ceil(ticketDummy.length / postPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </div>
    </div>
  );
}
