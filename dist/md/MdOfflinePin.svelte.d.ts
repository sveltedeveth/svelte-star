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
export type MdOfflinePinProps = typeof __propDef.props;
export type MdOfflinePinEvents = typeof __propDef.events;
export type MdOfflinePinSlots = typeof __propDef.slots;
export default class MdOfflinePin extends SvelteComponentTyped<MdOfflinePinProps, MdOfflinePinEvents, MdOfflinePinSlots> {
}
export {};
