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
export type FaBtcProps = typeof __propDef.props;
export type FaBtcEvents = typeof __propDef.events;
export type FaBtcSlots = typeof __propDef.slots;
export default class FaBtc extends SvelteComponentTyped<FaBtcProps, FaBtcEvents, FaBtcSlots> {
}
export {};
