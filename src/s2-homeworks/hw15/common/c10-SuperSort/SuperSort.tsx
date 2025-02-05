import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import SwapVertIcon from '@mui/icons-material/SwapVert';


export type SuperSortPropsType = {
  id?: string
  sort: string
  value: string
  onChange: (newValue: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
  // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
  switch(sort) {
    case up:
      return ''
    case down:
      return up
    default:
      return down
  }
}

const SuperSort: React.FC<SuperSortPropsType> = (
  {
    sort, value, onChange, id = 'hw15',
  }
) => {
  const up = '0' + value
  const down = '1' + value

  const onChangeCallback = () => {
    onChange(pureChange(sort, down, up))
  }

  const icon = sort === down
    ? <ArrowDropDownIcon fontSize="small" />
    : sort === up
      ? <ArrowDropUpIcon  fontSize="small" />
      : <SwapVertIcon  fontSize="small" sx={{color: '#adabac'}} />

  return (
    <span
      id={id + '-sort-' + value}
      onClick={onChangeCallback}
    >
            {/*сделать иконку*/}
      {/*<img*/}
      {/*    id={id + '-icon-' + sort}*/}
      {/*    src={icon}*/}
      {/*/>*/}

      {icon} {/*а это убрать*/}
        </span>
  )
}

export default SuperSort
