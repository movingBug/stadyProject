/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-18 21:32:19
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-19 19:33:21
 */
import dva from 'dva';
import './index.css';
import { createModel } from './models';

// 1. Initialize
const createBrowserHistory = require('history').createBrowserHistory;
const app = dva({
    history: createBrowserHistory()
});

createModel(app);
// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
