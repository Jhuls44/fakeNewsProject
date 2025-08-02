import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

interface Article {
  id: number;
  image: string;
  title: string;
  caption: string;
  excerpt: string;
  author: string;
  date: Date;
  category: string;
}

@Component({
  selector: 'app-news-section',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './news-section.component.html',
  styleUrls: ['./news-section.component.scss']
})
export class NewsSectionComponent {
  articles: Article[] = [
    {
      id: 1,
      image: 'https://picsum.photos/600/400?random=1',
      title: 'Avances en inteligencia artificial revolucionan la medicina',
      caption: 'Doctor utilizando IA para diagnóstico médico',
      excerpt: 'Nuevos algoritmos permiten detectar enfermedades con un 95% de precisión meses antes que los métodos tradicionales...',
      author: 'María López',
      date: new Date(2025, 6, 15),
      category: 'Tecnología'
    },
    {
      id: 2,
      image: 'https://picsum.photos/600/400?random=2',
      title: 'Descubren nueva especie en la Amazonía',
      caption: 'Rana recién descubierta en la selva amazónica',
      excerpt: 'Científicos brasileños anunciaron el hallazgo de una nueva especie de anfibio con características únicas...',
      author: 'Carlos Mendes',
      date: new Date(2025, 6, 10),
      category: 'Ciencia'
    },
    {
      id: 3,
      image: 'https://picsum.photos/600/400?random=3',
      title: 'Nueva ley de protección de datos entrará en vigor',
      caption: 'Congreso debate nueva legislación digital',
      excerpt: 'La normativa establece requisitos más estrictos para empresas que manejan información personal de usuarios...',
      author: 'Ana Torres',
      date: new Date(2025, 6, 5),
      category: 'Política'
    }
  ];
}