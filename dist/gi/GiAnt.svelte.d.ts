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
export type GiAntProps = typeof __propDef.props;
export type GiAntEvents = typeof __propDef.events;
export type GiAntSlots = typeof __propDef.slots;
export default class GiAnt extends SvelteComponentTyped<GiAntProps, GiAntEvents, GiAntSlots> {
}
export {};
