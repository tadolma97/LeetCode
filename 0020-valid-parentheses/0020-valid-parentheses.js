/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var st= []
  const legend={
    '(': ')',
    '{':'}',
    '[':']'
  }
  for(i=0; i<s.length; i++){
    if(s[i]==='(' || s[i]==='{' || s[i]==='['){
    st.push(s[i])
    } else if(legend[st.pop()]!==s[i])
        return false
  } 
  return st.length===0

};