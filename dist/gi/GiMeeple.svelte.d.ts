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
export type GiMeepleProps = typeof __propDef.props;
export type GiMeepleEvents = typeof __propDef.events;
export type GiMeepleSlots = typeof __propDef.slots;
export default class GiMeeple extends SvelteComponentTyped<GiMeepleProps, GiMeepleEvents, GiMeepleSlots> {
}
export {};
