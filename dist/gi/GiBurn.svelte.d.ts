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
export type GiBurnProps = typeof __propDef.props;
export type GiBurnEvents = typeof __propDef.events;
export type GiBurnSlots = typeof __propDef.slots;
export default class GiBurn extends SvelteComponentTyped<GiBurnProps, GiBurnEvents, GiBurnSlots> {
}
export {};
