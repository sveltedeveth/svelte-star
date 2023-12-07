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
export type MdNotificationsPausedProps = typeof __propDef.props;
export type MdNotificationsPausedEvents = typeof __propDef.events;
export type MdNotificationsPausedSlots = typeof __propDef.slots;
export default class MdNotificationsPaused extends SvelteComponentTyped<MdNotificationsPausedProps, MdNotificationsPausedEvents, MdNotificationsPausedSlots> {
}
export {};
