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
export type MdWeekendProps = typeof __propDef.props;
export type MdWeekendEvents = typeof __propDef.events;
export type MdWeekendSlots = typeof __propDef.slots;
export default class MdWeekend extends SvelteComponentTyped<MdWeekendProps, MdWeekendEvents, MdWeekendSlots> {
}
export {};
