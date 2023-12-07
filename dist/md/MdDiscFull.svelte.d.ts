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
export type MdDiscFullProps = typeof __propDef.props;
export type MdDiscFullEvents = typeof __propDef.events;
export type MdDiscFullSlots = typeof __propDef.slots;
export default class MdDiscFull extends SvelteComponentTyped<MdDiscFullProps, MdDiscFullEvents, MdDiscFullSlots> {
}
export {};
