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
export type FaCarAltProps = typeof __propDef.props;
export type FaCarAltEvents = typeof __propDef.events;
export type FaCarAltSlots = typeof __propDef.slots;
export default class FaCarAlt extends SvelteComponentTyped<FaCarAltProps, FaCarAltEvents, FaCarAltSlots> {
}
export {};
