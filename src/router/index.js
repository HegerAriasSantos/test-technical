
function Router (url,  method = "GET",  res) {
	const methods = {
		'GET': function () {
      return "hello";
		},
	};

	if (method in methods) {
		const controller = methods[method];
		return controller();
	}
  return "404";
}

export default Router;