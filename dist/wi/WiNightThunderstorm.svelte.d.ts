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
export type WiNightThunderstormProps = typeof __propDef.props;
export type WiNightThunderstormEvents = typeof __propDef.events;
export type WiNightThunderstormSlots = typeof __propDef.slots;
export default class WiNightThunderstorm extends SvelteComponentTyped<WiNightThunderstormProps, WiNightThunderstormEvents, WiNightThunderstormSlots> {
}
export {};
