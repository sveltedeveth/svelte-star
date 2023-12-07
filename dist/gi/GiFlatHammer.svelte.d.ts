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
export type GiFlatHammerProps = typeof __propDef.props;
export type GiFlatHammerEvents = typeof __propDef.events;
export type GiFlatHammerSlots = typeof __propDef.slots;
export default class GiFlatHammer extends SvelteComponentTyped<GiFlatHammerProps, GiFlatHammerEvents, GiFlatHammerSlots> {
}
export {};
