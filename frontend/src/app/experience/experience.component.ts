import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

interface Experience {
  name: string;
  role: string;
  description: string;
  startDate: Date;
  endDate: Date;
  tags?: string[];
  links?: URL[];
  img?: URL;
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatChipsModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {
  readonly experiences: [Experience] = [
    {
      name: 'PacSoft',
      role: 'Algorithm Engineer',
      startDate: new Date(2020, 8),
      endDate: new Date(2021, 3),
      tags: ['cool', 'nice'],
      links: [],
      description: 'Test',
    },
  ];
}
