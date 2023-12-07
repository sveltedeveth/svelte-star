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
export type FaRocketProps = typeof __propDef.props;
export type FaRocketEvents = typeof __propDef.events;
export type FaRocketSlots = typeof __propDef.slots;
export default class FaRocket extends SvelteComponentTyped<FaRocketProps, FaRocketEvents, FaRocketSlots> {
}
export {};
