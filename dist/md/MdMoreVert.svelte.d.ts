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
export type MdMoreVertProps = typeof __propDef.props;
export type MdMoreVertEvents = typeof __propDef.events;
export type MdMoreVertSlots = typeof __propDef.slots;
export default class MdMoreVert extends SvelteComponentTyped<MdMoreVertProps, MdMoreVertEvents, MdMoreVertSlots> {
}
export {};
