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
export type MdFlashAutoProps = typeof __propDef.props;
export type MdFlashAutoEvents = typeof __propDef.events;
export type MdFlashAutoSlots = typeof __propDef.slots;
export default class MdFlashAuto extends SvelteComponentTyped<MdFlashAutoProps, MdFlashAutoEvents, MdFlashAutoSlots> {
}
export {};
