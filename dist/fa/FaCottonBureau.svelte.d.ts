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
export type FaCottonBureauProps = typeof __propDef.props;
export type FaCottonBureauEvents = typeof __propDef.events;
export type FaCottonBureauSlots = typeof __propDef.slots;
export default class FaCottonBureau extends SvelteComponentTyped<FaCottonBureauProps, FaCottonBureauEvents, FaCottonBureauSlots> {
}
export {};
