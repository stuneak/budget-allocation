import { createAction } from 'redux-act';

export const asyncAction = actionMessage => ({
  INIT: createAction(`[INIT] ${actionMessage}`),
  DONE: createAction(`[DONE] ${actionMessage}`),
  FAIL: createAction(`[FAIL] ${actionMessage}`)
});

export const syncAction = actionMessage => ({
  START: createAction(`[START] ${actionMessage}`),
  FINISH: createAction(`[FINISH] ${actionMessage}`)
});
