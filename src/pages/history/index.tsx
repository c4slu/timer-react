import { HistoryContent, HistoryList, Status } from './styles'

export function History() {
    return (
        <HistoryContent>
            <h1>Meu Historico</h1>
            <HistoryList>
                <table>
                    <thead>
                        <tr>
                            <th>Tarefa</th>
                            <th>Duracao</th>
                            <th>Inicio</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>Ha 2 meses</td>
                            <td>
                                <Status statusColor="green">Concluido</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>30 minutos</td>
                            <td>Ha 2 meses</td>
                            <td>
                                <Status statusColor="yellow">
                                    Em Andamento
                                </Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>50 minutos</td>
                            <td>Ha 2 meses</td>
                            <td>
                                <Status statusColor="red">Interrompiddo</Status>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </HistoryList>
        </HistoryContent>
    )
}
