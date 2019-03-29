import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';
import { MatDialog } from '@angular/material';
import { HeroAddedDialogComponent } from '../hero-added-dialog/hero-added-dialog.component';

@Component({
  selector: 'app-hero-edit',
  templateUrl: './hero-edit.component.html',
  styleUrls: ['./hero-edit.component.css']
})
export class HeroEditComponent implements OnInit {
  hero: Hero;

  constructor(public dialog: MatDialog) {
    this.hero = new Hero();
  }

  ngOnInit() {
  }

  submit() {
    this.openHeroAddedDialog();
  }

  openHeroAddedDialog() {
    this.dialog.open(HeroAddedDialogComponent, {
      data: {
        hero: this.hero
      }
    });
  }

}
