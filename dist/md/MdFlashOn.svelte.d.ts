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
export type MdFlashOnProps = typeof __propDef.props;
export type MdFlashOnEvents = typeof __propDef.events;
export type MdFlashOnSlots = typeof __propDef.slots;
export default class MdFlashOn extends SvelteComponentTyped<MdFlashOnProps, MdFlashOnEvents, MdFlashOnSlots> {
}
export {};
