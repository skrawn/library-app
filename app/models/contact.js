import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  email: DS.attr('string'),
  message: DS.attr('string'),

  emailValid: Ember.computed.match('email', /^.+@.+\..+$/),
  hasMessage: Ember.computed.gte('message.length', 5),
  isValid: Ember.computed.and('emailValid', 'hasMessage'),
  inNotValid: Ember.computed.not('isValid')
});
