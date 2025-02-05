import React, {
  SelectHTMLAttributes,
  DetailedHTMLProps,
  ChangeEvent,
} from 'react'
import s from './SuperSelect.module.css'
import {Option} from '../../HW7';

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
  options?: Array<Option>
  onChangeOption?: (option: number) => void
  selectStyles?: React.CSSProperties
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
  {
    options,
    className,
    onChange,
    onChangeOption,
    selectStyles,
    ...restProps
  }
) => {
  const mappedOptions:  JSX.Element[] = options
    ? options.map((o) => (
      <option
        id={'hw7-option-' + o.id}
        className={s.option}
        key={o.id}
        value={o.id}
      >
        {o.value}
      </option>
    ))
    : [] // map options with key

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    // делают студенты
    onChangeOption && onChangeOption(+e.currentTarget.value)
  }

  const finalSelectClassName = s.select + (className ? ' ' + className : '')

  return (
    <select
      className={finalSelectClassName}
      onChange={onChangeCallback}
      style={selectStyles}
      {...restProps}
    >
      {mappedOptions}
    </select>
  )
}

export default SuperSelect
