import { DateTime } from 'luxon';

export default entryDateTime;

/**
 * Construct an object w/formatted date & time from a timestamp.
 */
function entryDateTime(string) {
	const full = DateTime.fromISO(string);
	const date = full.toISODate();
	const time = full.toLocaleString(DateTime.TIME_WITH_SHORT_OFFSET);
	return { date, time };
}
