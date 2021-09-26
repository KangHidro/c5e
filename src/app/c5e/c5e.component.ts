import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClipboardService } from 'ngx-clipboard';
import { Constant } from '../Constant';

@Component({
  selector: 'app-c5e',
  templateUrl: './c5e.component.html',
  styleUrls: ['./c5e.component.css']
})
export class C5eComponent {

  listElement = Constant.LIST_ELEMENT;

  listCan = Constant.LIST_CAN;

  listChi = Constant.LIST_CHI;

  listTrangSinh = Constant.LIST_TRANG_SINH;

  listTrangSinhLookup = Constant.LIST_TRANG_SINH_LOOKUP;

  result = {
    status: 0,
    kim: 0,
    thuy: 0,
    moc: 0,
    hoa: 0,
    tho: 0,
  };

  radarChartLabels: string[] = ['Kim', 'Thuỷ', 'Mộc', 'Hoả', 'Thổ'];

  radarChartData = [
    { data: [24, 24, 24, 24, 24], label: 'Trung bình' },
    { data: [0, 0, 0, 0, 0], label: 'Bạn' }
  ];

  nam = { canId: '', chiId: '' };
  thang = { canId: '', chiId: '' };
  ngay = { canId: '', chiId: '' };
  gio = { canId: '', chiId: '' };

  isCopied = false;
  isCopying = false;

  constructor(
    private activatedRouter: ActivatedRoute,
    private clipboardSvc: ClipboardService,
    private httpSvc: HttpClient,
  ) {
    this.nam.canId = this.activatedRouter.snapshot.queryParamMap.get('namCan') ?? '';
    this.nam.chiId = this.activatedRouter.snapshot.queryParamMap.get('namChi') ?? '';
    this.thang.canId = this.activatedRouter.snapshot.queryParamMap.get('thangCan') ?? '';
    this.thang.chiId = this.activatedRouter.snapshot.queryParamMap.get('thangChi') ?? '';
    this.ngay.canId = this.activatedRouter.snapshot.queryParamMap.get('ngayCan') ?? '';
    this.ngay.chiId = this.activatedRouter.snapshot.queryParamMap.get('ngayChi') ?? '';
    this.gio.canId = this.activatedRouter.snapshot.queryParamMap.get('gioCan') ?? '';
    this.gio.chiId = this.activatedRouter.snapshot.queryParamMap.get('gioChi') ?? '';
    setTimeout(() => {
      this.calcElement();
    }, 500);
  }

  calcElement() {
    if (
      !this.nam.canId || !this.nam.chiId ||
      !this.thang.canId || !this.thang.chiId ||
      !this.ngay.canId || !this.ngay.chiId ||
      !this.gio.canId || !this.gio.chiId
    ) {
      this.result.status = 2;
    } else {
      this.result = {
        status: 1,
        kim: 0,
        thuy: 0,
        moc: 0,
        hoa: 0,
        tho: 0,
      };;

      this.getWeightElement(this.nam);
      this.getWeightElement(this.thang);
      this.getWeightElement(this.ngay);
      this.getWeightElement(this.gio);
    }

  }

  getNhatChu() {
    const can = this.listCan.find(x => x.id === this.ngay.canId);
    const element = this.listElement.find(x => x.id === can?.elementId);
    return `${can?.name} - ${element?.name}`;
  }

  getWeightElement(input: { canId: string; chiId: string; }) {
    const namCan = this.listCan.find(x => x.id === input.canId);
    switch (namCan?.elementId) {
      case 'kim':
        this.result.kim += namCan.weight;
        break;
      case 'thuy':
        this.result.thuy += namCan.weight;
        break;
      case 'moc':
        this.result.moc += namCan.weight;
        break;
      case 'hoa':
        this.result.hoa += namCan.weight;
        break;
      case 'tho':
        this.result.tho += namCan.weight;
        break;
      default:
        window.alert('Error!');
        break;
    }

    const namChi = this.listChi.find(x => x.id === input.chiId);
    switch (namChi?.elementId) {
      case 'kim':
        this.result.kim += namChi.weight;
        break;
      case 'thuy':
        this.result.thuy += namChi.weight;
        break;
      case 'moc':
        this.result.moc += namChi.weight;
        break;
      case 'hoa':
        this.result.hoa += namChi.weight;
        break;
      case 'tho':
        this.result.tho += namChi.weight;
        break;
      default:
        window.alert('Error!');
        break;
    }

    namChi?.tangCanIds.forEach(tangCan => {
      switch (tangCan.elementId) {
        case 'kim':
          this.result.kim += tangCan.weight;
          this.changeChartValue();
          break;
        case 'thuy':
          this.result.thuy += tangCan.weight;
          this.changeChartValue();
          break;
        case 'moc':
          this.result.moc += tangCan.weight;
          this.changeChartValue();
          break;
        case 'hoa':
          this.result.hoa += tangCan.weight;
          this.changeChartValue();
          break;
        case 'tho':
          this.result.tho += tangCan.weight;
          this.changeChartValue();
          break;
        default:
          window.alert('Error!');
          break;
      }
    });

  }

  changeChartValue() {
    this.radarChartData[1].data = [
      this.result.kim,
      this.result.thuy,
      this.result.moc,
      this.result.hoa,
      this.result.tho
    ];
  }

  getNameCan(canId: string) {
    return this.listCan.find(x => x.id === canId)?.name;
  }

  getNameChi(chiId: string) {
    return this.listChi.find(x => x.id === chiId)?.name;
  }

  getNameTangCan(chiId: string) {
    return this.listChi.find(x => x.id === chiId)?.tangCanIds;
  }

  getTrangSinh(canId: string, chiId: string) {
    const tranSinh = this.listTrangSinh.find(z => z.id === this.listTrangSinhLookup.find(x => x.canId === canId)?.lookups.find(y => y.chiId === chiId)?.trangSinhId);
    return `${tranSinh?.name}: ${tranSinh?.luckyNote}`;
  }

  copyShareLink() {
    this.isCopying = true;
    this.httpSvc.get(`http://tinyurl.com/api-create.php?url=https://kanghidro.github.io/c5e/?namCan=${this.nam.canId}&namChi=${this.nam.chiId}&thangCan=${this.thang.canId}&thangChi=${this.thang.chiId}&ngayCan=${this.ngay.canId}&ngayChi=${this.ngay.chiId}&gioCan=${this.gio.canId}&gioChi=${this.gio.chiId}`, { responseType: 'text' }).subscribe(res => {
      console.log(res);
      if (res) {
        this.isCopying = false;
        this.isCopied = true;
        setTimeout(() => {
          this.isCopied = false;
        }, 2000);
        this.clipboardSvc.copy(res);
      } else {
        this.clipboardSvc.copy(`https://kanghidro.github.io/c5e/?namCan=${this.nam.canId}&namChi=${this.nam.chiId}&thangCan=${this.thang.canId}&thangChi=${this.thang.chiId}&ngayCan=${this.ngay.canId}&ngayChi=${this.ngay.chiId}&gioCan=${this.gio.canId}&gioChi=${this.gio.chiId}`);
      }
    }, () => this.clipboardSvc.copy(`https://kanghidro.github.io/c5e/?namCan=${this.nam.canId}&namChi=${this.nam.chiId}&thangCan=${this.thang.canId}&thangChi=${this.thang.chiId}&ngayCan=${this.ngay.canId}&ngayChi=${this.ngay.chiId}&gioCan=${this.gio.canId}&gioChi=${this.gio.chiId}`));
  }
}
