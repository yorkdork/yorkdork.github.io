import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SnowFlakeComponent } from './snowflake/snowflake';

interface SnowFlakeConfig {
	depth: number ;
	left: number ;
	speed: number ;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SnowFlakeComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('York Raccoon\'s Website');

  public snowFlakes: SnowFlakeConfig[];

	// I initialize the app component.
	constructor() {

		this.snowFlakes = [];

		for ( var i = 1 ; i <= 200 ; i++ ) {

			this.snowFlakes.push({
				depth: this.randRange( 1, 5 ),
				left: this.randRange( 0, 100 ),
				speed: this.randRange( 1, 5 )
			});

		}

	}

	// ---
	// PRIVATE METHODS.
	// ---
	private randRange( min: number, max: number ) : number {
		var range = ( max - min );
		return( min + Math.round( Math.random() * range ) );
	}
}
