var firstUniqChar = function(s) {
    const hashTable = {};
    
    for (let i = 0; i < s.length; i++) {
        if (hashTable[s[i]]) {
            hashTable[s[i]].push(i);
        } else {
            hashTable[s[i]] = [i];
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (hashTable[s[i]].length === 1) {
            return i;
        }
    }
    return -1;
};