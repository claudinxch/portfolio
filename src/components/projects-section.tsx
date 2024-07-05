import { Container } from './container'
import { Title } from './title'
import { useSection } from '../contexts/section'
import { PrimaryButton } from './primary-button'
import { ProjectList } from './project-list'
import { repositories } from './data/repositories'
import { useTranslation } from 'react-i18next'

export const ProjectsSection = () => {
  const { changeId } = useSection()
  const { t } = useTranslation()
  return (
    <Container>
      <Title className="w-[165px]">{t('projects_title')}</Title>
      <div className="flex flex-col justify-between md:flex-row">
        <ProjectList repositories={repositories} />
        <div className="flex items-center justify-center mt-4">
          <PrimaryButton onClick={() => changeId()} className="p-5" />
        </div>
      </div>
    </Container>
  )
}
