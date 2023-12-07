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
export type MdViewDayProps = typeof __propDef.props;
export type MdViewDayEvents = typeof __propDef.events;
export type MdViewDaySlots = typeof __propDef.slots;
export default class MdViewDay extends SvelteComponentTyped<MdViewDayProps, MdViewDayEvents, MdViewDaySlots> {
}
export {};
