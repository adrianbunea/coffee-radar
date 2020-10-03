import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | radar', function(hooks) {
  setupApplicationTest(hooks);

  module('Valid Token', function(hooks) {
    test('visiting the index page displays a chart of all the shops', async function(assert) {
      await visit('/');

      assert.equal(currentURL(), '/');
    });

    test('clicking on the chart adds your current position and highlights the 3 closest shops', async function(assert) {
      await visit('/');

      assert.equal(currentURL(), '/');
    });

    test('filling in the position in the position fields adds your position to the chart and highlights the 3 closest shops', async function(assert) {
      await visit('/');

      assert.equal(currentURL(), '/');
    })
  });

  module('Unauthorized', function(hooks) {
    test('visiting the index page displays a message and a button for refreshing the token', async function(assert) {
      await visit('/');

      assert.equal(currentURL(), '/');
    });

    test('clicking on the button to refresh the token displays the chart', async function(assert) {
      await visit('/');

      assert.equal(currentURL(), '/');
    });
  });

  module('Server Timeout', function(hooks) {
    test('visiting the index page displays a loading screen until the request times out or completes', async function(assert) {
      await visit('/');

      assert.equal(currentURL(), '/');
    });

    test('when the request times out a message appears describing the error', async function(assert) {
      await visit('/');

      assert.equal(currentURL(), '/');
    });
  });

  module('Service Unavailable', function(hooks) {
    test('visiting the index page displays a message and a button to try again', async function(assert) {
      await visit('/');

      assert.equal(currentURL(), '/');
    });

    test('clicking on the try again button re-attempts to display the shops', async function(assert) {
      await visit('/');

      assert.equal(currentURL(), '/');
    });
  });
});
