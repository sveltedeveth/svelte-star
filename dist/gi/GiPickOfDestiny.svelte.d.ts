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
export type GiPickOfDestinyProps = typeof __propDef.props;
export type GiPickOfDestinyEvents = typeof __propDef.events;
export type GiPickOfDestinySlots = typeof __propDef.slots;
export default class GiPickOfDestiny extends SvelteComponentTyped<GiPickOfDestinyProps, GiPickOfDestinyEvents, GiPickOfDestinySlots> {
}
export {};
