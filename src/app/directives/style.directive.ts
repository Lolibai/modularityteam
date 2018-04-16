import { Directive, ElementRef, OnInit } from '@angular/core';

    @Directive({
        selector: '[appStyle]'
    })

    export class StyleDirective implements OnInit {
        constructor (private element: ElementRef) {}

        ngOnInit() {
            this.element.nativeElement.style.color = 'red';
                }
    }
