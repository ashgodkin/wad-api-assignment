import React , {useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar'
import { MoviesContext } from "../../contexts/moviesContext";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

export default function TVShowCard({ tvShow, action, fetchUrl }) {
  const { favourites, addToFavourites } = useContext(MoviesContext);
  const { watchList, addToWatchList } = useContext(MoviesContext);
 
   if (favourites.find((id) => id === tvShow.id)) {tvShow.favourite = true;
   }
   else {tvShow.favourite = false;
  }

     if (watchList?.find((id) => id === tvShow.id)) {tvShow.mustWatch = true;
     }
     else {tvShow.mustWatch = false;
     }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          tvShow.favourite ? (
            <Avatar sx={{ backgroundColor: 'red'}}>
              <FavoriteIcon />
            </Avatar>
          ) :
          (
          tvShow.mustWatch ? (
            <Avatar sx={{ backgroundColor: 'red'}}>
              <PlaylistAddIcon />
            </Avatar>
          ) : null
          )
          }
          
          title={
            <Typography variant="h5" component="p">
              {tvShow.name}{" "}
            </Typography>
          }
      />
      <CardMedia
        sx={{ height: 500 }}
        image={
          tvShow.poster_path
            ? `https://image.tmdb.org/t/p/w500/${tvShow.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {tvShow.release_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {tvShow.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
    {action(tvShow)}
    <Link to={`/tvshows/${tvShow.id}`}>
      <Button variant="outlined" size="medium" color="primary">
        More Info ...
      </Button>
    </Link>
    <Button variant="h6" size="medium" color="primary">
        <PlaylistAddIcon fontSize="small"/>
      </Button>
  </CardActions>
    </Card>
  );
}
