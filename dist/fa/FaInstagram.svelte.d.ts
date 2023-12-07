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
export type FaInstagramProps = typeof __propDef.props;
export type FaInstagramEvents = typeof __propDef.events;
export type FaInstagramSlots = typeof __propDef.slots;
export default class FaInstagram extends SvelteComponentTyped<FaInstagramProps, FaInstagramEvents, FaInstagramSlots> {
}
export {};
