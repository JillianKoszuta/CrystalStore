import { generateProducts } from '../../utils/mockDataFunctions/product';
import ProductCard from './components/ProductCard';
import { Container, Grid2 } from '@mui/material';

function LandingPage() {
	const products = generateProducts(10);
	console.log(products);
	return (
		<Container>
			<Grid2
				container
				spacing={2}
				justifyContent='space-around'
			>
				{products.map((product) => (
					<Grid2
						item
						key={product.id}
					>
						<ProductCard
							description={product.description}
							title={product.title}
							imagePath={product.images[0]}
						/>
					</Grid2>
				))}
			</Grid2>
		</Container>
	);
}

export default LandingPage;
