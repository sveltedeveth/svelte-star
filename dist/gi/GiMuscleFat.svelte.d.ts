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
export type GiMuscleFatProps = typeof __propDef.props;
export type GiMuscleFatEvents = typeof __propDef.events;
export type GiMuscleFatSlots = typeof __propDef.slots;
export default class GiMuscleFat extends SvelteComponentTyped<GiMuscleFatProps, GiMuscleFatEvents, GiMuscleFatSlots> {
}
export {};
