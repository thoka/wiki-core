/**
 * Rewrite settings to be exported from the design doc
 */

module.exports = [
    {from: '/static/*', to: 'static/*'},
    {from: '/_help', to: '_list/help_page/pages', query: {
        limit: '2',
        keys: ['sidebar'],
        include_docs: 'true'
    }},
    {from: '/_edit/:page', to: '_list/edit_page/pages', query: {
        limit: '2',
        keys: [':page', 'sidebar'],
        include_docs: 'true'
    }},
    {from: '/_history/:page', to: '_list/history_page/pages', query: {
        limit: '2',
        keys: [':page', 'sidebar'],
        include_docs: 'true'
    }},
    {from: '/_history/:page/:change', to: '_list/history_page/pages', query: {
        limit: '2',
        keys: [':page', 'sidebar'],
        include_docs: 'true'
    }},
    {from: '/_discuss/:page', to: '_list/discussion/discussion', query: {
        startkey: [':page'],
        endkey: [':page', {}],
        include_docs: 'true'
    }},
    {from: '/', to: '_list/page/pages', query: {
        limit: '2',
        page: 'index',
        keys: ['index', 'sidebar'],
        include_docs: 'true'
    }},
    {from: '/test/:page', to: '_view/pages', query: {
        keys: ['index', 'sidebar']
    }},
    {from: '/:page', to: '_list/page/pages', query: {
        limit: '2',
        keys: [':page', 'sidebar'],
        include_docs: 'true'
    }},
    {from: '/kanso-topbar/*', to: 'kanso-topbar/*'},
    {from: '*', to: '_show/not_found'}
];
