"use client"
import Image from "next/image";
import { numberToWords } from "./functions/numberToWords";

import Download from "./components/DownloadPDF";
import InvoicePage from "./components/InvoicePage";
import { Invoice } from "./data/types";

export default function Home() {
  // let data = null;
  // if (typeof window !== "undefined") {
  //   try {
  //     const savedInvoice = window.localStorage.getItem('invoiceData');
  //     if (savedInvoice) {
  //       data = JSON.parse(savedInvoice);
  //     }
  //   } catch (error) {
  //     console.error("Failed to parse saved invoice data:", error);
  //   }
  // }

  // const onInvoiceUpdated = (invoice: Invoice) => {
  //   if (typeof window !== "undefined") {
  //     try {
  //       window.localStorage.setItem('invoiceData', JSON.stringify(invoice));
  //     } catch (error) {
  //       console.error("Failed to save invoice data:", error);
  //     }
  //   }
  // };
  return (
    <main className="mt-8 mb-12 mx-auto w-[700px]">
      <h1 className="text-3xl text-center font-bold mb-20">HAPPY BIRTHDAY MOM</h1>
      <InvoicePage />
      {/* <InvoicePage data={data} onChange={onInvoiceUpdated} /> */}
    </main>
  );
}