import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  listElement = [
    { id: 'kim', name: 'Kim' },
    { id: 'thuy', name: 'Thuỷ' },
    { id: 'moc', name: 'Mộc' },
    { id: 'hoa', name: 'Hoả' },
    { id: 'tho', name: 'Thổ' },
  ];

  listCan = [
    { id: 'giap', name: 'Giáp', elementId: 'moc', weight: 10 },
    { id: 'at', name: 'Ất', elementId: 'moc', weight: 10 },
    { id: 'binh', name: 'Bính', elementId: 'hoa', weight: 10 },
    { id: 'dinh', name: 'Đinh', elementId: 'hoa', weight: 10 },
    { id: 'mau', name: 'Mậu', elementId: 'tho', weight: 10 },
    { id: 'ky', name: 'Kỷ', elementId: 'tho', weight: 10 },
    { id: 'canh', name: 'Canh', elementId: 'kim', weight: 10 },
    { id: 'tan', name: 'Tân', elementId: 'kim', weight: 10 },
    { id: 'nham', name: 'Nhâm', elementId: 'thuy', weight: 10 },
    { id: 'quy', name: 'Quý', elementId: 'thuy', weight: 10 },
  ];

  listChi = [
    {
      id: 'ti', name: 'Tí', elementId: 'thuy', weight: 10, tangCanIds: [
        { canId: 'quy', elementId: 'thuy', weight: 10 },
      ]
    },
    {
      id: 'suu', name: 'Sửu', elementId: 'tho', weight: 10, tangCanIds: [
        { canId: 'ky', elementId: 'tho', weight: 6 },
        { canId: 'quy', elementId: 'thuy', weight: 3 },
        { canId: 'tan', elementId: 'kim', weight: 1 },
      ]
    },
    {
      id: 'dan', name: 'Dần', elementId: 'moc', weight: 10, tangCanIds: [
        { canId: 'giap', elementId: 'moc', weight: 6 },
        { canId: 'binh', elementId: 'hoa', weight: 3 },
        { canId: 'mau', elementId: 'tho', weight: 1 },
      ]
    },
    {
      id: 'mao', name: 'Mão', elementId: 'moc', weight: 10, tangCanIds: [
        { canId: 'at', elementId: 'moc', weight: 10 },
      ]
    },
    {
      id: 'thin', name: 'Thìn', elementId: 'tho', weight: 10, tangCanIds: [
        { canId: 'mau', elementId: 'tho', weight: 6 },
        { canId: 'at', elementId: 'moc', weight: 3 },
        { canId: 'quy', elementId: 'thuy', weight: 1 },
      ]
    },
    {
      id: 'ty', name: 'Tỵ', elementId: 'hoa', weight: 10, tangCanIds: [
        { canId: 'binh', elementId: 'hoa', weight: 6 },
        { canId: 'mau', elementId: 'tho', weight: 3 },
        { canId: 'canh', elementId: 'kim', weight: 1 },
      ]
    },
    {
      id: 'ngo', name: 'Ngọ', elementId: 'hoa', weight: 10, tangCanIds: [
        { canId: 'dinh', elementId: 'hoa', weight: 7 },
        { canId: 'ky', elementId: 'tho', weight: 3 },
      ]
    },
    {
      id: 'mui', name: 'Mùi', elementId: 'tho', weight: 10, tangCanIds: [
        { canId: 'ky', elementId: 'tho', weight: 6 },
        { canId: 'dinh', elementId: 'hoa', weight: 3 },
        { canId: 'at', elementId: 'moc', weight: 1 },
      ]
    },
    {
      id: 'than', name: 'Thân', elementId: 'kim', weight: 10, tangCanIds: [
        { canId: 'canh', elementId: 'kim', weight: 6 },
        { canId: 'nham', elementId: 'thuy', weight: 3 },
        { canId: 'mau', elementId: 'tho', weight: 1 },
      ]
    },
    {
      id: 'dau', name: 'Dậu', elementId: 'kim', weight: 10, tangCanIds: [
        { canId: 'tan', elementId: 'kim', weight: 10 },
      ]
    },
    {
      id: 'tuat', name: 'Tuất', elementId: 'tho', weight: 10, tangCanIds: [
        { canId: 'mau', elementId: 'tho', weight: 6 },
        { canId: 'tan', elementId: 'kim', weight: 3 },
        { canId: 'dinh', elementId: 'hoa', weight: 1 },
      ]
    },
    {
      id: 'hoi', name: 'Hợi', elementId: 'thuy', weight: 10, tangCanIds: [
        { canId: 'nham', elementId: 'thuy', weight: 7 },
        { canId: 'giap', elementId: 'moc', weight: 3 },
      ]
    },
  ];

  result = {
    status: 0,
    kim: 0,
    thuy: 0,
    moc: 0,
    hoa: 0,
    tho: 0,
  };

  nam = { canId: '', chiId: '' };
  thang = { canId: '', chiId: '' };
  ngay = { canId: '', chiId: '' };
  gio = { canId: '', chiId: '' };

  calcElement() {
    if (
      !this.nam.canId || !this.nam.chiId ||
      !this.thang.canId || !this.thang.chiId ||
      !this.ngay.canId || !this.ngay.chiId ||
      !this.gio.canId || !this.gio.chiId
    ) {
      this.result.status = 2;
      this.nam.canId = 'at';
      this.nam.chiId = 'hoi';
      this.thang.canId = 'dinh';
      this.thang.chiId = 'hoi';
      this.ngay.canId = 'giap';
      this.ngay.chiId = 'tuat';
      this.gio.canId = 'at';
      this.gio.chiId = 'suu';
    } else {
      this.result = {
        status: 1,
        kim: 0,
        thuy: 0,
        moc: 0,
        hoa: 0,
        tho: 0,
      };

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
          break;
        case 'thuy':
          this.result.thuy += tangCan.weight;
          break;
        case 'moc':
          this.result.moc += tangCan.weight;
          break;
        case 'hoa':
          this.result.hoa += tangCan.weight;
          break;
        case 'tho':
          this.result.tho += tangCan.weight;
          break;
        default:
          window.alert('Error!');
          break;
      }
    });

  }

  divPercent(a: number, b: number) {
    return (a * 100 / b).toFixed(2);
  }
}
