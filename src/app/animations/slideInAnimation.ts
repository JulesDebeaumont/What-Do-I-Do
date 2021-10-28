import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('FadeIn <=> FadeOut', [
      style({ position: 'relative',overflow: 'hidden' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          overflow: 'hidden'
        })
      ]),
      query(':enter', [
        style({ left: '-100%',overflow: 'hidden' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%',overflow: 'hidden' }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%',overflow: 'hidden' }))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);