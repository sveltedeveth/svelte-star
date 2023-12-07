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
export type MdWbAutoProps = typeof __propDef.props;
export type MdWbAutoEvents = typeof __propDef.events;
export type MdWbAutoSlots = typeof __propDef.slots;
export default class MdWbAuto extends SvelteComponentTyped<MdWbAutoProps, MdWbAutoEvents, MdWbAutoSlots> {
}
export {};
