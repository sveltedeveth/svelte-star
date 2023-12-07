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
export type GiFishCookedProps = typeof __propDef.props;
export type GiFishCookedEvents = typeof __propDef.events;
export type GiFishCookedSlots = typeof __propDef.slots;
export default class GiFishCooked extends SvelteComponentTyped<GiFishCookedProps, GiFishCookedEvents, GiFishCookedSlots> {
}
export {};
