import { ComponentProps, useState } from 'react'
import { RepositoriesInterface } from '../interfaces/repositories-interface'
import { ProjectCard } from './project-card'
import { Modal } from './modal'
interface ProjectListProps extends ComponentProps<'div'> {
  repositories: RepositoriesInterface[]
}

export const ProjectList = ({ repositories, ...props }: ProjectListProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [modalContent, setModalContent] =
    useState<RepositoriesInterface | null>(null)

  const openModal = (content: RepositoriesInterface) => {
    setModalContent(content)
    setIsModalOpen(true)
  }

  return (
    <div
      {...props}
      className="flex flex-wrap gap-4 max-h-[750px] min-w-[360px] pt-4 mr-2 overflow-y-auto overflow-x-hidden lg:max-h-[800px] lg:min-w-[650px] 2xl:justify-normal xl:w-full 2xl:gap-x-28  3xl:overflow-hidden"
    >
      {isModalOpen && modalContent && (
        <Modal
          content={modalContent}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
      {repositories.map((repo) => (
        <ProjectCard
          repo={repo}
          openModal={() => openModal(repo)}
          key={repo.title}
        />
      ))}
    </div>
  )
}
