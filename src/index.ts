import { fromEvent } from 'rxjs'
import { tap ,map} from 'rxjs/operators'

const body = document.querySelector('body');


const progressBar = document.getElementById("progress")


const calcularProcentajeScroll = ( event ) => {

    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    return ( scrollTop / ( scrollHeight - clientHeight ) ) * 100;
}


const scroll$ = fromEvent( document, 'scroll');

const progress$ = scroll$.pipe(
    // map( event => calcularProcentajeScroll(event) )
    map( calcularProcentajeScroll ),
    tap( console.log )
);


progress$.subscribe( porcentaje => {

    progressBar.style.width = `${ porcentaje }%`;

});
