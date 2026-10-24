"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Catalog } from "@/components/Catalog";
import { RequestGameModal } from "@/components/RequestGameModal";

export default function CatalogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isRequestOpen, setIsRequestOpen] = useState(false);
  const [requestedTitle, setRequestedTitle] = useState("");

  const handleOpenRequest = (title?: string) => {
    setRequestedTitle(title || "");
    setIsRequestOpen(true);
  };

  return (
    <>
      <Header onSearch={setSearchQuery} />
      <main style={{ padding: "1.5rem 0 4rem" }}>
        <Catalog
          searchQuery={searchQuery}
          onRequestGame={handleOpenRequest}
        />
      </main>

      <RequestGameModal
        isOpen={isRequestOpen}
        onClose={() => setIsRequestOpen(false)}
        initialGame={requestedTitle}
      />
    </>
  );
}
