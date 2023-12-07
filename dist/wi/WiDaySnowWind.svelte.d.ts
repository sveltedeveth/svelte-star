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
export type WiDaySnowWindProps = typeof __propDef.props;
export type WiDaySnowWindEvents = typeof __propDef.events;
export type WiDaySnowWindSlots = typeof __propDef.slots;
export default class WiDaySnowWind extends SvelteComponentTyped<WiDaySnowWindProps, WiDaySnowWindEvents, WiDaySnowWindSlots> {
}
export {};
