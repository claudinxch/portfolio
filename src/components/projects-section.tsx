import { Container } from './container'
import { Title } from './title'
import { useSection } from '../contexts/section'
import { PrimaryButton } from './primary-button'
import { ProjectList } from './project-list'
import { repositories } from './data/repositories'

export const ProjectsSection = () => {
  const { changeId } = useSection()
  return (
    <Container className="">
      <Title className="w-[165px]">Projects</Title>
      <div className="flex flex-row justify-between">
        <ProjectList repositories={repositories} />
        <div className="flex items-center mt-4">
          <PrimaryButton
            onClick={() => changeId()}
            btnTitle={''}
            className="sm:p-2 lg:p-5"
          />
        </div>
      </div>
    </Container>
  )
}
