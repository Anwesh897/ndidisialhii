function fibonacci(size){
    var first=0,second=1,next,count=2,result=[first,second];
    if(size<2)
    return "The request was made but was not good";
    while(count++<size){
        next = first+second;
        first = second;
        second = next;
        result.push(next);
    }

    return result;
}