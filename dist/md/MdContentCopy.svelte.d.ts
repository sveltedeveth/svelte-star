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
export type MdContentCopyProps = typeof __propDef.props;
export type MdContentCopyEvents = typeof __propDef.events;
export type MdContentCopySlots = typeof __propDef.slots;
export default class MdContentCopy extends SvelteComponentTyped<MdContentCopyProps, MdContentCopyEvents, MdContentCopySlots> {
}
export {};
