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
export type MdNotificationsActiveProps = typeof __propDef.props;
export type MdNotificationsActiveEvents = typeof __propDef.events;
export type MdNotificationsActiveSlots = typeof __propDef.slots;
export default class MdNotificationsActive extends SvelteComponentTyped<MdNotificationsActiveProps, MdNotificationsActiveEvents, MdNotificationsActiveSlots> {
}
export {};
