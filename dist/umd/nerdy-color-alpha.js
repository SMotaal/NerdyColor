(function (dependencies, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(dependencies, factory);
    }
})(["require", "exports", "./nerdy-color-core-alpha"], function (require, exports) {
    "use strict";
    /// <reference path="types.d.ts" />
    const nerdy_color_core_alpha_1 = require("./nerdy-color-core-alpha"); // ObserverArray, ParsableValue, ParsedValue
    const parseRGB = nerdy_color_core_alpha_1.Parse.rgb;
    ///<amd-module name="NerdyColor"/>
    var NerdyColor;
    (function (NerdyColor) {
        class Utils {
        }
        Utils.Parse = nerdy_color_core_alpha_1.Parse;
        Utils.ObservableObject = nerdy_color_core_alpha_1.ObservableObject;
        Utils.observersOf = nerdy_color_core_alpha_1.Oberservables.observersOf;
        NerdyColor.Utils = Utils;
        class Color extends nerdy_color_core_alpha_1.ObservableObject {
            constructor({ r, g, b, alpha = 1.0, components = [0, 0, 0], componentNames = ['r', 'g', 'b'] } = {}) {
                super();
                // console.log('new NerdyColor.Color', { r, g, b, alpha, components, componentNames, mode: (componentNames.length ? componentNames : componentNames = (componentNames = ['r', 'g', 'b'])).join("").toLowerCase(), arguments });
                const fail = (reason = 'Color parameters cannot be parsed!') => { throw 'Cannot create color: ' + reason; };
                // Parse colorSpecification: string (Only rgb() and rgba() css syntax supported)
                if (nerdy_color_core_alpha_1.isString(arguments[0])) {
                    ((colorString) => {
                        var matchedString, matchedComponents;
                        if ((/\#[0-9A-F]{3,6}/i).test(colorString)) {
                            fail('Hex color parameters cannot be parsed yet!');
                        }
                        else if ((/rgba?\s*\(\s*\d+\s*\,\s*\d+\s*\,\s*\d+\s*[\,\)]/).test(colorString)) {
                            [matchedString] = colorString.match(/rgba?\s*\(.*?\)/i);
                            matchedComponents = colorString.match(/\b([01]?\.\d+|1|0|\d+)\b/g);
                            if (matchedComponents.length >= 3) {
                                components = [parseRGB(matchedComponents[0]) || 0, parseRGB(matchedComponents[1]) || 0, parseRGB(matchedComponents[2]) || 0];
                                componentNames = ['r', 'g', 'b'];
                            }
                            else
                                fail('RGB color parameters cannot be parsed: ' + matchedString);
                            if (matchedComponents.length >= 4)
                                alpha = Math.min(Math.max(0, parseFloat(matchedComponents[3])), 1);
                        } // other cases to be added later
                    })(arguments[0]);
                }
                // Determine Mode (Only rgb supported so far)
                this.mode = (componentNames.length ? componentNames : componentNames = (componentNames = ['r', 'g', 'b'])).join("").toLowerCase();
                if (this.mode === 'rgb')
                    components = [(nerdy_color_core_alpha_1.isNumber(r) ? r : components[0] || 0), (nerdy_color_core_alpha_1.isNumber(g) ? g : components[1] || 0), (nerdy_color_core_alpha_1.isNumber(b) ? b : components[2] || 0)];
                this.components = components, this.componentNames = componentNames, this.alpha = alpha;
            }
            getComponent(id) {
                let index = parseInt(id);
                if (isNaN(index) && nerdy_color_core_alpha_1.isString(id))
                    index = (this.componentNames || ['r', 'g', 'b']).indexOf(id.toLowerCase());
                return this.components[index];
            }
            getComponents() {
                return this.components;
            }
            setComponents({ r = this.getComponent('r'), g = this.getComponent('g'), b = this.getComponent('b') }) {
                r = nerdy_color_core_alpha_1.Parse.rgb(r), g = nerdy_color_core_alpha_1.Parse.rgb(g), b = nerdy_color_core_alpha_1.Parse.rgb(b);
                if (this.components[0] === r && this.components[2] === g && this.components[1] === b)
                    return false;
                /* Changed */ this.components = [r, g, b], this.publish(this, 'components-changed');
                return true;
            }
        }
        NerdyColor.Color = Color;
        // export declare interface ColorConstructor {
        //     new (colorSpecification?: string|ColorConstructorParameters) : Color;
        // }
    })(NerdyColor = exports.NerdyColor || (exports.NerdyColor = {}));
});
// export default NerdyColor; 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmVyZHktY29sb3ItYWxwaGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9uZXJkeS1jb2xvci1hbHBoYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFBQSxtQ0FBbUM7SUFDbkMscUVBQTBJLENBQUMsNENBQTRDO0lBRXZMLE1BQU0sUUFBUSxHQUFHLDhCQUFLLENBQUMsR0FBRyxDQUFDO0lBRTNCLGtDQUFrQztJQUNsQyxJQUFjLFVBQVUsQ0FrRXZCO0lBbEVELFdBQWMsVUFBVTtRQUVwQjs7UUFDVyxXQUFLLEdBQUcsOEJBQUssQ0FBQztRQUNkLHNCQUFnQixHQUFHLHlDQUFnQixDQUFDO1FBQ3BDLGlCQUFXLEdBQUcsc0NBQWEsQ0FBQyxXQUFXLENBQUM7UUFIdEMsZ0JBQUssUUFJakIsQ0FBQTtRQUVELFdBQW1CLFNBQVEseUNBQWdCO1lBT3ZDLFlBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEdBQUcsR0FBRyxFQUFFLFVBQVUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsY0FBYyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsS0FBaUMsRUFBRTtnQkFDM0gsS0FBSyxFQUFFLENBQUM7Z0JBQ1IsK05BQStOO2dCQUMvTixNQUFNLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxvQ0FBb0MsT0FBTyxNQUFNLHVCQUF1QixHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFFM0csZ0ZBQWdGO2dCQUNoRixFQUFFLENBQUMsQ0FBQyxpQ0FBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDekIsQ0FBQyxDQUFDLFdBQW1CO3dCQUNqQixJQUFJLGFBQXFCLEVBQUUsaUJBQTJCLENBQUM7d0JBQ3ZELEVBQUUsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxJQUFJ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QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwidHlwZXMuZC50c1wiIC8+XG5pbXBvcnQgeyBpc1N0cmluZywgaXNOdW1iZXIsIGlzRnVuY3Rpb24sIE9ic2VydmFibGVPYmplY3QsIG9ic2VydmVyc09mLCBPQlNFUlZFUlMsIFBhcnNlLCBPYmVyc2VydmFibGVzIH0gZnJvbSAnLi9uZXJkeS1jb2xvci1jb3JlLWFscGhhJzsgLy8gT2JzZXJ2ZXJBcnJheSwgUGFyc2FibGVWYWx1ZSwgUGFyc2VkVmFsdWVcblxuY29uc3QgcGFyc2VSR0IgPSBQYXJzZS5yZ2I7XG5cbi8vLzxhbWQtbW9kdWxlIG5hbWU9XCJOZXJkeUNvbG9yXCIvPlxuZXhwb3J0IG1vZHVsZSBOZXJkeUNvbG9yIHtcblxuICAgIGV4cG9ydCBjbGFzcyBVdGlscyB7XG4gICAgICAgIHN0YXRpYyBQYXJzZSA9IFBhcnNlO1xuICAgICAgICBzdGF0aWMgT2JzZXJ2YWJsZU9iamVjdCA9IE9ic2VydmFibGVPYmplY3Q7XG4gICAgICAgIHN0YXRpYyBvYnNlcnZlcnNPZiA9IE9iZXJzZXJ2YWJsZXMub2JzZXJ2ZXJzT2Y7XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIENvbG9yIGV4dGVuZHMgT2JzZXJ2YWJsZU9iamVjdCB7XG4gICAgICAgIHB1YmxpYyBjb21wb25lbnRzOiBQYXJzZWRWYWx1ZVtdO1xuICAgICAgICBwdWJsaWMgY29tcG9uZW50TmFtZXM6IHN0cmluZ1tdO1xuICAgICAgICBwdWJsaWMgYWxwaGE6IG51bWJlcjtcbiAgICAgICAgcHVibGljIG1vZGU6IHN0cmluZztcblxuICAgICAgICBjb25zdHJ1Y3Rvcihjb2xvclNwZWNpZmljYXRpb24/OiBDb2xvckNvbnN0cnVjdG9yUGFyYW1ldGVyc3xzdHJpbmd8dW5kZWZpbmVkKTtcbiAgICAgICAgY29uc3RydWN0b3IoeyByLCBnLCBiLCBhbHBoYSA9IDEuMCwgY29tcG9uZW50cyA9IFswLCAwLCAwXSwgY29tcG9uZW50TmFtZXMgPSBbJ3InLCAnZycsICdiJ10gfTogQ29sb3JDb25zdHJ1Y3RvclBhcmFtZXRlcnMgPSB7fSkge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCduZXcgTmVyZHlDb2xvci5Db2xvcicsIHsgciwgZywgYiwgYWxwaGEsIGNvbXBvbmVudHMsIGNvbXBvbmVudE5hbWVzLCBtb2RlOiAoY29tcG9uZW50TmFtZXMubGVuZ3RoID8gY29tcG9uZW50TmFtZXMgOiBjb21wb25lbnROYW1lcyA9IChjb21wb25lbnROYW1lcyA9IFsncicsICdnJywgJ2InXSkpLmpvaW4oXCJcIikudG9Mb3dlckNhc2UoKSwgYXJndW1lbnRzIH0pO1xuICAgICAgICAgICAgY29uc3QgZmFpbCA9IChyZWFzb24gPSAnQ29sb3IgcGFyYW1ldGVycyBjYW5ub3QgYmUgcGFyc2VkIScpID0+IHsgdGhyb3cgJ0Nhbm5vdCBjcmVhdGUgY29sb3I6ICcgKyByZWFzb247IH1cblxuICAgICAgICAgICAgLy8gUGFyc2UgY29sb3JTcGVjaWZpY2F0aW9uOiBzdHJpbmcgKE9ubHkgcmdiKCkgYW5kIHJnYmEoKSBjc3Mgc3ludGF4IHN1cHBvcnRlZClcbiAgICAgICAgICAgIGlmIChpc1N0cmluZyhhcmd1bWVudHNbMF0pKSB7IFxuICAgICAgICAgICAgICAgICgoY29sb3JTdHJpbmc6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF0Y2hlZFN0cmluZzogc3RyaW5nLCBtYXRjaGVkQ29tcG9uZW50czogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgIGlmICgoL1xcI1swLTlBLUZdezMsNn0vaSkudGVzdChjb2xvclN0cmluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhaWwoJ0hleCBjb2xvciBwYXJhbWV0ZXJzIGNhbm5vdCBiZSBwYXJzZWQgeWV0IScpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCgvcmdiYT9cXHMqXFwoXFxzKlxcZCtcXHMqXFwsXFxzKlxcZCtcXHMqXFwsXFxzKlxcZCtcXHMqW1xcLFxcKV0vKS50ZXN0KGNvbG9yU3RyaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgW21hdGNoZWRTdHJpbmddID0gPHN0cmluZ1tdPmNvbG9yU3RyaW5nLm1hdGNoKC9yZ2JhP1xccypcXCguKj9cXCkvaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVkQ29tcG9uZW50cyA9IDxzdHJpbmdbXT5jb2xvclN0cmluZy5tYXRjaCgvXFxiKFswMV0/XFwuXFxkK3wxfDB8XFxkKylcXGIvZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hlZENvbXBvbmVudHMubGVuZ3RoID49IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzID0gW3BhcnNlUkdCKG1hdGNoZWRDb21wb25lbnRzWzBdKSB8fCAwLCBwYXJzZVJHQihtYXRjaGVkQ29tcG9uZW50c1sxXSkgfHwgMCwgcGFyc2VSR0IobWF0Y2hlZENvbXBvbmVudHNbMl0pIHx8IDBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudE5hbWVzID0gWydyJywgJ2cnLCAnYiddO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGZhaWwoJ1JHQiBjb2xvciBwYXJhbWV0ZXJzIGNhbm5vdCBiZSBwYXJzZWQ6ICcgKyBtYXRjaGVkU3RyaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaGVkQ29tcG9uZW50cy5sZW5ndGggPj0gNCkgYWxwaGEgPSBNYXRoLm1pbihNYXRoLm1heCgwLCBwYXJzZUZsb2F0KG1hdGNoZWRDb21wb25lbnRzWzNdKSksIDEpO1xuICAgICAgICAgICAgICAgICAgICB9IC8vIG90aGVyIGNhc2VzIHRvIGJlIGFkZGVkIGxhdGVyXG4gICAgICAgICAgICAgICAgfSkoPHN0cmluZz5hcmd1bWVudHNbMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBEZXRlcm1pbmUgTW9kZSAoT25seSByZ2Igc3VwcG9ydGVkIHNvIGZhcilcbiAgICAgICAgICAgIHRoaXMubW9kZSA9IChjb21wb25lbnROYW1lcy5sZW5ndGggPyBjb21wb25lbnROYW1lcyA6IGNvbXBvbmVudE5hbWVzID0gKGNvbXBvbmVudE5hbWVzID0gWydyJywgJ2cnLCAnYiddKSkuam9pbihcIlwiKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMubW9kZSA9PT0gJ3JnYicpIGNvbXBvbmVudHMgPSA8bnVtYmVyW10+WyAoaXNOdW1iZXIocikgPyByIDogY29tcG9uZW50c1swXSB8fCAwKSwgKGlzTnVtYmVyKGcpID8gZyA6IGNvbXBvbmVudHNbMV0gfHwgMCksIChpc051bWJlcihiKSA/IGIgOiBjb21wb25lbnRzWzJdIHx8IDApIF07XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSBjb21wb25lbnRzLCB0aGlzLmNvbXBvbmVudE5hbWVzID0gY29tcG9uZW50TmFtZXMsIHRoaXMuYWxwaGEgPSBhbHBoYTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdldENvbXBvbmVudChpZDogc3RyaW5nIHwgbnVtYmVyKTogUGFyc2VkVmFsdWUge1xuICAgICAgICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSBwYXJzZUludCgoPHN0cmluZz5pZCkpO1xuICAgICAgICAgICAgaWYgKGlzTmFOKGluZGV4KSAmJiBpc1N0cmluZyhpZCkpIGluZGV4ID0gKHRoaXMuY29tcG9uZW50TmFtZXMgfHwgWydyJywgJ2cnLCAnYiddKS5pbmRleE9mKCg8c3RyaW5nPmlkKS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudHNbaW5kZXhdO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2V0Q29tcG9uZW50cygpOiBQYXJzZWRWYWx1ZVtdIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudHM7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRDb21wb25lbnRzKHtyID0gdGhpcy5nZXRDb21wb25lbnQoJ3InKSwgZyA9IHRoaXMuZ2V0Q29tcG9uZW50KCdnJyksIGIgPSB0aGlzLmdldENvbXBvbmVudCgnYicpIH06IHsgcjogUGFyc2FibGVWYWx1ZSwgZzogUGFyc2FibGVWYWx1ZSwgYjogUGFyc2FibGVWYWx1ZSB9KSB7XG4gICAgICAgICAgICByID0gUGFyc2UucmdiKHIpLCBnID0gUGFyc2UucmdiKGcpLCBiID0gUGFyc2UucmdiKGIpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50c1swXSA9PT0gciAmJiB0aGlzLmNvbXBvbmVudHNbMl0gPT09IGcgJiYgdGhpcy5jb21wb25lbnRzWzFdID09PSBiKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAvKiBDaGFuZ2VkICovIHRoaXMuY29tcG9uZW50cyA9IFtyLCBnLCBiXSwgdGhpcy5wdWJsaXNoKHRoaXMsICdjb21wb25lbnRzLWNoYW5nZWQnKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvLyBleHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQ29sb3JDb25zdHJ1Y3RvciB7XG4gICAgLy8gICAgIG5ldyAoY29sb3JTcGVjaWZpY2F0aW9uPzogc3RyaW5nfENvbG9yQ29uc3RydWN0b3JQYXJhbWV0ZXJzKSA6IENvbG9yO1xuICAgIC8vIH1cbn1cblxuLy8gZXhwb3J0IGRlY2xhcmUgdHlwZSBOZXJkeUNvbG9yTW9kdWxlID0ge1xuLy8gICAgIENvbG9yOiBOZXJkeUNvbG9yLkNvbG9yO1xuLy8gICAgIFV0aWw6IE5lcmR5Q29sb3IuVXRpbHM7XG4vLyB9XG5cbi8vIGV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBOZXJkeUNvbG9yTW9kdWxlQ29uc3RydWN0b3Ige1xuLy8gICAgIENvbG9yOiBOZXJkeUNvbG9yLkNvbG9yO1xuLy8gICAgIFV0aWw6IE5lcmR5Q29sb3IuVXRpbHM7XG4vLyB9XG5cbmV4cG9ydCBkZWNsYXJlIHR5cGUgTmVyZHlDb2xvck1vZHVsZSA9IHsgQ29sb3I6IG5ldyAoY29sb3JTcGVjaWZpY2F0aW9uPzogQ29sb3JDb25zdHJ1Y3RvclBhcmFtZXRlcnN8c3RyaW5nfHVuZGVmaW5lZCkgPT4gTmVyZHlDb2xvci5Db2xvciwgVXRpbHM6IE5lcmR5Q29sb3IuVXRpbHMgfTtcbmV4cG9ydCBkZWNsYXJlIHR5cGUgTmVyZHlDb2xvckV4cG9ydHMgPSB7IGRlZmF1bHQ6TmVyZHlDb2xvck1vZHVsZSB9O1xuXG5cblxuLy8gZXhwb3J0IGRlZmF1bHQgTmVyZHlDb2xvcjsiXX0=