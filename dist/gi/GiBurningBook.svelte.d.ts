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
export type GiBurningBookProps = typeof __propDef.props;
export type GiBurningBookEvents = typeof __propDef.events;
export type GiBurningBookSlots = typeof __propDef.slots;
export default class GiBurningBook extends SvelteComponentTyped<GiBurningBookProps, GiBurningBookEvents, GiBurningBookSlots> {
}
export {};
