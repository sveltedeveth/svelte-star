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
export type GiWhiteCatProps = typeof __propDef.props;
export type GiWhiteCatEvents = typeof __propDef.events;
export type GiWhiteCatSlots = typeof __propDef.slots;
export default class GiWhiteCat extends SvelteComponentTyped<GiWhiteCatProps, GiWhiteCatEvents, GiWhiteCatSlots> {
}
export {};
