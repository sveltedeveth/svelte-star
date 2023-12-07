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
export type FaDrupalProps = typeof __propDef.props;
export type FaDrupalEvents = typeof __propDef.events;
export type FaDrupalSlots = typeof __propDef.slots;
export default class FaDrupal extends SvelteComponentTyped<FaDrupalProps, FaDrupalEvents, FaDrupalSlots> {
}
export {};
