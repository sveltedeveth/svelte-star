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
export type IoMdNotificationsProps = typeof __propDef.props;
export type IoMdNotificationsEvents = typeof __propDef.events;
export type IoMdNotificationsSlots = typeof __propDef.slots;
export default class IoMdNotifications extends SvelteComponentTyped<IoMdNotificationsProps, IoMdNotificationsEvents, IoMdNotificationsSlots> {
}
export {};
