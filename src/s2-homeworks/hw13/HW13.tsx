import React, {useState} from 'react'
import s2 from '../../s1-main/App.module.css'
import s from './HW13.module.css'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import axios, {AxiosError} from 'axios'
import success200 from './images/200.svg'
import error400 from './images/400.svg'
import error500 from './images/500.svg'
import errorUnknown from './images/error.svg'

/*
* 1 - дописать функцию send
* 2 - дизэйблить кнопки пока идёт запрос
* 3 - сделать стили в соответствии с дизайном
* */

type Response = {
  errorText: string,
  info: string,
  yourBody: {
    success: boolean,
  },
  yourQuery: {}
}

type SuccessResponse = {
  data: Response
}

type Success = boolean | undefined | null
// type Errors = '400' | '500' // было
type Errors = 400 | 500 // стало

const HW13 = () => {
  const [code, setCode] = useState('')
  const [text, setText] = useState('')
  const [info, setInfo] = useState('')
  const [image, setImage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const send = (x?: boolean | null) => () => {
    const url =
      x === null
        ? 'https://xxxxxx.ccc' // имитация запроса на не корректный адрес
        : 'https://samurai.it-incubator.io/api/3.0/homework/test'

    setCode('')
    setImage('')
    setText('')
    setInfo('...loading')
    setIsLoading(true)

    axios
      .post<any, SuccessResponse, { success: Success }>(url, {success: x})
      .then((response) => {
        setCode('Код 200!')
        setImage(success200)
        // дописать
        setText(response.data.errorText)
        setInfo(response.data.info)
      })
      .catch((error: AxiosError<Response>) => {
        // дописать
        const errorImages: Record<Errors, string> = {
          400: error400,
          500: error500,
        }
        if (error.response?.data) {
          setImage(errorImages[error.response.status as Errors])
          setCode(`Ошибка ${error.response.status}!`)
          setText(error.response.data.errorText)
          setInfo(error.response.data.info)
        } else {
          setImage(errorUnknown)
          setCode('Error!')
          setText(error.message)
          setInfo(error.name)
        }
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <div id={'hw13'}>
      <div className={s2.hwTitle}>Homework #13</div>

      <div className={s2.hw}>
        <div className={s.buttonsContainer}>
          <SuperButton
            id={'hw13-send-true'}
            onClick={send(true)}
            xType={'secondary'}
            // дописать
            disabled={isLoading}
          >
            Send true
          </SuperButton>
          <SuperButton
            id={'hw13-send-false'}
            onClick={send(false)}
            xType={'secondary'}
            // дописать
            disabled={isLoading}
          >
            Send false
          </SuperButton>
          <SuperButton
            id={'hw13-send-undefined'}
            onClick={send(undefined)}
            xType={'secondary'}
            // дописать
            disabled={isLoading}
          >
            Send undefined
          </SuperButton>
          <SuperButton
            id={'hw13-send-null'}
            onClick={send(null)} // имитация запроса на не корректный адрес
            xType={'secondary'}
            // дописать
            disabled={isLoading}
          >
            Send null
          </SuperButton>
        </div>

        <div className={s.responseContainer}>
          <div className={s.imageContainer}>
            {image && <img src={image} className={s.image} alt="status"/>}
          </div>

          <div className={s.textContainer}>
            <div id={'hw13-code'} className={s.code}>
              {code}
            </div>
            <div id={'hw13-text'} className={s.text}>
              {text}
            </div>
            <div id={'hw13-info'} className={s.info}>
              {info}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HW13
