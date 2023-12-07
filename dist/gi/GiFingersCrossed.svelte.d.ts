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
export type GiFingersCrossedProps = typeof __propDef.props;
export type GiFingersCrossedEvents = typeof __propDef.events;
export type GiFingersCrossedSlots = typeof __propDef.slots;
export default class GiFingersCrossed extends SvelteComponentTyped<GiFingersCrossedProps, GiFingersCrossedEvents, GiFingersCrossedSlots> {
}
export {};
