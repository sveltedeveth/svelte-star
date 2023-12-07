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
export type GiHeptagramProps = typeof __propDef.props;
export type GiHeptagramEvents = typeof __propDef.events;
export type GiHeptagramSlots = typeof __propDef.slots;
export default class GiHeptagram extends SvelteComponentTyped<GiHeptagramProps, GiHeptagramEvents, GiHeptagramSlots> {
}
export {};
