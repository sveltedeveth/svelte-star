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
export type GiSmartProps = typeof __propDef.props;
export type GiSmartEvents = typeof __propDef.events;
export type GiSmartSlots = typeof __propDef.slots;
export default class GiSmart extends SvelteComponentTyped<GiSmartProps, GiSmartEvents, GiSmartSlots> {
}
export {};
