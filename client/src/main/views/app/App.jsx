import './App.css';
import {
	Route,
	Routes,
	unstable_HistoryRouter as HistoryRouter,
} from 'react-router-dom';
import { history } from '../../utils/navigator';
import paths from '../../utils/consts/paths';

import ItemPage from '../itemPage/ItemPage';
import LandingPage from '../landingPage/LandingPage';

const AppRouter = () => {
	return (
		<>
			<HistoryRouter history={history}>
				<Routes>
					<Route
						path={paths.landingPage}
						element={<LandingPage />}
					/>
					<Route
						path={paths.itemPage}
						element={<ItemPage />}
					/>
				</Routes>
			</HistoryRouter>
		</>
	);
};

AppRouter.propTypes = {};

export default AppRouter;
