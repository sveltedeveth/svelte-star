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
export type GiBoltBombProps = typeof __propDef.props;
export type GiBoltBombEvents = typeof __propDef.events;
export type GiBoltBombSlots = typeof __propDef.slots;
export default class GiBoltBomb extends SvelteComponentTyped<GiBoltBombProps, GiBoltBombEvents, GiBoltBombSlots> {
}
export {};
