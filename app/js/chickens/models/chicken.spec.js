System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters:[],
        execute: function() {
            describe('Chicken', function () {
                it('has name 1', function () {
                    var chicken = { id: 1, name: 'Super Cat', speed: 2, scare: 1 };
                    expect(chicken.name).toEqual('Super Cat');
                });
                it('has id 2', function () {
                    var chicken = { id: 1, name: 'Super Cat', speed: 3, scare: 2 };
                    expect(chicken.id).toEqual(1);
                });
            });
        }
    }
});
//# sourceMappingURL=chicken.spec.js.map