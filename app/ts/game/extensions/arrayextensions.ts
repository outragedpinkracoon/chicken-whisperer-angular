export class ArrayExtensions {
    static rotate(array){
        if(array.length === 0) return array;
        var item = array.shift();
        array.push(item);
        return array
    }
}