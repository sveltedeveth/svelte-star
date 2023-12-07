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
export type GiScaleMailProps = typeof __propDef.props;
export type GiScaleMailEvents = typeof __propDef.events;
export type GiScaleMailSlots = typeof __propDef.slots;
export default class GiScaleMail extends SvelteComponentTyped<GiScaleMailProps, GiScaleMailEvents, GiScaleMailSlots> {
}
export {};
