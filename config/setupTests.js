import React from 'react'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'babel-polyfill'
import moment from 'moment'
configure({ adapter: new Adapter() })

window.moment = moment

// to mock unit tests
global.fetch = require('jest-fetch-mock')