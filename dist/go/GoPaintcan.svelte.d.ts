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
export type GoPaintcanProps = typeof __propDef.props;
export type GoPaintcanEvents = typeof __propDef.events;
export type GoPaintcanSlots = typeof __propDef.slots;
export default class GoPaintcan extends SvelteComponentTyped<GoPaintcanProps, GoPaintcanEvents, GoPaintcanSlots> {
}
export {};
