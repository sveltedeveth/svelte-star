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
export type FaRegHandPaperProps = typeof __propDef.props;
export type FaRegHandPaperEvents = typeof __propDef.events;
export type FaRegHandPaperSlots = typeof __propDef.slots;
export default class FaRegHandPaper extends SvelteComponentTyped<FaRegHandPaperProps, FaRegHandPaperEvents, FaRegHandPaperSlots> {
}
export {};
