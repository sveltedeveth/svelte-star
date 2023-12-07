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
export type FaRegGemProps = typeof __propDef.props;
export type FaRegGemEvents = typeof __propDef.events;
export type FaRegGemSlots = typeof __propDef.slots;
export default class FaRegGem extends SvelteComponentTyped<FaRegGemProps, FaRegGemEvents, FaRegGemSlots> {
}
export {};
