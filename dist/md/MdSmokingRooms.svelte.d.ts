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
export type MdSmokingRoomsProps = typeof __propDef.props;
export type MdSmokingRoomsEvents = typeof __propDef.events;
export type MdSmokingRoomsSlots = typeof __propDef.slots;
export default class MdSmokingRooms extends SvelteComponentTyped<MdSmokingRoomsProps, MdSmokingRoomsEvents, MdSmokingRoomsSlots> {
}
export {};
