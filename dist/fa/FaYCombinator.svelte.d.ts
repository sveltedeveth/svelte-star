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
export type FaYCombinatorProps = typeof __propDef.props;
export type FaYCombinatorEvents = typeof __propDef.events;
export type FaYCombinatorSlots = typeof __propDef.slots;
export default class FaYCombinator extends SvelteComponentTyped<FaYCombinatorProps, FaYCombinatorEvents, FaYCombinatorSlots> {
}
export {};
