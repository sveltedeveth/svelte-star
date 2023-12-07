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
export type FaDAndDProps = typeof __propDef.props;
export type FaDAndDEvents = typeof __propDef.events;
export type FaDAndDSlots = typeof __propDef.slots;
export default class FaDAndD extends SvelteComponentTyped<FaDAndDProps, FaDAndDEvents, FaDAndDSlots> {
}
export {};
