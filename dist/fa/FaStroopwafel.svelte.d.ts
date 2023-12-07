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
export type FaStroopwafelProps = typeof __propDef.props;
export type FaStroopwafelEvents = typeof __propDef.events;
export type FaStroopwafelSlots = typeof __propDef.slots;
export default class FaStroopwafel extends SvelteComponentTyped<FaStroopwafelProps, FaStroopwafelEvents, FaStroopwafelSlots> {
}
export {};
