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
export type GiWesternHatProps = typeof __propDef.props;
export type GiWesternHatEvents = typeof __propDef.events;
export type GiWesternHatSlots = typeof __propDef.slots;
export default class GiWesternHat extends SvelteComponentTyped<GiWesternHatProps, GiWesternHatEvents, GiWesternHatSlots> {
}
export {};
