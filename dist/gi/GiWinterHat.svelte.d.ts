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
export type GiWinterHatProps = typeof __propDef.props;
export type GiWinterHatEvents = typeof __propDef.events;
export type GiWinterHatSlots = typeof __propDef.slots;
export default class GiWinterHat extends SvelteComponentTyped<GiWinterHatProps, GiWinterHatEvents, GiWinterHatSlots> {
}
export {};
