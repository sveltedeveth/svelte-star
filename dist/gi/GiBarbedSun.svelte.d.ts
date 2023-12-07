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
export type GiBarbedSunProps = typeof __propDef.props;
export type GiBarbedSunEvents = typeof __propDef.events;
export type GiBarbedSunSlots = typeof __propDef.slots;
export default class GiBarbedSun extends SvelteComponentTyped<GiBarbedSunProps, GiBarbedSunEvents, GiBarbedSunSlots> {
}
export {};
