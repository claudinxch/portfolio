import { ComponentProps } from 'react'
import { RepositoriesInterface } from '../interfaces/repositories-interface'
import { ProjectCard } from './project-card'

interface ProjectListProps extends ComponentProps<'div'> {
  repositories: RepositoriesInterface[]
}

export const ProjectList = ({ repositories, ...props }: ProjectListProps) => {
  return (
    <div
      {...props}
      className="flex flex-wrap gap-4 max-h-[800px] min-w-[400px] pt-4 mr-2 overflow-y-auto overflow-x-hidden 2xl:gap-x-28 3xl:overflow-hidden"
    >
      {repositories.map((repo) => (
        <ProjectCard repo={repo} key={repo.title} />
      ))}
    </div>
  )
}
