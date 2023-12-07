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
export type MdAnnouncementProps = typeof __propDef.props;
export type MdAnnouncementEvents = typeof __propDef.events;
export type MdAnnouncementSlots = typeof __propDef.slots;
export default class MdAnnouncement extends SvelteComponentTyped<MdAnnouncementProps, MdAnnouncementEvents, MdAnnouncementSlots> {
}
export {};
