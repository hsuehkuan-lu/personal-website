import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

interface Link {
  name: string;
  url: URL;
}

interface Experience {
  name: string;
  role: string;
  description: string;
  startDate: Date;
  endDate: Date;
  website?: URL;
  tags?: string[];
  links?: Link[];
  img?: string;
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
  readonly experiences: Experience[] = [
    {
      name: 'Google',
      role: 'Software Engineer',
      startDate: new Date(2022, 11),
      endDate: new Date(),
      website: new URL('https://about.google/'),
      tags: ['Python', 'C++', 'Typescript', 'Angular'],
      description:
        'Maintain and develop testing infrastructure with Python for hardware automation tests. ' +
        'Develop camera debugging tools with C++ and Python.',
      img: '../../assets/images/logo/google.png',
    },
    {
      name: 'Houzz',
      role: 'Backend Software Engineer',
      startDate: new Date(2022, 1),
      endDate: new Date(2022, 11),
      website: new URL('https://www.houzz.com/'),
      tags: [
        'PHP',
        'Thrift',
        'Docker',
        'Kubernetes',
        'MySQL',
        'Cassandra',
        'Redis',
      ],
      description:
        'Developed visual interior design backend services with PHP on Thrift. ' +
        'Designed and maintained visual platform services and databases.',
      img: '../../assets/images/logo/houzz.png',
    },
    {
      name: 'Wistron',
      role: 'Data Scientist',
      startDate: new Date(2021, 5),
      endDate: new Date(2022, 1),
      website: new URL('https://www.wistron.com/'),
      tags: ['Azure Machine Learning', 'Docker', 'Python'],
      description:
        'Designed and promoted internal machine learning platform with Azure Machine. ' +
        'Analyzed factory data to provide statistical solutions on improving yield rate.',
      img: '../../assets/images/logo/wistron.png',
    },
    {
      name: 'PacSoft',
      role: 'Algorithm Engineer',
      startDate: new Date(2020, 8),
      endDate: new Date(2021, 3),
      website: new URL('https://www.pacston.com/'),
      tags: ['GraphQL', 'Elasticsearch', 'Python', 'MySQL', 'Dask'],
      description:
        'Developed social network web app backend services using GraphQL APIs with Python Flask.',
    },
  ];
}
