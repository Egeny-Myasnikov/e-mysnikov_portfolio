import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	reactCompiler: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'e-mysnikov-portfolio.vercel.app',
			},
		],
	},
	experimental: {
		optimizeCss: true,
	},
}

export default nextConfig
