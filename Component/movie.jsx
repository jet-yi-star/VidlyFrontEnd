import React, { Component } from "react";
import { deleteMovie, getMovie, getMovies } from "../services/fakeMovieService";
class Movie extends Component {
  state = { movies: getMovies() };

  deleteMovieById = (id) => {
    const movies = this.state.movies.filter(m=>m._id !== id);
    // this.state.movies.splice(this.state.movies.indexOf(movieInDb), 1);
    // console.log(movieInDb);
    this.setState({ movies});
  };
  renderMessages() {
    if (this.state.movies.length === 0) return;
  }
  render() {
       const {length: count} = this.state.movies;
    return (
      <React.Fragment>
        
        {count === 0 && (
          <span>There are no movies in the database</span>
        )}
        {count !== 0 && (
          <span>{`Showing ${count} movies in the database`}</span>
        )}
        {count !== 0 && (
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.movies.map((it) => (
                <tr key={it._id}>
                  <td>{it.title}</td>
                  <td>{it.genre.name}</td>
                  <td>{it.numberInStock}</td>
                  <td>{it.dailyRentalRate}</td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => {
                      this.deleteMovieById(it._id);
                    }}
                  >
                    Delete
                  </button>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </React.Fragment>
    );
  }
}

export default Movie;
