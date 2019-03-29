import { Component, OnInit, Input, Inject } from '@angular/core';
import { Hero } from '../models/hero';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-hero-added-dialog',
  templateUrl: './hero-added-dialog.component.html',
  styleUrls: ['./hero-added-dialog.component.css']
})
export class HeroAddedDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
