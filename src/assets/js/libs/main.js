import * as apiHandler  from './ApiHandler';



apiHandler.createFolder("https://javi.solid.community/public","CreadoDesdeMain");
export const createFolder = (path, folder) => {
	path = fixPath(path);
	if (!(folder || '').trim()) {
		return Promise.reject('Invalid folder name');
	}
	return API.createFolder(path, folder).catch(logFetchError);
};

export async function createFolder(path, folderName) {
	if (await folderExists(path, folderName)) return new Response();

	return createItem(path, folderName, '', 'dir');
}

async function createItem(path, itemName, content, contentType) {
	const baseUrl = `${config.getHost()}${path}`;
	const link =
		contentType === 'dir'
			? '<http://www.w3.org/ns/ldp#BasicContainer>; rel="type"'
			: '<http://www.w3.org/ns/ldp#Resource>; rel="type"';

	const request = {
		method: 'POST',
		headers: {
			link,
			slug: itemName,
			'Content-Type': contentType
		},
		body: content
	};

	return solidAuth.fetch(baseUrl, request).then(assertSuccessfulResponse);
}

const assertSuccessfulResponse = (response) => {
	if (!response.ok) throw response;
	return response;
};