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
export type GiSailboatProps = typeof __propDef.props;
export type GiSailboatEvents = typeof __propDef.events;
export type GiSailboatSlots = typeof __propDef.slots;
export default class GiSailboat extends SvelteComponentTyped<GiSailboatProps, GiSailboatEvents, GiSailboatSlots> {
}
export {};
