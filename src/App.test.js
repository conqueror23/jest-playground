const getData = require('./App');
test('getData test reuslt',()=>{

    expect(getData(2,'get things')).toBeCalledWith(Number,String);

})