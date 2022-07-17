WL.registerComponent('counting-gaze', {}, {
    init: function() {
        console.log('Counting gaze initialized');
        this.origin = [0, 0, 0];
        this.dir = [0, 0, 0];
    },
    update: function() {
        /* Get the translation of this object and store it in "origin" */
        this.object.getTranslationWorld(this.origin);
        /* Get the direction of this object and store it in "dir" */
        this.object.getForward(this.dir);

        /* Send a ray into the scene and see if it hits and object in
           collision group "1" or "2" */
        let rayHit = WL.scene.rayCast(this.origin, this.dir, (1 << 1) | (1 << 2));
        if(rayHit.hitCount > 0) {
            for(let i = 0; i < rayHit.hitCount; ++i) {
                let o = rayHit.objects[i];

                // TODO: We will count up the counter on the
                // hit object here later instead!
                console.log('Raycast hit object:', o.name);
                let counterComp = o.getComponent('gaze-counter');
                if(counterComp) {
                    counterComp.count++;
                }
            }
        }
    },
});