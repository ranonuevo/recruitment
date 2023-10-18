
import { Linkedin, Bot, Globe, GraduationCap } from 'lucide-react'

export const STATIC_SOURCES = [
  {
    id: 1,
    value: 'LinkedIn',
    label: 'LinkedIn',
    icon: Linkedin,
  },
  {
    id: 2,
    value: 'Virtual Robot',
    label: 'Virtual Robot',
    icon: Bot,
  },
  {
    id: 3,
    value: 'Website',
    label: 'Website',
    icon: Globe,
  },
]

export const STATIC_EDUCATIONS = [
  {
    id: 1,
    value: 'Bachelor Degree',
    label: 'Bachelor Degree',
    icon: GraduationCap,
  },
  {
    id: 2,
    value: 'Master Degree',
    label: 'Master Degree',
    icon: GraduationCap,
  },
]



export const STATIC_STATES = [
  {
    id: 1,
    value: '1',
    label: 'To Engage'
  }, {
    id: 2,
    value: '2',
    label: 'Considering'
  }, {
    id: 3,
    value: '3',
    label: 'Interested'
  }, {
    id: 4,
    value: '4',
    label: 'Cannot Reach'
  }, {
    id: 5,
    value: '5',
    label: 'Engaging'
  }
]
export const getStatesLabelByValue = (value: string) => {
  const state = STATIC_STATES.find((s: any) => {
    return s.value === value
  })

  if (state) {
    return state.label
  }

  return ''
}