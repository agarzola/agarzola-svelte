import { DateTime } from 'luxon';

export default entryDateTime;

function entryDateTime(string) {
	const full = DateTime.fromISO(string);
	const date = full.toISODate();
	const time = full.toLocaleString(DateTime.TIME_WITH_SHORT_OFFSET);
	return { date, time };
}

