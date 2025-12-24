import React from 'react';
import Image, { StaticImageData } from "next/image";

interface AboutCardProps {
  icon: string | StaticImageData;
  width?: number;
  height?: number;
  title: string;
  description: string;
  alt?: string;
  allign?: string;
  backgroundColor?: string;
}

export default function AboutCard({ icon, width, height, title, description, alt, allign, backgroundColor }: AboutCardProps) {
  return (
    <div style={{ backgroundColor }} className={`py-8 px-6 rounded-2xl flex flex-col items-${allign} gap-y-4 h-full rounded-xl`}>
      <Image src={icon} alt={alt || title} width={width} height={height} />
      <h2 className={`text-base font-bold text-[rgb(15,23,42)]`+ allign==='center' ? 'text-center' : allign==='end' ? 'text-end' : 'text-left'}>{title}</h2>
      <p className={`text-[rgba(15, 23, 42, 0.7)] text-sm font-extralight ${allign==='center' ? 'text-center' : allign==='end' ? 'text-end' : 'text-left'}`}>
        {description}
      </p>
    </div>
  );
}
