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
            });
        },

        willTransition() {
            this.controller.get('model').rollbackAttributes();
        }
    }
});
