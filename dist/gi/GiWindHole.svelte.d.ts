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
export type GiWindHoleProps = typeof __propDef.props;
export type GiWindHoleEvents = typeof __propDef.events;
export type GiWindHoleSlots = typeof __propDef.slots;
export default class GiWindHole extends SvelteComponentTyped<GiWindHoleProps, GiWindHoleEvents, GiWindHoleSlots> {
}
export {};
