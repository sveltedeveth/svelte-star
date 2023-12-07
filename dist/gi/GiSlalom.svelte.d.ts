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
export type GiSlalomProps = typeof __propDef.props;
export type GiSlalomEvents = typeof __propDef.events;
export type GiSlalomSlots = typeof __propDef.slots;
export default class GiSlalom extends SvelteComponentTyped<GiSlalomProps, GiSlalomEvents, GiSlalomSlots> {
}
export {};
