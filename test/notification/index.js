import test from 'blue-tape';
import notificationDatamodel from '../../src/notification';

export default function runTests() {
  test('Import entities', async t => {
    t.notEqual(notificationDatamodel.Notification.describe(), undefined);
  });
}

if (require.main === module) runTests();
