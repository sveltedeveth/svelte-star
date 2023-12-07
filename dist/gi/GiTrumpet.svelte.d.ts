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
export type GiTrumpetProps = typeof __propDef.props;
export type GiTrumpetEvents = typeof __propDef.events;
export type GiTrumpetSlots = typeof __propDef.slots;
export default class GiTrumpet extends SvelteComponentTyped<GiTrumpetProps, GiTrumpetEvents, GiTrumpetSlots> {
}
export {};
