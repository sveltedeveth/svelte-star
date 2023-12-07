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
export type FaBlackberryProps = typeof __propDef.props;
export type FaBlackberryEvents = typeof __propDef.events;
export type FaBlackberrySlots = typeof __propDef.slots;
export default class FaBlackberry extends SvelteComponentTyped<FaBlackberryProps, FaBlackberryEvents, FaBlackberrySlots> {
}
export {};
