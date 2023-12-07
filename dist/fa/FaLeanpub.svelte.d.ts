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
export type FaLeanpubProps = typeof __propDef.props;
export type FaLeanpubEvents = typeof __propDef.events;
export type FaLeanpubSlots = typeof __propDef.slots;
export default class FaLeanpub extends SvelteComponentTyped<FaLeanpubProps, FaLeanpubEvents, FaLeanpubSlots> {
}
export {};
