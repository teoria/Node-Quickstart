export class VO {
    
    set(attrs: Object): any {
        for (var key in attrs) {
            this[key] = attrs[key];
        }
    }

    get(name: string): any {
        return this[name];
    }

    toJSON(): Object {
        
        var json: Object = {};
        
        for(let key in this) {
            if(typeof this[key] == "function") {
                
                if(json[String(key)].hasOwnProperty('toJSON')) {
                    json[String(key)] = json[String(key)].toJSON();
                }else {
                    json[String(key)] = this[key]();
                }

            }
        }

        return json;

    }

}