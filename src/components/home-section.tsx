import { ReactTyped } from 'react-typed'
import { Container } from './container'
import { Title } from './title'
import { useTheme } from '../contexts/theme'
import { useSection } from '../contexts/section'
import { PrimaryButton } from './primary-button'
import { NavLinks } from './nav-links'

export const HomeSection = () => {
  const { mode } = useTheme()
  const { changeId } = useSection()

  const strings: string[] = [
    'I develop cool <strong class="custom-text">interactive web applications</strong>',
    'I create stunning <strong class="custom-text">responsive websites</strong>',
    'I code amazing <strong class="custom-text">interfaces<strong>',
    'I build <strong class="custom-text">user-friendly applications</strong>',
  ]
  return (
    <Container className="">
      <Title>Home</Title>
      <div
        className={`${mode === 'dark' ? 'text-[#EFF1F5]' : 'text-[#101010]'} my-16`}
      >
        <h1 className="mb-[5px] max-w-[200px] text-[20px] leading-tight font-inter md:text-[44px] md:max-w-[400px] lg:max-w-[1010px] lg:leading-normal">
          Welcome to my code space! {"I'm"}{' '}
          <strong className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
            Claudio Moura
          </strong>
          , a Front-end Engineer, from Rio.
        </h1>
        <p className="h-6 max-w-[200px] md:max-w-full">
          <ReactTyped
            strings={strings}
            typeSpeed={25}
            backSpeed={15}
            startWhenVisible={false}
            loop
            showCursor={false}
            backDelay={1000}
            className="text-xl leading-snug"
          />
        </p>
      </div>
      <PrimaryButton
        onClick={() => changeId()}
        btnTitle={"Let's get started"}
        className="px-6 py-5 lg:px-28 lg:py-12"
      />
      <NavLinks className="sm:hidden mt-6" />
    </Container>
  )
}
