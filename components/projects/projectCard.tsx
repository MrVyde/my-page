"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaGithub } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";

import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="w-full bg-[#FFFCFA] border border-gray-400 rounded-xl shadow-md overflow-hidden">
      {/* Project Preview Carousel */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop
        className="rounded-t-xl mt-3"
      >
        {project.images.map((image, index) => (
          <SwiperSlide key={image.src}>
            <div className="relative h-80 w-full">
              <Image
                src={image.src}
                alt={`${project.title} preview ${index + 1}`}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Description */}
      <div className="p-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {project.title}
        </h2>

        <p className="text-gray-800 mb-4 text-sm">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-4 text-xl mb-6">
          {project.technologies.map((technology) => (
            <i
              key={technology.name}
              className={technology.icon}
              title={technology.name}
            />
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded font-medium transition"
            >
              Live Preview
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded font-medium transition flex items-center space-x-2"
            >
              <FaGithub className="text-lg" />
              <span>View Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}