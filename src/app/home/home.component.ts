import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private previewWindow: Window; // 記錄開啟的 window 物件

  constructor() { }

  @HostListener('window:message', ['$event'])
  onMessage(event: MessageEvent): void {

    // 等待目標視窗通知準備接收資料
    if (event.data === 'isReady') {

      const foo = {
        type: 'preview',
        data: {
          foo1: 'aaa',
          foo2: 123
        }
      };

      this.previewWindow.postMessage(foo, '*');
    }
  }

  ngOnInit(): void {
  }

  public openWindow(): void {

    // 開啟目標視窗，如視窗未完成開啟前即執行 postMessage() 會傳送無效
    this.previewWindow = window.open('preview', '_blank');
  }
}
