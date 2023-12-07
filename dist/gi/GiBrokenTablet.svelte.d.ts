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
export type GiBrokenTabletProps = typeof __propDef.props;
export type GiBrokenTabletEvents = typeof __propDef.events;
export type GiBrokenTabletSlots = typeof __propDef.slots;
export default class GiBrokenTablet extends SvelteComponentTyped<GiBrokenTabletProps, GiBrokenTabletEvents, GiBrokenTabletSlots> {
}
export {};
