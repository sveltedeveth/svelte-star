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
export type IoMdRedoProps = typeof __propDef.props;
export type IoMdRedoEvents = typeof __propDef.events;
export type IoMdRedoSlots = typeof __propDef.slots;
export default class IoMdRedo extends SvelteComponentTyped<IoMdRedoProps, IoMdRedoEvents, IoMdRedoSlots> {
}
export {};
