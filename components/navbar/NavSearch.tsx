'use client';

import {Input} from "@/components/ui/input";
import {useRouter, useSearchParams} from 'next/navigation';
import {useDebouncedCallback} from 'use-debounce';
import {useEffect, useState} from 'react';

function NavSearch() {
  const searchParams = useSearchParams();
  console.log(searchParams);
  const {replace} = useRouter();
  const [search, setSearch] = useState(searchParams.get("search") || '');

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    replace(`/products?${params.toString()}`)
  }, 500);


  useEffect(() => {
    if (!searchParams.get("search")) {
      setSearch("");
    }
  }, [searchParams]);

  return (
    <Input
      type="search"
      placeholder={"Search product..."}
      className={"max-w-xs dark:bg-muted"}
      onChange={(e) => {
        setSearch(e.target.value)
        handleSearch(e.target.value)
      }}
      value={search}
    />
  );
}

export default NavSearch;