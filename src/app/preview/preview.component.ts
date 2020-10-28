import { Component, HostListener, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit, AfterViewInit {

  passData: any;

  constructor() { }

  @HostListener('window:message', ['$event'])
  onMessage(event: MessageEvent): void {

    // 僅接受自訂資料內容
    if (event.data.type === 'preview') {
      this.passData = event.data.data;
    }
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const w = window.opener as Window; // 目前視窗之父視窗的參考
    w.postMessage('isReady', '*');
  }
}
