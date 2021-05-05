import debug from 'debug';

const APP_NAME = 'mediasoup-client';

export class Logger
{
	private readonly _debug: string;
	private readonly _warn: string;
	private readonly _error: string;

	constructor(prefix?: string)
	{
		if (prefix)
		{
			this._debug = `${APP_NAME}:${prefix}`;
			this._warn = `${APP_NAME}:WARN:${prefix}`;
			this._error = `${APP_NAME}:ERROR:${prefix}`;
		}
		else
		{
			this._debug = APP_NAME;
			this._warn = `${APP_NAME}:WARN`;
			this._error = `${APP_NAME}:ERROR`;
		}

		/* eslint-disable no-console */
		this._debug.log = console.info.bind(console);
		this._warn.log = console.warn.bind(console);
		this._error.log = console.error.bind(console);
		/* eslint-enable no-console */
	}

	debug = (data: any) => {
		console.info(`${this._debug} :`, data);
	}

	warn = (data: any) => {
		console.warn(`${this._warn} :`, data);
	}

	error = (data: any) => {
		console.error(`${this._warn} :`, data);
	}
}
