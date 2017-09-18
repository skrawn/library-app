import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.createRecord('library');
    },

    actions: {
        saveLibrary(newLibrary) {
            newLibrary.save().then(() => this.transitionTo('libraries'));
        },

        // Built-in function that is called when leaving a route. This function will
        // reset the model if it is not saved in the database.
        willTransition() {
            // rollbackAttributes() removes the record from the store
            // if the model 'isNew'
            this.controller.get('model').rollbackAttributes();
        }
    }
});
