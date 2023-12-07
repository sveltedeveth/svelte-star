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
export type MdBackspaceProps = typeof __propDef.props;
export type MdBackspaceEvents = typeof __propDef.events;
export type MdBackspaceSlots = typeof __propDef.slots;
export default class MdBackspace extends SvelteComponentTyped<MdBackspaceProps, MdBackspaceEvents, MdBackspaceSlots> {
}
export {};
