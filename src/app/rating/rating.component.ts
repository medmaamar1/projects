import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
  hoveredRating: number = 0; // Suivi de la note survolée

  // Données des plats par catégorie
  dishesByCategory = [
    {
      category: 'Pizza',
      dishes: [
        { name: 'Margherita', image: 'https://th.bing.com/th/id/OIP.1AajOTQwdf9idTDDTMtrCwHaEK?rs=1&pid=ImgDetMain', rating: 0, comment: '' },
        { name: 'Pepperoni', image: 'https://th.bing.com/th/id/R.1b2ccb9329f146a54f0c3bc74eac96c1?rik=0tsXopwOEsW2DQ&pid=ImgRaw&r=0', rating: 0, comment: '' },
        { name: 'Veggie Pizza', image: 'https://www.twopeasandtheirpod.com/wp-content/uploads/2021/03/Veggie-Pizza-8.jpg', rating: 0, comment: '' },
        { name: 'BBQ Chicken Pizza', image: 'https://th.bing.com/th/id/OIP.aR4pEyVtoeLxNYt0PI0kXgHaLJ?rs=1&pid=ImgDetMain', rating: 0, comment: '' }
      ]
    },
    {
      category: 'Pasta',
      dishes: [
        { name: 'Spaghetti Bolognese', image: 'https://th.bing.com/th/id/R.622c65780cf67738d745ddc519f68897?rik=BvLmM8Txora6nw&pid=ImgRaw&r=0', rating: 0, comment: '' },
        { name: 'Penne Alfredo', image: 'https://th.bing.com/th/id/OIP.pynk_-fbpIVlJRGnAk0TVwHaJT?rs=1&pid=ImgDetMain', rating: 0, comment: '' },
        { name: 'Carbonara', image: 'https://th.bing.com/th/id/OIP.Z5n2hqYegs1_o4GDHBxRkwHaFj?rs=1&pid=ImgDetMain', rating: 0, comment: '' },
        { name: 'Lasagna', image: 'https://th.bing.com/th/id/OIP.4cEkCH2sVJfNw4t-rdMUigHaE8?rs=1&pid=ImgDetMain', rating: 0, comment: '' }
      ]
    },
    {
      category: 'Juices',
      dishes: [
        { name: 'Orange Juice', image: 'https://th.bing.com/th/id/OIP.kxzvbAvoWNgLy8mENLyReAHaE8?rs=1&pid=ImgDetMain', rating: 0, comment: '' },
        { name: 'Apple Juice', image: 'https://th.bing.com/th/id/OIP.mA5AjzouLjzTg38hbptvGAHaE8?rs=1&pid=ImgDetMain', rating: 0, comment: '' },
        { name: 'Mango Juice', image: 'https://th.bing.com/th/id/OIP.8qXBJB_GN_mswCtDY-UG7gHaEs?rs=1&pid=ImgDetMain', rating: 0, comment: '' },
        { name: 'Pineapple Juice', image: 'https://nurturedhomes.com/wp-content/uploads/2022/08/pineapple-juice-7.jpg', rating: 0, comment: '' }
      ]
    },
    {
      category: 'Desserts',
      dishes: [
        { name: 'Chocolate Cake', image: 'https://th.bing.com/th/id/OIP.1L8gCwTABU3YDcOx_aIy8gHaLH?rs=1&pid=ImgDetMain', rating: 0, comment: '' },
        { name: 'Cheesecake', image: 'https://th.bing.com/th/id/R.634fa577892c3ff6717ddc8c97a396d9?rik=6pyiG1yVAsgFcA&riu=http%3a%2f%2fwww.taste.com.au%2fimages%2frecipes%2fagt%2f2008%2f05%2f19621.jpg&ehk=5yT6egtaJbt%2bAOKsKjm5tJmh3i%2b0OcKZcPvEIHuQy%2fQ%3d&risl=&pid=ImgRaw&r=0', rating: 0, comment: '' },
        { name: 'Brownie', image: 'https://th.bing.com/th/id/OIP.gOMljo0UHgeYtCP2TMLzegHaHa?rs=1&pid=ImgDetMain', rating: 0, comment: '' },
        { name: 'Ice Cream', image: 'https://th.bing.com/th/id/R.69c32be1ead63353dc3621b8a40fbd62?rik=jkGQ%2fyBIxLn3VA&pid=ImgRaw&r=0', rating: 0, comment: '' }
      ]
    }
  ];

  // Méthode pour gérer le survol d'une étoile
  hoverRating(star: number) {
    this.hoveredRating = star;
  }

  // Méthode pour réinitialiser le survol
  resetHover() {
    this.hoveredRating = 0;
  }

  // Méthode pour noter un plat
  rateDish(dish: any, rating: number) {
    dish.rating = rating;
  }
}