var lengthOfLongestSubstring = function(s) { 
    let start = 0;
    let end = 0;
    let maxlength = 0;
    let longestStart = 0;

    const Unique = new Set();

    while(end < s.length){
        if(!Unique.has(s[end])){
            Unique.add(s[end]);
            end++;
            if(Unique.size > maxlength){
                maxlength = Unique.size;
                longestStart = start;
            }
        }else{
            Unique.delete(s[start]);
            start++;
        }
    }
    const longestUnique = s.slice(longestStart, longestStart+maxlength);
    return {length: maxlength, unique: longestUnique};
};

console.log(lengthOfLongestSubstring("pwwkew")); 