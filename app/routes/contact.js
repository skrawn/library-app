import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.createRecord('contact');
    },

    actions: {
        saveContact(newContact) {
            newContact.save().then(() => {
                newContact.set('email', '');
                newContact.set('message', '');
                this.controller.set('responseMessage', true);
            });
        },

        willTransition() {
            this.controller.get('model').rollbackAttributes();
            this.controller.set('responseMessage', false);
        }
    }
});
