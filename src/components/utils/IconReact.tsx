import React, { lazy, Suspense } from 'react'

interface IconProps {
  iconName: string
}

const loadSvg = (iconName: string) =>
  import(`../../svg/${iconName}.svg?raw`).then((module) => ({
    default: ({ ...props }) => (
      <div dangerouslySetInnerHTML={{ __html: module.default }} {...props} />
    ),
  }))

const LazySvgIcon: React.FC<IconProps> = ({ iconName }) => {
  const SvgComponent = lazy(() => loadSvg(iconName))

  return (
    <Suspense>
      <SvgComponent />
    </Suspense>
  )
}

const IconReact: React.FC<IconProps> = ({ iconName }) => (
  <LazySvgIcon iconName={iconName} />
)

export default IconReact
