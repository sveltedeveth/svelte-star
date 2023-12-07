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
export type GiBarbedNailsProps = typeof __propDef.props;
export type GiBarbedNailsEvents = typeof __propDef.events;
export type GiBarbedNailsSlots = typeof __propDef.slots;
export default class GiBarbedNails extends SvelteComponentTyped<GiBarbedNailsProps, GiBarbedNailsEvents, GiBarbedNailsSlots> {
}
export {};
