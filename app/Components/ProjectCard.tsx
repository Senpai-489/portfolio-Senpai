'use client'
import { IconExternalLink } from '@tabler/icons-react'
import React, { useState } from 'react'
import Image from 'next/image'

interface ProjectCardProps {
  Title: string
  Description: string
  Technologies: string[]
  LiveDemo?: string
  SourceCode?: string
  Image?: string | Blob
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const [showImage, setShowImage] = useState(false)

  return (
    <div className="flex flex-col bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
      <div className="relative h-48 sm:h-56">
        <Image
          src={typeof props.Image === 'string' ? props.Image : ''}
          alt={props.Title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4 sm:p-6">
        <h3 className="text-xl sm:text-2xl font-semibold mb-2">{props.Title}</h3>
        <p className="text-sm sm:text-base text-gray-300 mb-4">
          {props.Description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {props.Technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs sm:text-sm bg-[#2a2a2a] rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex  gap-4">
          {props.LiveDemo && (
            <a
              href={props.LiveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm bg-[#00ffff] text-black rounded hover:opacity-80"
            >
              Live Demo
            </a>
          )}
          {props.SourceCode && (
            <a
              href={props.SourceCode}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm border border-[#00ffff] text-[#00ffff] rounded hover:bg-[#00ffff] hover:text-black"
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
