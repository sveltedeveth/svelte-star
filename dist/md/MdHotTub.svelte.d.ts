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
export type MdHotTubProps = typeof __propDef.props;
export type MdHotTubEvents = typeof __propDef.events;
export type MdHotTubSlots = typeof __propDef.slots;
export default class MdHotTub extends SvelteComponentTyped<MdHotTubProps, MdHotTubEvents, MdHotTubSlots> {
}
export {};
