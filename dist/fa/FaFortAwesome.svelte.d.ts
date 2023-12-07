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
export type FaFortAwesomeProps = typeof __propDef.props;
export type FaFortAwesomeEvents = typeof __propDef.events;
export type FaFortAwesomeSlots = typeof __propDef.slots;
export default class FaFortAwesome extends SvelteComponentTyped<FaFortAwesomeProps, FaFortAwesomeEvents, FaFortAwesomeSlots> {
}
export {};
