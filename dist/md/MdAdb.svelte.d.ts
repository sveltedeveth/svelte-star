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
export type MdAdbProps = typeof __propDef.props;
export type MdAdbEvents = typeof __propDef.events;
export type MdAdbSlots = typeof __propDef.slots;
export default class MdAdb extends SvelteComponentTyped<MdAdbProps, MdAdbEvents, MdAdbSlots> {
}
export {};
