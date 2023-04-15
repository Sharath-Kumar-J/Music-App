// import moxios from 'moxios';
// import { Saga } from '../component/Redux/Saga';
import axios from 'axios';

const res = 'https://itunes.apple.com/search?term=avril+lavigne%27';

describe('Test API', () => {
    it("ack", () => {
        const result = axios.get(res);
        console.log(result)
        expect(result).toBeDefined()
    })
})