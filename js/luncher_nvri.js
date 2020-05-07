'use strict';

(function () {
    function init() {
        var router = new Router([            
            new Route('admin_nvri', 'admin_nvri.html'),
            new Route('nvri_users', 'nvri_users.html'),
            new Route('activities', 'activities.html'),
            new Route('profile', 'profile.html'),
            new Route('diag_queries', 'diag_queries.html'),
        ]);
    }
    init();
}());