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
export type WiDegreesProps = typeof __propDef.props;
export type WiDegreesEvents = typeof __propDef.events;
export type WiDegreesSlots = typeof __propDef.slots;
export default class WiDegrees extends SvelteComponentTyped<WiDegreesProps, WiDegreesEvents, WiDegreesSlots> {
}
export {};
