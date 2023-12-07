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
export type GiGrabProps = typeof __propDef.props;
export type GiGrabEvents = typeof __propDef.events;
export type GiGrabSlots = typeof __propDef.slots;
export default class GiGrab extends SvelteComponentTyped<GiGrabProps, GiGrabEvents, GiGrabSlots> {
}
export {};
