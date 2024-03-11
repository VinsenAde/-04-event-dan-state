"use client";
import Tombol_1, { Tombol_2, Tombol_3 } from "@/components/button";
import Gallery from "@/components/gallery";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <div className="container mx-auto">
   <h2>KuisKota</h2>
   <Tombol_1 />
   <hr/>
   <br/>
   <Tombol_2 isiPesan="Ini Pesan" namaTombol="PESAN"/>
   </div>
   <hr/>
   <br/>
   <div className="bg-red-300" onClick={( ) => alert( 'Parent Element :Div ')}>
    <Tombol_3 isiPesan="Child Elements : Tombol-1" namaTombol= "Tombol-1"/>
    <Tombol_3 isiPesan="Child Elements : Tombol-2" namaTombol= "Tombol-2"/>
   </div>
   <br/><br/>
    <Gallery/>
   </>
  );
}
