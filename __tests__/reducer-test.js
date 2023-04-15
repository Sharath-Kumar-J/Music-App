import { reducer} from "../components/Redux/Reducer"
import { initialState } from "../components/Redux/Reducer";


describe('reducer test',()=>{
    it('should return the initial state',()=>{
        expect(reducer(undefined,{})).toEqual(initialState);
    })
})