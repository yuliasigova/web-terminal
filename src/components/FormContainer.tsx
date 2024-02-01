import styled from "styled-components";
import InputContainer, {Input} from "@/components/InputContainer";
import Button from "@/components/Button";
import {useForm, Controller} from "react-hook-form";
// @ts-ignore
import InputMask from "react-input-mask";
import {ChangeEvent, useState} from "react";
import {navigate} from "@/components/actions";
import Loader from "@/components/Loader";

interface Data {
    phone: string,
    sum: number
}
const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: #ffffff;
  border-radius: 20px;
  max-width: 400px;
  width: 100%;
  margin:  auto;
  
  @media (min-width: 768px) {
    max-width: 768px;
    padding: 30px;
  }

  @media (min-width: 1260px) {
    padding: 40px;
  }
`;

export default function FormContainer() {
    const {
        handleSubmit,
        control,
        reset,
    } = useForm(
        {mode:"onChange",
        defaultValues: {
        phone: '+7 ', sum: 1}
    })
    const [message, setMessage] = useState('')
    const [isDisabled, setIsDisabled] = useState(true)
    const [isLoad, setIsLoad] = useState(false)

    const onSubmit = async (data:Data) => {
        setIsDisabled(true);
        setIsLoad(true);
        await new Promise(function (resolve, reject) {
        setTimeout( () => {
              const value = Math.random()
            if (value > 0.5) {
                resolve( value)
            } else {
                reject(new Error("ошибка"))
            }
            }, 2000)

        }).then((res) => {
            setMessage('Успешно')
            setTimeout( () => {
                navigate()
            }, 2000)
        })
        .catch((err) => {
            setMessage('Что-то пошло не так. Попробуйте снова.')
            setTimeout( () => {
                setMessage('')
            }, 2000)
        })
        .finally( () => {
            reset()
            setIsLoad(false)
        })
    }


    return (
        <FormStyled onSubmit={handleSubmit(onSubmit)} >
                <Controller
                    name={'phone'}
                    control={control}
                    rules={{
                        required: true,
                        pattern: /\d+\s+\d+\s+\d{2}$/
                    }}
                    render={
                    ({field: {value, onChange}}) =>

                        <InputMask
                            mask="+7(999) 999 99 99"
                            name="phone"
                            value={value}
                            onChange = {(evt:ChangeEvent<HTMLInputElement>) => {
                                if ((evt.target.value).includes('_')) {
                                    setIsDisabled(true)
                                } else
                                    setMessage('')
                                    setIsDisabled(false)
                                    onChange(evt.target.value)}}
                            maskChar={null}

                            type={'tel'}>
                                <InputContainer
                                    textLabel={'Введите номер телефона:'}
                                />
                        </InputMask>}/>

            <Controller
                name="sum"
                control={control}
                rules={{ required: true,
                maxLength:4}}
            render={({field:{value, onChange}  }) =>
            <InputContainer
                onChange = {(evt:ChangeEvent<HTMLInputElement>) => {

                    if (parseInt(evt.target.value) > 1000) {
                        onChange((evt.target.value).slice(0,3))
                    }
                    else if (parseInt(evt.target.value) === 0) {
                        onChange(value = 1)
                    }
                    else onChange(evt.target.value)
                }}

                name="sum"
                value={value}
                min={1}
                type={'number'}
                textLabel={'Введите сумму:'}
                placeholder={'от 1 до 1000'}
                max={1000}/>}/>
            {isLoad ?  <Loader/> :
                <Button type={'submit'} disabled={isDisabled}>
                    Отправить
                </Button>}

           <p>{message}</p>

        </FormStyled>
    )
}

