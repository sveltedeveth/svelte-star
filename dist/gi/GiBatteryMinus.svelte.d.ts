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
export type GiBatteryMinusProps = typeof __propDef.props;
export type GiBatteryMinusEvents = typeof __propDef.events;
export type GiBatteryMinusSlots = typeof __propDef.slots;
export default class GiBatteryMinus extends SvelteComponentTyped<GiBatteryMinusProps, GiBatteryMinusEvents, GiBatteryMinusSlots> {
}
export {};
