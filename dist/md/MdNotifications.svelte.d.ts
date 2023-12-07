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
export type MdNotificationsProps = typeof __propDef.props;
export type MdNotificationsEvents = typeof __propDef.events;
export type MdNotificationsSlots = typeof __propDef.slots;
export default class MdNotifications extends SvelteComponentTyped<MdNotificationsProps, MdNotificationsEvents, MdNotificationsSlots> {
}
export {};
