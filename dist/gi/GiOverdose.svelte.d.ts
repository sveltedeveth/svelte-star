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
export type GiOverdoseProps = typeof __propDef.props;
export type GiOverdoseEvents = typeof __propDef.events;
export type GiOverdoseSlots = typeof __propDef.slots;
export default class GiOverdose extends SvelteComponentTyped<GiOverdoseProps, GiOverdoseEvents, GiOverdoseSlots> {
}
export {};
