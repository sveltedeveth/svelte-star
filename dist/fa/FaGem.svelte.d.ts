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
export type FaGemProps = typeof __propDef.props;
export type FaGemEvents = typeof __propDef.events;
export type FaGemSlots = typeof __propDef.slots;
export default class FaGem extends SvelteComponentTyped<FaGemProps, FaGemEvents, FaGemSlots> {
}
export {};
