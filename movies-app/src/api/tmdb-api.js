export const getMovies = () => {
  return fetch(
    `http://localhost:8080/movies-api/api/movies`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
     throw error
  });
};

export const getMovie = (args) => {
  // console.log(args)
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `http://localhost:8080/movies-api/api/movies/${id}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};

  /*export const getGenres = async () => {
    return fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        process.env.REACT_APP_TMDB_KEY +
        "&language=en-US"
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };*/

  export const getGenres = async () => {
    const response = await fetch(
      'http://localhost:8080/movies-api/api/movies/tmdb/genres', {
      headers: {
        'Authorization': window.localStorage.getItem('token'),
      }
    },
    console.log(window.localStorage.getItem('token'))
    )
    return response.json();
  };
  

  export const getSimilarMovies = (id) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
        // console.log(json.results);
        return json.results;
      });
  };

  export const getRecommendedTV = (id) => {
    return fetch(
      `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
        // console.log(json.results);
        return json.results;
      });
  };

  

  export const getMovieImages = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
  
    })
    .catch((error) => {
      throw error
   });
  };
  
  export const getMovieReviews = (id) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
        // console.log(json.results);
        return json.results;
      });
  };

  export const getUpcomingMovies = () => {
    return fetch(
      `http://localhost:8080/movies-api/api/movies/tmdb/upcoming`
      ).then( (response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
    
      })
      .catch((error) => {
        throw error
     });
    };

    export const getActors = () => {
      return fetch(
        `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}`
      )
        .then(res => res.json())
        .then(json => json.results);
    };
    

    /*export const getActors = () => {
      return fetch(
        `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
      ).then((response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .catch((error) => {
         throw error
      });
    };*/

   export const getActor = (args) => {
      // console.log(args)
      const [, idPart] = args.queryKey;
      const { id } = idPart;
      return fetch(
        `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
      ).then((response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .catch((error) => {
        throw error
     });
    };

   export const getActorImages = ({ queryKey }) => {
      const [, idPart] = queryKey;
      const { id } = idPart;
      return fetch(
        `https://api.themoviedb.org/3/person/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
      ).then( (response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
    
      })
      .catch((error) => {
        throw error
     });
    };

    export const getTVShows = () => {
      return fetch(
        `https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-GB&include_adult=false&include_video=false&page=1&sort_by=revenue.asc&with_original_language=en`
      ).then((response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .catch((error) => {
         throw error
      });
    };
  
    export const getTVShowImages = ({ queryKey }) => {
      const [, idPart] = queryKey;
      const { id } = idPart;
      return fetch(
        `https://api.themoviedb.org/3/tv/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
      ).then( (response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
    
      })
      .catch((error) => {
        throw error
     });
    };
  
    export const getTVShow = (args) => {
      const [, idPart] = args.queryKey;
      const { id } = idPart;
      return fetch(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.json().message);
          }
          return response.json();
        })
        .catch((error) => {
          throw error;
        });
      }; 

      export const getTVShowReviews = (id) => {
        return fetch(
          `https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
        )
          .then((res) => res.json())
          .then((json) => {
            // console.log(json.results);
            return json.results;
          });
      };

      export const getMovieVideos = ({ queryKey }) => {
        const [, idPart] = queryKey;
        const { id } = idPart;
        return fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_TMDB_KEY}`
        ).then( (response) => {
          if (!response.ok) {
            throw new Error(response.json().message);
          }
          return response.json();
      
        })
        .catch((error) => {
          throw error
       });
      };

      export const getTrending = () => {
        return fetch(
          `http://localhost:8080/movies-api/api/movies`
        ).then((response) => {
          if (!response.ok) {
            throw new Error(response.json().message);
          }
          return response.json();
        })
        .catch((error) => {
           throw error
        });
      };
      
      export const getNowPlaying = () => {
        return fetch(
          `http://localhost:8080/movies-api/api/movies`
        ).then((response) => {
          if (!response.ok) {
            throw new Error(response.json().message);
          }
          return response.json();
        })
        .catch((error) => {
           throw error
        });
      };
