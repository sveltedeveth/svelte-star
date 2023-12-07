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
export type MdFiberNewProps = typeof __propDef.props;
export type MdFiberNewEvents = typeof __propDef.events;
export type MdFiberNewSlots = typeof __propDef.slots;
export default class MdFiberNew extends SvelteComponentTyped<MdFiberNewProps, MdFiberNewEvents, MdFiberNewSlots> {
}
export {};
