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
export type GiAnthemProps = typeof __propDef.props;
export type GiAnthemEvents = typeof __propDef.events;
export type GiAnthemSlots = typeof __propDef.slots;
export default class GiAnthem extends SvelteComponentTyped<GiAnthemProps, GiAnthemEvents, GiAnthemSlots> {
}
export {};
