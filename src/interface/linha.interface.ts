export interface Linha {
    id_linha?: Int32List;
    nome_linha: string;
    created_at?: Date;
    modified_at?: Date;
    id_parada_fk?: Int32List;
}