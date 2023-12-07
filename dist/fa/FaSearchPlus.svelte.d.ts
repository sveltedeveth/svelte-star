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
export type FaSearchPlusProps = typeof __propDef.props;
export type FaSearchPlusEvents = typeof __propDef.events;
export type FaSearchPlusSlots = typeof __propDef.slots;
export default class FaSearchPlus extends SvelteComponentTyped<FaSearchPlusProps, FaSearchPlusEvents, FaSearchPlusSlots> {
}
export {};
