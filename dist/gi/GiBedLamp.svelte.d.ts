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
export type GiBedLampProps = typeof __propDef.props;
export type GiBedLampEvents = typeof __propDef.events;
export type GiBedLampSlots = typeof __propDef.slots;
export default class GiBedLamp extends SvelteComponentTyped<GiBedLampProps, GiBedLampEvents, GiBedLampSlots> {
}
export {};
