/* eslint-disable */
import { rest } from 'msw';
import mockDiscover from './mockDiscover';

const SERVER = 'https://api.themoviedb.org/3/';

const handlers = [
  rest.get(`${SERVER}discover/movie?api_key=undefined&page=1&sort_by=popularity.desc`, (_req, res, ctx) => res(
    ctx.json(mockDiscover),
  )),
];

export default handlers;
