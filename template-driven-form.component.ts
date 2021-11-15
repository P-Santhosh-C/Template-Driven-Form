import { Participant } from './participant';
import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  @ViewChild('eventForm') public tdf! : NgForm;

  done : string = "";

  state : string[];

  participant: Participant = new Participant();

  constructor() {

    this.state = ['TG','AP','TN','KN'];

  }

  ngOnInit(): void {
  }

  register() {
    this.done = "Template_Driven_Form"
    console.log(this.participant);
    console.log(JSON.stringify(this.participant));
  }

}
