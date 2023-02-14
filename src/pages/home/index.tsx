import { Play, Watch } from 'phosphor-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import {
    CountdownContainer,
    FormContainer,
    HomeContainer,
    MinutesAmountInput,
    Separator,
    StartCountdownButton,
    TaskInput,
} from './styles'

export function Home() {
    const { register, handleSubmit, watch } = useForm()

    function handleCreateNewCycle(data: any) {
        console.log(data)
    }

    const task = watch('task')
    const isSubmitDisabeled = !task

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)}>
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput
                        id="task"
                        list="task-suggestions"
                        placeholder="De um nome para o seu projeto"
                        {...register('task')}
                    />
                    <datalist id="task-suggestions">
                        <option value="Projeto 1"></option>
                        <option value="Projeto 2"></option>
                        <option value="Projeto 3"></option>
                        <option value="Banana"></option>
                    </datalist>

                    <label htmlFor="minutesAmount">durante</label>
                    <MinutesAmountInput
                        type="number"
                        id="minutesAmount"
                        placeholder="00"
                        step={1}
                        min={1}
                        max={60}
                        {...(register('minutesAmount'),
                        { valueAsNumber: true })}
                    />
                    <span>minutos.</span>
                </FormContainer>

                <CountdownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountdownContainer>

                <StartCountdownButton
                    disabled={isSubmitDisabeled}
                    type="submit"
                >
                    <Play size={24} />
                    Iniciar
                </StartCountdownButton>
            </form>
        </HomeContainer>
    )
}
