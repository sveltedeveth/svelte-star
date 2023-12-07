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
export type FaCarProps = typeof __propDef.props;
export type FaCarEvents = typeof __propDef.events;
export type FaCarSlots = typeof __propDef.slots;
export default class FaCar extends SvelteComponentTyped<FaCarProps, FaCarEvents, FaCarSlots> {
}
export {};
