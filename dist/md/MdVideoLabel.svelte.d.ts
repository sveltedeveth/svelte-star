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
export type MdVideoLabelProps = typeof __propDef.props;
export type MdVideoLabelEvents = typeof __propDef.events;
export type MdVideoLabelSlots = typeof __propDef.slots;
export default class MdVideoLabel extends SvelteComponentTyped<MdVideoLabelProps, MdVideoLabelEvents, MdVideoLabelSlots> {
}
export {};
