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
export type GiSubmarineProps = typeof __propDef.props;
export type GiSubmarineEvents = typeof __propDef.events;
export type GiSubmarineSlots = typeof __propDef.slots;
export default class GiSubmarine extends SvelteComponentTyped<GiSubmarineProps, GiSubmarineEvents, GiSubmarineSlots> {
}
export {};
