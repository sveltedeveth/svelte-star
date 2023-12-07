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
export type GiBatteriesProps = typeof __propDef.props;
export type GiBatteriesEvents = typeof __propDef.events;
export type GiBatteriesSlots = typeof __propDef.slots;
export default class GiBatteries extends SvelteComponentTyped<GiBatteriesProps, GiBatteriesEvents, GiBatteriesSlots> {
}
export {};
