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
export type MdVideoCallProps = typeof __propDef.props;
export type MdVideoCallEvents = typeof __propDef.events;
export type MdVideoCallSlots = typeof __propDef.slots;
export default class MdVideoCall extends SvelteComponentTyped<MdVideoCallProps, MdVideoCallEvents, MdVideoCallSlots> {
}
export {};
