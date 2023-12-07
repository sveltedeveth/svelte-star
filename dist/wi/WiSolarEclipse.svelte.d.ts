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
export type WiSolarEclipseProps = typeof __propDef.props;
export type WiSolarEclipseEvents = typeof __propDef.events;
export type WiSolarEclipseSlots = typeof __propDef.slots;
export default class WiSolarEclipse extends SvelteComponentTyped<WiSolarEclipseProps, WiSolarEclipseEvents, WiSolarEclipseSlots> {
}
export {};
