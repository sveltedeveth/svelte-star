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
export type GiHoneycombProps = typeof __propDef.props;
export type GiHoneycombEvents = typeof __propDef.events;
export type GiHoneycombSlots = typeof __propDef.slots;
export default class GiHoneycomb extends SvelteComponentTyped<GiHoneycombProps, GiHoneycombEvents, GiHoneycombSlots> {
}
export {};
