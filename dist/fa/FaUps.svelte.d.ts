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
export type FaUpsProps = typeof __propDef.props;
export type FaUpsEvents = typeof __propDef.events;
export type FaUpsSlots = typeof __propDef.slots;
export default class FaUps extends SvelteComponentTyped<FaUpsProps, FaUpsEvents, FaUpsSlots> {
}
export {};
