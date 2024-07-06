import { AboutMeSection } from './about-me-section'
import { HomeSection } from './home-section'
import { ProjectsSection } from './projects-section'
import { SkillsSection } from './skills-section'

interface Sections {
  id: number
}

export const Sections = ({ id }: Sections) => {
  switch (id) {
    case 0:
      return <HomeSection />
    case 1:
      return <ProjectsSection />
    case 2:
      return <SkillsSection />
    case 3:
      return <AboutMeSection />
  }
}
