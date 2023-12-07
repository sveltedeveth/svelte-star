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
export type GiPorcelainVaseProps = typeof __propDef.props;
export type GiPorcelainVaseEvents = typeof __propDef.events;
export type GiPorcelainVaseSlots = typeof __propDef.slots;
export default class GiPorcelainVase extends SvelteComponentTyped<GiPorcelainVaseProps, GiPorcelainVaseEvents, GiPorcelainVaseSlots> {
}
export {};
