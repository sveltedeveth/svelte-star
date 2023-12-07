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
export type GiTabletProps = typeof __propDef.props;
export type GiTabletEvents = typeof __propDef.events;
export type GiTabletSlots = typeof __propDef.slots;
export default class GiTablet extends SvelteComponentTyped<GiTabletProps, GiTabletEvents, GiTabletSlots> {
}
export {};
