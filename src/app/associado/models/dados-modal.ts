import { EscolhaAcaoEnum } from './../../shared/models/escolha-acao.enum';

export interface DadosModal {
    titulo: string;
    mensagem: string;
    textoBotaoEsquerdo: string;
    textoBotaoDireito: string;
    escolhaAcao?: EscolhaAcaoEnum;
}
