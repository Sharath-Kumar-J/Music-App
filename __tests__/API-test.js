import { Saga } from "../components/Redux/Saga" 
jest.setTimeout(30000)

it('api testcase',async function () {
    global.fetch=jest.fn().mockImplementation(()=>{
        var p=new Promise((resolve,reject)=>{
            resolve({
                json:function(){
                    return {type:"FeatureCollection"}
                }
            })
        })
        return p;
    })
    const response=await Saga();
    expect(response.type).toBe("FeatureCollection")
})