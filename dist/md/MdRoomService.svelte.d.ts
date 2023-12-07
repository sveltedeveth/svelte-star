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
export type MdRoomServiceProps = typeof __propDef.props;
export type MdRoomServiceEvents = typeof __propDef.events;
export type MdRoomServiceSlots = typeof __propDef.slots;
export default class MdRoomService extends SvelteComponentTyped<MdRoomServiceProps, MdRoomServiceEvents, MdRoomServiceSlots> {
}
export {};
