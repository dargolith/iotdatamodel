import joi from 'joi';
import { transformable, transformableOr } from '../utils';

export const Notification = joi
  .object()
  .unknown()
  .keys({
    ts: joi.string().required(),
    type: joi.string().required(),
    entityRid: joi.string(),
    entityName: joi.string(), // "Cached". Remove??
    severity: joi.string().valid('info', 'minor', 'major', 'critical'),
    image: joi.string(),
    title: transformableOr(joi.string()),
    text: transformableOr(joi.string()),
    // info, warning, error, critical ? (+ indeterminate?)
    // low, medium, high, critical ?
    // info, minor, major, critical ?
    // status: joi.string(),
    // unseen, seen, escalated, acknowledged, archived ?
  });

// https://console.bluemix.net/docs/services/AlertNotification/alert_icons.html#alert_icons
// https://support.alertlogic.com/hc/en-us/articles/360000103106-What-does-the-severity-level-mean-on-incident-notifications-
