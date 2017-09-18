import Ember from 'ember';

export default Ember.Controller.extend({

    emailValid: Ember.computed.match('contactEmail', /^.+@.+\..+$/),
    hasMessage: Ember.computed.gte('message.length', 5),
    isEnabled: Ember.computed.and('emailValid', 'hasMessage'),

    contactEmail: '',

    actions: {
        sendMessage() {
            const email = this.get('contactEmail');
            const message = this.get('message');
            const newContact = this.store.createRecord('contact', {
                email: email,
                message: message
            });

            newContact.save().then(() => {
                alert(`Your coital request has been received`);
                this.set('responseMessage', `Prepare your hole`);
                this.set('contactEmail', '');
                this.set('message', '');
            });
        }, 

        willTransition() {
            this.controller.get('model').rollbackAttributes();
        }
    }
});
