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
export type FaHandPaperProps = typeof __propDef.props;
export type FaHandPaperEvents = typeof __propDef.events;
export type FaHandPaperSlots = typeof __propDef.slots;
export default class FaHandPaper extends SvelteComponentTyped<FaHandPaperProps, FaHandPaperEvents, FaHandPaperSlots> {
}
export {};
