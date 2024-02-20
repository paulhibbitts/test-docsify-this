(function(Docsify, $docsify, undefined) {
    const DEFAULT_FOOTER = '_footer';

    const install = function(hook, vm) {
        const {
            loadFooter,
            ext,
            requestHeaders
        } = vm.config;

        // Fail fast if loadFooter is not defined
        if (!loadFooter) {
            return;
        }

        hook.afterEach(function(html, next) {

            try {
                // Parse current URL to extract folder path on each page update
                var urlFragment = window.location.hash.slice(1); // Remove '#' character
                var pathSegments = urlFragment.split('/');
                var folderPath = pathSegments.slice(0, -1).join('/'); // Exclude the file part
                folderPath = folderPath ? folderPath + '/' : ''; // Ensure folder path ends with '/'

                var footerFile = folderPath + (loadFooter === true ? DEFAULT_FOOTER + ext : loadFooter);

                // Fetch and append the footer content
                Docsify
                    .get(vm.router.getFile(footerFile), false, requestHeaders)
                    .then(content => {
                        const footerHtml = vm.compiler.compile(content);
                        next(html + footerHtml); // Append the footer to the current page content
                    });
            } finally {
                // Handle possible 404 error
                const footerHtml = vm.compiler.compile(content);
                next(html + footerHtml); // Append the footer to the current page content
            }
        });
    }

    $docsify.plugins = [].concat(install, $docsify.plugins);

})(Docsify, $docsify);