export interface Posicao {
    id_posicao?: Int32List;
    lati: DoubleRange;
    longi: DoubleRange;
    created_at: Date;
    modified_at: Date;
    id_veiculo_fk: Int32List;
}