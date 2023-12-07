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
export type GiHoleProps = typeof __propDef.props;
export type GiHoleEvents = typeof __propDef.events;
export type GiHoleSlots = typeof __propDef.slots;
export default class GiHole extends SvelteComponentTyped<GiHoleProps, GiHoleEvents, GiHoleSlots> {
}
export {};
