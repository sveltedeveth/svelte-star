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
export type GiPortculisProps = typeof __propDef.props;
export type GiPortculisEvents = typeof __propDef.events;
export type GiPortculisSlots = typeof __propDef.slots;
export default class GiPortculis extends SvelteComponentTyped<GiPortculisProps, GiPortculisEvents, GiPortculisSlots> {
}
export {};
