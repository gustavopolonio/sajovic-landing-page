import { Collapse as CollapseAntd } from 'antd'
import type { CollapseProps as CollapsePropsAntd } from 'antd'

interface CollapseProps {
  items: CollapsePropsAntd['items']
}

export const Collapse = ({ items }: CollapseProps) => {
  return <CollapseAntd items={items} size="large" />
}
