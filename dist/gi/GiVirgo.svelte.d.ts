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
export type GiVirgoProps = typeof __propDef.props;
export type GiVirgoEvents = typeof __propDef.events;
export type GiVirgoSlots = typeof __propDef.slots;
export default class GiVirgo extends SvelteComponentTyped<GiVirgoProps, GiVirgoEvents, GiVirgoSlots> {
}
export {};
