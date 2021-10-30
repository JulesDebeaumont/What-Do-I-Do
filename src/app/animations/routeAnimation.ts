import { animate, query, style, transition, trigger } from "@angular/animations";

export const fadeInAnimation =
  // Nom du trigger pour le app.component.html
  trigger('routeAnimations', [

    // Any to any
    transition('* => *', [

      // Première action pour placer le :enter et le :leave au même endroit en position absolue
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),

      // Deuxième action pour mettre uniquement la vue qui entre en transparent
      query(
        ':enter',
        [style({ opacity: 0 })],
        { optional: true }
      ),

      // Les animations commencent ici
      // Troisème action pour faire passer la vue qui sort en transparent
      query(
        ':leave',
        [style({ opacity: 1 }), animate('0.15s', style({ opacity: 0 }))],
        { optional: true }
      ),

      // Quatrième action pour faire passer la vue qui entre en visible
      query(
        ':enter',
        [style({ opacity: 0 }), animate('0.15s', style({ opacity: 1 }))],
        { optional: true }
      )
    ])
  ]);