"use client";

import Script from "next/script";

export default function VursellChatWidget() {
  return (
    <Script
      src="https://vursell.duckdns.org/widget/widget.js"
      data-bot-id="52487262-bb7d-4e51-beb0-9032efe42d85"
      strategy="afterInteractive"
    />
  );
}