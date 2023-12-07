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
export type FaMercuryProps = typeof __propDef.props;
export type FaMercuryEvents = typeof __propDef.events;
export type FaMercurySlots = typeof __propDef.slots;
export default class FaMercury extends SvelteComponentTyped<FaMercuryProps, FaMercuryEvents, FaMercurySlots> {
}
export {};
