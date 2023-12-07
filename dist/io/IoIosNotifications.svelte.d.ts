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
export type IoIosNotificationsProps = typeof __propDef.props;
export type IoIosNotificationsEvents = typeof __propDef.events;
export type IoIosNotificationsSlots = typeof __propDef.slots;
export default class IoIosNotifications extends SvelteComponentTyped<IoIosNotificationsProps, IoIosNotificationsEvents, IoIosNotificationsSlots> {
}
export {};
