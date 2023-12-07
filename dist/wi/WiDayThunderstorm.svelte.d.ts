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
export type WiDayThunderstormProps = typeof __propDef.props;
export type WiDayThunderstormEvents = typeof __propDef.events;
export type WiDayThunderstormSlots = typeof __propDef.slots;
export default class WiDayThunderstorm extends SvelteComponentTyped<WiDayThunderstormProps, WiDayThunderstormEvents, WiDayThunderstormSlots> {
}
export {};
