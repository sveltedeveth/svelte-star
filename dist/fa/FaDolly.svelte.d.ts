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
export type FaDollyProps = typeof __propDef.props;
export type FaDollyEvents = typeof __propDef.events;
export type FaDollySlots = typeof __propDef.slots;
export default class FaDolly extends SvelteComponentTyped<FaDollyProps, FaDollyEvents, FaDollySlots> {
}
export {};
