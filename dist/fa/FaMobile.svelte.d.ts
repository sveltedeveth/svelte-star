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
export type FaMobileProps = typeof __propDef.props;
export type FaMobileEvents = typeof __propDef.events;
export type FaMobileSlots = typeof __propDef.slots;
export default class FaMobile extends SvelteComponentTyped<FaMobileProps, FaMobileEvents, FaMobileSlots> {
}
export {};
