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
export type FaThermometerFullProps = typeof __propDef.props;
export type FaThermometerFullEvents = typeof __propDef.events;
export type FaThermometerFullSlots = typeof __propDef.slots;
export default class FaThermometerFull extends SvelteComponentTyped<FaThermometerFullProps, FaThermometerFullEvents, FaThermometerFullSlots> {
}
export {};
