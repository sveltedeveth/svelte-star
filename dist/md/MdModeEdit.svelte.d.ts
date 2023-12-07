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
export type MdModeEditProps = typeof __propDef.props;
export type MdModeEditEvents = typeof __propDef.events;
export type MdModeEditSlots = typeof __propDef.slots;
export default class MdModeEdit extends SvelteComponentTyped<MdModeEditProps, MdModeEditEvents, MdModeEditSlots> {
}
export {};
