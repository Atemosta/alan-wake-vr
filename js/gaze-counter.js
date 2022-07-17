WL.registerComponent('gaze-counter', {
    msg: {type: WL.Type.String, default: 'i'}
}, {
    init: function() {
        this.count = 0;
        this._oldCount = -1;
        console.log('Gaze counter initialized');
    },
    update: function() {
        /* In case the count changed, update the text
         * component. Avoid unnecessary updates for better
         * performance. */
        if(this._oldCount != this.count) {
            console.log("Updated gaze count!");
            let textComp = this.object.getComponent('text');
            textComp.text = this.msg + " " + this.count.toString();
            this._oldCount = this.count;

            console.log(textComp.text);
        }
    },
});