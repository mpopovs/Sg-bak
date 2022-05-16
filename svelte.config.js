/** @type {import('@sveltejs/kit').Config} */

import node from '@sveltejs/adapter-node';

const config = {
	kit: {
		vite: {
			ssr: {
			  noExternal: ['three']
			}
		  },

		adapter: node(),
		
		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']

		
			
		}
		
	}
};

export default config;