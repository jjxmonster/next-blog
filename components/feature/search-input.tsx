"use client";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { SearchIcon } from "../ui/icons";
import { Input } from "@nextui-org/input";
import { useRouter } from "next/navigation";

export const SearchInput = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const timeoutId = useRef<ReturnType<typeof setInterval>>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    timeoutId.current = setTimeout(() => {
      searchQuery.length
        ? router.replace(`/search?query=${searchQuery}`)
        : router.replace(`/`);
    }, 500);

    return () => {
      clearTimeout(timeoutId.current);
    };
  }, [searchQuery, router]);
  return (
    <Input
      onChange={handleChange}
      aria-label="Szukaj"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      labelPlacement="outside"
      placeholder="Szukaj..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );
};
