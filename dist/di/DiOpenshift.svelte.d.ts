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
export type DiOpenshiftProps = typeof __propDef.props;
export type DiOpenshiftEvents = typeof __propDef.events;
export type DiOpenshiftSlots = typeof __propDef.slots;
export default class DiOpenshift extends SvelteComponentTyped<DiOpenshiftProps, DiOpenshiftEvents, DiOpenshiftSlots> {
}
export {};
