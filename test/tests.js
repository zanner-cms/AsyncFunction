#!/usr/bin/env node

'use strict';


const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();

const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

const mlog = require('mocha-logger');
const util = require('util');

const AsyncFunction = require('../AsyncFunction').AsyncFunction;


describe('AsyncFunction', () => {

	it('is async function class', () => {
		expect(async function () {}).to.be.instanceof(AsyncFunction);
	});

});
