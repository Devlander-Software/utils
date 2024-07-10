import { selectFromList } from "../selectFromList";

describe('selectFromList', () => {
    it('should select the correct item based on the index', () => {
        expect(selectFromList(2, 'one', 'two', 'three')).toBe('three');
        expect(selectFromList(0, 'apple', 'banana', 'cherry')).toBe('apple');
    });

    it('should return undefined if the index is out of bounds', () => {
        expect(selectFromList(5, 'one', 'two', 'three')).toBeUndefined();
    });

    it('should handle empty list of items', () => {
        expect(selectFromList(0)).toBeUndefined();
    });
})