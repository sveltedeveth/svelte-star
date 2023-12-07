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
export type FaTramProps = typeof __propDef.props;
export type FaTramEvents = typeof __propDef.events;
export type FaTramSlots = typeof __propDef.slots;
export default class FaTram extends SvelteComponentTyped<FaTramProps, FaTramEvents, FaTramSlots> {
}
export {};
