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
export type WiSmokeProps = typeof __propDef.props;
export type WiSmokeEvents = typeof __propDef.events;
export type WiSmokeSlots = typeof __propDef.slots;
export default class WiSmoke extends SvelteComponentTyped<WiSmokeProps, WiSmokeEvents, WiSmokeSlots> {
}
export {};
