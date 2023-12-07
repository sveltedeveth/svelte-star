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
export type GiAbacusProps = typeof __propDef.props;
export type GiAbacusEvents = typeof __propDef.events;
export type GiAbacusSlots = typeof __propDef.slots;
export default class GiAbacus extends SvelteComponentTyped<GiAbacusProps, GiAbacusEvents, GiAbacusSlots> {
}
export {};
