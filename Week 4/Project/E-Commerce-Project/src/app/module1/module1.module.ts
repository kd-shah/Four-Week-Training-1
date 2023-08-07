import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component1Component } from './component1/component1.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes=[
  {path: '', component: Component1Component}
]

@NgModule({
  declarations: [
    Component1Component
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class Module1Module { }
