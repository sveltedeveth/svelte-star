import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DiFirebaseProps = typeof __propDef.props;
export type DiFirebaseEvents = typeof __propDef.events;
export type DiFirebaseSlots = typeof __propDef.slots;
export default class DiFirebase extends SvelteComponentTyped<DiFirebaseProps, DiFirebaseEvents, DiFirebaseSlots> {
}
export {};
