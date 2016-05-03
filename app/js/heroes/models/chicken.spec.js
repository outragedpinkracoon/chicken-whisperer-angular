System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters:[],
        execute: function() {
            describe('Hero', function () {
                it('has name 1', function () {
                    var hero = { id: 1, name: 'Super Cat' };
                    expect(hero.name).toEqual('Super Cat');
                });
                it('has id 2', function () {
                    var hero = { id: 1, name: 'Super Cat' };
                    expect(hero.id).toEqual(1);
                });
            });
        }
    }
});
//# sourceMappingURL=chicken.spec.js.map