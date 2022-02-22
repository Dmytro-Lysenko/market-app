import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import CardHeader from "@mui/material/CardHeader";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React, { useState } from "react";
import AlertSuccessModal from "../UI/AlertSuccessModal";
import { useDispatch, useSelector } from "react-redux";
import { favoriteActions } from "../store/favorite-slice";

const DUMMY_DATA = [
  {
    id: "h1",
    price: 230,
    type: "smartphone",
    title: "Xiomi",
    img: "https://mui.com/static/images/cards/paella.jpg",
    description:
      "Some description here for example testing, Some description here for example testing",
  },
  {
    id: "h2",
    price: 290,
    type: "smartphone",
    title: "Samsung",
    img: "https://mui.com/static/images/cards/paella.jpg",
    description:
      "Some description here for example testing, Some description here for example testing",
  },
  {
    id: "tv1",
    price: 530,
    type: "tv",
    title: "Xiomi",
    img: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
    description:
      "Some description here for example testing, Some description here for example testing",
  },
  {
    id: "tv2",
    price: 890,
    type: "tv",
    title: "Samsung",
    img: "https://mui.com/static/images/cards/paella.jpg",
    description:
      "Some description here for example testing, Some description here for example testing",
  },
];

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Products = (props) => {
  const dispatch = useDispatch();
  const favoriteItems = useSelector((state) => state.favorite.favoriteProducts);
  const [expanded, setExpanded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
  console.log(favoriteItems);
  const alertModalHandler = () => {
    setIsAlertModalOpen(!isAlertModalOpen);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleFavoriteClick = () => {
    dispatch(favoriteActions.addToFavorite(props));

    setIsFavorite(!isFavorite);
    setIsAlertModalOpen(true);

    setTimeout(() => {
      setIsAlertModalOpen((prev) => {
        return (prev = !isAlertModalOpen);
      });
    }, 500);
    // setIsAlertModalOpen((prev) => {
    //   return (prev = !isAlertModalOpen);
    // });
  };

  const handleCartClick = () => {
    setIsInCart(!isInCart);
  };

  return (
    <div>
      <Card key={props.id} id={props.id} sx={{ maxWidth: 545 }}>
        <CardMedia
          component="img"
          height="194"
          image={props.img}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Type: {props.type}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price: {props.price}
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
          <IconButton
            aria-label="add to favorites"
            onClick={handleFavoriteClick}
          >
            {isFavorite ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton aria-label="add to cart" onClick={handleCartClick}>
            {isInCart ? <ShoppingCartIcon /> : <ShoppingCartOutlinedIcon />}
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="h5" paragraph>
              Description:
            </Typography>
            <Typography paragraph>{props.description}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};

export default Products;
