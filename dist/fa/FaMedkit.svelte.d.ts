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
export type FaMedkitProps = typeof __propDef.props;
export type FaMedkitEvents = typeof __propDef.events;
export type FaMedkitSlots = typeof __propDef.slots;
export default class FaMedkit extends SvelteComponentTyped<FaMedkitProps, FaMedkitEvents, FaMedkitSlots> {
}
export {};
