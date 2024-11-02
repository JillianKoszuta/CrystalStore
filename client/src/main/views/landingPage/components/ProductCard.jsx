import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';

const ProductCard = ({ title, description, imagePath }) => {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardActionArea>
				<CardMedia
					component='img'
					height='345'
					image={imagePath}
					alt={title}
				/>
				<CardContent>
					<Typography
						gutterBottom
						variant='h5'
						component='div'
					>
						{title}
					</Typography>
					<Typography
						variant='body2'
						sx={{ color: 'text.secondary' }}
					>
						{description}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button
					size='small'
					color='primary'
					variant='outlined'
					endIcon={<AddShoppingCartOutlinedIcon />}
				>
					Add to Cart
				</Button>
			</CardActions>
		</Card>
	);
};

export default ProductCard;
