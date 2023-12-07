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
export type GiTusksFlagProps = typeof __propDef.props;
export type GiTusksFlagEvents = typeof __propDef.events;
export type GiTusksFlagSlots = typeof __propDef.slots;
export default class GiTusksFlag extends SvelteComponentTyped<GiTusksFlagProps, GiTusksFlagEvents, GiTusksFlagSlots> {
}
export {};
