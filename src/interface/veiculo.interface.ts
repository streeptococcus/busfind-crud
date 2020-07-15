export interface Veiculo {
    id_veiculo?: Int32List;
    nome_veiculo: string;
    modelo_veiculo: string;
    created_at: Date;
    modified_at: Date;
    id_linha_fk?: Int32List;
}