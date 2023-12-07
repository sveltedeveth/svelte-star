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
export type WiDayLightWindProps = typeof __propDef.props;
export type WiDayLightWindEvents = typeof __propDef.events;
export type WiDayLightWindSlots = typeof __propDef.slots;
export default class WiDayLightWind extends SvelteComponentTyped<WiDayLightWindProps, WiDayLightWindEvents, WiDayLightWindSlots> {
}
export {};
