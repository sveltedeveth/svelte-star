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
export type GiBinocularsProps = typeof __propDef.props;
export type GiBinocularsEvents = typeof __propDef.events;
export type GiBinocularsSlots = typeof __propDef.slots;
export default class GiBinoculars extends SvelteComponentTyped<GiBinocularsProps, GiBinocularsEvents, GiBinocularsSlots> {
}
export {};
