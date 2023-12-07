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
export type GiSextantProps = typeof __propDef.props;
export type GiSextantEvents = typeof __propDef.events;
export type GiSextantSlots = typeof __propDef.slots;
export default class GiSextant extends SvelteComponentTyped<GiSextantProps, GiSextantEvents, GiSextantSlots> {
}
export {};
