import { Play } from 'phosphor-react'
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
    return (
        <HomeContainer>
            <form action="">
                <FormContainer>
                    <label htmlFor="">Vou trabalhar em</label>
                    <TaskInput
                        placeholder="De um nome para o seu projeto"
                        id="task"
                    />
                    <label htmlFor="">durante</label>
                    <MinutesAmountInput type="number" id="minutesAmount" />
                    <span>minutos.</span>
                </FormContainer>

                <CountdownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountdownContainer>

                <StartCountdownButton type="submit">
                    <Play size={24} />
                    Iniciar
                </StartCountdownButton>
            </form>
        </HomeContainer>
    )
}
