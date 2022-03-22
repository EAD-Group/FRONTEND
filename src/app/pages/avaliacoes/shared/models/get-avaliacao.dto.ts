import { GetAvaliacoesFeitasDto } from './get-avaliacoes-feitas.dto';
export interface GetAvaliacaoDto {
    id: string
    titulo: string
    descricao: string
    avaliacao: string
    peso: number
    enviadas: GetAvaliacoesFeitasDto[]
}