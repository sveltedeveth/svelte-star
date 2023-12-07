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
export type GiArabicDoorProps = typeof __propDef.props;
export type GiArabicDoorEvents = typeof __propDef.events;
export type GiArabicDoorSlots = typeof __propDef.slots;
export default class GiArabicDoor extends SvelteComponentTyped<GiArabicDoorProps, GiArabicDoorEvents, GiArabicDoorSlots> {
}
export {};
