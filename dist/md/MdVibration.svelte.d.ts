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
export type MdVibrationProps = typeof __propDef.props;
export type MdVibrationEvents = typeof __propDef.events;
export type MdVibrationSlots = typeof __propDef.slots;
export default class MdVibration extends SvelteComponentTyped<MdVibrationProps, MdVibrationEvents, MdVibrationSlots> {
}
export {};
