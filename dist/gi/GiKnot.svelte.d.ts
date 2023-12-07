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
export type GiKnotProps = typeof __propDef.props;
export type GiKnotEvents = typeof __propDef.events;
export type GiKnotSlots = typeof __propDef.slots;
export default class GiKnot extends SvelteComponentTyped<GiKnotProps, GiKnotEvents, GiKnotSlots> {
}
export {};
