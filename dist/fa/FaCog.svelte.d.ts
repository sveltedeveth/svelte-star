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
export type FaCogProps = typeof __propDef.props;
export type FaCogEvents = typeof __propDef.events;
export type FaCogSlots = typeof __propDef.slots;
export default class FaCog extends SvelteComponentTyped<FaCogProps, FaCogEvents, FaCogSlots> {
}
export {};
