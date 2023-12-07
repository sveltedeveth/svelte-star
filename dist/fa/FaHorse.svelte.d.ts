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
export type FaHorseProps = typeof __propDef.props;
export type FaHorseEvents = typeof __propDef.events;
export type FaHorseSlots = typeof __propDef.slots;
export default class FaHorse extends SvelteComponentTyped<FaHorseProps, FaHorseEvents, FaHorseSlots> {
}
export {};
