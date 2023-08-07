import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component2Component } from './component2/component2.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: Component2Component },
];


@NgModule({
  declarations: [
    Component2Component 
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ], 
  exports: [RouterModule]
})
export class Module2Module { }
