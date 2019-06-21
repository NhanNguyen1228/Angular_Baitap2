import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-baitap-structural-directive',
  templateUrl: './baitap-structural-directive.component.html',
  styleUrls: ['./baitap-structural-directive.component.scss']
})
export class BaitapStructuralDirectiveComponent implements OnInit {

  danhSachSanPham: any = [];

  constructor() { }

  ngOnInit() {
    this.getLocalStorage();
  }

  getLocalStorage(){
    if(localStorage.getItem("DSSP") !== null){
      this.danhSachSanPham = JSON.parse(localStorage.getItem("DSSP"));
    }
  }

  themSanPham(_maSP, _tenSP, _giaSP) {
    const objectSanPham = {
      maSP: _maSP,
      tenSP: _tenSP,
      giaSP: _giaSP
    }

    this.danhSachSanPham.push(objectSanPham);

    localStorage.setItem("DSSP", JSON.stringify(this.danhSachSanPham));
  }

  xoaSanPham(_keyMaSP) {
    let confirmResult = confirm("Are you sure to delete product?");

    if (confirmResult) {
      let index = this.danhSachSanPham.findIndex(function (item) {
        return _keyMaSP === item.maSP;
      })

      this.danhSachSanPham.splice(index, 1).subscribe(Response => {
        if (Response) {
          alert('Delete ok');
        }
      })
    }
  }

  

}
