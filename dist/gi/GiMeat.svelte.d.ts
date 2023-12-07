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
export type GiMeatProps = typeof __propDef.props;
export type GiMeatEvents = typeof __propDef.events;
export type GiMeatSlots = typeof __propDef.slots;
export default class GiMeat extends SvelteComponentTyped<GiMeatProps, GiMeatEvents, GiMeatSlots> {
}
export {};
