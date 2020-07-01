import { ProgressoRequisicaoInterceptor } from './progresso-requisicao.interceptor';
import { NgModule } from '@angular/core';
import { ProgressoRequisicaoComponent } from './progresso-requisicao.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
    imports: [],
    exports: [],
    declarations: [ProgressoRequisicaoComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ProgressoRequisicaoInterceptor,
            multi: true
        }
    ]
})

export class ProgressoCarregamentoModule { }
