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
export type FaScrollProps = typeof __propDef.props;
export type FaScrollEvents = typeof __propDef.events;
export type FaScrollSlots = typeof __propDef.slots;
export default class FaScroll extends SvelteComponentTyped<FaScrollProps, FaScrollEvents, FaScrollSlots> {
}
export {};
