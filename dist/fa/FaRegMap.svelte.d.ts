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
export type FaRegMapProps = typeof __propDef.props;
export type FaRegMapEvents = typeof __propDef.events;
export type FaRegMapSlots = typeof __propDef.slots;
export default class FaRegMap extends SvelteComponentTyped<FaRegMapProps, FaRegMapEvents, FaRegMapSlots> {
}
export {};
