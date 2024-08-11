import React from 'react'

export default function Card() {
  return (
    <div class="flex flex-col rounded-2xl w-96 bg-[#d7d7d7] shadow-xl">
     <figure class="flex justify-center items-center rounded-2xl">
        <image src="https://tailwind-generator.b-cdn.net/images/card-generator/tailwind-card-generator-card-preview.png" alt="Card Preview" class="rounded-t-2xl"></image>
    </figure>
    <div class="flex flex-col p-8">
        <div class="text-2xl font-bold   text-[#374151] pb-6">Generator</div>
        <div class=" text-lg   text-[#374151]">Leverage a graphical editor to create beautiful web components.</div>
        <div class="flex justify-end pt-6">
            <button class="bg-[#9532ea] text-[#ffffff]  font-bold text-base  p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform">Try it out!</button>
        </div>
    </div>
</div>
  )
}
