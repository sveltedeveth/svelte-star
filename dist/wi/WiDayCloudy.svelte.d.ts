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
export type WiDayCloudyProps = typeof __propDef.props;
export type WiDayCloudyEvents = typeof __propDef.events;
export type WiDayCloudySlots = typeof __propDef.slots;
export default class WiDayCloudy extends SvelteComponentTyped<WiDayCloudyProps, WiDayCloudyEvents, WiDayCloudySlots> {
}
export {};
