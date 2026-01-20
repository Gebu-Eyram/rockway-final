import { projects } from "@/constants";
import { CheckCircle2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div className="w-full max-w-7xl mx-auto ">
      {projects.map((project, id) => {
        const contentCard = (
          <div className="bg-muted/20 flex flex-col items-start justify-center rounded-3xl p-6">
            <Image
              src={project.companyUrl}
              alt={project.title}
              height={48}
              width={160}
              className="mb-4 h-20 w-auto object-contain"
            />
            <h2 className="text-3xl font-semibold  mb-6 tracking-tighter text-balance text-gray-900 md:text-4xl inter">
              {project.title}
            </h2>

            <p className="text-muted-foreground">{project.description}</p>

            {project.achievements.map((achievement, idx) => (
              <div key={idx} className="flex items-center mt-4">
                <CheckCircle2Icon className="h-5 w-5 text-green-500 mt-1 mr-2 shrink-0" />
                <p className="text-gray-700">{achievement}</p>
              </div>
            ))}
          </div>
        );

        const imageCard = (
          <div className="h-140 bg-muted rounded-3xl relative overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('${project.image}')`,
              }}
            ></div>
          </div>
        );

        return (
          <div
            key={id}
            className="w-full inter mx-auto py-8 px-4 max-w-7xl grid lg:grid-cols-2 gap-6"
          >
            {id % 2 === 0 ? (
              <>
                {contentCard}
                {imageCard}
              </>
            ) : (
              <>
                {imageCard}
                {contentCard}
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
