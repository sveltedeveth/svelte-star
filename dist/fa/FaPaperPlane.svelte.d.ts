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
export type FaPaperPlaneProps = typeof __propDef.props;
export type FaPaperPlaneEvents = typeof __propDef.events;
export type FaPaperPlaneSlots = typeof __propDef.slots;
export default class FaPaperPlane extends SvelteComponentTyped<FaPaperPlaneProps, FaPaperPlaneEvents, FaPaperPlaneSlots> {
}
export {};
