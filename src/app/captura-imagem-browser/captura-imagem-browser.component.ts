import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-captura-imagem-browser',
  templateUrl: './captura-imagem-browser.component.html',
  styleUrls: ['./captura-imagem-browser.component.scss']
})

export class CapturaImagemBrowserComponent implements OnInit {

  @ViewChild('video', { static: true }) videoElement: ElementRef;
  @ViewChild('canvas', { static: true }) canvas: ElementRef;

  private configuracoes = {
    video: {
      facingMode: 'user',
      width: { ideal: 4096 },
      height: { ideal: 2160 }
    }
  };

  private capturouImagem = false;

  constructor(
    private renderer: Renderer2,
    public dialog: MatDialogRef<CapturaImagemBrowserComponent>
  ) { }

  ngOnInit(): void {
    this.iniciarCamera();
  }

  private iniciarCamera(): void {
    this.videoElement.nativeElement.play();
    const browser = navigator as any;
    browser.getUserMedia = (browser.getUserMedia ||
      browser.webkitGetUserMedia ||
      browser.mozGetUserMedia ||
      browser.msGetUserMedia);

    browser.mediaDevices
      .getUserMedia(this.configuracoes)
      .then(this.attachVideo.bind(this))
      .catch(this.handleError);
  }

  private handleError(error: object) {
    alert(`Erro: ${error}`);
  }

  private attachVideo(mediaStream: MediaStream): void {
    this.renderer.setProperty(this.videoElement.nativeElement, 'srcObject', mediaStream);
    // this.renderer.listen(this.videoElement.nativeElement, 'play', (evento) => {
    //   this.videoHeight = this.videoElement.nativeElement.videoHeight;
    //   this.videoWidth = this.videoElement.nativeElement.videoWidth;
    // });
    }

  public tirarFoto(): void {
    this.renderer.setProperty(this.canvas.nativeElement, 'width', this.videoElement.nativeElement.videoWidth);
    this.renderer.setProperty(this.canvas.nativeElement, 'height', this.videoElement.nativeElement.videoHeight);
    this.canvas.nativeElement.getContext('2d').drawImage(this.videoElement.nativeElement, 0, 0);
    this.capturouImagem = true;
  }

  public atualizarAoMudarTab(tabAtiva: MatTabChangeEvent): void {
    if (tabAtiva.index === 0) {
      this.videoElement.nativeElement.play();
    }
  }

  public fechar() {
    this.dialog.close(this.capturouImagem ? this.canvas : undefined);
  }
}
