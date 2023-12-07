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
export type MdViewWeekProps = typeof __propDef.props;
export type MdViewWeekEvents = typeof __propDef.events;
export type MdViewWeekSlots = typeof __propDef.slots;
export default class MdViewWeek extends SvelteComponentTyped<MdViewWeekProps, MdViewWeekEvents, MdViewWeekSlots> {
}
export {};
