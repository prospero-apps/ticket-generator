import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  movieTitle = ''
  numberOfRows: number | '' = ''
  seatsPerRow: number | '' = ''
  spectatorName = ''
  spectatorNameOnTicket = ''
  errorMessage = ''
  randomRow = 1
  randomSeat = 1
  ticketCreated = false

  onMovieInput(movie: string) {
    this.movieTitle = movie    
  }

  onRowsInput(rows: string) {
    this.numberOfRows = Number(rows)
  }

  onSeatsInput(seats: string) {
    this.seatsPerRow = Number(seats)
  }

  onNameInput(name: string) {
    this.spectatorName = name
  }

  generateTicket() {
    if (!this.movieTitle || !this.numberOfRows || !this.seatsPerRow || !this.spectatorName || this.numberOfRows <= 0 || this.seatsPerRow <= 0) {
      this.errorMessage = ''

      if (!this.movieTitle) {
        this.errorMessage = 'Movie title'
      }
      if (!this.numberOfRows) {
        if (this.errorMessage) {
          this.errorMessage += ', number of rows'
        } else {
          this.errorMessage = 'Number of rows'
        }
      }
      if (!this.seatsPerRow) {
        if (this.errorMessage) {
          this.errorMessage += ', seats per row'
        } else {
          this.errorMessage = 'Seats per row'
        }
      }
      if (!this.spectatorName) {
        if (this.errorMessage) {
          this.errorMessage += ', name'
        } else {
          this.errorMessage = 'Name'
        }
      }

      if (this.errorMessage.includes(',')) {
        this.errorMessage += ' are required. '
      } else {
        this.errorMessage += ' is required. '
      }

      if (this.numberOfRows < 0 || this.seatsPerRow < 0) {
        this.errorMessage += 'Number of rows and seats per row must be greater than 0.'      
    }

      return
    }

    // random row and seat
    this.randomRow = Math.floor(Math.random() * this.numberOfRows + 1)
    this.randomSeat = Math.floor(Math.random() * this.seatsPerRow + 1)
    

    this.errorMessage = ''
    this.spectatorNameOnTicket = this.spectatorName
    this.spectatorName = ''   
    this.ticketCreated = true
  }
}
