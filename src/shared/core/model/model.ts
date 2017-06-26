export class Model {
    
    set(attrs: Object): any {
        for (var key in attrs) {
            this[key] = attrs[key];
        }
    }

    get(name: string): any {
        return this[name];
    }

}