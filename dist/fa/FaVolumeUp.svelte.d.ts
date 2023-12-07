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
export type FaVolumeUpProps = typeof __propDef.props;
export type FaVolumeUpEvents = typeof __propDef.events;
export type FaVolumeUpSlots = typeof __propDef.slots;
export default class FaVolumeUp extends SvelteComponentTyped<FaVolumeUpProps, FaVolumeUpEvents, FaVolumeUpSlots> {
}
export {};
