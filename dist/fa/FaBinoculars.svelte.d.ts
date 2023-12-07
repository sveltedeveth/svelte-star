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
export type FaBinocularsProps = typeof __propDef.props;
export type FaBinocularsEvents = typeof __propDef.events;
export type FaBinocularsSlots = typeof __propDef.slots;
export default class FaBinoculars extends SvelteComponentTyped<FaBinocularsProps, FaBinocularsEvents, FaBinocularsSlots> {
}
export {};
