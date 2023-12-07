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
export type FaRegPaperPlaneProps = typeof __propDef.props;
export type FaRegPaperPlaneEvents = typeof __propDef.events;
export type FaRegPaperPlaneSlots = typeof __propDef.slots;
export default class FaRegPaperPlane extends SvelteComponentTyped<FaRegPaperPlaneProps, FaRegPaperPlaneEvents, FaRegPaperPlaneSlots> {
}
export {};
