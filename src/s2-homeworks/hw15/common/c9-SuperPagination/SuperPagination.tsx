import React from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import {Pagination} from '@mui/material'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
  id?: string
  page: number
  itemsCountForPage: number
  totalCount: number
  onChange: (args: {newPage?: number, newCount?: number}) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
  {
    page, itemsCountForPage, totalCount, onChange, id = 'hw15',
  }
) => {
  const lastPage = Math.ceil(totalCount / itemsCountForPage) // пишет студент // вычислить количество страниц

  const onChangePage = (_event: any, page: number) => {
    // пишет студент
    onChange({newPage: page})
  }

  const onChangeCount = (newCount: number) => {
    // пишет студент
    onChange({newCount: newCount})
  }

  return (
    <div className={s.pagination}>
      <Pagination
        id={id + '-pagination'}
        shape={'rounded'}
        color={'primary'}
        page={page}
        count={lastPage}
        onChange={onChangePage}
        hideNextButton
        hidePrevButton
      />

      <span className={s.text1}>
                показать
            </span>

      <SuperSelect
        id={id + '-pagination-select'}
        value={itemsCountForPage}
        options={[
          {id: 4, value: 4},
          {id: 7, value: 7},
          {id: 10, value: 10},
        ]}
        onChangeOption={onChangeCount}
        selectStyles={{
          minWidth: '40px',
          width: '40px',
        }}
      />

      <span className={s.text2}>
                строк в таблице
            </span>
    </div>
  )
}

export default SuperPagination
