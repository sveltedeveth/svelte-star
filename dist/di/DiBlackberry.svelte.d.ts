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
export type DiBlackberryProps = typeof __propDef.props;
export type DiBlackberryEvents = typeof __propDef.events;
export type DiBlackberrySlots = typeof __propDef.slots;
export default class DiBlackberry extends SvelteComponentTyped<DiBlackberryProps, DiBlackberryEvents, DiBlackberrySlots> {
}
export {};
