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
export type FaBlackTieProps = typeof __propDef.props;
export type FaBlackTieEvents = typeof __propDef.events;
export type FaBlackTieSlots = typeof __propDef.slots;
export default class FaBlackTie extends SvelteComponentTyped<FaBlackTieProps, FaBlackTieEvents, FaBlackTieSlots> {
}
export {};
