import joi from '@hapi/joi';
import { transformableOr } from '../utils';

export const Notification = joi
  .object()
  .unknown()
  .keys({
    ts: joi.string().required(),
    type: joi.string(),
    entity: joi.object().keys({
      rid: joi.string(),
      class: joi.string(),
    }),
    severity: joi
      .string()
      .required()
      .valid('info', 'minor', 'major', 'critical'),
    title: transformableOr(joi.string()).required(),
    text: transformableOr(joi.string()).required(),
    // status: joi.string(),
    // unseen, seen, escalated, acknowledged, archived ?
  });

// https://console.bluemix.net/docs/services/AlertNotification/alert_icons.html#alert_icons
// https://support.alertlogic.com/hc/en-us/articles/360000103106-What-does-the-severity-level-mean-on-incident-notifications-
