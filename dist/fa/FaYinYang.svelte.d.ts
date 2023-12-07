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
export type FaYinYangProps = typeof __propDef.props;
export type FaYinYangEvents = typeof __propDef.events;
export type FaYinYangSlots = typeof __propDef.slots;
export default class FaYinYang extends SvelteComponentTyped<FaYinYangProps, FaYinYangEvents, FaYinYangSlots> {
}
export {};
