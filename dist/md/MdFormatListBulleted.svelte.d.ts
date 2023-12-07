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
export type MdFormatListBulletedProps = typeof __propDef.props;
export type MdFormatListBulletedEvents = typeof __propDef.events;
export type MdFormatListBulletedSlots = typeof __propDef.slots;
export default class MdFormatListBulleted extends SvelteComponentTyped<MdFormatListBulletedProps, MdFormatListBulletedEvents, MdFormatListBulletedSlots> {
}
export {};
