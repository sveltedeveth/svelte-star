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
export type MdFlashOffProps = typeof __propDef.props;
export type MdFlashOffEvents = typeof __propDef.events;
export type MdFlashOffSlots = typeof __propDef.slots;
export default class MdFlashOff extends SvelteComponentTyped<MdFlashOffProps, MdFlashOffEvents, MdFlashOffSlots> {
}
export {};
