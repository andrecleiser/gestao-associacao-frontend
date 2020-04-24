import { EscolaAcaoEnum } from './../../shared/models/escolha-acao.enum';

export interface DadosModal {
    titulo: string;
    mensagem: string;
    textoBotaoEsquerdo: string;
    textoBotaoDireito: string;
    escolhaAcao?: EscolaAcaoEnum;
}
