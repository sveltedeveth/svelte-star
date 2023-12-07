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
export type FaPiedPiperProps = typeof __propDef.props;
export type FaPiedPiperEvents = typeof __propDef.events;
export type FaPiedPiperSlots = typeof __propDef.slots;
export default class FaPiedPiper extends SvelteComponentTyped<FaPiedPiperProps, FaPiedPiperEvents, FaPiedPiperSlots> {
}
export {};
