import Hero from '@/components/Hero';

import Head from 'next/head';

const Home = () => {
	return (
		<>
			<Head>
				<title>Portfolio de Manuel</title>
				<meta name="description" content="Portfolio de Manuel" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.jpeg" />
			</Head>
			<div>
				<Hero />
			
			</div>
		</>
	);
};

export default Home;
