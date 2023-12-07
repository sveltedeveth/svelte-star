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
export type MdRedoProps = typeof __propDef.props;
export type MdRedoEvents = typeof __propDef.events;
export type MdRedoSlots = typeof __propDef.slots;
export default class MdRedo extends SvelteComponentTyped<MdRedoProps, MdRedoEvents, MdRedoSlots> {
}
export {};
