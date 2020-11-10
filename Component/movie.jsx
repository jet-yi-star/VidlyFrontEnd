import React, { Component } from "react";
import { deleteMovie, getMovie, getMovies } from "../services/fakeMovieService";
import Like from "./common/like";
class Movie extends Component {
  state = { movies: getMovies(), tags: ["tag1", "tag2", "tag3"] };

  deleteMovieById = (id) => {
    let movieInDb = deleteMovie(id);
    // this.state.movies.splice(this.state.movies.indexOf(movieInDb), 1);
    // console.log(movieInDb);
    this.setState({ movies: this.state.movies });
  };
  renderMessages() {
    if (this.state.movies.length === 0) return;
  }

  handleLike = (movie) => {
    console.log(movie);
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  render() {
    return (
      <React.Fragment>
        {this.state.movies.length === 0 && (
          <span>There are no movies in the database</span>
        )}
        {this.state.movies.length !== 0 && (
          <span>{`Showing ${this.state.movies.length} movies in the database`}</span>
        )}
        {this.state.movies.length !== 0 && (
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.movies.map((it) => (
                <tr key={it._id}>
                  <td key={it.title}>{it.title}</td>
                  <td key={it.genre.name}>{it.genre.name}</td>
                  <td key={it.numberInStock}>{it.numberInStock}</td>
                  <td key={it.dailyRentalRate}>{it.dailyRentalRate}</td>
                  <td>
                    <Like
                      liked={it.liked}
                      onClick={() => this.handleLike(it)}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => {
                        this.deleteMovieById(it._id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
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
