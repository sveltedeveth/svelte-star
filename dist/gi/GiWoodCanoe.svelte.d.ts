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
export type GiWoodCanoeProps = typeof __propDef.props;
export type GiWoodCanoeEvents = typeof __propDef.events;
export type GiWoodCanoeSlots = typeof __propDef.slots;
export default class GiWoodCanoe extends SvelteComponentTyped<GiWoodCanoeProps, GiWoodCanoeEvents, GiWoodCanoeSlots> {
}
export {};
