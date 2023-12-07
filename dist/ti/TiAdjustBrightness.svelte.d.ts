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
export type TiAdjustBrightnessProps = typeof __propDef.props;
export type TiAdjustBrightnessEvents = typeof __propDef.events;
export type TiAdjustBrightnessSlots = typeof __propDef.slots;
export default class TiAdjustBrightness extends SvelteComponentTyped<TiAdjustBrightnessProps, TiAdjustBrightnessEvents, TiAdjustBrightnessSlots> {
}
export {};
