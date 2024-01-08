"use client"
import SearchBar from '@/components/Searchbar'
import Image from 'next/image'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

type Props = {}

export default function Home({}: Props) {
  return (
    <BrowserRouter>
      <div className='pt-10 flex justify-center'>
        <SearchBar/>
      </div>
      
    </BrowserRouter>
  )
}
