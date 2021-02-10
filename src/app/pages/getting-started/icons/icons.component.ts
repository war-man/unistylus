import { Component, OnInit } from '@angular/core';

import { CodeService } from '../../../services/code/code.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  constructor(public codeService: CodeService) {}

  ngOnInit(): void {}

}
