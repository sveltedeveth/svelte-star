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
export type GiSaberToothProps = typeof __propDef.props;
export type GiSaberToothEvents = typeof __propDef.events;
export type GiSaberToothSlots = typeof __propDef.slots;
export default class GiSaberTooth extends SvelteComponentTyped<GiSaberToothProps, GiSaberToothEvents, GiSaberToothSlots> {
}
export {};
