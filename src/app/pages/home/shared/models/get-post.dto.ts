export interface GetPostDto {
    id: string
    usuario: string
    corpo: string
    comentarios: Comentario[]
}

export interface Comentario {
    id: string
    usuario: string
    corpo: string
}
