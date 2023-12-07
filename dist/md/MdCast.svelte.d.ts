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
export type MdCastProps = typeof __propDef.props;
export type MdCastEvents = typeof __propDef.events;
export type MdCastSlots = typeof __propDef.slots;
export default class MdCast extends SvelteComponentTyped<MdCastProps, MdCastEvents, MdCastSlots> {
}
export {};
