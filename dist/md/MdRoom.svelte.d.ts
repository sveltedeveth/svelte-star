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
export type MdRoomProps = typeof __propDef.props;
export type MdRoomEvents = typeof __propDef.events;
export type MdRoomSlots = typeof __propDef.slots;
export default class MdRoom extends SvelteComponentTyped<MdRoomProps, MdRoomEvents, MdRoomSlots> {
}
export {};
