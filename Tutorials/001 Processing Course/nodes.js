layout = {
	name: 'Teapot Scene',
	width: 300,
	elements: [
		{ name: 'Material', inputType: 'Material' }
	]
};

function load() {

	async function asyncLoad() {

		const { RGBMLoader } = await import( 'three/addons/loaders/RGBMLoader.js' );

		const rgbmUrls = [ 'px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png' ];

		const cubeMap = await new RGBMLoader()
			.setMaxRange( 16 )
			.setPath( '../examples/textures/cube/pisaRGBM16/' )
			.loadCubemapAsync( rgbmUrls );

		cubeMap.generateMipmaps = true;
		cubeMap.minFilter = THREE.LinearMipmapLinearFilter;

		//

		const scene = global.get( 'scene' );

		scene.environment = cubeMap;

		//

		const { TeapotGeometry } = await import( 'three/addons/geometries/TeapotGeometry.js' );

		const geometryTeapot = new TeapotGeometry( 1, 18 );
		const mesh = new THREE.Mesh( geometryTeapot );

		local.set( 'mesh', mesh );

		refresh();

	}

	asyncLoad();

}

function main() {

	const mesh = local.get( 'mesh', load );

	if ( mesh ) {

		mesh.material = parameters.get( 'Material' ) || new THREE.MeshStandardMaterial();

	}

	return mesh;

}
